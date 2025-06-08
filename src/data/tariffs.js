import { FiWifi, FiClock, FiShield, FiZap, FiLock } from "react-icons/fi";

export const tariffs = [
  {
    id: 1,
    name: "Стартовый",
    speed: "100 Мбит/с",
    price: 399,
    popular: false,
    category: "Домашний",
    features: [
      {
        icon: FiWifi,
        text: "Безлимитный интернет",
      },
      {
        icon: FiClock,
        text: "Техподдержка 24/7",
      },
      {
        icon: FiShield,
        text: "Базовый антивирус",
      },
      {
        icon: FiWifi,
        text: "Wi-Fi роутер (аренда)",
      },
    ],
  },
  {
    id: 2,
    name: "Оптимальный",
    speed: "300 Мбит/с",
    price: 599,
    popular: true,
    category: "Домашний",
    features: [
      {
        icon: FiWifi,
        text: "Безлимитный интернет",
      },
      {
        icon: FiClock,
        text: "Техподдержка 24/7",
      },
      {
        icon: FiShield,
        text: "Расширенный антивирус",
      },
      {
        icon: FiWifi,
        text: "Wi-Fi роутер (в подарок)",
      },
    ],
  },
  {
    id: 3,
    name: "Быстрый",
    speed: "500 Мбит/с",
    price: 799,
    popular: false,
    category: "Домашний",
    features: [
      {
        icon: FiWifi,
        text: "Безлимитный интернет",
      },
      {
        icon: FiClock,
        text: "Техподдержка 24/7",
      },
      {
        icon: FiShield,
        text: "Премиум антивирус",
      },
      {
        icon: FiWifi,
        text: "Wi-Fi роутер (в подарок)",
      },
    ],
  },
  {
    id: 4,
    name: "Максимальный",
    speed: "1 Гбит/с",
    price: 999,
    popular: false,
    category: "Бизнес",
    features: [
      {
        icon: FiWifi,
        text: "Безлимитный интернет",
      },
      {
        icon: FiClock,
        text: "Техподдержка 24/7",
      },
      {
        icon: FiShield,
        text: "Корпоративный антивирус",
      },
      {
        icon: FiWifi,
        text: "Wi-Fi роутер (в подарок)",
      },
    ],
  },
];

export const tariffCategories = ["Все тарифы", "Домашний", "Бизнес"];

export const speedFilters = [
  { value: "all", label: "Любая скорость" },
  { value: "100", label: "До 100 Мбит/с" },
  { value: "300", label: "До 300 Мбит/с" },
  { value: "500", label: "До 500 Мбит/с" },
  { value: "1000", label: "До 1 Гбит/с" },
];

export const priceFilters = [
  { value: "all", label: "Любая цена" },
  { value: "500", label: "До 500 ₽" },
  { value: "1000", label: "До 1000 ₽" },
  { value: "1500", label: "До 1500 ₽" },
];
