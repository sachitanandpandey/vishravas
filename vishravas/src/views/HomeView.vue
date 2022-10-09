<template>
  <!-- <hello-world /> -->
  <vish-home/>
</template>

<script lang="ts">
import Vue from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'
import vishHome from '../components/vishaHome.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    // HelloWorld
    vishHome
  }
})
</script>
