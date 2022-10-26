<template>
    <profile-world/>
  </template>

<script lang="ts">
import Vue from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'
import ProfileWorld from '../components/profileHome.vue'

export default Vue.extend({
  name: 'profileHome',

  components: {
    // HelloWorld
    ProfileWorld
  }
})
</script>
