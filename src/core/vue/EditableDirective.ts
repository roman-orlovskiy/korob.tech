import type { App, DirectiveBinding } from 'vue';
import { TextEditor, type EditorConfig } from '../TextEditor';

interface EditableBinding extends DirectiveBinding {
  value: string | EditorConfig;
  arg?: string; // Ключ для редактируемого элемента
}

// Глобальный экземпляр редактора
let globalEditor: TextEditor | null = null;

/**
 * Инициализация глобального редактора
 */
export function initGlobalEditor(config: EditorConfig = {}): TextEditor {
  if (!globalEditor) {
    globalEditor = new TextEditor(config);
    globalEditor.init();
  }
  return globalEditor;
}

/**
 * Vue директива для редактируемых элементов
 */
export const vEditable = {
  mounted(el: HTMLElement, binding: EditableBinding) {
    const key = binding.arg || (typeof binding.value === 'string' ? binding.value : `vue_${Date.now()}`);
    const config = typeof binding.value === 'object' ? binding.value : {};
    
    // Устанавливаем атрибуты
    el.setAttribute('data-widget', 'editable');
    el.setAttribute('data-editor-key', key);
    
    // Инициализируем редактор если еще не инициализирован
    if (!globalEditor) {
      initGlobalEditor(config);
    }
    
    // Сохраняем ключ в элементе для последующего использования
    (el as any)._editorKey = key;
  },
  
  updated(el: HTMLElement, binding: EditableBinding) {
    const key = binding.arg || (typeof binding.value === 'string' ? binding.value : (el as any)._editorKey);
    if (key && globalEditor) {
      // Обновляем текст если он изменился в Vue
      const newText = el.textContent || '';
      globalEditor.setText(key, newText);
    }
  },
  
  unmounted(el: HTMLElement) {
    // Очистка при удалении элемента
    const key = (el as any)._editorKey;
    if (key && globalEditor) {
      // Можно добавить логику очистки если нужно
    }
  }
};

/**
 * Vue директива для вставки текста по ключу
 */
export const vText = {
  mounted(el: HTMLElement, binding: EditableBinding) {
    const key = binding.arg || (typeof binding.value === 'string' ? binding.value : '');
    if (key && globalEditor) {
      // Устанавливаем текст из редактора
      const text = globalEditor.getText(key);
      if (text) {
        el.textContent = text;
      }
    }
  },
  
  updated(el: HTMLElement, binding: EditableBinding) {
    const key = binding.arg || (typeof binding.value === 'string' ? binding.value : '');
    if (key && globalEditor) {
      // Обновляем текст при изменении
      const text = globalEditor.getText(key);
      if (text) {
        el.textContent = text;
      }
    }
  }
};

/**
 * Vue плагин для установки директив
 */
export const EditablePlugin = {
  install(app: App, config: EditorConfig = {}) {
    // Инициализируем глобальный редактор
    initGlobalEditor(config);
    
    // Регистрируем директивы
    app.directive('editable', vEditable);
    app.directive('text', vText);
    
    // Добавляем глобальные методы
    app.config.globalProperties.$editor = globalEditor;
  }
};

/**
 * Композабл для работы с редактором в setup функциях
 */
export function useEditor() {
  return {
    editor: globalEditor,
    setText: (key: string, text: string) => globalEditor?.setText(key, text),
    getText: (key: string) => globalEditor?.getText(key),
    getKeys: () => globalEditor?.getKeys() || [],
    onSave: (callback: (key: string, value: string) => void) => {
      if (globalEditor) {
        // Можно добавить систему событий
      }
    }
  };
} 