
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
                                        <h1>Profile</h1>
                                        <v-card max-width="100%" height="100%" class="mt-2 mb-2">
                                            <v-form  @submit.prevent="submit">
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
                                                                placeholder="Instagram" v-validate="required" id="ip1">
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
                                            </v-form>
                                            <v-btn rounded color="primary" class="mt-2 ml-2 mr-2 mb-4" dark
                                                @click="update(data.useremail)">
                                                Update
                                            </v-btn>
                                        </v-card>
                                        <v-snackbar v-model="data.snackbar" :timeout="-1" absolute left shaped top color="red accent-2">
                                            <v-h5>{{data.infoerror}}</v-h5>
                                            <template v-slot:action="{ attrs }">
                                                <v-btn text v-bind="attrs" @click="data.snackbar = false"> Close </v-btn>
                                            </template>
                                        </v-snackbar>
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
                                                <form @submit.prevent="replace">
                                                    <v-img :src='data.doclist[0].profileimg' class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                                        height="100%" width="100%">

                                                        <v-file-input v-model="data.profileimg" :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                                            placeholder="Image" prepend-icon="mdi-camera" label="Profile Image" color="white"
                                                            @change="onFileChange(data.profileimg)"></v-file-input>
                                                        <v-card-actions>
                                                        </v-card-actions>
                                                    </v-img>
                                                </form>
                                                <v-btn rounded color="primary" dark @click="replace(data.useremail)">
                                                    Update
                                                </v-btn>
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
import { reactive, onMounted, computed } from 'vue'
import router from '../router'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, where, query, doc, setDoc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../main'
import { getStorage, uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage'
import store from '@/store/index.ts'

export default {
  name: 'ProfileWorld',

  setup () {
    const data = reactive({
      //   submit: '',
      //   doclist: '',
      //   premierlist: '',
      //   audilist: '',
      //   display: ''
      showreel: '',
      useremail: '',
      name: '',
      age: '',
      height: '',
      aboutme: '',
      insta: '',
      whtapp: '',
      language: '',
      location: '',
      gender: '',
      weekend: '',
      snackbar: false,
      infoerror: '',
      doclist: '',
      editprofile: false
    })

    const GenderOptions = ['Male', 'Female']
    const weekendOptions = ['Yes', 'No']

    const auth = getAuth()

    const currentuser = computed(() => {
      return store.getters.getUser
    })

    onMounted(async () => {
      const auth = getAuth()
      console.log('*************************')
      console.log(currentuser.value)
      console.log('*************************')
      localStorage.getItem('vishuser')
      const qConfigList = query(collection(db, 'config'))
      const qUserProfile = query(collection(db, 'profile'), where('email', '==', localStorage.getItem('vishuser')))
      //   const qProgresslist = query(collection(db, 'projects'), where('status', '==', 'InProgress'))

      const querySnapshot = await getDocs(qUserProfile)
      data.doclist = querySnapshot.docs.map(doc => doc.data())
    //   const queryPlist = await getDocs(qPremierlist)
    //   data.premierlist = queryPlist.docs.map(doc => doc.data())
    //   data.display = data.premierlist[0]
    //   const queryFlist = await getDocs(qProgresslist)
    //   data.audilist = queryFlist.docs.map(doc => doc.data())
    })

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        data.useremail = user.email
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

    function dataURLtoFile (dataurl, filename) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
    }

    const replace = async (useremail) => {
    //   const profilefile = dataURLtoFile(data.profileimg, 'profileimg')
      const profilefile = dataURLtoFile(data.doclist[0].profileimg, 'profileimg')
      console.log(profilefile)
      const storage = getStorage()

      console.log(storage)

      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg'
      }

      const storageReflist = ref(storage, 'userprofile/' + useremail + '/' + profilefile.name)

      const uploaddefaultprofile = await uploadBytesResumable(storageReflist, profilefile, metadata)
      const defaultPosterUrl = await getDownloadURL(uploaddefaultprofile.ref)
      console.log(defaultPosterUrl)
      const colRef = collection(db, 'profile')

      updateDoc(doc(colRef, useremail), {
        profileimg: defaultPosterUrl
      })
    }

    const onFileChange = async (file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        // data.profileimg = e.target.result
        data.doclist[0].profileimg = e.target.result
      }
      reader.readAsDataURL(file)
    }

    const editprofile = async () => {
      data.editprofile = true
    }

    const update = async (useremail) => {
      const colRef = collection(db, 'profile')

      if (data.name === '' || data.age === '' || data.insta === '') {
        data.infoerror = 'Please provide Name , Age and instagram url'
        data.snackbar = true
      } else {
        updateDoc(doc(colRef, useremail), {
          name: data.name,
          age: data.age,
          height: data.height,
          aboutme: data.aboutme,
          instagram: data.insta,
          showreel: data.showreel,
          language: data.language,
          whatapp: data.whtapp,
          location: data.location,
          gender: data.gender,
          weekend: data.weekend

        })
        data.editprofile = false
      }
    }

    const home = async () => {
      router.push('/home')
    }

    return {
      data,
      submit,
      replace,
      update,
      GenderOptions,
      weekendOptions,
      home,
      onFileChange,
      editprofile
    }
  }
}
</script>

<style>

</style>
