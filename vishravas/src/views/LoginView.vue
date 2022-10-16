<template>
    <v-app id="app">
        <v-content>
            <v-container fluid fill-height>
                <v-row>
                    <v-card max-width="800" height="400" class="d-flex justify-space-around mb-6">
                        <v-container>
                            <v-row dense>
                                <v-col cols="20">
                                    <v-card color="#385F73" theme="dark" height="100%" width="800">
                                        <v-card-title class="text-h5">
                                            Unlimited music now
                                        </v-card-title>
                                        <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever,
                                            online and offline.</v-card-subtitle>
                                        <v-card-actions>
                                            <v-btn variant="text">
                                                Listen Now
                                            </v-btn>
                                        </v-card-actions>
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
                                                    Unlimited music now
                                                </v-card-title>

                                                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and
                                                    offline.</v-card-subtitle>

                                                <v-card-actions>
                                                    <v-btn text>
                                                        Listen Now
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>

                                        <v-col v-for="(item, i) in noticelist" :key="i" cols="12">
                                            <v-card :color="item.color" dark>
                                                <div class="d-flex flex-no-wrap justify-space-between">
                                                    <div>
                                                        <v-card-title class="text-h5" v-text="item.title"></v-card-title>

                                                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                                                        <v-card-actions>
                                                            <v-btn v-if="item.artist === 'Ellie Goulding'" class="ml-2 mt-3" fab icon
                                                                height="40px" right width="40px">
                                                                <v-icon>mdi-play</v-icon>
                                                            </v-btn>

                                                            <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                                                                START RADIO
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </div>

                                                    <v-avatar class="ma-3" size="125" tile>
                                                        <v-img :src="item.src"></v-img>
                                                    </v-avatar>
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
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { db } from '../main'
import { collection, addDoc, where, query, doc, setDoc, getDocs } from 'firebase/firestore'

export default {
  name: 'Login',

  setup () {
    const data = reactive({
      submit: '',
      doclist: ''
    })

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'))
      data.doclist = querySnapshot.docs.map(doc => doc.data())
    })

    const submit = async () => {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          // The signed-in user info.
          const user = result.user
          const colRef = collection(db, 'profile')

          setDoc(doc(colRef, user.email), {
            email: user.email
          })
          console.log(user.email)
          router.push('/home')
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          const credential = GoogleAuthProvider.credentialFromError(error)
        })
    }

    const noticelist = [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ]

    return {
      data,
      submit,
      noticelist
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
    width: 400px;
    height: 15px;
}

#ip1 {
    border-radius: 25px;
    border: 2px solid #609;
    padding: 20px;
    width: 400px;
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
