<template>
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      Login
      <div class="email"><input type="email" v-model="email" placeholder="email" /></div>
      <div class="password"><input type="password" v-model="password" placeholder="password" /></div>
      <button type="submit">Login</button>
    </form>
    <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth';
  export default {
   data() {
     return {
       email: '',
       password: '',
       error: ''
     }
   },
   methods: {
     async pressed() {
       try {
         const data = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
         console.log(data)
         this.$router.replace({name: 'secret'})
       } catch (error) {
         console.log(error)
       }
     }
   } 
  }
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size:21px
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>