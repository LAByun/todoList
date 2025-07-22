import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
        {
      path: '/',
      name: 'home',
      component: () => import('../view/nav.vue'),
      children: [
        {
          path: '',
          name: 'myhome',
          component: () => import('../view/home.vue'),
        },{
          path: 'setting',
          name: 'setting',
          component: () => import('../view/setting.vue'),
        },{

          path: 'test',
          name: 'test',
          component: () => import('../view/test.vue'),
        }
      ]
    },

  ],
})

export default router
