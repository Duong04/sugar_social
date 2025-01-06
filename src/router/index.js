import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/Home/HomeView.vue';
import MasterLayout from '@/views/layouts/MasterLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MasterLayout,
      children: [
        {
          path: '/',
          component: HomeViewVue,
          meta: {
            title: 'Sugar Dev',
          }
        }
      ]
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'Sugar Dev';
  next();
});

export default router
