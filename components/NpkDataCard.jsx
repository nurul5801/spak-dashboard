// components/NpkDataCard.jsx
import React from 'react';

export default function NpkDataCard({ nitrogen, phosphorus, potassium }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-blue-100">
      <h3 className="text-lg font-bold mb-4">NPK Sensor Data</h3>
      <div className="text-sm">
        <p><span className="font-bold">Nitrogen (N):</span> {nitrogen}</p>
        <p><span className="font-bold">Phosphorus (P):</span> {phosphorus}</p>
        <p><span className="font-bold">Potassium (K):</span> {potassium}</p>
      </div>
    </div>
  );
}
