import React, { useState } from "react";
import { districts } from "../../../data/coverage";
import DistrictListBase from "../../general/DistrictListBase";
import { FiWifi, FiZap } from "react-icons/fi";

const CoverageMap = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-h2 font-bold text-gray-900 mb-4 tracking-tight">
            Зона покрытия в Нижнем Новгороде
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Проверьте доступность подключения в вашем районе
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Список районов */}
          <DistrictListBase
            districts={districts}
            onDistrictClick={setSelectedDistrict}
            selectedDistrictId={selectedDistrict?.id}
          />

          {/* Информация о выбранном районе */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {selectedDistrict ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-h3 font-bold text-gray-900">
                    {selectedDistrict.name}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <FiWifi className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="text-small text-gray-600">Технология</p>
                      <p className="text-body font-medium text-gray-900">
                        {selectedDistrict.technology}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FiZap className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="text-small text-gray-600">
                        Максимальная скорость
                      </p>
                      <p className="text-body font-medium text-gray-900">
                        {selectedDistrict.maxSpeed}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-body text-gray-600">
                      {selectedDistrict.description}
                    </p>
                  </div>

                  <button
                    className="btn-primary w-full"
                    onClick={() => {
                      const formElement = document.getElementById("quick-form");
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Оставить заявку на подключение
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="font-heading text-h4 font-bold text-gray-900 mb-2">
                  Выберите район
                </h3>
                <p className="text-body text-gray-600">
                  Выберите район из списка слева, чтобы узнать подробную
                  информацию о покрытии
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
