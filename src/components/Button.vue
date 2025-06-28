<template>
  <button 
    :class="['button', `button--${variant}`, `button--${size}`]" 
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

defineEmits<{
  click: []
}>()
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;
@use 'sass:color';

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: $border-radius-lg;
  font-family: $font-family-primary;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    transform: translateY(-1px);
  }
  
  &:not(:disabled):active {
    transform: translateY(0);
  }

  // Размеры
  &--sm {
    padding: $p-2 $p-3;
    font-size: 0.875rem;
  }

  &--md {
    padding: $p-3 $p-4;
    font-size: 1rem;
  }

  &--lg {
    padding: $p-4 $p-5;
    font-size: 1.125rem;
  }

  // Варианты
  &--primary {
    background-color: $primary-color;
    color: $text-primary;
    
    &:not(:disabled):hover {
      background-color: color.adjust($primary-color, $lightness: -5%);
      box-shadow: $shadow-md;
    }
  }

  &--secondary {
    background-color: $secondary-color;
    color: $text-light;
    
    &:not(:disabled):hover {
      background-color: $secondary-light;
      box-shadow: $shadow-md;
    }
  }

  &--outline {
    background-color: transparent;
    color: $text-primary;
    border: 2px solid $text-primary;
    
    &:not(:disabled):hover {
      background-color: $text-primary;
      color: $bg-primary;
      box-shadow: $shadow-md;
    }
  }

  &--ghost {
    background-color: transparent;
    color: $text-primary;
    
    &:not(:disabled):hover {
      background-color: rgba($text-primary, 0.1);
    }
  }
}
</style> 