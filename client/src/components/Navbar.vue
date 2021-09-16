<template>
  <v-container>
    <v-app-bar
      app
      color="orange"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'Navbar',

    data: () => ({
    }),
  }
</script>
