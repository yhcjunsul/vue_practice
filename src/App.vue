<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SUGO.EE</span>
      </v-toolbar-title>
      <v-btn
        flat
        to="/"
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/login"
      >
        <span class="mr-2">Log in</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
