import React from "react";

function SetupInstructions() {
  const instructions = [
    {
      id: 1,
      title: "Настройка Wi-Fi роутера",
      steps: [
        "Подключите роутер к электросети",
        "Подключите кабель интернета к порту WAN",
        "Подключитесь к сети Wi-Fi роутера (пароль указан на корпусе)",
        "Откройте веб-интерфейс роутера (адрес указан на корпусе)",
        "Следуйте инструкциям мастера настройки",
      ],
    },
    {
      id: 2,
      title: "Настройка модема",
      steps: [
        "Подключите модем к электросети",
        "Подключите кабель интернета к порту WAN",
        "Дождитесь загрузки модема (индикатор должен стать зеленым)",
        "Подключите компьютер к модему через LAN-кабель или Wi-Fi",
      ],
    },
    {
      id: 3,
      title: "Проверка скорости интернета",
      steps: [
        "Отключите все устройства от сети, кроме тестируемого",
        "Закройте все программы, использующие интернет",
        "Перейдите на страницу проверки скорости",
        'Нажмите кнопку "Начать тест"',
        "Дождитесь завершения теста",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {instructions.map((instruction) => (
        <div key={instruction.id} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-heading text-h5 font-bold text-gray-900 mb-4">
            {instruction.title}
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            {instruction.steps.map((step, index) => (
              <li key={index} className="text-body text-gray-700">
                {step}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

export default SetupInstructions;
