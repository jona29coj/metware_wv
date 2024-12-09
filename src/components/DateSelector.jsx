import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const DateSelector = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("day");
  const [customDate, setCustomDate] = useState(new Date().toISOString().split("T")[0]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  const handleCustomDateChange = (e) => {
    setCustomDate(e.target.value);
    setShowDatePicker(false);
  };

  return (
    <div className="relative flex items-center space-x-3">
      {/* Period Selector */}
      <div className="flex space-x-2">
        {["Day", "Week", "Month"].map((period) => (
          <button
            key={period}
            className={`px-2 py-1 rounded-md border text-sm relative ${
              selectedPeriod === period.toLowerCase()
                ? "bg-blue-500 text-white"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => handlePeriodChange(period.toLowerCase())}
          >
            {period}
            {showDatePicker && selectedPeriod === period.toLowerCase() && (
              <div
                className="absolute top-[2.5rem] left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded shadow-lg z-50"
              >
                <input
                  type="date"
                  className="px-1 py-0.5 text-sm w-28 border rounded text-black"
                  value={customDate}
                  onChange={handleCustomDateChange}
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Calendar Icon */}
      <button
        onClick={toggleDatePicker}
        className="text-gray-600 hover:text-blue-500"
        title="Change Date"
      >
        <FaCalendarAlt size={18} />
      </button>
    </div>
  );
};

export default DateSelector;
