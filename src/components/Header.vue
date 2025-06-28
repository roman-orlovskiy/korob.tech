<template>
  <header class="header">
    <div class="header__container">
      <!-- Логотип -->
      <div class="header__logo">
        <h1>КОРОБ</h1>
      </div>

      <!-- Бургер-меню -->
      <button class="header__burger-button" @click="toggleMenu" aria-label="Открыть меню">
        <BurgerIcon />
      </button>
    </div>

    <!-- Модальное окно -->
    <Transition name="modal">
      <div v-if="isMenuOpen" class="header__modal-overlay" @click="closeMenu">
        <div class="header__modal-content" @click.stop>
          <nav class="header__modal-nav">
            <ul class="header__nav-list">
              <li class="header__nav-item">
                <router-link to="/" class="header__nav-link" @click="closeMenu">
                  Главная
                </router-link>
              </li>
              <li class="header__nav-item">
                <router-link to="/widget-editor" class="header__nav-link" @click="closeMenu">
                  КОРОБ. Редактор
                </router-link>
              </li>
              <li class="header__nav-item">
                <router-link to="/contacts" class="header__nav-link" @click="closeMenu">
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
@use '@/assets/variables.scss' as *;

.header {
  background: rgba($bg-primary, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba($text-primary, 0.1);
  position: relative;
  z-index: $z-fixed;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
    padding: $p-3 $p-4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: $text-primary;
    margin: 0;
    letter-spacing: 0.1em;
    font-family: $font-family-primary;
  }

  &__burger-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: $p-2;
    border-radius: $border-radius-lg;
    transition: background-color 0.2s ease;
    color: $text-primary;

    &:hover {
      background-color: rgba($text-primary, 0.05);
    }
  }

  /* Модальное окно */
  &__modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba($bg-dark, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: $z-modal;
    height: 100vh;
  }

  &__modal-content {
    background: $bg-primary;
    border-radius: $border-radius-xl;
    padding: $p-5;
    box-shadow: $shadow-lg;
    max-width: 400px;
    width: 90%;
  }

  &__modal-nav {
    text-align: center;
  }

  &__nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__nav-item {
    margin-bottom: $mb-4;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__nav-link {
    display: block;
    font-size: 1.25rem;
    font-weight: 500;
    color: $text-primary;
    text-decoration: none;
    padding: $p-3 $p-3;
    border-radius: $border-radius-lg;
    transition: all 0.2s ease;
    font-family: $font-family-primary;

    &:hover {
      background-color: rgba($text-primary, 0.05);
      color: $text-primary;
    }

    &.router-link-active {
      background-color: $primary-color;
      color: $text-primary;
    }
  }
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

.modal-enter-active .header__modal-content,
.modal-leave-active .header__modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .header__modal-content,
.modal-leave-to .header__modal-content {
  transform: scale(0.9) translateY(-20px);
}
</style> 