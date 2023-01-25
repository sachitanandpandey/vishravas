<!-- <template>
    <v-container>
        <h1>This is an casting page</h1>
    </v-container>
  </template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CastingWorld',

  data: () => ({
  })
})
</script> -->

<template>
  <v-app id="app">
    <v-content>
      <v-container fluid fill-height>
        <v-row class="pa-md-6">
          <v-card color="#385F73" max-width="100%" height="100%" class="d-flex justify-space-around mb-6 center">
            <v-container>
              <v-row dense>
                <v-col cols="20">
                  <v-container>
                    <h1>Audition</h1>
                    <v-card max-width="100%" height="100%" class="mt-2 mb-2">
                      <v-container>
                        <v-row dense>
                          <v-col cols="12">
                            <v-card color="#385F73" dark>
                              <div v-for="cast in data.doclist[0].casting" v-bind:key="cast.id">

                                <v-card> <v-card class="ma-2" color="pink" label text-color="white" max-width="100%" height="100%">
                                  <v-row>
                                    <v-card class="ma-2"><v-h4 class="ma-2">{{cast.name}}</v-h4></v-card>
                                    <v-card class="ma-2"><v-h4 class="ma-2"></v-h4>Age:{{cast.age}}</v-card>
                                    <v-card class="ma-2"><v-h4 class="ma-2"></v-h4>Gender:{{cast.gender}}</v-card>
                                    <v-card class="ma-2"><v-h4 class="ma-2"></v-h4>ethnicity:{{cast.ethnicity}}</v-card>
                                    <v-btn color="#385F73" @click=showdetails(cast)>ShowMore</v-btn>
                                  </v-row>

                                  </v-card></v-card>

                              </div>
                              <div v-if="data.dialog===true">
                                <v-row>
                                  <v-col>
                                    <v-col class="d-flex" cols="12" sm="12">
                                      {{data.showdetails.name}}
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="12">
                                      {{data.showdetails.description}}
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="12">
                                      {{data.showdetails.age}}
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="12">
                                      {{data.showdetails.gender}}
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="12">
                                      {{data.showdetails.ethnicity}}
                                    </v-col>
                                    <v-col class="d-flex justify-end" cols="12" sm="12" @click=apply(data.showdetails)>
                                      <v-btn>
                                      Apply
                                    </v-btn>
                                    </v-col>
                                  </v-col>
                                </v-row>
                                <v-btn color="#385F73" @click=close()>Close</v-btn>
                              </div>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-container>

                    </v-card>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-row>
            <template>
              <v-card max-width="400" max-height="630px" class="mx-auto">
                <v-container>
                  <v-row dense>
                    <v-col cols="12">
                      <v-card max-width="100%" height="100%">
                        <div v-if="data.doclist[0].audition">
                          <v-img :src="data.doclist[0].audition" class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="100%" width="100%">

                          </v-img>
                        </div>
                        <div v-else>
                          <v-img src='../assets/ComingSoon.jpg' class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="100%" width="100%">

                          </v-img>
                        </div>

                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </template>
          </v-row>
          <v-layout align-top justify-end>
            <v-flex xs20 sm8 md4>
              <v-row>
                <v-col xs="6" class="d-flex justify-end">
                  <v-btn rounded color="primary" dark @click="home()">
                    Home
                  </v-btn>
                </v-col>
              </v-row>
            </v-flex>
          </v-layout>
        </v-row>
        <v-container>
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
      </v-container>

    </v-content>

  </v-app>
</template>

<script>
import { reactive, onMounted } from 'vue'
import router from '../router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, where, query, doc, setDoc, updateDoc, getDocs } from 'firebase/firestore'
import { db } from '../main'

export default {
  name: 'CastingWorld',

  setup () {
    const data = reactive({
      id: '',
      doclist: '',
      dialog: false
    })
    const auth = getAuth()

    const GenderOptions = ['Male', 'Female']
    const weekendOptions = ['Yes', 'No']

    onMounted(async () => {
      const qDoclist = query(collection(db, 'casting'), where('status', '==', 'open'))

      const querySnapshot = await getDocs(qDoclist)
      data.doclist = querySnapshot.docs.map(doc => doc.data())
      data.id = querySnapshot.docs.map(doc => doc.id)
    })

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
      })
    }

    const showdetails = async (item) => {
      if (data.dialog === true) {
        data.dialog = false
      }
      data.dialog = true
      data.showdetails = item
      const qOrderlist = query(collection(db, 'vishorder'), where('email', '==', localStorage.getItem('vishuser')), where('project', '==', data.display.title))
    }

    const close = async () => {
      data.dialog = false
      data.showdetails = ''
    }

    const apply = async (role) => {
      const email = localStorage.getItem('vishuser')
      const colRef = collection(db, 'applicants')
      const uniqueid = email + '_' + role.name + '_' + data.id[0]

      setDoc(doc(colRef, uniqueid), {
        project: data.id[0],
        role: role.name,
        applicant: doc(db, 'profile', email)

      })
    }

    const home = async () => {
      router.push('/home')
    }

    return {
      data,
      home,
      submit,
      showdetails,
      close,
      apply
    }
  }
}
</script>

<style>

</style>
