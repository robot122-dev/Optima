import React, { useState } from "react";
import {
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
  FiXCircle,
} from "react-icons/fi";

const getStatusIcon = (status) => {
  switch (status) {
    case "available":
      return <FiCheckCircle className="w-5 h-5 text-green-500" />;
    case "partial":
      return <FiAlertCircle className="w-5 h-5 text-yellow-500" />;
    case "unavailable":
      return <FiXCircle className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

const DistrictListBase = ({
  districts,
  onDistrictClick,
  selectedDistrictId,
  showSearch = true,
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDistricts = districts.filter((district) =>
    district.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      {showSearch && (
        <div className="mb-6 flex items-center">
          <FiMapPin className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Поиск по району..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {filteredDistricts.map((district) => (
          <div
            key={district.id}
            className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition ${
              selectedDistrictId === district.id
                ? "bg-blue-50 border-2 border-blue-500"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
            onClick={
              onDistrictClick ? () => onDistrictClick(district) : undefined
            }
          >
            <div>
              <h3 className="font-semibold text-gray-900">{district.name}</h3>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm text-gray-600">
                  Покрытие: {district.coverage}
                </span>
                <span className="text-sm text-gray-600">
                  До {district.maxSpeed}
                </span>
                <span className="text-sm text-gray-600">
                  {district.technology}
                </span>
              </div>
            </div>
            {getStatusIcon(district.status)}
          </div>
        ))}
        {filteredDistricts.length === 0 && (
          <div className="text-center text-gray-500 py-8">Район не найден</div>
        )}
      </div>
    </div>
  );
};

export default DistrictListBase;
