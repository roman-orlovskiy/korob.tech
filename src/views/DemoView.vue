<template>
  <div class="demo">
    <div class="demo__container">
      <header class="demo__header">
        <h1 class="demo__title">Демо текстового редактора</h1>
        <p class="demo__description">
          Кликайте по любому тексту ниже, чтобы отредактировать его. Изменения сохраняются автоматически.
        </p>
      </header>

      <div class="demo__content">
        <!-- Статический HTML -->
        <section class="demo__section">
          <h2 class="demo__section-title">Статический HTML</h2>
          <div class="demo__example">
            <h3 
              data-widget="editable" 
              data-editor-key="static-title"
              data-editor-type="title"
            >
              Заголовок страницы
            </h3>
            <p 
              data-widget="editable" 
              data-editor-key="static-content"
              data-editor-type="content"
            >
              Это пример статического HTML контента, который можно редактировать прямо на странице. 
              Просто кликните по любому тексту и начните печатать.
            </p>
          </div>
        </section>

        <!-- Vue реактивный контент -->
        <section class="demo__section">
          <h2 class="demo__section-title">Vue реактивный контент</h2>
          <div class="demo__example">
            <h3 
              data-widget="editable" 
              data-editor-key="vue-title"
              data-editor-type="title"
            >
              {{ vueTitle }}
            </h3>
            <p 
              data-widget="editable" 
              data-editor-key="vue-content"
              data-editor-type="content"
            >
              {{ vueContent }}
            </p>
            <div class="demo__controls">
              <button @click="resetVueContent" class="demo__btn">Сбросить Vue контент</button>
            </div>
          </div>
        </section>

        <!-- Динамически добавляемый контент -->
        <section class="demo__section">
          <h2 class="demo__section-title">Динамический контент</h2>
          <div class="demo__example">
            <div class="demo__controls">
              <button @click="addDynamicContent" class="demo__btn">Добавить блок</button>
              <button @click="removeDynamicContent" class="demo__btn demo__btn--secondary">Удалить блок</button>
            </div>
            <div v-for="(block, index) in dynamicBlocks" :key="index" class="demo__dynamic-block">
              <h4 
                data-widget="editable" 
                :data-editor-key="`dynamic-title-${index}`"
                data-editor-type="title"
              >
                {{ block.title }}
              </h4>
              <p 
                data-widget="editable" 
                :data-editor-key="`dynamic-content-${index}`"
                data-editor-type="content"
              >
                {{ block.content }}
              </p>
            </div>
          </div>
        </section>

        <!-- Панель управления -->
        <section class="demo__section">
          <h2 class="demo__section-title">Панель управления</h2>
          <div class="demo__controls-panel">
            <div class="demo__control-group">
              <h3>Все ключи редактора:</h3>
              <ul class="demo__keys-list">
                <li v-for="key in editorKeys" :key="key" class="demo__key-item">
                  <span class="demo__key-name">{{ key }}</span>
                  <span class="demo__key-value">{{ getEditorText(key) }}</span>
                </li>
              </ul>
            </div>
            <div class="demo__control-group">
              <button @click="saveAllChanges" class="demo__btn demo__btn--primary">
                Сохранить все изменения
              </button>
              <button @click="exportData" class="demo__btn demo__btn--secondary">
                Экспортировать данные
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { TextEditor, type EditorConfig } from '@/core/TextEditor'

// Состояние Vue контента
const vueTitle = ref('Vue реактивный заголовок')
const vueContent = ref('Этот контент управляется Vue реактивностью. Изменения в редакторе будут синхронизированы с Vue состоянием.')

// Динамические блоки
const dynamicBlocks = ref([
  { title: 'Динамический блок 1', content: 'Содержимое первого динамического блока.' },
  { title: 'Динамический блок 2', content: 'Содержимое второго динамического блока.' }
])

// Ключи редактора
const editorKeys = ref<string[]>([])
const editor = ref<TextEditor | null>(null)

// Инициализация редактора
onMounted(() => {
  const config: EditorConfig = {
    selector: '[data-widget="editable"]',
    dataKey: 'data-editor-key',
    autoSave: true,
    saveDelay: 1000,
    onSave: (key: string, value: string) => {
      console.log(`Сохранено: ${key} = ${value}`)
      // Здесь можно отправить данные на сервер
    },
    onEdit: (key: string, value: string) => {
      console.log(`Редактируется: ${key} = ${value}`)
      // Синхронизация с Vue состоянием
      if (key === 'vue-title') {
        vueTitle.value = value
      } else if (key === 'vue-content') {
        vueContent.value = value
      }
    }
  }

  editor.value = new TextEditor(config)
  editor.value.init()

  // Обновляем список ключей
  updateEditorKeys()
})

