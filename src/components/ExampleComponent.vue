<template>
  <div class="example-component">
    <h2 class="title">Пример компонента с SCSS</h2>
    <div class="content">
      <p>Этот компонент использует SCSS стили с переменными и миксинами.</p>
      <div class="buttons">
        <button class="btn btn--primary">Основная кнопка</button>
        <button class="btn btn--secondary">Вторичная кнопка</button>
        <button class="btn btn--success">Успех</button>
        <button class="btn btn--warning">Предупреждение</button>
        <button class="btn btn--error">Ошибка</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Логика компонента
</script>

<style lang="scss" scoped>
.example-component {
  padding: $p-4;
  background-color: $bg-secondary;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-sm;
  
  .title {
    color: $primary-color;
    margin-bottom: $mb-3;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .content {
    p {
      color: $text-secondary;
      margin-bottom: $mb-3;
      line-height: 1.6;
    }
    
    .buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      
      @include responsive(sm) {
        gap: 1.5rem;
      }
    }
  }
}
</style> 