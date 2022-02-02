import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import FirstPage from './views/FirstPage.vue'
import SecondPage from './views/SecondPage.vue'
import ThirdPage from './views/ThirdPage.vue'
import RenderSearch from './views/FirstPage.vue'
import RenderSearch2 from './views/ThirdPage.vue'
import RenderSearch3 from './views/SecondPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage,
      path: '/'
    },
    {
      component: FirstPage,
      path: '/first'
    },
    {
      component: SecondPage,
      path: '/second'
    },
    {
      component: ThirdPage,
      path: '/third'
    },
    {
      component: RenderSearch,
      path: '/id/:id?/'
    },
    {
      component: RenderSearch2,
      path: '/thisid/:id?/'
    },
    {
      component: RenderSearch3,
      path: '/thatid/:id?/'
    }
  ]
})
