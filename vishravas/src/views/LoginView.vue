<template>
    <v-app id="app">
        <template>
        </template>
        <v-content>
            <v-container fluid fill-height>
                <v-row>
                    <v-card max-width="800px" height="350px" class="d-flex justify-space-around mb-6">

                        <v-container>

                            <v-row dense>
                                <v-col cols="20">
                                    <v-card max-width="800" height="300">

                                        <v-img :src=data.premierlist[0].fullposter class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                            height="300px" width="800px">
                                        <v-row><v-col cols="20"><h1>{{data.premierlist[0].status}}</h1></v-col></v-row>
                                        <v-row><v-col cols="20">{{data.premierlist[0].desc}}</v-col></v-row>
                                        </v-img>

                                    </v-card>
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
                                                <v-card-title class="text-h5">
                                                    Join Our team
                                                </v-card-title>

                                                <v-card-subtitle>If you can speak any indian language you are welcome.
                                                    Lets Explore your talent.
                                                    <tr>Work as Performer</tr>
                                                    <tr>Work at Backstage</tr>
                                                </v-card-subtitle>

                                                <!-- <v-card-actions>
                                                    <v-btn text>
                                                        Login to Join
                                                    </v-btn>
                                                </v-card-actions> -->
                                            </v-card>
                                        </v-col>

                                        <v-col v-for="(item, i) in vishDetails" :key="i" cols="12">
                                            <v-card :color="item.color" dark>
                                                <div class="d-flex flex-no-wrap justify-space-between">
                                                    <div>
                                                        <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                                                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                                                        <v-card-actions>
                                                            <!-- <v-btn v-if="item.whatapp !== 'undefined'">
                                                                <tr><v-icon>mdi-whatsapp</v-icon>{{item.whatapp}}</tr></v-btn>

                                                            <tr><v-icon>mdi-instagram</v-icon>{{item.instagram}}</tr> -->

                                                            <div v-if="item.wapp">
                                                                <tr>
                                                                    <td>
                                                                        <v-img class="shrink mr-2" :src="require('../assets/wapp.png')" width="60" />
                                                                    </td>
                                                                    <td>
                                                                        <v-chip>07459194020</v-chip>
                                                                    </td>
                                                                </tr>
                                                            </div>
                                                            <div v-if="item.insta">
                                                                <a href="https://www.instagram.com/vishravas/" target="_blank">
                                                                    <v-img class="shrink mr-2" :src="require('../assets/insta.png')" width="80" />
                                                                </a>
                                                            </div>

                                                        </v-card-actions>
                                                    </div>

                                                    <!-- <v-avatar class="ma-3" size="125" tile>
                                                        <v-img :src="item.src"></v-img>
                                                    </v-avatar> -->
                                                </div>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </template>
                        </v-row>
                    <v-layout align-center justify-center>
                    <v-flex xs20 sm8 md4>
                        <form @submit.prevent="submit">
                            <v-btn rounded color="primary" dark type="submit">
                                googleSignin
                            </v-btn>
                        </form>
                    </v-flex>
                </v-layout>
                </v-row>
            </v-container>

        </v-content>
        <!-- <template>
            <v-container>
                <v-row class="text-h6 white--text font-italic">Our Sponsors</v-row>
                <v-row>
                    <div v-for="item in data.doclist" v-bind:key="item.id" class="pa-md-2 d-flex justify-end">
                        <v-card max-width="250" height="50">
                            <v-img :src=item.listposter class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="100%" width="100%">
                            </v-img>
                        </v-card>
                    </div>
                </v-row>
            </v-container>
        </template> -->
        <template>
            <v-container>
                <v-row>
                    <div v-for="item in data.doclist" v-bind:key="item.id" class="pa-md-2">
                        <v-card max-width="200" height="300">
                            <v-img :src=item.listposter class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="300px" width="200px">
                            </v-img>
                        </v-card>
                    </div>
                </v-row>
            </v-container>
        </template>
    </v-app>
</template>

<script>
import { reactive, onMounted } from 'vue'
import router from '../router'
import { getAuth, signInWithPopup, GoogleAuthProvider, fetchSignInMethodsForEmail } from 'firebase/auth'
import { db } from '../main'
import { collection, addDoc, where, query, doc, setDoc, getDocs, updateDoc } from 'firebase/firestore'

export default {
  name: 'Login',

  setup () {
    const data = reactive({
      submit: '',
      doclist: '',
      premierlist: ''
    })

    onMounted(async () => {
      const qDoclist = query(collection(db, 'projects'), where('status', '==', 'Projected'))
      const qPremierlist = query(collection(db, 'projects'), where('status', '==', 'Premiering'))

      const querySnapshot = await getDocs(qDoclist)
      data.doclist = querySnapshot.docs.map(doc => doc.data())
      const queryPlist = await getDocs(qPremierlist)
      data.premierlist = queryPlist.docs.map(doc => doc.data())
    })

    const submit = async () => {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          // The signed-in user info.
          const user = result.user
          const colRef = collection(db, 'profile')
          const qDoclist = query(colRef, where('email', '==', user.email))
          const querySnapshot = await getDocs(qDoclist)
          data.doclist = querySnapshot.docs.map(doc => doc.data())
          if (data.doclist.length === 0) {
            setDoc(doc(colRef, user.email), {
              email: user.email
            })
          }
          router.push('/home')
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          const credential = GoogleAuthProvider.credentialFromError(error)
        })
    }

    const vishDetails = [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Audition',
        artist: 'Login For Audition(Work with us)'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Vishravas',
        // artist: '16 VistaCenter Salisbury Rd, Hounslow TW4 6JQ',
        insta: 'https://www.instagram.com/vishravas/',
        wapp: '07459194020'
      }
    ]

    return {
      data,
      submit,
      vishDetails
    }
  }
}
</script>

<style>
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

body {
    background-color: #0066CC;
}

.form-signin {
    padding-top: 25px;
    width: 100%;
    max-width: 930px;
    padding: 255px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="user"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

#ip2 {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 20px;
    width: 100%;
    height: 15px;
}

#ip1 {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 20px;
    width: 500px;
    height: 15px;
}

#ipname {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 20px;
    width: 300px;
    height: 15px;
}

#ipage {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 20px;
    width: 300px;
    height: 15px;
}

#ipaboutme {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 20px;
    width: 100%;
    height: 15px;
}

#arrowlogin {
    background: linear-gradient(-135deg,
            transparent 22px,
            #04e6fb 22px,
            #65ff9a 100%) top right,
        linear-gradient(-45deg,
            transparent 22px,
            #04e6fb 22px,
            #65ff9a 100%) bottom right;
    background-size: 100% 50%;
    background-repeat: no-repeat;
}

#weekdropdown {
    position: relative;
    display: inline-block;
}

#app {
    background: url('../assets/V2.png') no-repeat center center fixed !important;
    background-size: cover;
}
</style>
