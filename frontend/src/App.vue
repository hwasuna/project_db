<script setup>
import HomeView from './views/HomeView.vue';
import RegisterView from './views/RegisterView.vue';
import MySpaceView from './views/MySpaceView.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>