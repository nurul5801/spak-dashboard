let statusData = {
  isConnected: true, // Example status
  batteryLevel: 50, // Example battery level
};

// Handle GET requests
export async function GET() {
  return new Response(JSON.stringify(statusData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// Handle POST requests
export async function POST(req) {
  const { isConnected, batteryLevel } = await req.json(); // Parse the request body

  // Validate incoming data
  if (typeof isConnected !== 'boolean' || typeof batteryLevel !== 'number') {
    return new Response(
      JSON.stringify({ error: 'Invalid input. Ensure isConnected is a boolean and batteryLevel is a number.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Update the status data
  statusData.isConnected = isConnected;
  statusData.batteryLevel = batteryLevel;

  return new Response(
    JSON.stringify({ message: 'Status updated successfully!', statusData }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
