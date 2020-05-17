<template>
  <div>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent='search'>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model='username' placeholder='Enter a github username'/>
      </div>
      </form>
      </div>
    </div>
    <p v-if='data.name && data.location'>
      {{ data.name }} ({{ data.login }}) is from
      {{ data.location }}
    </p>
    <p v-else>{{ errorMsg }}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: 'ApiGitHub',
  data () {
    return {
      username: '',
      data: [],
      errorMsg: ''
    }
  },
  methods: {
    search () {
      const api = 'https://api.github.com/users/' + this.username
      Vue.axios
        .get(api)
        .then(response => {
          this.data = response.data
        })
        .catch(error => {
          this.errorMsg = 'No user or no location'
          this.data = []
          console.log(error)
        })
    }
  }
}
</script>
