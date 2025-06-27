<template>
  <header class="header">
    <div class="header-container">
      <!-- Логотип -->
      <div class="logo">
        <h1>КОРОБ</h1>
      </div>

      <!-- Бургер-меню -->
      <button class="burger-button" @click="toggleMenu" aria-label="Открыть меню">
        <BurgerIcon />
      </button>
    </div>

    <!-- Модальное окно -->
    <Transition name="modal">
      <div v-if="isMenuOpen" class="modal-overlay" @click="closeMenu">
        <div class="modal-content" @click.stop>
          <nav class="modal-nav">
            <ul class="nav-list">
              <li class="nav-item">
                <router-link to="/" class="nav-link" @click="closeMenu">
                  Главная
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/widget-editor" class="nav-link" @click="closeMenu">
                  КОРОБ. Редактор
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contacts" class="nav-link" @click="closeMenu">
                  Контакты
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BurgerIcon from './icons/BurgerIcon.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped lang="scss">
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  letter-spacing: 0.1em;
}

.burger-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  color: #333;
}

.burger-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  height: 100vh;
}

.modal-content {
  background: white;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
}

.modal-nav {
  text-align: center;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 1.5rem;
}

.nav-item:last-child {
  margin-bottom: 0;
}

.nav-link {
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #000;
}

.nav-link.router-link-active {
  background-color: $primary-color;
}

/* Анимации */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9) translateY(-20px);
}
</style> 