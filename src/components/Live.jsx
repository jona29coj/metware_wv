import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

function Live() {
  const [meters, setMeters] = useState({});

  useEffect(() => {
    const mqttClient = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');

    mqttClient.on('connect', () => {
      console.log('Connected to MQTT broker!');
      mqttClient.subscribe('energy_meter/test', (err) => {
        if (err) {
          console.error('Subscription error:', err);
        } else {
          console.log('Successfully subscribed to topic "energy_meter/test"');
        }
      });
    });

    mqttClient.on('message', (topic, message) => {
      try {
        const data = JSON.parse(message.toString());
        console.log('Received data:', data);

        setMeters((prevMeters) => ({
          ...prevMeters,
          [data.energy_meter_id]: data.parameters,
        }));
      } catch (error) {
        console.error('Error parsing MQTT message:', error);
      }
    });

    mqttClient.on('error', (err) => {
      console.log('MQTT connection error:', err);
    });

    mqttClient.on('close', () => {
      console.log('MQTT connection closed');
    });

    return () => {
      mqttClient.end();
    };
  }, []);

  const renderMeterCards = () => {
    const meterCards = [];
    for (let i = 2; i <= 4; i++) {
      const meterData = meters[i];
      meterCards.push(
        <div
          key={i}
          className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 space-y-2"
        >
          <h3 className="text-lg font-semibold text-gray-700">Energy Meter {i}</h3>
          {meterData ? (
            <div className="text-sm text-gray-600">
              {Object.entries(meterData).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400">No data available</p>
          )}
        </div>
      );
    }
    return meterCards;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Energy Meter Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderMeterCards()}
      </div>
    </div>
  );
}

export default Live;
