import '@testing-library/jest-dom';

// Добавляем TextEncoder в глобальное окружение
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Увеличиваем таймаут для асинхронных тестов
jest.setTimeout(10000); 