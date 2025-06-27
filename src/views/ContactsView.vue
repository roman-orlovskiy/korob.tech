<template>
  <div class="contacts">
    <div class="container">
      <h1>Контакты</h1>
      <div class="contact-info">
        <div class="contact-item">
          <h3>Email</h3>
          <p>info@korob.tech</p>
        </div>
        <div class="contact-item">
          <h3>Телефон</h3>
          <p>+7 (XXX) XXX-XX-XX</p>
        </div>
        <div class="contact-item">
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
@import '@/assets/variables.scss';

.contacts {
  padding: $p-4;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: $mb-4;
  font-family: $font-family-primary;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $p-4;
}

.contact-item {
  background: $bg-primary;
  padding: $p-4;
  border-radius: $border-radius-xl;
  box-shadow: $shadow-md;
}

.contact-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: $text-primary;
  margin-bottom: $mb-2;
  font-family: $font-family-primary;
}

.contact-item p {
  font-size: 1.1rem;
  color: $text-secondary;
  margin: 0;
  font-family: $font-family-primary;
}
</style> 