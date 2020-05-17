<template>
  <div>
    <table class='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Id</th>
          <th scope='col'>Title</th>
          <th scope='col'>Message</th>
        </tr>
      </thead>
      <tbody v-if="posts && posts.length">
        <tr v-for='post in posts' :key="post.id">
          <th scope='row'></th>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>

    <ul v-if="errors && errors.length">
      <li v-for='error in errors' :key="error.message">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: 'Posts',
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created () {
    const api = 'http://localhost:3000/posts'
    Vue.axios
      .get(api)
      .then(response => {
        this.posts = response.data
      })
      .catch(error => {
        this.errors.push(error)
      })
  }
}
</script>
