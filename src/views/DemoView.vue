<template>
  <div class="demo">
    <div class="demo__container">
      <header class="demo__header">
        <div class="demo__badge">✨ Новинка</div>
        <h1 class="demo__title">
          <span class="demo__title-highlight">Универсальный</span>
          <br>редактор текста
        </h1>
        <p class="demo__description">
          Редактируйте любой текст на сайте одним кликом! 
          <br>Просто нажмите на желтые круги ✏️ и начните печатать.
        </p>
        <div class="demo__features">
          <div class="demo__feature">
            <div class="demo__feature-icon">🚀</div>
            <span>Мгновенное редактирование</span>
          </div>
          <div class="demo__feature">
            <div class="demo__feature-icon">💡</div>
            <span>Простая интеграция</span>
          </div>
          <div class="demo__feature">
            <div class="demo__feature-icon">⚡</div>
            <span>Автосохранение</span>
          </div>
        </div>
      </header>

      <div class="demo__content">
        <!-- Статический HTML -->
        <section class="demo__section">
          <div class="demo__section-header">
            <h2 class="demo__section-title">🎯 Попробуйте прямо сейчас</h2>
            <p class="demo__section-subtitle">Кликните на любой текст ниже и отредактируйте его</p>
          </div>
          <div class="demo__example">
            <h3 data-widget="static-title" class="demo__editable-title">
              Заголовок страницы
            </h3>
            <p data-widget="static-content" class="demo__editable-text">
              Это пример статического HTML контента, который можно редактировать прямо на странице. 
              Просто кликните по любому тексту и начните печатать. Изменения сохраняются автоматически!
            </p>
            <div class="demo__stats">
              <div class="demo__stat">
                <div class="demo__stat-number">2</div>
                <div class="demo__stat-label">редактируемых элемента</div>
              </div>
              <div class="demo__stat">
                <div class="demo__stat-number">1</div>
                <div class="demo__stat-label">клик для редактирования</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Дополнительные примеры -->
        <section class="demo__section">
          <div class="demo__section-header">
            <h2 class="demo__section-title">📝 Больше примеров</h2>
            <p class="demo__section-subtitle">Виджет работает с любым HTML контентом</p>
          </div>
          <div class="demo__examples-grid">
            <div class="demo__example-card">
              <h4 data-widget="card-title-1" class="demo__card-title">Заголовок карточки</h4>
              <p data-widget="card-text-1" class="demo__card-text">
                Описание карточки с полезной информацией, которую можно легко отредактировать.
              </p>
              <div class="demo__card-footer">
                <span data-widget="card-price-1" class="demo__card-price">₽99</span>
                <button class="demo__card-button">Купить</button>
              </div>
            </div>
            <div class="demo__example-card">
              <h4 data-widget="card-title-2" class="demo__card-title">Еще одна карточка</h4>
              <p data-widget="card-text-2" class="demo__card-text">
                Вторая карточка с другим контентом. Все тексты редактируются независимо.
              </p>
              <div class="demo__card-footer">
                <span data-widget="card-price-2" class="demo__card-price">₽149</span>
                <button class="demo__card-button">Заказать</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Преимущества -->
        <section class="demo__section">
          <div class="demo__section-header">
            <h2 class="demo__section-title">🌟 Почему выбирают нас</h2>
          </div>
          <div class="demo__benefits">
            <div class="demo__benefit">
              <div class="demo__benefit-icon">🎨</div>
              <h3>Красивый дизайн</h3>
              <p>Современный интерфейс с плавными анимациями и приятными визуальными эффектами</p>
            </div>
            <div class="demo__benefit">
              <div class="demo__benefit-icon">🔧</div>
              <h3>Простая настройка</h3>
              <p>Один скрипт и атрибут data-widget - всё готово к использованию</p>
            </div>
            <div class="demo__benefit">
              <div class="demo__benefit-icon">📱</div>
              <h3>Адаптивность</h3>
              <p>Отлично работает на всех устройствах - от мобильных до десктопов</p>
            </div>
            <div class="demo__benefit">
              <div class="demo__benefit-icon">⚡</div>
              <h3>Высокая скорость</h3>
              <p>Легкий код без зависимостей, загружается мгновенно</p>
            </div>
          </div>
        </section>

        <!-- CTA секция -->
        <section class="demo__section demo__section--cta">
          <div class="demo__cta-content">
            <h2 class="demo__cta-title">Готовы попробовать?</h2>
            <p class="demo__cta-text">
              Добавьте виджет на свой сайт и дайте пользователям возможность 
              редактировать контент в реальном времени
            </p>
            <div class="demo__cta-buttons">
              <button class="demo__cta-button demo__cta-button--primary">
                📥 Скачать виджет
              </button>
              <button class="demo__cta-button demo__cta-button--secondary">
                📚 Документация
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Минимальная настройка виджета
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;
@use 'sass:color';

