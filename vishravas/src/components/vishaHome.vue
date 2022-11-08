
<template>
    <v-app id="app">
        <v-content>
            <v-container fluid fill-height>
                <v-row class="pa-md-6">
                    <v-card max-width="100%" height="100%" class="d-flex justify-space-around mb-6 center">
                        <v-container>
                            <v-row dense>
                                <v-col cols="20">
                                    <v-container>
                                        <h1>{{data.display.title}}</h1>
                                    <v-card max-width="100%" height="400" v-if="data.display.link">
                                        <iframe :src=data.display.link width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                                    </v-card>
                                    <v-card max-width="100%" height="400" v-else>
                                        <v-img :src=data.display.fullposter class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                            height="100%" width="100%">
                                        <v-row><v-col cols="20"><h1>{{data.display.status}}</h1></v-col></v-row>
                                        <v-row><v-col cols="20">{{data.display.desc}}</v-col></v-row>
                                        <v-row></v-row>
                                        </v-img>
                                    </v-card>
                                    </v-container>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                    <v-row>
                        <template>
                            <v-card max-width="400" class="mx-auto">

                                <v-container>
                                    <v-row dense>
                                        <v-col cols="12">
                                            <v-card color="#385F73" dark>
                                                <v-img :src=data.audilist[0].audition class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                            height="100%" width="100%" @click=audition()>
                                        <v-row><v-col cols="20"><h1>{{data.audilist[0].duration}}</h1></v-col></v-row>
                                        <v-row><v-col cols="20">{{data.audilist[0].desc}}</v-col></v-row>
                                        <v-row></v-row>
                                        </v-img>
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
                                <!-- <form @submit.prevent="submit"> -->
                                    <v-btn rounded color="primary" dark @click="profile()">
                                        {{data.username}}
                                    </v-btn>
                                <!-- </form> -->
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
                </v-row>
            </v-container>

        </v-content>
        <template>
            <v-container>
                <v-row class="text-h5 white--text font-italic">Premiering</v-row>
                <v-row>
                    <div v-for="item in data.premierlist" v-bind:key="item.id" class="pa-md-2">
                        <v-card max-width="200" height="300">
                            <v-img :src=item.listposter class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="300px" width="200px" @click="pupdate(item)">
                            </v-img>
                        </v-card>

                    </div>
                </v-row>
                <v-row class="text-h5 white--text font-italic">Projected</v-row>
                <v-row>
                    <div v-for="item in data.doclist" v-bind:key="item.id" class="pa-md-2">
                        <v-card max-width="200" height="300">
                            <v-img :src=item.listposter class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="300px" width="200px" @click="pupdate(item)">
                            </v-img>
                        </v-card>
                    </div>
                </v-row>
        </v-container>
        </template>
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
    </v-app>
</template>

<script>
import { reactive, onMounted, ref, computed } from 'vue'
import router from '../router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, where, query, doc, setDoc, getDocs } from 'firebase/firestore'
import { db } from '../main'
import store from '@/store/index.ts'

export default {
  name: 'vishHome',
  computed: { currentuser () { return this.$store.getters.getUser } },

  setup () {
    const data = reactive({
      submit: '',
      doclist: '',
      premierlist: '',
      audilist: '',
      display: '',
      username: '',
      currentuser: ''
    })
    const auth = getAuth()

    onMounted(async () => {
      const qDoclist = query(collection(db, 'projects'), where('status', '==', 'Projected'))
      const qPremierlist = query(collection(db, 'projects'), where('status', '==', 'Premiering'))
      const qProgresslist = query(collection(db, 'projects'), where('status', '==', 'InProgress'))

      const querySnapshot = await getDocs(qDoclist)
      data.doclist = querySnapshot.docs.map(doc => doc.data())
      const queryPlist = await getDocs(qPremierlist)
      data.premierlist = queryPlist.docs.map(doc => doc.data())
      data.display = data.premierlist[0]
      const queryFlist = await getDocs(qProgresslist)
      data.audilist = queryFlist.docs.map(doc => doc.data())
    })

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        data.username = user.displayName
        store.commit('setUser', { value: user.email })
        localStorage.setItem('vishuser', user.email)
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

    const pupdate = async (item) => {
      data.display = item
    }

    const profile = async () => {
      router.push('/profile')
    }

    const audition = async () => {
      router.push('/casting')
    }

    return {
      data,
      submit,
      pupdate,
      profile,
      audition
    }
  }
}
</script>

<style>

</style>
