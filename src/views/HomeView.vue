<template>
  <div class="home">
    <div class="container">
      <div class="main-title">
        Сервисы и виджеты,<br>которые реально помогают сайтам
      </div>
      
      <div class="editor-card">
        <div class="card-content">
          <EditIcon />
          <div class="card-text">
            <h2>КОРОБ.Редактор</h2>
            <p>Мощный инструмент для создания и редактирования виджетов</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditIcon from '@/components/icons/EditIcon.vue'
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.home {
  padding: $p-4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  text-align: center;
}

.main-title {
  font-size: 3.5rem;
  color: $text-primary;
  line-height: 1.2;
  margin-top: $p-5;
  letter-spacing: -0.02em;
  font-family: $font-family-primary;
}

.editor-card {
  background: $bg-primary;
  padding: $p-5;
  border-radius: $border-radius-xl;
  box-shadow: $shadow-lg;
  margin-top: $mt-5;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.editor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.card-content {
  display: flex;
  align-items: center;
  gap: $p-4;
}

.card-text {
  text-align: left;
  flex: 1;
}

.card-text h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $mb-2 0;
  font-family: $font-family-primary;
}

.card-text p {
  font-size: 1rem;
  color: $text-secondary;
  margin: 0;
  line-height: 1.5;
  font-family: $font-family-primary;
}

@media (max-width: $breakpoint-md) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .card-content {
    flex-direction: column;
    text-align: center;
  }
  
  .card-text {
    text-align: center;
  }
}

@media (max-width: $breakpoint-sm) {
  .main-title {
    font-size: 2rem;
  }
  
  .editor-card {
    padding: $p-4;
  }
}
</style> 