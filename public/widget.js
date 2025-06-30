/**
 * Универсальный текстовый редактор
 * Подключение: <script src="widget.js"></script>
 * Использование: <div data-widget="my-key">Текст</div>
 */

(function() {
  'use strict';

  // Конфигурация по умолчанию
  const config = {
    selector: '[data-widget]',
    autoSave: true,
    saveDelay: 1000,
    onSave: null,
    onEdit: null
  };

  // Хранилище элементов
  const elements = new Map();
  let observer = null;
  let saveTimeout = null;

  // Генерация уникального ID
  function generateId() {
    return 'editor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Создание стилей
  function createStyles() {
    if (document.getElementById('widget-editor-styles')) return;

    const style = document.createElement('style');
    style.id = 'widget-editor-styles';
    style.textContent = `
      [data-widget] {
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
      }
      
      [data-widget]:hover {
        background-color: rgba(59, 130, 246, 0.1);
        outline: 2px dashed rgba(59, 130, 246, 0.3);
        outline-offset: 2px;
      }
      
      [data-widget]:hover::before {
        content: '✏️';
        position: absolute;
        top: -8px;
        right: -8px;
        font-size: 12px;
        background: white;
        border-radius: 50%;
        padding: 2px;
        opacity: 1;
        z-index: 10;
      }
      
      [data-widget]::before {
        content: '✏️';
        position: absolute;
        top: -8px;
        right: -8px;
        font-size: 12px;
        background: white;
        border-radius: 50%;
        padding: 2px;
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 10;
      }
      
      [data-widget].editing {
        background-color: rgba(59, 130, 246, 0.05) !important;
        outline: 2px solid rgba(59, 130, 246, 0.5) !important;
        outline-offset: 2px;
        border-radius: 4px;
        padding: 4px 8px;
        margin: -4px -8px;
      }
      
      [data-widget].editing:focus {
        outline: 2px solid rgba(59, 130, 246, 0.8) !important;
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
      }
      
      [data-widget].editing::before {
        display: none;
      }
      
      @media (prefers-color-scheme: dark) {
        [data-widget]:hover {
          background-color: rgba(59, 130, 246, 0.2);
          outline-color: rgba(59, 130, 246, 0.5);
        }
        
        [data-widget].editing {
          background-color: rgba(59, 130, 246, 0.1) !important;
          outline-color: rgba(59, 130, 246, 0.6) !important;
        }
        
        [data-widget].editing:focus {
          outline-color: rgba(59, 130, 246, 0.9) !important;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
        }
        
        [data-widget]::before {
          background: #1f2937;
          color: white;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Инициализация элемента
  function initElement(element) {
    const key = element.getAttribute('data-widget');
    if (!key || elements.has(key)) return;

    const originalText = element.textContent || '';
    
    elements.set(key, {
      element: element,
      key: key,
      originalText: originalText,
      isEditing: false
    });

    // Добавляем обработчики
    element.addEventListener('click', (e) => {
      e.preventDefault();
      startEditing(key);
    });

    element.addEventListener('dblclick', (e) => {
      e.preventDefault();
      startEditing(key);
    });
  }

  // Начало редактирования
  function startEditing(key) {
    const item = elements.get(key);
    if (!item || item.isEditing) return;

    item.isEditing = true;
    item.element.setAttribute('contenteditable', 'true');
    item.element.classList.add('editing');
    item.element.focus();

    // Выделяем весь текст
    const range = document.createRange();
    range.selectNodeContents(item.element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Добавляем обработчики завершения
    const finishEditing = () => finishEditing(key);
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        finishEditing();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        cancelEditing(key);
      }
    };
    const handleBlur = () => {
      setTimeout(() => finishEditing(), 100);
    };

    item.element.addEventListener('keydown', handleKeyDown);
    item.element.addEventListener('blur', handleBlur);

    // Сохраняем обработчики для удаления
    item.element._editingListeners = { handleKeyDown, handleBlur };
  }

  // Завершение редактирования
  function finishEditing(key) {
    const item = elements.get(key);
    if (!item || !item.isEditing) return;

    const newText = item.element.textContent || '';
    
    // Удаляем обработчики
    if (item.element._editingListeners) {
      item.element.removeEventListener('keydown', item.element._editingListeners.handleKeyDown);
      item.element.removeEventListener('blur', item.element._editingListeners.handleBlur);
      delete item.element._editingListeners;
    }

    // Восстанавливаем состояние
    item.element.setAttribute('contenteditable', 'false');
    item.element.classList.remove('editing');
    item.isEditing = false;

    // Вызываем колбэки
    if (config.onEdit) {
      config.onEdit(key, newText);
    }

    if (config.autoSave && newText !== item.originalText) {
      scheduleSave(key, newText);
    }
  }

  // Отмена редактирования
  function cancelEditing(key) {
    const item = elements.get(key);
    if (!item || !item.isEditing) return;

    item.element.textContent = item.originalText;
    finishEditing(key);
  }

  // Планирование сохранения
  function scheduleSave(key, value) {
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }

    saveTimeout = setTimeout(() => {
      if (config.onSave) {
        config.onSave(key, value);
      }
      saveTimeout = null;
    }, config.saveDelay);
  }

  // Сканирование DOM
  function scanElements() {
    const elements = document.querySelectorAll(config.selector);
    elements.forEach(element => {
      initElement(element);
    });
  }

  // Наблюдение за изменениями DOM
  function observeDOM() {
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node;
              if (element.matches && element.matches(config.selector)) {
                initElement(element);
              }
              const editableChildren = element.querySelectorAll && element.querySelectorAll(config.selector);
              if (editableChildren) {
                editableChildren.forEach(child => {
                  initElement(child);
                });
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Глобальные обработчики
  function attachGlobalListeners() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.closest(config.selector)) {
        // Завершаем все активные редактирования
        elements.forEach((item, key) => {
          if (item.isEditing) {
            finishEditing(key);
          }
        });
      }
    });
  }

  // Инициализация
  function init(userConfig = {}) {
    // Объединяем конфигурацию
    Object.assign(config, userConfig);
    
    // Создаем стили
    createStyles();
    
    // Сканируем существующие элементы
    scanElements();
    
    // Наблюдаем за изменениями
    observeDOM();
    
    // Привязываем глобальные обработчики
    attachGlobalListeners();
  }

  // API для внешнего использования
  window.WidgetEditor = {
    init: init,
    setText: (key, text) => {
      const item = elements.get(key);
      if (item) {
        item.element.textContent = text;
        item.originalText = text;
      }
    },
    getText: (key) => {
      const item = elements.get(key);
      return item ? item.element.textContent : null;
    },
    getKeys: () => {
      return Array.from(elements.keys());
    },
    destroy: () => {
      if (observer) {
        observer.disconnect();
      }
      if (saveTimeout) {
        clearTimeout(saveTimeout);
      }
      elements.clear();
    }
  };

  // Автоматическая инициализация при загрузке DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }

})(); 