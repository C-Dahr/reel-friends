<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navbar></Navbar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar,
  },

  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  data: () => ({
    //
  }),
};
</script>
