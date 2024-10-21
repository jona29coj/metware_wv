import React, { useState } from 'react';

const LTOControl = () => {
    // Sample data for the table
    const ltoLogs = [
        {
            id: 1,
            timeStamp: "06/10/2023",
            cause: "peakdemand",
            dischargeOn: "10:41:15 AM",
            dischargeOff: "10:50:30 AM",
            peakDemandOff: 3885.27,
            peakDemandOn: 4134.01,
            peakTime: "10:40:31 AM",
            serverTime: "10:40:55 AM",
            serverToPeak: "00:00:24",
            serverToDischargeOn: "00:00:20",
            energy: 0.02,
        },
        {
            id: 2,
            timeStamp: "06/10/2023",
            cause: "peakdemand",
            dischargeOn: "12:47:15 PM",
            dischargeOff: "1:09:15 PM",
            peakDemandOff: 4043.97,
            peakDemandOn: 4153.69,
            peakTime: "12:46:31 PM",
            serverTime: "12:46:58 PM",
            serverToPeak: "00:00:27",
            serverToDischargeOn: "00:00:17",
            energy: 0.05,
        },
        {
            id: 3,
            timeStamp: "06/10/2023",
            cause: "schedule",
            dischargeOn: "4:38:45 PM",
            dischargeOff: "5:19:00 PM",
            peakDemandOff: 3792.19,
            peakDemandOn: 0,
            peakTime: "00:00:00",
            serverTime: "00:00:00",
            serverToPeak: "00:00:00",
            serverToDischargeOn: "00:00:00",
            energy: 0.06,
        },
        {
            id: 4,
            timeStamp: "03/11/2023",
            cause: "schedule",
            dischargeOn: "3:09:00 PM",
            dischargeOff: "3:16:00 PM",
            peakDemandOff: 0,
            peakDemandOn: 0,
            peakTime: "00:00:00",
            serverTime: "00:00:00",
            serverToPeak: "00:00:00",
            serverToDischargeOn: "00:00:00",
            energy: 0,
        },
        {
            id: 5,
            timeStamp: "06/11/2023",
            cause: "schedule",
            dischargeOn: "3:03:30 PM",
            dischargeOff: "3:35:00 PM",
            peakDemandOff: 0,
            peakDemandOn: 0,
            peakTime: "00:00:00",
            serverTime: "00:00:00",
            serverToPeak: "00:00:00",
            serverToDischargeOn: "00:00:00",
            energy: 0,
        },
        // More logs as needed...
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 3;

    const totalPages = Math.ceil(ltoLogs.length / logsPerPage);
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = ltoLogs.slice(indexOfFirstLog, indexOfLastLog);

    // Aggregate Data for Overview
    const totalEnergy = ltoLogs.reduce((acc, log) => acc + log.energy, 0).toFixed(2);
    const peakCount = ltoLogs.filter(log => log.cause === "peakdemand").length;

    return (
        <div className="p-6 bg-gray-100">
            {/* Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Total Logs</h2>
                    <div className="text-3xl font-bold">{ltoLogs.length}</div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Total Energy Consumed</h2>
                    <div className="text-3xl font-bold">{totalEnergy} kWh</div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Peak Demand Events</h2>
                    <div className="text-3xl font-bold">{peakCount}</div>
                </div>
            </div>

            {/* Instantaneous Control Card */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Instantaneous Control</h2>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Status:</label>
                    <select className="border rounded-md p-2 w-full">
                        <option>Charge</option>
                        <option>Discharge</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Function:</label>
                    <select className="border rounded-md p-2 w-full">
                        <option>On</option>
                        <option>Off</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">PIN:</label>
                    <input
                        type="text"
                        className="border rounded-md p-2 w-full"
                        placeholder="Enter PIN"
                    />
                </div>
                <button className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition duration-200">Submit</button>
            </div>

            {/* LTO Logs Table */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">LTO Logs</h2>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">TimeStamp</th>
                            <th className="border border-gray-300 px-4 py-2">Cause</th>
                            <th className="border border-gray-300 px-4 py-2">Discharge On</th>
                            <th className="border border-gray-300 px-4 py-2">Discharge Off</th>
                            <th className="border border-gray-300 px-4 py-2">Peak Demand OFF</th>
                            <th className="border border-gray-300 px-4 py-2">Peak Demand ON</th>
                            <th className="border border-gray-300 px-4 py-2">Peak Time</th>
                            <th className="border border-gray-300 px-4 py-2">Server Time</th>
                            <th className="border border-gray-300 px-4 py-2">Server to Peak</th>
                            <th className="border border-gray-300 px-4 py-2">Server to Discharge ON</th>
                            <th className="border border-gray-300 px-4 py-2">Energy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentLogs.map(log => (
                            <tr key={log.id}>
                                <td className="border border-gray-300 px-4 py-2">{log.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.timeStamp}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.cause}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.dischargeOn}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.dischargeOff}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.peakDemandOff}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.peakDemandOn}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.peakTime}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.serverTime}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.serverToPeak}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.serverToDischargeOn}</td>
                                <td className="border border-gray-300 px-4 py-2">{log.energy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`bg-blue-500 text-white rounded-md p-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`bg-blue-500 text-white rounded-md p-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LTOControl;
