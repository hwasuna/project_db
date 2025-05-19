<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="logo">
      <div id="logo">Board Right Away</div>
    </div>
    <ul class="links">
      <li><router-link>Home</router-link></li>
      <li><router-link>Catalog</router-link></li>
      <li><router-link>Create an Event</router-link></li>
      <li v-if="isLoggedIn" ><router-link >My Space</router-link></li>
      <li v-if="!isLoggedIn"><router-link >Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { authState, logoutUser } from '../eventBus';
export default {
  name: "NavbarComponent",
  computed: {
    isLoggedIn() {
      return authState.isLoggedIn;
    },
  },
  methods: {
    logout() {
      const userConfirmed = window.confirm("Are you sure you want to log out?");
      if (userConfirmed) {
        logoutUser();
        localStorage.removeItem('authToken');
        this.$router.push('/login');
        this.$emit('close'); // Ferme le menu
      }
    },
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    if (token) {
      console.log('Token:', token); // Vérifiez le contenu brut du token
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log('Payload:', payload); // Vérifiez le contenu décodé
        authState.isLoggedIn = true;
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  z-index: 1000;
}

.logo-container{
  display: flex;
  align-items: center;
  flex-direction: row;
  align-self: center;
}

.logo-container img {
  width: 4.5rem;
  height: 4.5rem;
}

.links{
  display : flex;
  align-items: center;
  gap: 2rem;
  font-style: bold;
  margin-right: 2.5%;
}

li {
  list-style: none;
}

.links a {
  color: white;
  text-decoration: none;
}

.links a:hover {
  color: #888888;
}
</style>
