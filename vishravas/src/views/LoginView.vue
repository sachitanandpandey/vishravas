<template>
    <v-app id="app">
        <v-content>
            <v-container fluid fill-height>
                <v-card max-width="400" class="d-flex justify-space-around mb-6">
                    <v-container>
                        <v-row dense>
                            <v-col cols="12">
                                <v-card color="#385F73" theme="dark">
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

                            <v-col cols="12">
                                <v-card color="#1F7087" theme="dark">
                                    <div class="d-flex flex-no-wrap justify-space-between">
                                        <div>
                                            <v-card-title class="text-h5">
                                                Supermodel
                                            </v-card-title>

                                            <v-card-subtitle>Foster the People</v-card-subtitle>

                                            <v-card-actions>
                                                <v-btn class="ml-2" variant="outlined" size="small">
                                                    START RADIO
                                                </v-btn>
                                            </v-card-actions>
                                        </div>

                                        <v-avatar class="ma-3" size="125" rounded="0">
                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                                        </v-avatar>
                                    </div>
                                </v-card>
                            </v-col>

                            <v-col cols="12">
                                <v-card color="#952175" theme="dark">
                                    <div class="d-flex flex-no-wrap justify-space-between">
                                        <div>
                                            <v-card-title class="text-h5">
                                                Halcyon Days
                                            </v-card-title>

                                            <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                                            <v-card-actions>
                                                <v-btn class="ml-2" icon="mdi-play" variant="text"></v-btn>
                                            </v-card-actions>
                                        </div>

                                        <v-avatar class="ma-3" size="125" rounded="0">
                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                                        </v-avatar>
                                    </div>
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
    </v-app>
</template>

<script>
import { reactive } from 'vue'
import router from '../router'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export default {
  name: 'Login',

  setup () {
    const data = reactive({
      submit: ''
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
          console.log(user.email)
          router.push('/home')
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorMessage)
          // The email of the user's account used.
          const email = error.customData.email
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error)
          // ...
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
    /* background: url('https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg') */
    background: url('../assets/V2.png') no-repeat center center fixed !important;
    background-size: cover;
}
</style>
