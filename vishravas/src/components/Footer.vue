<!-- <template>
    <v-container>
    Footer
    </v-container>
  </template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterView',

  data: () => ({

  })
})
</script> -->

<template>
    <v-container>
        <v-footer padless>
            <v-card flat class="text-center">
                <!-- <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text> -->
                <!-- <v-card-text class="pt-0 text-center">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
                    मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥
                </v-card-text> -->
                <v-divider></v-divider>
                <v-card-text>
                    {{ new Date().getFullYear() }} —
                    <strong>CopyRight@Vishravas</strong>
                </v-card-text>
            </v-card>
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
