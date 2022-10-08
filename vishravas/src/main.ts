import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDG68qLEt2WdP7HqG8xja4izwjYu9Y3EhM',
  authDomain: 'vishrava-616bc.firebaseapp.com',
  projectId: 'vishrava-616bc',
  storageBucket: 'vishrava-616bc.appspot.com',
  messagingSenderId: '49213770968',
  appId: '1:49213770968:web:3de77f366d0c904d1d1bad',
  measurementId: 'G-M43S1ME3MD'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
