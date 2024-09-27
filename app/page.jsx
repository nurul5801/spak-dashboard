'use client';
import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import ModulesCard from "@/components/ModulesCard";
import DataCard from "@/components/DataCard"; 
import Footer from "@/components/Footer"; 
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [status, setStatus] = useState({ isConnected: false, batteryLevel: 0 });
  const [isPolling, setIsPolling] = useState(true); // Control polling state

  const fetchModules = async () => {
    try {
      const res = await fetch('/api/modules');
      if (!res.ok) throw new Error('Failed to fetch modules');
      const data = await res.json();
      setModules(data);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await fetch('/api/status');
      if (!response.ok) throw new Error('Failed to fetch status');
      const data = await response.json();
      console.log('Fetched status:', data); // Log the fetched data
      setStatus(data); // Update state
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  };

  useEffect(() => {
    fetchModules();
    fetchStatus(); // Initial fetch

    const interval = setInterval(() => {
      if (isPolling) {
        fetchStatus(); // Only fetch if polling is true
      }
    }, 500); // Fetch every 0.5 seconds

    return () => clearInterval(interval);
  }, [isPolling]); // Depend on isPolling

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  // Example function to change battery status
  const changeBatteryStatus = async (newStatus) => {
    try {
      const response = await fetch('/api/change-battery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batteryLevel: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to change battery status');

      setIsPolling(false); // Stop polling while updating
      await fetchStatus(); // Fetch updated status
      setIsPolling(true); // Restart polling
    } catch (error) {
      console.error('Error changing battery status:', error);
    }
  };

  // Prepare module data for DataCard
  const moduleData = selectedModule ? { name: selectedModule.name, data: selectedModule.name === 'NPK Sensor' ? npkData : {} } : null;

  return (
    <main className="flex flex-col min-h-screen">
      <Header isConnected={status.isConnected} batteryStatus={status.batteryLevel} />
      <div className="flex-grow p-6 pt-5 pb-5 flex">
        {status.isConnected ? (
          <div className="flex flex-1">
            <div className="md:w-1/3 pr-4 flex flex-col hide-scrollbar overflow-auto max-h-[calc(100vh-70px)]">
              <h2 className="text-xl font-bold mb-4">Modules Status</h2>
              <div className="flex flex-col space-y-2">
                {modules.map((module, index) => (
                  <div key={index} onClick={() => handleModuleClick(module)} className="cursor-pointer">
                    <ModulesCard name={module.name} status={module.status} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-grow pl-4 flex flex-col overflow-auto">
              <h2 className="text-xl font-bold mb-4 text-center">Views</h2>
              {moduleData ? (
                <DataCard module={moduleData} />
              ) : (
                <p className="text-gray-500">No module connected or selected.</p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold text-red-500">Device Not Connected</h1>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
