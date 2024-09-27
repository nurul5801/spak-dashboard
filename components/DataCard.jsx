// components/DataCard.js
import React from 'react';
import NpkDataCard from './NpkDataCard';

const DataCard = ({ module }) => {
  return (
    <div className="bg-white p-4 rounded shadow h-full">
      <h2 className="text-xl font-bold mb-2">{module.name} Data</h2>
      {module.name === 'Soil Test' ? (
      <NpkDataCard/> 
      ) : (
        <p>No specific data available for this module.</p>
      )}
    </div>
  );
};

export default DataCard;
