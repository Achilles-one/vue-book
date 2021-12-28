import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Person from '../views/Person.vue'
import Book from '../views/Book.vue'
import Layout from '../layout/Layout.vue'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    // 重定向，自动跳转到user页面
    redirect:"/user",
    children: [
      {
        path: '/user',
        name: 'User',
        component: User
      },
      {
        path: '/book',
        name: 'Book',
        component: Book
      },
      {
        path: '/person',
        name: 'Person',
        component: Person
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
