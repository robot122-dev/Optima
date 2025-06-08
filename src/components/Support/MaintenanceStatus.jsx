import React from "react";
import { districts, maintenanceStatus } from "../../data/coverage";

function MaintenanceStatus() {
  const districtsWithMaintenance = districts.filter(
    (district) => district.maintenance !== "none"
  );

  return (
    <div className="space-y-4">
      {districtsWithMaintenance.length > 0 ? (
        districtsWithMaintenance.map((district) => {
          const status = maintenanceStatus[district.maintenance];
          return (
            <div
              key={district.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-h5 font-semibold text-gray-900">
                    {district.name}
                  </h3>
                  <p className="text-body text-gray-600">{status.label}</p>
                </div>
                <div className={`text-${status.color}-500`}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <p className="text-body text-gray-600">
            В настоящее время нет запланированных или аварийных работ
          </p>
        </div>
      )}
    </div>
  );
}

export default MaintenanceStatus;
