<template>
  <div class="requests-icon">
    <svg
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Иконка телеграма -->
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
// Компонент иконки заявок
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.requests-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: $primary-color;
  border-radius: 50%;
  color: $text-primary;
  box-shadow: $shadow-md;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.requests-icon:hover {
  transform: scale(1.05);
  box-shadow: $shadow-lg;
}
</style> 