.demo {
  padding: $p-4;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  &__header {
    text-align: center;
    margin-bottom: $mb-5;
    padding: $p-5 0;
  }

  &__badge {
    display: inline-block;
    background: linear-gradient(135deg, #ff6b6b, #ffa500);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: $mb-3;
    animation: pulse 2s infinite;
  }

  &__title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: $mb-3;
    line-height: 1.1;
    color: white;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &__title-highlight {
    background: linear-gradient(135deg, #f1df6f 0%, #ffd700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
  }

  &__description {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 700px;
    margin: 0 auto $mb-4;
    line-height: 1.6;
  }

  &__features {
    display: flex;
    justify-content: center;
    gap: $p-4;
    flex-wrap: wrap;
    margin-top: $mb-4;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    padding: 12px 20px;
    border-radius: 25px;
    color: white;
    font-weight: 500;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  &__feature:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &__feature-icon {
    font-size: 1.2rem;
  }

  &__content {
    display: grid;
    gap: $p-5;
  }

  &__section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: $p-5;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  &__section:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }

  &__section-header {
    text-align: center;
    margin-bottom: $mb-4;
  }

  &__section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: $mb-2;
    color: $text-primary;
  }

  &__section-subtitle {
    font-size: 1.1rem;
    color: $text-secondary;
    margin: 0;
  }

  &__example {
    border: 2px solid #e5e7eb;
    border-radius: 15px;
    padding: $p-5;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    position: relative;
    overflow: hidden;
  }

  &__example::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #f1df6f, #ffd700, #f1df6f);
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
  }

  &__editable-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: $mb-3;
    color: $text-primary;
    transition: all 0.3s ease;
  }

  &__editable-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: $text-secondary;
    margin-bottom: $mb-4;
  }

  &__stats {
    display: flex;
    gap: $p-4;
    justify-content: center;
    margin-top: $mb-4;
  }

  &__stat {
    text-align: center;
    padding: $p-3;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    min-width: 120px;
  }

  &__stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #f1df6f;
    margin-bottom: 4px;
  }

  &__stat-label {
    font-size: 0.9rem;
    color: $text-secondary;
    font-weight: 500;
  }

  &__examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $p-4;
  }

  &__example-card {
    background: white;
    border-radius: 15px;
    padding: $p-4;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
  }

  &__example-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  &__card-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: $mb-3;
    color: $text-primary;
  }

  &__card-text {
    font-size: 1rem;
    line-height: 1.6;
    color: $text-secondary;
    margin-bottom: $mb-3;
  }

  &__card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: $p-3;
    border-top: 1px solid #e5e7eb;
  }

  &__card-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f1df6f;
  }

  &__card-button {
    background: linear-gradient(135deg, #f1df6f, #ffd700);
    color: $text-primary;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  &__card-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(241, 223, 111, 0.4);
  }

  &__benefits {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $p-4;
  }

  &__benefit {
    text-align: center;
    padding: $p-4;
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  &__benefit:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  &__benefit-icon {
    font-size: 3rem;
    margin-bottom: $mb-3;
    display: block;
  }

  &__benefit h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: $mb-2;
    color: $text-primary;
  }

  &__benefit p {
    color: $text-secondary;
    line-height: 1.6;
  }

  &__section--cta {
    background: linear-gradient(135deg, #f1df6f 0%, #ffd700 100%);
    text-align: center;
    color: $text-primary;
  }

  &__cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: $mb-3;
    color: $text-primary;
  }

  &__cta-text {
    font-size: 1.2rem;
    margin-bottom: $mb-4;
    color: rgba(0, 0, 0, 0.8);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &__cta-buttons {
    display: flex;
    gap: $p-3;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__cta-button {
    padding: 12px 24px;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  &__cta-button--primary {
    background: white;
    color: $text-primary;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &__cta-button--primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  }

  &__cta-button--secondary {
    background: rgba(255, 255, 255, 0.2);
    color: $text-primary;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  &__cta-button--secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
}

// Анимации
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

// Адаптивность
@media (max-width: 768px) {
  .demo {
    &__title {
      font-size: 2.5rem;
    }

    &__description {
      font-size: 1.1rem;
    }

    &__features {
      flex-direction: column;
      align-items: center;
    }

    &__examples-grid {
      grid-template-columns: 1fr;
    }

    &__benefits {
      grid-template-columns: 1fr;
    }

    &__cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style> 