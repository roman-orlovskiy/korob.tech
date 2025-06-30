// React интеграция для универсального текстового редактора
// Этот файл показывает, как интегрировать ядро редактора с React

import { TextEditor, type EditorConfig } from '../TextEditor';

// Глобальный экземпляр редактора для React
let globalEditor: TextEditor | null = null;

/**
 * Инициализация глобального редактора для React
 */
export function initReactEditor(config: EditorConfig = {}): TextEditor {
  if (!globalEditor) {
    globalEditor = new TextEditor(config);
    globalEditor.init();
  }
  return globalEditor;
}

/**
 * React хук для редактируемых элементов
 * 
 * Пример использования:
 * ```tsx
 * import { useEditable } from './useEditable';
 * 
 * function MyComponent() {
 *   const { ref, setText, getText } = useEditable('my-key', 'Начальный текст');
 *   
 *   return (
 *     <div ref={ref} className="editable-element">
 *       Нажмите для редактирования
 *     </div>
 *   );
 * }
 * ```
 */
export function useEditable(key: string, initialText?: string) {
  // В реальной реализации здесь будет useRef, useEffect и useCallback
  // из React
  
  const setText = (text: string) => {
    globalEditor?.setText(key, text);
  };
  
  const getText = () => {
    return globalEditor?.getText(key) || '';
  };
  
  return {
    ref: null, // В реальности это будет useRef
    setText,
    getText,
    editor: globalEditor
  };
}

/**
 * React хук для отображения текста по ключу
 * 
 * Пример использования:
 * ```tsx
 * import { useEditableText } from './useEditable';
 * 
 * function DisplayComponent() {
 *   const { ref } = useEditableText('my-key');
 *   
 *   return (
 *     <span ref={ref} className="display-text" />
 *   );
 * }
 * ```
 */
export function useEditableText(key: string) {
  // В реальной реализации здесь будет useRef и useEffect
  
  return {
    ref: null // В реальности это будет useRef
  };
}

/**
 * React хук для управления редактором
 * 
 * Пример использования:
 * ```tsx
 * import { useEditor } from './useEditable';
 * 
 * function AdminPanel() {
 *   const { setText, getText, getKeys } = useEditor();
 *   
 *   const handleSave = () => {
 *     const keys = getKeys();
 *     keys.forEach(key => {
 *       const text = getText(key);
 *       // Сохраняем в базу данных
 *     });
 *   };
 *   
 *   return (
 *     <button onClick={handleSave}>Сохранить все изменения</button>
 *   );
 * }
 * ```
 */
export function useEditor() {
  const setText = (key: string, text: string) => {
    globalEditor?.setText(key, text);
  };
  
  const getText = (key: string) => {
    return globalEditor?.getText(key) || '';
  };
  
  const getKeys = () => {
    return globalEditor?.getKeys() || [];
  };
  
  const onSave = (callback: (key: string, value: string) => void) => {
    if (globalEditor) {
      // Можно добавить систему событий
    }
  };
  
  return {
    editor: globalEditor,
    setText,
    getText,
    getKeys,
    onSave
  };
}

/**
 * React компонент для редактируемого элемента
 * 
 * Пример использования:
 * ```tsx
 * import { Editable } from './useEditable';
 * 
 * function MyPage() {
 *   return (
 *     <div>
 *       <h1>
 *         <Editable key="page-title" initialText="Заголовок страницы">
 *           Заголовок страницы
 *         </Editable>
 *       </h1>
 *       <p>
 *         <Editable key="page-content" initialText="Содержимое страницы">
 *           Содержимое страницы
 *         </Editable>
 *       </p>
 *     </div>
 *   );
 * }
 * ```
 */
export interface EditableProps {
  key: string;
  children?: any; // React.ReactNode в реальном проекте
  initialText?: string;
  className?: string;
  style?: any; // React.CSSProperties в реальном проекте
}

export function Editable({ key, children, initialText, className, style }: EditableProps) {
  const { ref } = useEditable(key, initialText);
  
  // В реальной реализации это будет JSX
  return null;
}

/**
 * React компонент для отображения текста
 * 
 * Пример использования:
 * ```tsx
 * import { EditableText } from './useEditable';
 * 
 * function DisplayPage() {
 *   return (
 *     <div>
 *       <h1>
 *         <EditableText key="page-title" />
 *       </h1>
 *       <p>
 *         <EditableText key="page-content" />
 *       </p>
 *     </div>
 *   );
 * }
 * ```
 */
export interface EditableTextProps {
  key: string;
  className?: string;
  style?: any; // React.CSSProperties в реальном проекте
}

export function EditableText({ key, className, style }: EditableTextProps) {
  const { ref } = useEditableText(key);
  
  // В реальной реализации это будет JSX
  return null;
} 