Обязательно

1. Скачать:
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest
   npm i jest-environment-jsdom --force
   npm install msw --save-dev // для имитации запросов к серверу
   npm i jest-fixed-jsdom --save-dev // без него при имитации запросов к серверу возникают ошибки


2. Установить настройки:
   2.1) В файле jest.config.ts:
   // обязательная настройка для работы с TypeScript фалйами

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-fixed-jsdom',
    testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
    transform: {
        "^.+\\.(js|ts)$": "ts-jest",
    },
    transformIgnorePatterns: [
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
    ],
}

   2.2) В файле tsconfig.json:
   "compilerOptions": {
       "jsx": "react-jsx", // обязательный параметр
       "allowJs": true, // желательный параметр
       "esModuleInterop": true // желательный параметр
   }
3. Добавить в package.json:
"scripts": {
    "test": "jest"
}