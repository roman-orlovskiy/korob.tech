<template>
  <div class="demo">
    <div class="demo__container">
      <header class="demo__header">
        <h1 class="demo__title">Демо минимального виджета</h1>
        <p class="demo__description">
          Кликайте по любому тексту ниже, чтобы отредактировать его. Используется только один JavaScript файл.
        </p>
      </header>

      <div class="demo__content">
        <!-- Статический HTML -->
        <section class="demo__section">
          <h2 class="demo__section-title">Статический HTML</h2>
          <div class="demo__example">
            <h3 data-widget="static-title">
              Заголовок страницы
            </h3>
            <p data-widget="static-content">
              Это пример статического HTML контента, который можно редактировать прямо на странице. 
              Просто кликните по любому тексту и начните печатать.
            </p>
          </div>
        </section>

        <!-- Vue реактивный контент -->
        <section class="demo__section">
          <h2 class="demo__section-title">Vue реактивный контент</h2>
          <div class="demo__example">
            <h3 data-widget="vue-title">
              {{ vueTitle }}
            </h3>
            <p data-widget="vue-content">
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
              <h4 :data-widget="`dynamic-title-${index}`">
                {{ block.title }}
              </h4>
              <p :data-widget="`dynamic-content-${index}`">
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
              <h3>Все ключи виджета:</h3>
              <ul class="demo__keys-list">
                <li v-for="key in widgetKeys" :key="key" class="demo__key-item">
                  <span class="demo__key-name">{{ key }}</span>
                  <span class="demo__key-value">{{ getWidgetText(key) }}</span>
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

// Состояние Vue контента
const vueTitle = ref('Vue реактивный заголовок')
const vueContent = ref('Этот контент управляется Vue реактивностью. Изменения в виджете будут синхронизированы с Vue состоянием.')

// Динамические блоки
const dynamicBlocks = ref([
  { title: 'Динамический блок 1', content: 'Содержимое первого динамического блока.' },
  { title: 'Динамический блок 2', content: 'Содержимое второго динамического блока.' }
])

// Ключи виджета
const widgetKeys = ref<string[]>([])

// Инициализация виджета
onMounted(() => {
  // Проверяем, что виджет загружен
  if (window.WidgetEditor) {
    // Инициализируем с кастомной конфигурацией
    window.WidgetEditor.init({
      autoSave: true,
      saveDelay: 1000,
      onSave: (key: string, value: string) => {
        console.log(`Сохранено: ${key} = ${value}`)
        // Синхронизация с Vue состоянием
        if (key === 'vue-title') {
          vueTitle.value = value
        } else if (key === 'vue-content') {
          vueContent.value = value
        }
      },
      onEdit: (key: string, value: string) => {
        console.log(`Редактируется: ${key} = ${value}`)
      }
    })

    // Обновляем список ключей
    updateWidgetKeys()
  } else {
    console.error('Виджет не загружен!')
  }
})

// Очистка при размонтировании
onUnmounted(() => {
  if (window.WidgetEditor) {
    window.WidgetEditor.destroy()
  }
})

// Методы
const resetVueContent = () => {
  vueTitle.value = 'Vue реактивный заголовок'
  vueContent.value = 'Этот контент управляется Vue реактивностью. Изменения в виджете будут синхронизированы с Vue состоянием.'
}

const addDynamicContent = () => {
  const newIndex = dynamicBlocks.value.length
  dynamicBlocks.value.push({
    title: `Новый блок ${newIndex + 1}`,
    content: `Содержимое нового блока ${newIndex + 1}.`
  })
  
  // Даем время Vue для рендеринга, затем обновляем ключи
  setTimeout(updateWidgetKeys, 100)
}

const removeDynamicContent = () => {
  if (dynamicBlocks.value.length > 0) {
    dynamicBlocks.value.pop()
    setTimeout(updateWidgetKeys, 100)
  }
}

const updateWidgetKeys = () => {
  if (window.WidgetEditor) {
    widgetKeys.value = window.WidgetEditor.getKeys()
  }
}

const getWidgetText = (key: string) => {
  return window.WidgetEditor?.getText(key) || ''
}

const saveAllChanges = () => {
  if (window.WidgetEditor) {
    const keys = window.WidgetEditor.getKeys()
    const data: Record<string, string> = {}
    
    keys.forEach(key => {
      const text = window.WidgetEditor?.getText(key)
      if (text) {
        data[key] = text
      }
    })
    
    console.log('Все данные для сохранения:', data)
    // Здесь можно отправить данные на сервер
  }
}

const exportData = () => {
  if (window.WidgetEditor) {
    const keys = window.WidgetEditor.getKeys()
    const data: Record<string, string> = {}
    
    keys.forEach(key => {
      const text = window.WidgetEditor?.getText(key)
      if (text) {
        data[key] = text
      }
    })
    
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = 'widget-data.json'
    a.click()
    
    URL.revokeObjectURL(url)
  }
}

// Типы для TypeScript
declare global {
  interface Window {
    WidgetEditor: {
      init: (config?: any) => void
      setText: (key: string, text: string) => void
      getText: (key: string) => string | null
      getKeys: () => string[]
      destroy: () => void
    }
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