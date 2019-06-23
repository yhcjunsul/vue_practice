<template>
  <v-app>
    <MainToolbar></MainToolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import MainToolbar from '@/components/MainToolbar.vue'
export default {
  components: {
    MainToolbar
  }
}
</script>