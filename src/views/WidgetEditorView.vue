<template>
  <div class="widget-editor">
    <div class="widget-editor__container">
      <!-- Hero секция -->
      <section class="widget-editor__hero">
        <div class="widget-editor__hero-content">
          <h1 class="widget-editor__hero-title">
            Редактируйте контент сайта <span class="widget-editor__hero-accent">без разработчиков</span>
          </h1>
          <p class="widget-editor__hero-description">
            Мощный виджет для мгновенного редактирования текста на любом сайте
          </p>
          <div class="widget-editor__hero-buttons">
            <router-link to="/demo" class="widget-editor__btn widget-editor__btn--primary">Попробовать бесплатно</router-link>
            <button class="widget-editor__btn widget-editor__btn--secondary">Документация</button>
          </div>
        </div>
        <div class="widget-editor__hero-visual">
          <div class="widget-editor__code-preview">
            <div class="widget-editor__code-header">
              <span class="widget-editor__code-dot widget-editor__code-dot--red"></span>
              <span class="widget-editor__code-dot widget-editor__code-dot--yellow"></span>
              <span class="widget-editor__code-dot widget-editor__code-dot--green"></span>
            </div>
            <pre class="widget-editor__code-content"><code>&lt;script src="https://korob.tech/widgets/editor/v1.0.5/widget.js"&gt;<br>&lt;/script&gt;
&lt;div data-widget="Мой ключ"&gt;
  <i>Изначальный</i> <b>контент</b>, который можно изменить
&lt;/div&gt;</code></pre>
            <div class="widget-editor__live-demo">
              <h3>Живой пример:</h3>
              <div
                data-widget="Мой ключ" class="widget-editor__editable-text"
                v-html="'<i>Изначальный</i> <b>контент</b>, который можно изменить'"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Преимущества -->
      <section class="widget-editor__features">
        <h2 class="widget-editor__section-title">Почему выбирают наш виджет</h2>
        <div class="widget-editor__features-grid">
          <div class="widget-editor__feature">
            <div class="widget-editor__feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="widget-editor__feature-title">Универсальность</h3>
            <p class="widget-editor__feature-description">
              Работает с Vue.js, React и обычными HTML. Можно подключить на любые сайты
            </p>
          </div>
          
          <div class="widget-editor__feature">
            <div class="widget-editor__feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <h3 class="widget-editor__feature-title">Простота настройки</h3>
            <p class="widget-editor__feature-description">
              Подключите один раз, разметьте элементы и редактируйте контент в реальном времени.
            </p>
          </div>
          
          <div class="widget-editor__feature">
            <div class="widget-editor__feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 class="widget-editor__feature-title">Экономия бюджета</h3>
            <p class="widget-editor__feature-description">
              Больше не нужно платить разработчикам за правки текстов. Редактируйте сами!
            </p>
          </div>
        </div>
      </section>

      <!-- Как это работает -->
      <section class="widget-editor__how-it-works">
        <h2 class="widget-editor__section-title">Как это работает</h2>
        <div class="widget-editor__steps">
          <div class="widget-editor__step">
            <div class="widget-editor__step-number">1</div>
            <h3 class="widget-editor__step-title">Подключите виджет</h3>
            <p class="widget-editor__step-description">
              Добавьте один JavaScript файл на ваш сайт
            </p>
          </div>
          
          <div class="widget-editor__step">
            <div class="widget-editor__step-number">2</div>
            <h3 class="widget-editor__step-title">Разметьте элементы</h3>
            <p class="widget-editor__step-description">
              Добавьте атрибуты к элементам, которые хотите редактировать
            </p>
          </div>
          
          <div class="widget-editor__step">
            <div class="widget-editor__step-number">3</div>
            <h3 class="widget-editor__step-title">Редактируйте контент</h3>
            <p class="widget-editor__step-description">
              Кликайте по элементам и изменяйте текст прямо на сайте
            </p>
          </div>
        </div>
      </section>

      <!-- Примеры использования -->
      <section class="widget-editor__examples">
        <h2 class="widget-editor__section-title">Примеры использования</h2>
        <div class="widget-editor__examples-grid">
          <div class="widget-editor__example">
            <div class="widget-editor__example-header">
              <h3 class="widget-editor__example-title">Vue.js</h3>
            </div>
            <div class="widget-editor__example-content">
              <pre class="widget-editor__example-code" v-pre><code>&lt;template&gt;
  &lt;div data-widget="editable"&gt;
    {{ content }}
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
          
          <div class="widget-editor__example">
            <div class="widget-editor__example-header">
              <h3 class="widget-editor__example-title">React</h3>
            </div>
            <div class="widget-editor__example-content">
              <pre class="widget-editor__example-code"><code>function Component() {
  return (
    &lt;div data-widget="editable"&gt;
      {content}
    &lt;/div&gt;
  );
}</code></pre>
            </div>
          </div>
          
          <div class="widget-editor__example">
            <div class="widget-editor__example-header">
              <h3 class="widget-editor__example-title">HTML</h3>
            </div>
            <div class="widget-editor__example-content">
              <pre class="widget-editor__example-code"><code>&lt;div data-widget="editable"&gt;
  Статический контент
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA секция -->
      <section class="widget-editor__cta">
        <div class="widget-editor__cta-content">
          <h2 class="widget-editor__cta-title">Готовы начать?</h2>
          <p class="widget-editor__cta-description">
            Подключите виджет за 5 минут и получите полный контроль над контентом вашего сайта
          </p>
          <router-link to="/demo" class="widget-editor__btn widget-editor__btn--primary widget-editor__btn--large">
            Начать бесплатно
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use '@/assets/variables.scss' as *;

