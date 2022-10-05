<template>
    <v-app id="app">
        <v-content>
            <v-container fluid fill-height>
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

export default {
  name: 'Login',
  setup () {
    const data = reactive({
      email: '',
      password: ''
    })
    // const router = useRouter()

    const submit = async () => {
    //   await fetch('http://localhost:8000/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     credentials: 'include',
    //     body: JSON.stringify(data)
    //   })

      await router.push('/home')
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
  background: url('https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg')
    no-repeat center center fixed !important;
  background-size: cover;
}
    </style>
