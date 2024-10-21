import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const chillerData = [
  { name: 'Chiller 1', status: 'Operational', temperature: '6°C', efficiency: '92%', energyUsage: '500 kWh' },
  { name: 'Chiller 2', status: 'Maintenance', temperature: 'N/A', efficiency: 'N/A', energyUsage: 'N/A' },
  { name: 'Chiller 3', status: 'Faulty', temperature: 'N/A', efficiency: 'N/A', energyUsage: 'N/A' },
];

const ChillerDetail = () => {
  const { id } = useParams();
  const chiller = chillerData[parseInt(id) - 1]; // Get the selected chiller by ID

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{chiller.name} Details</h2>
        <p>
          <strong>Status:</strong> {chiller.status}
        </p>
        <p>
          <strong>Temperature:</strong> {chiller.temperature}
        </p>
        <p>
          <strong>Efficiency:</strong> {chiller.efficiency}
        </p>
        <p>
          <strong>Energy Usage:</strong> {chiller.energyUsage}
        </p>
        <Link to={`/chiller/${id}/process-flow`}>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Next: View Process Flow
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChillerDetail;
