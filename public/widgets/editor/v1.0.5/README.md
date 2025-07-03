# Универсальный текстовый редактор v1.0.5

Виджет для мгновенного редактирования текста на любом сайте.

## Подключение

```html
<script src="https://korob.tech/widgets/editor/v1.0.5/widget.js"></script>
```

## Использование

Добавьте атрибут `data-widget` к элементам, которые хотите редактировать:

```html
<div data-widget="title">
  Заголовок страницы
</div>

<div data-widget="description">
  Описание продукта
</div>
```

## API

### Инициализация с настройками

```javascript
WidgetEditor.init({
  selector: '[data-widget]',
  autoSave: true,
  saveDelay: 1000,
  onSave: function(key, value) {
    console.log('Сохранено:', key, value);
  },
  onEdit: function(key, value) {
    console.log('Отредактировано:', key, value);
  }
});
```

### Методы

- `WidgetEditor.setText(key, text)` - установить текст
- `WidgetEditor.getText(key)` - получить текст
- `WidgetEditor.getKeys()` - получить все ключи
- `WidgetEditor.updatePositions()` - обновить позиции кругов
- `WidgetEditor.destroy()` - уничтожить виджет

## Поддержка

- Vue.js
- React
- Обычный HTML
- Все современные браузеры

## Лицензия

MIT 