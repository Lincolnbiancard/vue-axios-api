import Vue from 'vue'
import Router from 'vue-router'
import ApiGitHub from '@/components/ApiGitHub'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ApiGitHub',
      component: ApiGitHub
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    }
  ]
})
