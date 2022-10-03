<template>
    <v-container>
      <v-footer padless>
        <v-card class="flex flat tile">
        <v-card-title class="primary lighten-1">
          <v-layout class="flex justify-center grow">
            <strong class="subheading white--text">
              Some Random Text
            </strong>
          </v-layout>
          <v-checkbox dark label="Click Me" class="shrink"></v-checkbox>
          <v-btn v-on:click="saveClicked">
            <v-icon>save</v-icon> Save
          </v-btn>
          <v-btn>
            <v-icon>close</v-icon> Cancel
          </v-btn>
        </v-card-title>
      </v-card>
        <!-- <v-card flat class="text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text
            class="pt-20"
          >Test</v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            {{ new Date().getFullYear() }} —
            <strong>Photography Vuetify Project</strong>
          </v-card-text>
        </v-card> -->
      </v-footer>
    </v-container>
  </template>

<script lang="ts">
export default {
  name: 'FooterView',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  })
}
</script>
