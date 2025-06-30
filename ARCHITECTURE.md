# Архитектура универсального текстового редактора

## Обзор

Этот проект представляет собой универсальный текстовый редактор, который может работать с любым DOM и интегрироваться с различными фреймворками (Vue.js, React, обычный HTML).

## Архитектурные принципы

### 1. Ядро (Core)
- **Файл**: `src/core/TextEditor.ts`
- **Назначение**: Универсальное ядро, работающее с любым DOM
- **Особенности**:
  - Использует `MutationObserver` для отслеживания динамических изменений
  - Поддерживает автоматическое сохранение
  - Работает с любыми HTML элементами
  - Система ключей для идентификации элементов

### 2. Vue.js интеграция
- **Файл**: `src/core/vue/EditableDirective.ts`
- **Назначение**: Директивы и плагины для Vue.js
- **Возможности**:
  - Директива `v-editable` для редактируемых элементов
  - Директива `v-text` для отображения текста по ключу
  - Композабл `useEditor()` для работы в setup функциях
  - Автоматическая синхронизация с Vue реактивностью

### 3. React интеграция
- **Файл**: `src/core/react/useEditable.ts`
- **Назначение**: Хуки и компоненты для React
- **Возможности**:
  - Хук `useEditable()` для редактируемых элементов
  - Хук `useEditableText()` для отображения текста
  - Хук `useEditor()` для управления редактором
  - Компоненты `Editable` и `EditableText`

## Структура файлов

```
src/
├── core/
│   ├── TextEditor.ts              # Универсальное ядро
│   ├── vue/
│   │   └── EditableDirective.ts   # Vue директивы
│   └── react/
│       └── useEditable.ts         # React хуки
├── assets/
│   └── editor.scss               # Стили редактора
└── views/
    └── DemoView.vue              # Демо страница
```

## Как это работает

### 1. Инициализация

```typescript
import { TextEditor } from '@/core/TextEditor'

const editor = new TextEditor({
  selector: '[data-widget="editable"]',
  dataKey: 'data-editor-key',
  autoSave: true,
  saveDelay: 1000,
  onSave: (key, value) => {
    // Сохранение на сервер
  },
  onEdit: (key, value) => {
    // Обработка изменений
  }
})

editor.init()
```

### 2. Разметка HTML

```html
<!-- Редактируемый элемент -->
<div data-widget="editable" data-editor-key="my-key">
  Текст для редактирования
</div>

<!-- Отображение текста по ключу -->
<span data-widget="text" data-editor-key="my-key"></span>
```

### 3. Vue.js использование

```vue
<template>
  <!-- Директива -->
  <h1 v-editable:page-title>Заголовок страницы</h1>
  <p v-editable:page-content>Содержимое страницы</p>
  
  <!-- Отображение -->
  <span v-text:page-title></span>
</template>

<script setup>
import { useEditor } from '@/core/vue/EditableDirective'

const { setText, getText } = useEditor()

// Программное управление
setText('page-title', 'Новый заголовок')
</script>
```

### 4. React использование

```tsx
import { useEditable, useEditableText } from '@/core/react/useEditable'

function MyComponent() {
  const { ref, setText } = useEditable('my-key', 'Начальный текст')
  const { ref: textRef } = useEditableText('my-key')
  
  return (
    <div>
      <div ref={ref}>Редактируемый текст</div>
      <span ref={textRef}></span>
    </div>
  )
}
```

## Ключевые особенности

### 1. Универсальность
- Работает с любым DOM
- Поддерживает Vue.js, React и обычный HTML
- Один код для всех платформ

### 2. Динамичность
- `MutationObserver` отслеживает изменения DOM
- Автоматически обрабатывает новые элементы
- Поддерживает SPA навигацию

### 3. Производительность
- Ленивая инициализация элементов
- Эффективное управление обработчиками событий
- Минимальное влияние на производительность

### 4. Расширяемость
- Модульная архитектура
- Легко добавлять новые функции
- Поддержка кастомных стилей и анимаций

## API ядра

### TextEditor

```typescript
class TextEditor {
  constructor(config: EditorConfig)
  init(): void
  destroy(): void
  setText(key: string, text: string): void
  getText(key: string): string | null
  getKeys(): string[]
}
```

### EditorConfig

```typescript
interface EditorConfig {
  selector?: string              // CSS селектор для элементов
  dataKey?: string              // Атрибут для ключа
  placeholder?: string          // Плейсхолдер
  autoSave?: boolean           // Автосохранение
  saveDelay?: number           // Задержка автосохранения
  onSave?: (key: string, value: string) => void
  onEdit?: (key: string, value: string) => void
}
```

## Стилизация

Редактор использует CSS классы для стилизации:

- `.widget-editable` - редактируемый элемент
- `.widget-editing` - элемент в режиме редактирования
- `.widget-saving` - элемент во время сохранения

Поддерживаются:
- Темная тема
- Адаптивность
- Кастомные цвета для разных типов контента
- Анимации и переходы

## Интеграция с фреймворками

### Vue.js
- Директивы для декларативного использования
- Композаблы для программного управления
- Автоматическая синхронизация с реактивностью

### React
- Хуки для функциональных компонентов
- Готовые компоненты
- TypeScript поддержка

### Обычный HTML
- Простая разметка атрибутами
- JavaScript API для управления
- Минимальные зависимости

## Преимущества архитектуры

1. **Переиспользование кода**: Одно ядро для всех платформ
2. **Простота интеграции**: Минимальные изменения в существующем коде
3. **Производительность**: Эффективная работа с DOM
4. **Расширяемость**: Легко добавлять новые функции
5. **Поддержка**: TypeScript, современные браузеры
6. **Документация**: Подробные примеры и API

## Планы развития

1. **Rich Text Editor**: Поддержка форматирования
2. **Изображения**: Редактирование изображений
3. **Версионирование**: История изменений
4. **Коллаборация**: Редактирование в реальном времени
5. **Плагины**: Система расширений
6. **Аналитика**: Отслеживание изменений 