.widget-editor {
  padding: $p-4;
  background: linear-gradient(135deg, $bg-primary 0%, $bg-secondary 100%);
  min-height: 100vh;

  &__container {
    max-width: $breakpoint-xl;
    margin: 0 auto;
  }

  // Hero секция
  &__hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $p-5;
    align-items: center;
    padding: $p-5 0;
    margin-bottom: $mb-5;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  &__hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: $text-primary;
    margin-bottom: $mb-3;
    font-family: $font-family-primary;
    line-height: 1.2;

    @media (max-width: $breakpoint-md) {
      font-size: 2.5rem;
    }
  }

  &__hero-accent {
    color: $primary-color;
    background: linear-gradient(45deg, $primary-color, $primary-dark);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__hero-description {
    font-size: 1.25rem;
    color: $text-secondary;
    line-height: 1.6;
    margin-bottom: $mb-4;
    font-family: $font-family-primary;
  }

  &__hero-buttons {
    display: flex;
    gap: $p-3;
    flex-wrap: wrap;

    @media (max-width: $breakpoint-md) {
      justify-content: center;
    }
  }

  &__hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__code-preview {
    background: $bg-dark;
    border-radius: $border-radius-lg;
    overflow: hidden;
    box-shadow: $shadow-lg;
    max-width: 600px;
    width: 100%;
  }

  &__code-header {
    background: $secondary-color;
    padding: $p-2;
    display: flex;
    gap: $p-1;
  }

  &__code-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &--red { background: $error-color; }
    &--yellow { background: $warning-color; }
    &--green { background: $success-color; }
  }

  &__code-content {
    padding: $p-4;
    margin: 0;
    color: $text-light;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  &__live-demo {
    margin-top: $p-4;
    padding: $p-4;
    background: $bg-primary;
    border-radius: $border-radius-lg;
    border: 2px solid $secondary-color;

    h3 {
      color: $text-primary;
      margin-bottom: $mb-3;
      font-family: $font-family-primary;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  &__editable-text {
    padding: $p-3;
    background: $bg-secondary;
    border-radius: $border-radius;
    color: $text-primary;
    font-family: $font-family-primary;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  // Кнопки
  &__btn {
    padding: $p-3 $p-4;
    border: none;
    border-radius: $border-radius-lg;
    font-family: $font-family-primary;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;

    &--primary {
      background: $primary-color;
      color: $text-primary;

      &:hover {
        background: $primary-dark;
        transform: translateY(-2px);
        box-shadow: $shadow-md;
      }
    }

    &--secondary {
      background: transparent;
      color: $text-primary;
      border: 2px solid $secondary-color;

      &:hover {
        background: $secondary-color;
        color: $text-light;
        transform: translateY(-2px);
      }
    }

    &--large {
      padding: $p-4 $p-5;
      font-size: 1.1rem;
    }
  }

  // Секции
  &__section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: $text-primary;
    text-align: center;
    margin-bottom: $mb-5;
    font-family: $font-family-primary;

    @media (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
  }

  // Преимущества
  &__features {
    padding: $p-5 0;
    margin-bottom: $mb-5;
  }

  &__features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $p-4;
  }

  &__feature {
    background: $bg-primary;
    padding: $p-4;
    border-radius: $border-radius-xl;
    box-shadow: $shadow-md;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: $shadow-lg;
    }
  }

  &__feature-icon {
    color: $primary-color;
    margin-bottom: $mb-3;
  }

  &__feature-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $mb-2;
    font-family: $font-family-primary;
  }

  &__feature-description {
    color: $text-secondary;
    line-height: 1.6;
    font-family: $font-family-primary;
  }

  // Как это работает
  &__how-it-works {
    padding: $p-5 0;
    margin-bottom: $mb-5;
  }

  &__steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $p-4;
  }

  &__step {
    text-align: center;
    padding: $p-4;
  }

  &__step-number {
    width: 60px;
    height: 60px;
    background: $primary-color;
    color: $text-primary;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto $mb-3;
    font-family: $font-family-primary;
  }

  &__step-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $mb-2;
    font-family: $font-family-primary;
  }

  &__step-description {
    color: $text-secondary;
    line-height: 1.6;
    font-family: $font-family-primary;
  }

  // Примеры
  &__examples {
    padding: $p-5 0;
    margin-bottom: $mb-5;
  }

  &__examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $p-4;
  }

  &__example {
    background: $bg-primary;
    border-radius: $border-radius-xl;
    overflow: hidden;
    box-shadow: $shadow-md;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: $shadow-lg;
    }
  }

  &__example-header {
    background: $secondary-color;
    color: $text-light;
    padding: $p-3;
  }

  &__example-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    font-family: $font-family-primary;
  }

  &__example-content {
    padding: $p-3;
  }

  &__example-code {
    background: $bg-dark;
    color: $text-light;
    padding: $p-3;
    border-radius: $border-radius;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0;
    overflow-x: auto;
  }

  // CTA секция
  &__cta {
    background: linear-gradient(135deg, $primary-color, $primary-dark);
    padding: $p-5;
    border-radius: $border-radius-xl;
    text-align: center;
    margin-top: $mt-5;
  }

  &__cta-content {
    max-width: 600px;
    margin: 0 auto;
  }

  &__cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: $text-primary;
    margin-bottom: $mb-3;
    font-family: $font-family-primary;

    @media (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
  }

  &__cta-description {
    font-size: 1.1rem;
    color: $text-primary;
    line-height: 1.6;
    margin-bottom: $mb-4;
    font-family: $font-family-primary;
  }
}
</style> 