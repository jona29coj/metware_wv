import React from 'react';
import '../App.css'; // Link to the CSS defined below

const ChillerContainer = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-10">Chiller Monitoring Dashboard</h1>

        {/* Chiller Container */}
        <div className="relative flex justify-center items-center w-1/2 h-[600px] bg-gray-100 rounded-3xl border-4 border-gray-300 shadow-xl overflow-hidden">
            {/* Liquid inside Chiller */}
            <div className="absolute bottom-0 w-full h-[50%] bg-blue-500 rounded-b-3xl liquid-flow-animation"></div>

            {/* Chiller Body */}
            <div className="chiller-body">
                <div className="chiller-top"></div>
                <div className="chiller-middle">
                    <div className="chiller-gauge inlet-gauge">
                        <span className="gauge-label">Inlet Temp</span>
                        <span className="gauge-value">5°C</span>
                    </div>
                    <div className="chiller-gauge outlet-gauge">
                        <span className="gauge-label">Outlet Temp</span>
                        <span className="gauge-value">10°C</span>
                    </div>
                </div>
                <div className="chiller-bottom"></div>
            </div>

            {/* Pipes */}
            <div className="absolute -top-12 left-1/3 w-8 h-8 bg-gray-400 rounded-full pipe-animation"></div>
            <div className="absolute -top-12 right-1/3 w-8 h-8 bg-gray-400 rounded-full pipe-animation"></div>
        </div>

        {/* Metrics Section */}
        <div className="w-full mt-10 p-4 flex justify-evenly items-center">
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-1/4">
                <h3 className="text-lg font-semibold">Temperature</h3>
                <p className="text-xl font-bold">25°C</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-1/4">
                <h3 className="text-lg font-semibold">Pressure</h3>
                <p className="text-xl font-bold">2.1 Bar</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-1/4">
                <h3 className="text-lg font-semibold">Cooling Efficiency</h3>
                <p className="text-xl font-bold">95%</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg text-center w-1/4">
                <h3 className="text-lg font-semibold">Energy Consumption</h3>
                <p className="text-xl font-bold">200 kWh</p>
            </div>
        </div>
    </div>
    );
};

export default ChillerContainer;
