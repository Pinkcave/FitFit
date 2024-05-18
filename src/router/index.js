import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import TweetsView from "@/views/TweetsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tweets',
      component: TweetsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //登录页面
    {
      // path:'/login',
      path:"/login",
      name:'LogInView',
      component:LoginView,
      meta: { requiresAuth: false }
    },
    //注册页面
    {
      path:'/SignUp',
      name:'SignUpView',
      component:SignUpView,
      meta: { requiresAuth: false }
    },
  ]
})

export default router
