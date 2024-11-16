import { useState } from "react";
import OverviewCard from "./OverviewIOE";
import InstantaneousControl from "./InstantaneousIOE";
import BatteryLogs from "./BatteryLogs";


const IOEBatteryControl = () => {
  const [charge, setCharge] = useState(75);
  const [voltage, setVoltage] = useState(380);
  const [current, setCurrent] = useState(25);
  const [status, setStatus] = useState("Charging");
  const [batteryTemp, setBatteryTemp] = useState(35);
  const [heatingStatus, setHeatingStatus] = useState(false);
  const [energyUsed, setEnergyUsed] = useState(120);
  const [operatingTime, setOperatingTime] = useState(24);
  const [totalCycles, setTotalCycles] = useState(15);
  const [lastMaintenance, setLastMaintenance] = useState("2023-09-01");

  const logs = [
    { id: 1, timestamp: "12/10/2024 14:45", event: "Discharge", current: 15, voltage: 365, status: "Complete" },
    // Add more logs here
  ];

  const toggleHeating = () => setHeatingStatus(!heatingStatus);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">IOE Battery Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <OverviewCard
          charge={charge}
          status={status}
          voltage={voltage}
          batteryTemp={batteryTemp}
          energyUsed={energyUsed}
          operatingTime={operatingTime}
          totalCycles={totalCycles}
          lastMaintenance={lastMaintenance}
        />
        <InstantaneousControl
          charge={charge}
          setCharge={setCharge}
          current={current}
          setCurrent={setCurrent}
          voltage={voltage}
          setVoltage={setVoltage}
          heatingStatus={heatingStatus}
          toggleHeating={toggleHeating}
        />
      </div>
      <BatteryLogs logs={logs} />
    </div>
  );
};

export default IOEBatteryControl;
