<template>
  <div>
    Logged in
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div>
      <button @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

  export default {
    data() {
      return {
        loggedIn: false
      }
    },
    methods: {
      async signOut() {
        try {
          const data = await firebase.auth().signOut()
          console.log(data)
          this.$router.replace({name: 'login'})
        } catch (error) {
          console.log(error)
        }
      }
    },
    created() {
      firebase.auth().onAuthStateChanged(user => {
        this.loggedIn = !!user
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>