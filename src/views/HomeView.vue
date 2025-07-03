<template>
  <div class="home">
    <div class="home__container">
      <div class="home__main-title">
        Сервисы и виджеты,<br>которые реально помогают сайтам
      </div>
      
      <div class="home__cards-container">
        <router-link to="/widget-editor" class="home__item-card home__item-card--link">
          <div class="home__card-content">
            <EditIcon />
            <div class="home__card-text">
              <h2>КОРОБ.Редактор</h2>
              <p>Мощный инструмент для управления контентом сайта</p>
            </div>
          </div>
        </router-link>

        <div class="home__item-card home__item-card--development">
          <div class="home__card-content">
            <RequestsIcon />
            <div class="home__card-text">
              <h2>КОРОБ.Заявки</h2>
              <p>Сбор заявок с сайта в телеграм</p>
              <span class="home__development-badge">В разработке</span>
            </div>
          </div>
        </div>
      </div>

      <div class="home__cta-section">
        <div class="home__cta-content">
          <div class="home__cta-text">Нужен виджет, бот или сайт?<br>Создадим под ваши задачи!</div>
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
@use '@/assets/variables.scss' as *;

.home {
  padding: $p-4;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
    text-align: center;
  }

  &__main-title {
    font-size: 3.5rem;
    color: $text-primary;
    line-height: 1.2;
    margin-top: $p-5;
    letter-spacing: -0.02em;
    font-family: $font-family-primary;
  }

  &__cards-container {
    display: flex;
    gap: $p-4;
    justify-content: center;
    margin-top: $mt-5;
    flex-wrap: wrap;
  }

  &__item-card {
    background: $bg-primary;
    padding: $p-5;
    border-radius: $border-radius-xl;
    box-shadow: $shadow-lg;
    max-width: 400px;
    flex: 1;
    min-width: 300px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }

    &--development {
      opacity: 0.7;
      cursor: not-allowed;
      position: relative;
      background: linear-gradient(135deg, $bg-primary 0%, rgba($text-muted, 0.1) 100%);

      &:hover {
        transform: none;
        box-shadow: $shadow-lg;
      }
    }

    &--link {
      text-decoration: none;
      color: inherit;
      display: block;
    }
  }

  &__card-content {
    display: flex;
    align-items: center;
    gap: $p-4;
  }

  &__card-text {
    text-align: left;
    flex: 1;
    position: relative;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: $text-primary;
      margin: 0 0 $mb-2 0;
      font-family: $font-family-primary;
    }

    p {
      font-size: 1rem;
      color: $text-secondary;
      margin: 0 0 $mb-2 0;
      line-height: 1.5;
      font-family: $font-family-primary;
    }
  }

  &__development-badge {
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

  &__cta-section {
    background: $primary-color;
    border-radius: $border-radius-xl;
    padding: $p-5;
    margin-top: $mt-5;
    box-shadow: $shadow-lg;
  }

  &__cta-content {
    max-width: 600px;
    margin: 0 auto;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: $text-primary;
      margin: 0 0 $mb-3 0;
      font-family: $font-family-primary;
      line-height: 1.3;
    }

    p {
      font-size: 1.25rem;
      color: $text-primary;
      margin: 0 0 $mb-4 0;
      font-family: $font-family-primary;
      font-weight: 500;
    }
  }

  &__cta-text {
    font-size: 2rem;
    color: $text-primary;
    margin: 0 0 $mb-4 0;
  }

  @media (max-width: $breakpoint-md) {
    &__main-title {
      font-size: 2.5rem;
    }
    
    &__cards-container {
      flex-direction: column;
      align-items: center;
    }
    
    &__item-card {
      max-width: 500px;
      width: 100%;
    }
    
    &__card-content {
      flex-direction: column;
      text-align: center;
    }
    
    &__card-text {
      text-align: center;
    }
    
    &__cta-content h2 {
      font-size: 1.75rem;
    }
    
    &__cta-content p {
      font-size: 1.125rem;
    }
  }

  @media (max-width: $breakpoint-sm) {
    &__main-title {
      font-size: 2rem;
    }
    
    &__item-card {
      padding: $p-4;
      min-width: 250px;
    }
    
    &__cta-section {
      padding: $p-4;
    }
    
    &__cta-content h2 {
      font-size: 1.5rem;
    }
    
    &__cta-content p {
      font-size: 1rem;
    }
  }
}
</style> 