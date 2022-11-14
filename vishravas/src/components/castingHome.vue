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
                    <v-card color="#385F73" max-width="100%" height="100%"
                        class="d-flex justify-space-around mb-6 center">
                        <v-container>
                            <v-row dense>
                                <v-col cols="20">
                                    <v-container>
                                        <h1>Audition</h1>
                                        <v-card max-width="800px" height="500px" class="mt-2 mb-2">
                                            <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h4">
              Page is under construction
            </v-card-title>
            <!--
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Listen Now
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
                                            <!-- <form @submit.prevent="submit">
                                                <v-row>
                                                    <v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.name" label='Name'
                                                                class="form-control mt-2 ml-2 mr-2" placeholder="Name"
                                                                required id="ipname">
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.age" type="number" defaut='0'
                                                                label='Age' class="form-control mt-2 ml-2 mr-2"
                                                                placeholder="Age 00" required id="ipage">
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.height" type="number" defaut='0'
                                                                label='Height' class="form-control mt-2 ml-2 mr-2"
                                                                placeholder="Height Cm 00" required id="ipage">
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <v-textarea v-model="data.aboutme" filled auto-grow
                                                                label="Aboutme" rows="4" row-height="30" shaped
                                                                class="form-control mt-2 ml-2 mr-2"></v-textarea>
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.insta" label='Instagram url'
                                                                class="form-control mt-2 ml-2 mr-2"
                                                                placeholder="Instagram" required id="ip1">
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.showreel" label='Showreel url'
                                                                class="form-control mt-2 ml-2 mr-2"
                                                                placeholder="Showreel" id="ip1">
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.whtapp" label='whatsapp'
                                                                class="form-control mt-2 ml-2 mr-2"
                                                                placeholder="Whatsapp" id="ip1">
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.language" label='Language'
                                                                class="form-control mt-2 ml-2 mr-2 mb-1"
                                                                placeholder="Hindi, Urdu, English, Gujrati, Marathi, Punjabi, Tamil, Telgu"
                                                                required id="ip1">
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <input v-model="data.location" label='Location'
                                                                class="form-control mt-2 ml-2 mr-2 mb-1"
                                                                placeholder="Available in London , Reading, " required
                                                                id="ip1">
                                                        </v-col>

                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <v-select v-model="data.gender" :items="GenderOptions"
                                                                label="Gender" solo>
                                                            </v-select>
                                                        </v-col>
                                                        <v-col class="d-flex" cols="12" sm="12">
                                                            <v-select v-model="data.weekend" :items="weekendOptions"
                                                                label="Avaiable on Weekend" solo>
                                                            </v-select>
                                                        </v-col>
                                                    </v-col>
                                                </v-row>
                                            </form>
                                            <v-btn rounded color="primary" class="mt-2 ml-2 mr-2 mb-4" dark
                                                @click="update()">
                                                Update
                                            </v-btn> -->
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
                                                <v-img src='../assets/ComingSoon.jpg' class="white--text align-end"
                                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="100%"
                                                    width="100%">
                                                    <v-card-actions>
                                                        <v-btn rounded color="primary" dark @click="replace(item)">
                                                            Edit
                                                        </v-btn>
                                                    </v-card-actions>
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
import { collection, addDoc, where, query, doc, setDoc, getDocs } from 'firebase/firestore'
import { db } from '../main'

export default {
  name: 'CastingWorld',

  setup () {
    const data = reactive({
      //   submit: '',
      //   doclist: '',
      //   premierlist: '',
      //   audilist: '',
      //   display: ''
    })
    const auth = getAuth()

    const GenderOptions = ['Male', 'Female']
    const weekendOptions = ['Yes', 'No']

    // onMounted(async () => {
    //   const qDoclist = query(collection(db, 'projects'), where('status', '==', 'Projected'))
    //   const qPremierlist = query(collection(db, 'projects'), where('status', '==', 'Premiering'))
    //   const qProgresslist = query(collection(db, 'projects'), where('status', '==', 'InProgress'))

    //   const querySnapshot = await getDocs(qDoclist)
    //   data.doclist = querySnapshot.docs.map(doc => doc.data())
    //   const queryPlist = await getDocs(qPremierlist)
    //   data.premierlist = queryPlist.docs.map(doc => doc.data())
    //   data.display = data.premierlist[0]
    //   const queryFlist = await getDocs(qProgresslist)
    //   data.audilist = queryFlist.docs.map(doc => doc.data())
    // })

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        console.log(user.email)
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

    const replace = async () => {
      //   data.display = item
      //   console.log(data.dispaly.title)
    }

    const update = async () => {
      //   data.display = item
      console.log(data.name)
      console.log(data.age)
      console.log(data.aboutme)
    }

    const home = async () => {
      router.push('/home')
    }

    return {
      data,
      home,
      submit
    }
  }
}
</script>

<style>

</style>
