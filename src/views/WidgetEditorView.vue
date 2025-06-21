<template>
  <div class="widget-editor">
    <div class="content">
      <h1 class="title">Виджет редактора</h1>
      <p class="description">
        Создавайте и настраивайте виджеты для ваших проектов
      </p>
      
      <div class="widget-preview">
        <div class="widget-card">
          <h3>Пример виджета</h3>
          <p>Здесь будет интерфейс редактора виджетов</p>
          <button class="gradient-btn">Создать виджет</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Widget editor logic will go here
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&family=Orbitron:wght@400;700;900&display=swap');

.widget-editor {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.content {
  text-align: center;
  color: white;
  max-width: 900px;
  width: 100%;
}

.title {
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
}

.widget-preview {
  margin-top: 2rem;
}

.widget-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.widget-card h3 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.widget-card p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.6;
}

.gradient-btn {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.gradient-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .widget-card {
    padding: 2rem;
  }
  
  .widget-card h3 {
    font-size: 1.5rem;
  }
  
  .widget-card p {
    font-size: 1rem;
  }
}
</style> 