import { useState } from "react";
import vid1 from "../../src/videos/vid1.mp4";
import vid2 from "../../src/videos/vid2.mp4";
import SolarAnalysisCard from '../dcomponents/SolarAnalysisCard';
import DaylightFactorAnalysis from '../dcomponents/DayLightFactor';
import DaylightFloorPlanAnalysis from '../dcomponents/DayLightFloor';
import LuxAnalysis from '../dcomponents/LuxAnalysis';
import LuxAnalysisPt2 from '../dcomponents/LuxAnalysisPt2';
import FacilityUsageProfile from '../dcomponents/FacilityUsageProfile';
import ThreeDModelWithSuspense from '../dcomponents/ThreeDModel';
import { FaInfoCircle } from "react-icons/fa";

const Profile = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* 3D Model and Right Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* 3D Model */}
        <div className="bg-white shadow-lg rounded-lg">
          <ThreeDModelWithSuspense />
        </div>

        {/* Right Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center w-full space-y-6">
  {/* Heading */}
  <h1 className="text-2xl font-bold text-center text-gray-800">Facility Information</h1>

  {/* Address */}
  <p className="text-gray-600 text-center mb-6 text-lg">
    C 49 & 50, Noida, Sector 63, Noida, Uttar Pradesh 201307
  </p>

  {/* Flex container for Visual and Buttons */}
  <div className="flex items-center justify-center w-full space-x-8">
    {/* Score Representation */}
    <div className="relative flex items-center justify-center w-48 h-48">
      {/* Circular Progress Bar */}
      <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-90">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#4ade80"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="282.6"  // Max value of circle circumference
          strokeDashoffset={(1 - 760 / 1000) * 282.6} // Proportional to the score
          fill="none"
        />
      </svg>

      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-gray-800">760</p>
        <p className="text-lg text-gray-500">Building Score</p>
      </div>
    </div>

    {/* Right Section (Button and Info Icon side by side) */}
    <div className="flex items-center space-x-1">
      <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 text-sm w-32">
        CONNECT
      </button>

      {/* Info Icon with Tooltip */}
      <div className="relative">
        <button
          onClick={handleInfoClick}
          className="text-gray-600 hover:text-gray-800"
        >
          <FaInfoCircle size={24} />
        </button>

        {/* Tooltip */}
        {showInfo && (
          <div className="absolute bottom-12 left-1/12 transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded-md p-1 w-64 text-center">
            <p>
              You can reach out to us for any help or improvements regarding the building's performance and efficiency.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
</div>


      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        {/* Top Video Card */}
        <div className="card border-gray-300 shadow-lg rounded-lg p-4 bg-white">
          <h1 className="text-2xl font-bold text-center pb-2">Daylight Factor Analysis</h1>
          <video className="w-full rounded-md" autoPlay muted loop>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Bottom Video Card */}
        <div className="card border-gray-300 shadow-lg rounded-lg p-4 bg-white">
          <h1 className="text-2xl font-bold text-center pb-2">Sun Path Analysis</h1>
          <video className="w-full rounded-md" autoPlay muted loop>
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Analysis Components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SolarAnalysisCard />
        <DaylightFloorPlanAnalysis />
        <LuxAnalysis />
        <LuxAnalysisPt2 />
      </div>
    </div>
  );
};

export default Profile;
