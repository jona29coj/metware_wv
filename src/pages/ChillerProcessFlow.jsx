// src/ChillerProcessFlow.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

const chillerProcessFlow = {
  1: [
    { id: '1', data: { label: 'Compressor' }, position: { x: 150, y: 100 } },
    { id: '2', data: { label: 'Condenser' }, position: { x: 350, y: 100 } },
    { id: '3', data: { label: 'Expansion Valve' }, position: { x: 350, y: 300 } },
    { id: '4', data: { label: 'Evaporator' }, position: { x: 150, y: 300 } },
  ],
  // Add other chiller processes here if needed
  2: [
    { id: '1', data: { label: 'Pump 1' }, position: { x: 150, y: 100 } },
    { id: '2', data: { label: 'Pump 2' }, position: { x: 350, y: 100 } },
  ],
};

const processFlowEdges = {
  1: [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e4-1', source: '4', target: '1', animated: true },
  ],
  2: [
    { id: 'e1-2', source: '1', target: '2', animated: true },
  ],
};

const ChillerProcessFlow = () => {
  const { id } = useParams();
  const nodes = chillerProcessFlow[id] || [];
  const edges = processFlowEdges[id] || [];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Chiller {id} - Process Flow</h2>
      <div style={{ height: 400, width: '100%' }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <Link to="/chillers">
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Back to Chillers
        </button>
      </Link>
    </div>
  );
};

export default ChillerProcessFlow;
