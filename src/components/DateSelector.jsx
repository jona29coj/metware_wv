import React, { useState } from "react";

const DateSelector = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [weekStartDate, setWeekStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [weekEndDate, setWeekEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().split("T")[0].slice(0, 7)
  );
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);

    // Reset to today's date if switching back to "Day"
    if (period === "today") {
      setSelectedDate(new Date().toISOString().split("T")[0]);
    }
  };

  const handleNavigation = (direction) => {
    const currentDate = new Date(selectedDate);

    if (selectedPeriod === "today") {
      if (direction === "prev") {
        currentDate.setDate(currentDate.getDate() - 1);
      } else if (direction === "next") {
        currentDate.setDate(currentDate.getDate() + 1);
      }
      setSelectedDate(currentDate.toISOString().split("T")[0]);
    } else if (selectedPeriod === "week") {
      const newStartDate = new Date(weekStartDate);
      const newEndDate = new Date(weekEndDate);
      if (direction === "prev") {
        newStartDate.setDate(newStartDate.getDate() - 7);
        newEndDate.setDate(newEndDate.getDate() - 7);
      } else if (direction === "next") {
        newStartDate.setDate(newStartDate.getDate() + 7);
        newEndDate.setDate(newEndDate.getDate() + 7);
      }
      setWeekStartDate(newStartDate.toISOString().split("T")[0]);
      setWeekEndDate(newEndDate.toISOString().split("T")[0]);
    } else if (selectedPeriod === "month") {
      const newMonth = new Date(selectedMonth);
      if (direction === "prev") {
        newMonth.setMonth(newMonth.getMonth() - 1);
      } else if (direction === "next") {
        newMonth.setMonth(newMonth.getMonth() + 1);
      }
      setSelectedMonth(newMonth.toISOString().split("T")[0].slice(0, 7)); // Format: YYYY-MM
    } else if (selectedPeriod === "year") {
      const newYear = new Date(selectedYear);
      if (direction === "prev") {
        newYear.setFullYear(newYear.getFullYear() - 1);
      } else if (direction === "next") {
        newYear.setFullYear(newYear.getFullYear() + 1);
      }
      setSelectedYear(newYear.getFullYear());
    }
  };

  return (
    <div className="flex flex-col items-end space-y-2">
      <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 rounded-full p-1">
        {["Day", "Week", "Month", "Year"].map((period) => (
          <button
            key={period}
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              selectedPeriod === period.toLowerCase()
                ? "bg-blue-500 text-white shadow"
                : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => handlePeriodChange(period.toLowerCase())}
          >
            {period}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 shadow-sm">
        <button
          onClick={() => handleNavigation("prev")}
          className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="text-xs font-medium text-gray-800 dark:text-gray-200">
          {/* Display logic for the selected period */}
          {selectedPeriod === "today" && selectedDate}
          {selectedPeriod === "week" && `${weekStartDate} - ${weekEndDate}`}
          {selectedPeriod === "month" && selectedMonth}
          {selectedPeriod === "year" && selectedYear}
        </div>

        <button
          onClick={() => handleNavigation("next")}
          className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
