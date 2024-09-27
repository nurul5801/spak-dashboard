// components/ModulesCard.jsx
import React from 'react';

export default function ModulesCard({ name, status }) {
  const isConnected = status === 'connected';

  return (
    <div className={`border rounded-lg shadow-md p-4 ${isConnected ? 'bg-green-100' : 'bg-red-100'}`}>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className={`text-sm ${isConnected ? 'text-green-600' : 'text-red-600'}`}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </p>
    </div>
  );
}
