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
  let modal = null;

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
      .widget-circle {
        position: absolute;
        width: 24px;
        height: 24px;
        background: #f1df6f;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: auto;
        box-shadow: 0 2px 8px rgba(241, 223, 111, 0.3);
        z-index: 10;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .widget-circle:hover {
        transform: translate(-50%, -50%) scale(1.2);
        box-shadow: 0 6px 16px rgba(241, 223, 111, 0.5);
      }
      
      .widget-circle::before {
        content: '✏️';
        font-size: 12px;
        transition: all 0.3s ease;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
      }
      
      .widget-circle:hover::before {
        transform: scale(1.1);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
      }
      
      /* Модальное окно */
      .widget-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .widget-modal.active {
        opacity: 1;
        visibility: visible;
      }
      
      .widget-modal-content {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        transform: scale(0.8);
        transition: all 0.3s ease;
      }
      
      .widget-modal.active .widget-modal-content {
        transform: scale(1);
      }
      
      .widget-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .widget-modal-title {
        font-size: 18px;
        font-weight: 600;
        color: #1f2937;
        margin: 0;
      }
      
      .widget-modal-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #6b7280;
        padding: 4px;
        border-radius: 4px;
        transition: all 0.2s ease;
      }
      
      .widget-modal-close:hover {
        background: #f3f4f6;
        color: #374151;
      }
      
      .widget-modal-textarea {
        width: 100%;
        min-height: 120px;
        padding: 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.5;
        resize: vertical;
        transition: border-color 0.2s ease;
        font-family: inherit;
      }
      
      .widget-modal-textarea:focus {
        outline: none;
        border-color: #f1df6f;
        box-shadow: 0 0 0 3px rgba(241, 223, 111, 0.1);
      }
      
      .widget-modal-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 16px;
      }
      
      .widget-modal-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .widget-modal-btn--cancel {
        background: #f3f4f6;
        color: #374151;
      }
      
      .widget-modal-btn--cancel:hover {
        background: #e5e7eb;
      }
      
      .widget-modal-btn--save {
        background: #f1df6f;
        color: #1f2937;
      }
      
      .widget-modal-btn--save:hover {
        background: #e6d25a;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(241, 223, 111, 0.3);
      }
      
      @media (prefers-color-scheme: dark) {
        .widget-modal-content {
          background: #1f2937;
          color: white;
        }
        
        .widget-modal-title {
          color: white;
        }
        
        .widget-modal-textarea {
          background: #374151;
          border-color: #4b5563;
          color: white;
        }
        
        .widget-modal-textarea:focus {
          border-color: #f1df6f;
        }
        
        .widget-modal-close {
          color: #9ca3af;
        }
        
        .widget-modal-close:hover {
          background: #374151;
          color: white;
        }
        
        .widget-modal-btn--cancel {
          background: #374151;
          color: white;
        }
        
        .widget-modal-btn--cancel:hover {
          background: #4b5563;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Создание модального окна
  function createModal() {
    if (modal) return modal;

    modal = document.createElement('div');
    modal.className = 'widget-modal';
    modal.innerHTML = `
      <div class="widget-modal-content">
        <div class="widget-modal-header">
          <h3 class="widget-modal-title">Редактировать текст</h3>
          <button class="widget-modal-close">&times;</button>
        </div>
        <textarea class="widget-modal-textarea" placeholder="Введите текст..."></textarea>
        <div class="widget-modal-actions">
          <button class="widget-modal-btn widget-modal-btn--cancel">Отмена</button>
          <button class="widget-modal-btn widget-modal-btn--save">Сохранить</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Обработчики модального окна
    const closeBtn = modal.querySelector('.widget-modal-close');
    const cancelBtn = modal.querySelector('.widget-modal-btn--cancel');
    const saveBtn = modal.querySelector('.widget-modal-btn--save');
    const textarea = modal.querySelector('.widget-modal-textarea');

    const closeModal = () => {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Обработка сохранения
    saveBtn.addEventListener('click', () => {
      const currentKey = modal.dataset.currentKey;
      const newText = textarea.value;
      
      if (currentKey && elements.has(currentKey)) {
        const item = elements.get(currentKey);
        item.element.textContent = newText;
        item.originalText = newText;
        
        if (config.onEdit) {
          config.onEdit(currentKey, newText);
        }
        
        if (config.autoSave) {
          scheduleSave(currentKey, newText);
        }
      }
      
      closeModal();
    });

    // Обработка клавиш
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
      if (e.key === 'Enter' && e.ctrlKey) {
        saveBtn.click();
      }
    });

    return modal;
  }

  // Открытие модального окна
  function openModal(key) {
    const item = elements.get(key);
    if (!item) return;

    const modal = createModal();
    const textarea = modal.querySelector('.widget-modal-textarea');
    
    modal.dataset.currentKey = key;
    textarea.value = item.element.textContent || '';
    
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('active');
      textarea.focus();
      textarea.select();
    }, 10);
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

  // Инициализация элемента
  function initElement(element) {
    const key = element.getAttribute('data-widget');
    if (!key || elements.has(key)) return;

    const originalText = element.textContent || '';
    
    // Создаем круг и добавляем его прямо в элемент
    const circle = document.createElement('div');
    circle.className = 'widget-circle';
    circle.setAttribute('data-widget-circle', key);
    element.appendChild(circle);
    
    elements.set(key, {
      element: element,
      key: key,
      originalText: originalText,
      circle: circle
    });

    // Добавляем обработчик клика на круг
    circle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(key);
    });
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
      if (modal) {
        modal.remove();
        modal = null;
      }
      // Удаляем все круги
      elements.forEach((item, key) => {
        if (item.circle && item.circle.parentNode) {
          item.circle.parentNode.removeChild(item.circle);
        }
      });
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