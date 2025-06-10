# 🌐 Оптима - Современный сайт провайдера

<div align="center">
  <img src="public/images/logo.svg" alt="Internet Provider Logo" width="200"/>
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
  [![SCSS](https://img.shields.io/badge/SCSS-1.69.5-CC6699.svg)](https://sass-lang.com/)
  [![Webpack](https://img.shields.io/badge/Webpack-5.89.0-8DD6F9.svg)](https://webpack.js.org/)
  [![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325.svg)](https://jestjs.io/)
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-2ea44f)](https://robot122-dev.github.io)
</div>

## 📋 Содержание

- [О проекте](#-о-проекте)
- [Технологии](#-технологии)
- [Структура проекта](#-структура-проекта)
- [Установка и запуск](#-установка-и-запуск)
- [Скрипты](#-скрипты)
- [Компоненты](#-компоненты)
- [Стилизация](#-стилизация)
- [Тестирование](#-тестирование)
- [Деплой](#-деплой)

## 🚀 О проекте

Современный веб-сайт для интернет-провайдера, разработанный с использованием React и современных веб-технологий. Проект включает в себя все необходимые функции для эффективного представления услуг провайдера и взаимодействия с клиентами.

### Основные функции:
- 📱 Адаптивный дизайн
- 🎯 Оптимизированная производительность
- 🔍 SEO-friendly
- 🎨 Современный UI/UX
- 📊 Интерактивные компоненты

## 🛠 Технологии

- **Frontend Framework:** React 18.2.0
- **Стилизация:** 
  - TailwindCSS 3.4.1
  - SCSS 1.69.5
- **Маршрутизация:** React Router 6.21.0
- **Формы:** React Hook Form 7.49.2
- **HTTP клиент:** Axios 1.6.2
- **Иконки:** React Icons 4.12.0
- **Уведомления:** React Hot Toast 2.4.1
- **Сборка:** Webpack 5.89.0
- **Тестирование:** Jest 29.7.0

## 📁 Структура проекта

```
src/
├── components/     # Переиспользуемые компоненты
├── pages/         # Страницы приложения
├── hooks/         # Пользовательские хуки
├── styles/        # Глобальные стили и темы
├── data/          # Статические данные
├── routes.js      # Конфигурация маршрутизации
└── App.js         # Корневой компонент
```

## 💻 Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/robot122-dev/internet-provider.git
cd internet-provider
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm start
```

## 📜 Скрипты

- `npm start` - Запуск проекта в режиме разработки
- `npm run build` - Сборка проекта для продакшена
- `npm test` - Запуск тестов
- `npm run lint` - Проверка кода линтером
- `npm run format` - Форматирование кода
- `npm run deploy` - Деплой на GitHub Pages

## 🎨 Компоненты

### Пример компонента тарифа:

```jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function TariffCard({ tariff }) {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    toast.success('Заявка отправлена!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold">{tariff.name}</h3>
      <p className="text-gray-600">{tariff.speed} Мбит/с</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('phone')} placeholder="Ваш телефон" />
        <button type="submit">Подключить</button>
      </form>
    </div>
  );
}
```

## 🎯 Стилизация

Проект использует комбинацию TailwindCSS и SCSS для стилизации:

```scss
// styles/variables.scss
$primary-color: #2563eb;
$secondary-color: #1e40af;

// Пример использования в компоненте
.button {
  @apply px-4 py-2 rounded-lg;
  background-color: $primary-color;
  
  &:hover {
    background-color: $secondary-color;
  }
}
```

## 🧪 Тестирование

Пример теста компонента:

```javascript
import { render, screen } from '@testing-library/react';
import { TariffCard } from './TariffCard';

describe('TariffCard', () => {
  it('renders tariff information correctly', () => {
    const tariff = {
      name: 'Базовый',
      speed: 100
    };
    
    render(<TariffCard tariff={tariff} />);
    expect(screen.getByText('Базовый')).toBeInTheDocument();
    expect(screen.getByText('100 Мбит/с')).toBeInTheDocument();
  });
});
```

## 🚀 Деплой

Проект автоматически деплоится на GitHub Pages при пуше в ветку main:

```bash
npm run deploy
```

### 🌐 Живой сайт

Проект размещен на GitHub Pages и доступен по адресу: [https://robot122-dev.github.io](https://robot122-dev.github.io)

## 📝 Лицензия

MIT © Bychkov V.A.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/robot122-dev">Vadim Bychkov</a></sub>
</div>
