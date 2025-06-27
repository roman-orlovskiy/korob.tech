<template>
  <div class="home">
    <div class="container">
      <div class="main-title">
        Сервисы и виджеты,<br>которые реально помогают сайтам
      </div>
      
      <div class="cards-container">
        <div class="item-card">
          <div class="card-content">
            <EditIcon />
            <div class="card-text">
              <h2>КОРОБ.Редактор</h2>
              <p>Мощный инструмент для управления контентом сайта</p>
            </div>
          </div>
        </div>

        <div class="item-card development">
          <div class="card-content">
            <RequestsIcon />
            <div class="card-text">
              <h2>КОРОБ.Заявки</h2>
              <p>Сбор заявок с сайта в телеграм</p>
              <span class="development-badge">В разработке</span>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <div class="cta-content">
          <div class="cta-text">Нужен виджет, бот или сайт?<br>Создадим под ваши задачи!</div>
          <a href="https://t.me/orlovskiy_rl" target="_blank">
            <Button variant="outline" size="lg">
              Написать в Telegram
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditIcon from '@/components/icons/EditIcon.vue'
import RequestsIcon from '@/components/icons/RequestsIcon.vue'
import Button from '@/components/Button.vue'

const openTelegram = () => {
  window.open('https://t.me/korob_tech', '_blank')
}
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

.cards-container {
  display: flex;
  gap: $p-4;
  justify-content: center;
  margin-top: $mt-5;
  flex-wrap: wrap;
}

.item-card {
  background: $bg-primary;
  padding: $p-5;
  border-radius: $border-radius-xl;
  box-shadow: $shadow-lg;
  max-width: 400px;
  flex: 1;
  min-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.item-card.development {
  opacity: 0.7;
  cursor: not-allowed;
  position: relative;
  background: linear-gradient(135deg, $bg-primary 0%, rgba($text-muted, 0.1) 100%);
}

.item-card.development:hover {
  transform: none;
  box-shadow: $shadow-lg;
}

.card-content {
  display: flex;
  align-items: center;
  gap: $p-4;
}

.card-text {
  text-align: left;
  flex: 1;
  position: relative;
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
  margin: 0 0 $mb-2 0;
  line-height: 1.5;
  font-family: $font-family-primary;
}

.development-badge {
  display: inline-block;
  background: $warning-color;
  color: $text-primary;
  font-size: 0.75rem;
  font-weight: 600;
  padding: $p-1 $p-2;
  border-radius: $border-radius;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: $font-family-primary;
}

.cta-section {
  background: $primary-color;
  border-radius: $border-radius-xl;
  padding: $p-5;
  margin-top: $mt-5;
  box-shadow: $shadow-lg;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 700;
  color: $text-primary;
  margin: 0 0 $mb-3 0;
  font-family: $font-family-primary;
  line-height: 1.3;
}

.cta-content p {
  font-size: 1.25rem;
  color: $text-primary;
  margin: 0 0 $mb-4 0;
  font-family: $font-family-primary;
  font-weight: 500;
}

.cta-text {
  font-size: 2rem;
  color: $text-primary;
  margin: 0 0 $mb-4 0;
}

@media (max-width: $breakpoint-md) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
  
  .item-card {
    max-width: 500px;
    width: 100%;
  }
  
  .card-content {
    flex-direction: column;
    text-align: center;
  }
  
  .card-text {
    text-align: center;
  }
  
  .cta-content h2 {
    font-size: 1.75rem;
  }
  
  .cta-content p {
    font-size: 1.125rem;
  }
}

@media (max-width: $breakpoint-sm) {
  .main-title {
    font-size: 2rem;
  }
  
  .item-card {
    padding: $p-4;
    min-width: 250px;
  }
  
  .cta-section {
    padding: $p-4;
  }
  
  .cta-content h2 {
    font-size: 1.5rem;
  }
  
  .cta-content p {
    font-size: 1rem;
  }
}
</style> 