import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import CourseView from '@/views/CourseView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //课程报名
    {
      path:"/",
      name:'course',
      component:CourseView,
      meta: { requiresAuth: false }
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
