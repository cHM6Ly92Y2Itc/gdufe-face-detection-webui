import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/detection-view',
      name: 'detection',
      component: () => import('@/views/FaceDetection.vue')
    },
    {
      path: '/face-list-view',
      name: 'facelist',
      component: () => import('@/views/FaceList.vue')
    },
    {
      path: '/',
      redirect: { name: 'detection' }
    }
  ]
})
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

export default router
