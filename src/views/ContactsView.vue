<template>
  <div class="contacts">
    <div class="contacts__container">
      <h1 class="contacts__title">Контакты</h1>
      <div class="contacts__contact-info">
        <div class="contacts__contact-item">
          <h3>Email</h3>
          <p>info@korob.tech</p>
        </div>
        <div class="contacts__contact-item">
          <h3>Телефон</h3>
          <p>+7 (XXX) XXX-XX-XX</p>
        </div>
        <div class="contacts__contact-item">
          <h3>Адрес</h3>
          <p>г. Москва, ул. Примерная, д. 1</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Страница контактов
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.contacts {
  padding: $p-4;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    color: $text-primary;
    margin-bottom: $mb-4;
    font-family: $font-family-primary;
  }

  &__contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $p-4;
  }

  &__contact-item {
    background: $bg-primary;
    padding: $p-4;
    border-radius: $border-radius-xl;
    box-shadow: $shadow-md;

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: $text-primary;
      margin-bottom: $mb-2;
      font-family: $font-family-primary;
    }

    p {
      font-size: 1.1rem;
      color: $text-secondary;
      margin: 0;
      font-family: $font-family-primary;
    }
  }
}
</style> 