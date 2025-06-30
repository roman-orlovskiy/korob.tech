<template>
  <div class="demo">
    <div class="demo__container">
      <header class="demo__header">
        <h1 class="demo__title">Демо виджета редактирования</h1>
        <p class="demo__subtitle">Кликните на любой текст ниже, чтобы отредактировать его</p>
      </header>

      <main class="demo__content">
        <section class="demo__section">
          <h2 class="demo__section-title">О нашей компании</h2>
          <p class="demo__text">
            Мы - инновационная компания, специализирующаяся на создании современных веб-решений. 
            Наша миссия - помогать бизнесу расти и развиваться в цифровом мире.
          </p>
          <p class="demo__text">
            С 2020 года мы успешно реализовали более 150 проектов для клиентов из различных отраслей. 
            Наша команда состоит из опытных разработчиков, дизайнеров и менеджеров проектов.
          </p>
        </section>

        <section class="demo__section">
          <h2 class="demo__section-title">Наши услуги</h2>
          <div class="demo__services">
            <div class="demo__service">
              <h3 class="demo__service-title">Веб-разработка</h3>
              <p class="demo__service-description">
                Создание современных веб-сайтов и веб-приложений с использованием передовых технологий.
              </p>
            </div>
            <div class="demo__service">
              <h3 class="demo__service-title">Мобильные приложения</h3>
              <p class="demo__service-description">
                Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android.
              </p>
            </div>
            <div class="demo__service">
              <h3 class="demo__service-title">UI/UX дизайн</h3>
              <p class="demo__service-description">
                Создание интуитивных и красивых интерфейсов, которые нравятся пользователям.
              </p>
            </div>
          </div>
        </section>

        <section class="demo__section">
          <h2 class="demo__section-title">Почему выбирают нас</h2>
          <ul class="demo__benefits">
            <li class="demo__benefit">Более 5 лет опыта в разработке</li>
            <li class="demo__benefit">Команда из 25+ специалистов</li>
            <li class="demo__benefit">150+ успешных проектов</li>
            <li class="demo__benefit">Гарантия качества и поддержка</li>
          </ul>
        </section>

        <section class="demo__section">
          <h2 class="demo__section-title">Контакты</h2>
          <div class="demo__contact-info">
            <p class="demo__contact-item">
              <strong>Адрес:</strong> ул. Примерная, 123, Москва, Россия
            </p>
            <p class="demo__contact-item">
              <strong>Телефон:</strong> +7 (495) 123-45-67
            </p>
            <p class="demo__contact-item">
              <strong>Email:</strong> info@example.com
            </p>
            <p class="demo__contact-item">
              <strong>Время работы:</strong> Пн-Пт 9:00-18:00
            </p>
          </div>
        </section>
      </main>

      <footer class="demo__footer">
        <p class="demo__footer-text">
          Это демо-страница для показа возможностей виджета редактирования. 
          Все тексты можно редактировать прямо на странице!
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// Демо страница для виджета редактирования
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.demo {
  padding: $p-4;
  background: $bg-primary;
  min-height: 100vh;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
  }

  &__header {
    text-align: center;
    padding: $p-5 0;
    margin-bottom: $mb-5;
    background: linear-gradient(135deg, $primary-color, $primary-dark);
    border-radius: $border-radius-xl;
    color: $text-primary;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: $mb-3;
    font-family: $font-family-primary;

    @media (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
  }

  &__subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    font-family: $font-family-primary;
  }

  &__content {
    margin-bottom: $mb-5;
  }

  &__section {
    margin-bottom: $mb-5;
    padding: $p-4;
    background: $bg-secondary;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-md;
  }

  &__section-title {
    font-size: 2rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $mb-3;
    font-family: $font-family-primary;
  }

  &__text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: $text-secondary;
    margin-bottom: $mb-3;
    font-family: $font-family-primary;
  }

  &__services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $p-4;
  }

  &__service {
    background: $bg-primary;
    padding: $p-4;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-sm;
  }

  &__service-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $mb-2;
    font-family: $font-family-primary;
  }

  &__service-description {
    color: $text-secondary;
    line-height: 1.6;
    font-family: $font-family-primary;
  }

  &__benefits {
    list-style: none;
    padding: 0;
  }

  &__benefit {
    font-size: 1.1rem;
    color: $text-secondary;
    padding: $p-2 0;
    border-bottom: 1px solid rgba($text-muted, 0.2);
    font-family: $font-family-primary;

    &:last-child {
      border-bottom: none;
    }
  }

  &__contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $p-3;
  }

  &__contact-item {
    font-size: 1.1rem;
    color: $text-secondary;
    font-family: $font-family-primary;
  }

  &__footer {
    text-align: center;
    padding: $p-4;
    background: $secondary-color;
    color: $text-light;
    border-radius: $border-radius-lg;
  }

  &__footer-text {
    font-size: 1rem;
    font-family: $font-family-primary;
  }
}
</style> 