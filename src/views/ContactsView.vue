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

<style scoped>
.contacts {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-item {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.contact-item p {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}
</style> 