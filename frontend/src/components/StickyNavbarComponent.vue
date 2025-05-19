<template>
    <nav :class="['stickynav', { 'stickynav-visible': visible }]">
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
  name: "StickyNavbarComponent",
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
    props: {
            visible: {
            type: Boolean,
            default: false,
            },
        },
    };
</script>
  
<style scoped>
    .stickynav {
        position: fixed;
        width: 100%;
        height: 110px;
        top: -120px; /* Cacher la navbar au départ */
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background-color: rgba(0, 0, 0, 0.300);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.600);
        transition: top 0.3s ease-in-out, opacity 0.5s ease;
        z-index: 1000;
        
    }

    .stickynav-visible {
        top: 0; /* Afficher la navbar */
        opacity: 1;
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
  