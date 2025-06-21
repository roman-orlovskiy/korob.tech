import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WidgetEditorView from '@/views/WidgetEditorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/widget-editor',
      name: 'widget-editor',
      component: WidgetEditorView
    }
  ]
})

export default router 