import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const firebaseConfig = {
  // configurações do firebase
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

