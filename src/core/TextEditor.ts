export interface EditorConfig {
  selector?: string;
  dataKey?: string;
  placeholder?: string;
  autoSave?: boolean;
  saveDelay?: number;
  onSave?: (key: string, value: string) => void;
  onEdit?: (key: string, value: string) => void;
}

export interface EditableElement {
  element: HTMLElement;
  key: string;
  originalText: string;
  isEditing: boolean;
}

export class TextEditor {
  private config: EditorConfig;
  private editableElements: Map<string, EditableElement> = new Map();
  private observer: MutationObserver | null = null;
  private saveTimeout: number | null = null;

  constructor(config: EditorConfig = {}) {
    this.config = {
      selector: '[data-widget="editable"]',
      dataKey: 'data-editor-key',
      placeholder: 'Нажмите для редактирования...',
      autoSave: true,
      saveDelay: 1000,
      ...config
    };
  }

  /**
   * Инициализация редактора
   */
  init(): void {
    this.attachEventListeners();
    this.observeDOMChanges();
    this.scanForEditableElements();
  }

  /**
   * Сканирование DOM для поиска редактируемых элементов
   */
  private scanForEditableElements(): void {
    const elements = document.querySelectorAll(this.config.selector!);
    elements.forEach(element => {
      this.makeEditable(element as HTMLElement);
    });
  }

  /**
   * Наблюдение за изменениями DOM для динамического контента
   */
  private observeDOMChanges(): void {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              // Проверяем сам элемент
              if (element.matches?.(this.config.selector!)) {
                this.makeEditable(element);
              }
              // Проверяем дочерние элементы
              const editableChildren = element.querySelectorAll(this.config.selector!);
              editableChildren.forEach(child => {
                this.makeEditable(child as HTMLElement);
              });
            }
          });
        }
      });
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Делает элемент редактируемым
   */
  private makeEditable(element: HTMLElement): void {
    const key = element.getAttribute(this.config.dataKey!) || this.generateKey();
    
    // Если элемент уже обработан, пропускаем
    if (this.editableElements.has(key)) {
      return;
    }

    const originalText = element.textContent || '';
    
    // Сохраняем информацию об элементе
    this.editableElements.set(key, {
      element,
      key,
      originalText,
      isEditing: false
    });

    // Добавляем атрибуты
    element.setAttribute(this.config.dataKey!, key);
    element.setAttribute('contenteditable', 'false');
    element.classList.add('widget-editable');

    // Добавляем обработчики событий
    this.attachElementListeners(element, key);
  }

  /**
   * Привязка обработчиков событий к элементу
   */
  private attachElementListeners(element: HTMLElement, key: string): void {
    // Обработчик клика для начала редактирования
    element.addEventListener('click', (e) => {
      e.preventDefault();
      this.startEditing(key);
    });

    // Обработчик двойного клика для быстрого редактирования
    element.addEventListener('dblclick', (e) => {
      e.preventDefault();
      this.startEditing(key);
    });
  }

  /**
   * Начало редактирования элемента
   */
  private startEditing(key: string): void {
    const editable = this.editableElements.get(key);
    if (!editable || editable.isEditing) return;

    editable.isEditing = true;
    editable.element.setAttribute('contenteditable', 'true');
    editable.element.classList.add('widget-editing');
    editable.element.focus();

    // Выделяем весь текст
    const range = document.createRange();
    range.selectNodeContents(editable.element);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    // Добавляем обработчики для завершения редактирования
    this.attachEditingListeners(editable.element, key);
  }

  /**
   * Привязка обработчиков во время редактирования
   */
  private attachEditingListeners(element: HTMLElement, key: string): void {
    const finishEditing = () => this.finishEditing(key);

    // Завершение по Enter
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        finishEditing();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        this.cancelEditing(key);
      }
    };

    // Завершение по потере фокуса
    const handleBlur = () => {
      setTimeout(() => finishEditing(), 100);
    };

    element.addEventListener('keydown', handleKeyDown);
    element.addEventListener('blur', handleBlur);

    // Сохраняем обработчики для последующего удаления
    (element as any)._editingListeners = { handleKeyDown, handleBlur };
  }

  /**
   * Завершение редактирования
   */
  private finishEditing(key: string): void {
    const editable = this.editableElements.get(key);
    if (!editable || !editable.isEditing) return;

    const newText = editable.element.textContent || '';
    
    // Удаляем обработчики редактирования
    this.removeEditingListeners(editable.element);

    // Восстанавливаем состояние
    editable.element.setAttribute('contenteditable', 'false');
    editable.element.classList.remove('widget-editing');
    editable.isEditing = false;

    // Вызываем колбэки
    if (this.config.onEdit) {
      this.config.onEdit(key, newText);
    }

    if (this.config.autoSave && newText !== editable.originalText) {
      this.scheduleSave(key, newText);
    }
  }

  /**
   * Отмена редактирования
   */
  private cancelEditing(key: string): void {
    const editable = this.editableElements.get(key);
    if (!editable || !editable.isEditing) return;

    editable.element.textContent = editable.originalText;
    this.finishEditing(key);
  }

  /**
   * Удаление обработчиков редактирования
   */
  private removeEditingListeners(element: HTMLElement): void {
    const listeners = (element as any)._editingListeners;
    if (listeners) {
      element.removeEventListener('keydown', listeners.handleKeyDown);
      element.removeEventListener('blur', listeners.handleBlur);
      delete (element as any)._editingListeners;
    }
  }

  /**
   * Планирование сохранения
   */
  private scheduleSave(key: string, value: string): void {
    if (this.saveTimeout) {
      clearTimeout(this.saveTimeout);
    }

    this.saveTimeout = window.setTimeout(() => {
      if (this.config.onSave) {
        this.config.onSave(key, value);
      }
      this.saveTimeout = null;
    }, this.config.saveDelay);
  }

  /**
   * Генерация уникального ключа
   */
  private generateKey(): string {
    return `editor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Привязка глобальных обработчиков событий
   */
  private attachEventListeners(): void {
    // Предотвращение редактирования при клике вне элементов
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest(this.config.selector!)) {
        this.finishAllEditing();
      }
    });
  }

  /**
   * Завершение всех активных редактирований
   */
  private finishAllEditing(): void {
    this.editableElements.forEach((editable, key) => {
      if (editable.isEditing) {
        this.finishEditing(key);
      }
    });
  }

  /**
   * Установка текста по ключу
   */
  setText(key: string, text: string): void {
    const editable = this.editableElements.get(key);
    if (editable) {
      editable.element.textContent = text;
      editable.originalText = text;
    }
  }

  /**
   * Получение текста по ключу
   */
  getText(key: string): string | null {
    const editable = this.editableElements.get(key);
    return editable ? editable.element.textContent : null;
  }

  /**
   * Получение всех ключей
   */
  getKeys(): string[] {
    return Array.from(this.editableElements.keys());
  }

  /**
   * Очистка ресурсов
   */
  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.saveTimeout) {
      clearTimeout(this.saveTimeout);
    }
    this.editableElements.clear();
  }
} 