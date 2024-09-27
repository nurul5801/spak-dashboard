let modulesData = [
  { name: 'Grass Cutter', status: 'connected' },
  { name: 'Seeding', status: 'disconnected' },
  { name: 'Water', status: 'connected' },
  { name: 'Spray', status: 'disconnected' },
  { name: 'Soil Test', status: 'connected' },
  { name: 'Harvasting', status: 'connected' },
];

// Handle GET requests
export async function GET(req, res) {
  return new Response(JSON.stringify(modulesData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle POST requests
export async function POST(req, res) {
  const { name, status } = await req.json();  // Parse the incoming request body

  // Ensure both name and status are provided
  if (!name || !status) {
    return new Response(
      JSON.stringify({ error: 'Name and status are required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Find the module and update its status
  const module = modulesData.find((mod) => mod.name === name);
  if (module) {
    module.status = status; // Update status
    return new Response(
      JSON.stringify({ message: 'Module status updated successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } else {
    return new Response(
      JSON.stringify({ error: 'Module not found' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
