<template>
    <v-app id="app">
        <v-content>
            <v-container fluid fill-height>
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
                <v-layout align-center justify-end>
                    <!-- <v-layout align-end justify-end> -->
                    <v-flex xs20 sm8 md4>
                        <form @submit.prevent="submit">
                            <!-- <input v-model="data.username" type="user" class="form-control" placeholder="user" required id="ip1">
                                                                    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required id="ip2"> -->
                            <!-- <button class="w-100 btn btn-lg" type="submit" color="primary">Sign in</button> -->
                            <v-btn rounded color="primary" dark type="submit">
                                googleSignin
                            </v-btn>
                        </form>
                    </v-flex>
                </v-layout>
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
            <!-- <v-row> -->
                <!-- <v-card max-width="200" height="300">
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                                OVERLINE
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                                Headline 5
                            </v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn outlined rounded text>
                            Button
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card max-width="200" height="300">
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                                OVERLINE
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                                Headline 5
                            </v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-btn outlined rounded text>
                            Button
                        </v-btn>
                    </v-card-actions>
                </v-card> -->
            <!-- </v-row> -->
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

    return {
      data,
      submit
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
