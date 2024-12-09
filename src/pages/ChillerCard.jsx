import React from "react";
import chiller from "./chiller2.png";
import DateSelector from "../components/DateSelector";

const Chiller = ({ title, cop, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3"> {/* Reduced padding */}
      <h4 className="text-lg font-semibold text-center">{title}</h4>
      <img
        src={chiller}
        alt={title}
        className="w-full h-36 object-contain mb-2" 
      />
      <div className="text-sm text-gray-600 text-center">
        <span className="font-medium">COP:</span> {cop}
      </div>
    </div>
  );
};

const MiniCard = ({ label, inTemp, outTemp, flowRate }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 mb-3 border border-gray-300"> {/* Reduced padding */}
      <div className="text-sm font-medium text-center">{label}</div>
      <div className="flex justify-between mt-1"> {/* Reduced margin-top */}
        <div className="text-xs text-gray-500">
          <span className="font-semibold">In:</span> {inTemp}
        </div>
        <div className="text-xs text-gray-500">
          <span className="font-semibold">Out:</span> {outTemp}
        </div>
      </div>
      <div className="mt-1 text-xs text-gray-500"> {/* Reduced margin-top */}
        <span className="font-semibold">Flow Rate:</span> {flowRate}
      </div>
    </div>
  );
};

const ChillersCard = () => {
  const phaseInfo = [
    {
      phase: "Phase 1",
      hotInletTemp: "60°C",
      hotOutletTemp: "45°C",
      coldInletTemp: "10°C",
      coldOutletTemp: "7°C",
      evaporatorFlowrate: "50 m³/h",
      condenserFlowrate: "75 m³/h",
      chillers: [
        { title: "Chiller 1", cop: 3.5, image: "chiller1.jpg" },
        { title: "Chiller 2", cop: 4.0, image: "chiller2.jpg" },
        { title: "Chiller 3", cop: 3.8, image: "chiller3.jpg" },
        { title: "Chiller 4", cop: 3.2, image: "chiller4.jpg" },
      ],
    },
    {
      phase: "Phase 2",
      hotInletTemp: "58°C",
      hotOutletTemp: "44°C",
      coldInletTemp: "12°C",
      coldOutletTemp: "8°C",
      evaporatorFlowrate: "55 m³/h",
      condenserFlowrate: "80 m³/h",
      chillers: [
        { title: "Chiller 5", cop: 3.6, image: "chiller5.jpg" },
        { title: "Chiller 6", cop: 4.2, image: "chiller6.jpg" },
        { title: "Chiller 7", cop: 3.9, image: "chiller7.jpg" },
        { title: "Chiller 8", cop: 3.1, image: "chiller8.jpg" },
      ],
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 relative"> {/* Outer container remains white */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Chillers</h3>
        <DateSelector/>
      </div>

      <div className="flex space-x-6">
        {phaseInfo.map((phase, index) => (
          <div
            key={index}
            className={`w-1/2 border rounded-lg p-4 shadow-md bg-white`} // White background for the inner container
          >
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-3 text-center">{phase.phase}</h4>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <MiniCard
                  label="Evaporator"
                  inTemp={phase.coldInletTemp}
                  outTemp={phase.coldOutletTemp}
                  flowRate={phase.evaporatorFlowrate}
                />
                <MiniCard
                  label="Condenser"
                  inTemp={phase.hotInletTemp}
                  outTemp={phase.hotOutletTemp}
                  flowRate={phase.condenserFlowrate}
                />
              </div>
            </div>

            {/* Chillers section */}
            <div className="grid grid-cols-2 gap-4">
              {phase.chillers.slice(0, 2).map((chiller, i) => (
                <Chiller key={i} {...chiller} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {phase.chillers.slice(2, 4).map((chiller, i) => (
                <Chiller key={i + 2} {...chiller} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChillersCard;
