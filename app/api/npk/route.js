// app/api/npk/route.js
export async function GET() {
  const npkData = {
    nitrogen: 12.5,
    phosphorus: 8.3,
    potassium: 6.0,
  };

  return new Response(JSON.stringify(npkData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
