import React from "react";
import { districts } from "../../../data/coverage";

function DistrictList({ selectedDistrict = "", onSelectDistrict = () => {} }) {
  const handleDistrictClick = (districtName) => {
    onSelectDistrict(districtName);
  };

  return (
    <div className="space-y-4">
      {districts.map((district) => (
        <div
          key={district.name}
          onClick={() => handleDistrictClick(district.name)}
          className={`block w-full p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out bg-white
            ${selectedDistrict === district.name ? "border-primary shadow-md" : "border-gray-200 hover:border-primary/30 hover:shadow-sm"}
          `}
        >
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-textMain leading-snug">
              {district.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DistrictList;
