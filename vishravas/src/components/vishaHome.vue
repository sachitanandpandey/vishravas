
<template>
    <v-app id="app">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-top justify-end>
                    <v-flex xs20 sm8 md4>
                        <v-row>
                            <v-col xs="6" class="d-flex justify-end">
                                <form @submit.prevent="submit">
                                    <v-btn rounded color="primary" dark type="submit">
                                        SignOut
                                    </v-btn>
                                </form>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import { reactive } from 'vue'
import router from '../router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'vishHome',

  setup () {
    const data = reactive({
      submit: ''
    })
    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        // ...
      } else {
        router.push('/')
      }
    })

    const submit = async () => {
      signOut(auth).then(() => {
        router.push('/')
      }).catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
    }

    return {
      data,
      submit
    }
  }
}
</script>

<style></style>
