# **React + TypeScript: Testing with React Testing Library & Jest**

## Описание
Проект демонстрирует различные подходы к тестированию React приложений с использованием `React Testing Library` и `Jest`. Все примеры реализованы на TypeScript и включают тестирование компонентов, хуков, асинхронного поведения и Redux Toolkit.

## Установка
Перед началом работы убедитесь, что у вас установлен Node.js версии 18 или выше.

1. Установите зависимости:
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest
   npm i jest-environment-jsdom --force
   npm install msw --save-dev # для имитации запросов к серверу
   npm i jest-fixed-jsdom --save-dev # для исправления ошибок с jsdom
   npm i react-redux @reduxjs/toolkit # для тестирования redux toolkit
   ```

2. Установите настройки:

### 2.1 Настройка Jest
Создайте файл `jest.config.ts` в корне проекта и добавьте следующий код:
```typescript
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
};
```

### 2.2 Настройка TypeScript
Добавьте в ваш `tsconfig.json`:
```json
{
  "compilerOptions": {
    "jsx": "react-jsx", 
    "allowJs": true, // желательный параметр
    "esModuleInterop": true // желательный параметр
  }
}
```

### 2.3 Добавление скрипта в package.json
Добавьте скрипт для запуска тестов в файл `package.json`:
```json
"scripts": {
    "test": "jest"
}
```

## Структура проекта
Проект состоит из следующих директорий, каждая из которых посвящена отдельному аспекту тестирования:

1. **Basic Components Testing/**  
   Примеры тестирования базовых React-компонентов.

2. **Event Handler Testing/**  
   Тестирование обработчиков событий (`onClick`) и их взаимодействия с DOM.

3. **Multiple Element Testing/**  
   Работа с несколькими элементами на странице, включая выбор элементов по атрибутам, ролям и тексту.

4. **Testing Async Hooks/**  
   Тестирование асинхронных хуков, которые выполняют запросы к API.

5. **Testing Custom Async Hooks/**  
   Примеры тестирования пользовательских асинхронных хуков с использованием библиотеки MSW для имитации API-запросов.

6. **Testing Custom Hooks/**  
   Тестирование других пользовательских хуков.

7. **Testing Hooks/**  
   Примеры тестирования стандартных хуков (`useState`).

8. **Testing Redux Components/**  
   Тестирование компонентов, которые взаимодействуют с Redux Toolkit.

## Как запускать тесты
Чтобы запустить тесты, используйте команду:
```bash
npm test
```

## Полезные ресурсы
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [MSW Documentation](https://mswjs.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Туториал React Testing Library + TypeScript](https://www.youtube.com/watch?v=bvdHVxqjv80)