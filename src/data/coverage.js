export const districts = [
  {
    id: 1,
    name: "Нижегородский район",
    nameEn: "Nizhegorodsky District",
    nameWikimapia: "nizhegorodskyadministrativedistrict",
    wikimapiaId: 11020825,
    coverage: "95%",
    maxSpeed: "1 Гбит/с",
    status: "available",
    maintenance: "none",
    technology: "Оптическое волокно",
    description: "Полное покрытие оптическим волокном. Доступны все тарифы.",
    coordinates: [56.326797, 44.006516],
  },
  {
    id: 2,
    name: "Автозаводский район",
    nameEn: "Avtozavodsky District",
    nameWikimapia: "avtozavodadministrativedistrict",
    wikimapiaId: 14589747,
    coverage: "90%",
    maxSpeed: "500 Мбит/с",
    status: "available",
    maintenance: "planned",
    technology: "Оптическое волокно",
    description: "Большая часть района покрыта оптическим волокном.",
    coordinates: [56.2516, 43.8567],
  },
  {
    id: 3,
    name: "Сормовский район",
    nameEn: "Sormovsky District",
    nameWikimapia: "sormovoadministrativedistrict",
    wikimapiaId: 14589624,
    coverage: "85%",
    maxSpeed: "300 Мбит/с",
    status: "partial",
    maintenance: "emergency",
    technology: "Оптическое волокно / ADSL",
    description: "Смешанное покрытие оптическим волокном и ADSL.",
    coordinates: [56.3333, 43.8667],
  },
  {
    id: 4,
    name: "Приокский район",
    nameEn: "Prioksky District",
    nameWikimapia: "priokskyadministrativedistrict",
    wikimapiaId: 14589831,
    coverage: "80%",
    maxSpeed: "200 Мбит/с",
    status: "partial",
    maintenance: "none",
    technology: "Оптическое волокно / ADSL",
    description: "Основное покрытие оптическим волокном, местами ADSL.",
    coordinates: [56.2833, 43.9333],
  },
  {
    id: 5,
    name: "Советский район",
    nameEn: "Sovetsky District",
    nameWikimapia: "sovetskyadministrativedistrict",
    wikimapiaId: 11020502,
    coverage: "75%",
    maxSpeed: "200 Мбит/с",
    status: "partial",
    maintenance: "planned",
    technology: "Оптическое волокно / ADSL",
    description: "Смешанное покрытие с преобладанием оптического волокна.",
    coordinates: [56.3, 43.95],
  },
  {
    id: 6,
    name: "Канавинский район",
    nameEn: "Kanavinsky District",
    nameWikimapia: "kanavinoadministrativedistrict",
    wikimapiaId: 14589499,
    coverage: "70%",
    maxSpeed: "100 Мбит/с",
    status: "partial",
    maintenance: "none",
    technology: "ADSL / Оптическое волокно",
    description: "Основное покрытие ADSL, местами оптическое волокно.",
    coordinates: [56.3167, 43.9333],
  },
  {
    id: 7,
    name: "Ленинский район",
    nameEn: "Leninsky District",
    nameWikimapia: "leninskyadministrativedistrict",
    wikimapiaId: 14589673,
    coverage: "65%",
    maxSpeed: "100 Мбит/с",
    status: "partial",
    maintenance: "emergency",
    technology: "ADSL",
    description: "Покрытие преимущественно ADSL.",
    coordinates: [56.3167, 43.9],
  },
  {
    id: 8,
    name: "Московский район",
    nameEn: "Moskovsky District",
    nameWikimapia: "moskovskyadministrativedistrict",
    wikimapiaId: 14589580,
    coverage: "60%",
    maxSpeed: "100 Мбит/с",
    status: "partial",
    maintenance: "none",
    technology: "ADSL",
    description: "Покрытие преимущественно ADSL.",
    coordinates: [56.3, 43.9],
  },
];

export const coverageStatus = {
  available: {
    label: "Доступно подключение",
    color: "green",
    icon: "check-circle",
  },
  partial: {
    label: "Частичное покрытие",
    color: "yellow",
    icon: "alert-circle",
  },
  unavailable: {
    label: "Нет покрытия",
    color: "red",
    icon: "x-circle",
  },
};

export const maintenanceStatus = {
  none: {
    label: "Нет работ",
    color: "green",
    icon: "check-circle",
  },
  planned: {
    label: "Плановые работы",
    color: "yellow",
    icon: "alert-circle",
  },
  emergency: {
    label: "Аварийные работы",
    color: "red",
    icon: "x-circle",
  },
};