// Очистка при размонтировании
onUnmounted(() => {
  editor.value?.destroy()
})

// Методы
const resetVueContent = () => {
  vueTitle.value = 'Vue реактивный заголовок'
  vueContent.value = 'Этот контент управляется Vue реактивностью. Изменения в редакторе будут синхронизированы с Vue состоянием.'
}

const addDynamicContent = () => {
  const newIndex = dynamicBlocks.value.length
  dynamicBlocks.value.push({
    title: `Новый блок ${newIndex + 1}`,
    content: `Содержимое нового блока ${newIndex + 1}.`
  })
  
  // Даем время Vue для рендеринга, затем обновляем ключи
  setTimeout(updateEditorKeys, 100)
}

const removeDynamicContent = () => {
  if (dynamicBlocks.value.length > 0) {
    dynamicBlocks.value.pop()
    setTimeout(updateEditorKeys, 100)
  }
}

const updateEditorKeys = () => {
  if (editor.value) {
    editorKeys.value = editor.value.getKeys()
  }
}

const getEditorText = (key: string) => {
  return editor.value?.getText(key) || ''
}

const saveAllChanges = () => {
  if (editor.value) {
    const keys = editor.value.getKeys()
    const data: Record<string, string> = {}
    
    keys.forEach(key => {
      const text = editor.value?.getText(key)
      if (text) {
        data[key] = text
      }
    })
    
    console.log('Все данные для сохранения:', data)
    // Здесь можно отправить данные на сервер
  }
}

const exportData = () => {
  if (editor.value) {
    const keys = editor.value.getKeys()
    const data: Record<string, string> = {}
    
    keys.forEach(key => {
      const text = editor.value?.getText(key)
      if (text) {
        data[key] = text
      }
    })
    
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = 'editor-data.json'
    a.click()
    
    URL.revokeObjectURL(url)
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;
@use 'sass:color';

.demo {
  padding: $p-4;
  background: linear-gradient(135deg, $bg-primary 0%, $bg-secondary 100%);
  min-height: 100vh;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
  }

  &__header {
    text-align: center;
    margin-bottom: $mb-5;
    padding: $p-5 0;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: $mb-3;
    background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__description {
    font-size: 1.2rem;
    color: $text-secondary;
    max-width: 600px;
    margin: 0 auto;
  }

  &__content {
    display: grid;
    gap: $p-5;
  }

  &__section {
    background: white;
    border-radius: 12px;
    padding: $p-5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &__section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: $mb-4;
    color: $text-primary;
  }

  &__example {
    border: 1px solid $text-muted;
    border-radius: 8px;
    padding: $p-4;
    background: $bg-secondary;
  }

  &__controls {
    margin-top: $mb-4;
    display: flex;
    gap: $p-3;
    flex-wrap: wrap;
  }

  &__btn {
    padding: $p-3 $p-4;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    background: $primary-color;
    color: white;

    &:hover {
      background: color.adjust($primary-color, $lightness: -10%);
      transform: translateY(-1px);
    }

    &--secondary {
      background: $secondary-color;
      
      &:hover {
        background: color.adjust($secondary-color, $lightness: -10%);
      }
    }

    &--primary {
      background: $accent-color;
      
      &:hover {
        background: color.adjust($accent-color, $lightness: -10%);
      }
    }
  }

  &__dynamic-block {
    margin-bottom: $mb-4;
    padding: $p-3;
    border: 1px solid $text-muted;
    border-radius: 6px;
    background: white;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__controls-panel {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: $p-4;
    align-items: start;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }

  &__control-group {
    h3 {
      margin-bottom: $mb-3;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  &__keys-list {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid $text-muted;
    border-radius: 6px;
    background: $bg-secondary;
  }

  &__key-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $p-2 $p-3;
    border-bottom: 1px solid $text-muted;

    &:last-child {
      border-bottom: none;
    }
  }

  &__key-name {
    font-weight: 500;
    color: $primary-color;
    font-family: monospace;
  }

  &__key-value {
    color: $text-secondary;
    font-size: 0.9rem;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style> 