<template>
  <div id="app">
    <!-- Header -->
    <HeaderComponent ref="header" v-show="!scrolledPastHeader" />

    <!-- Sticky Navbar -->
    <StickyNavbarComponent :visible="scrolledPastHeader" />


    <!-- Route dynamique : le contenu dépend de la route active -->
    <router-view />


    <!-- Sticky Navbar -->
    <FooterComponent />
  </div>
</template>

<script>
  import HeaderComponent from "./components/HeaderComponent.vue";
  import StickyNavbarComponent from "./components/StickyNavbarComponent.vue";
  import FooterComponent from "@/components/HeaderComponent.vue";

  
  export default {
    name: "App",
    components: {
      HeaderComponent,
      StickyNavbarComponent,
      FooterComponent
    },
    data() {
      return {
        scrolledPastHeader: false, // Contrôle si l'utilisateur a défilé
      };
    },
    methods: {
      handleScroll() {
        const header = this.$refs.header?.$el;
        const headerHeight = header ? header.offsetHeight : 100; // Mesure la hauteur réelle
        this.scrolledPastHeader = window.scrollY > headerHeight;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll); // Attache l'événement scroll
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll); // Nettoie l'événement
    },
  };
</script>

<style>
/* Global styles */
body {
  margin: 0;
  background-color: white;
  color: white;
  height: 100vh;
}
*{
  font-family: 'Banks Miles Single Line';
}
#logo{
  font-family:'Phosphate';
  font-size: 2rem;
}

</style>
