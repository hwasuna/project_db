<template>
  <div class="login-page">

    <!-- Login Form -->
    <div class="wrapper">
      <form id="login-form" @submit.prevent="login">
        <h1>Welcome Back</h1>
        <p>Log in to access your account</p>
        <div class="input-box">
          <input type="email" v-model="email" placeholder="Email" required />
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="input-box">
          <input
            :type="showPassword ? 'text' : 'password'"  
            v-model="password"
            placeholder="Password"
            required
          />
          <i
            class="fa-solid"
            :class="showPassword ? 'fa-eye-slash' : 'fa-eye'" 
            @click="togglePasswordVisibility"
          ></i>
        </div>
        <div class="remember-forgot">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            Remember me
          </label>
          <a href="#" @click.prevent="forgotPassword">Forgot password?</a>
        </div>
        <button :disabled="!isFormValid" type="submit" class="action-btn">Login</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <div class="register-link">
          <p>
            Don't have an account? <router-link to="/register">Register here</router-link>
          </p>
        </div>
      </form>
    </div>
    <!-- Image side -->
    <div class="image-container">
      <img src="../assets/login-register.jpg" alt="Login Image" />
    </div> 
  </div>
</template>

  
  
<script>
import { loginUser } from '../eventBus'; // Importation de la gestion de l'état d'authentification
export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false, 
      errorMessage: '',
    };
  },
  computed: {
    isFormValid() {
      console.log("Reading data");
      return this.email && this.password;
      
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword; // Bascule l'état de l'affichage du mot de passe
    },
    async login() {
      try {
        console.log('Attempting login with:', { email: this.email}); // Debug log

        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        const data = await response.json();
        console.log('Server response:', data); // Debug log

        if (data.success) {
          localStorage.setItem('authToken', data.token);

          const payload = JSON.parse(atob(data.token.split('.')[1]));
          loginUser(payload.username);

          alert('Login successful!');
          this.$router.push('/');
        } else {
          this.errorMessage = data.message || 'Invalid email or password.';
        }
      } catch (err) {
        console.error('Login error:', err);
        this.errorMessage = 'Error logging in. Please try again. Vue';
      }
    }
  },
};
</script>

  
  <style scoped>
/* Global container */
.login-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden; /* Ensures no scrolling */
}


/* Wrapper */
.wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fix;
  align-items: center;
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.5s ease-in-out; /* Fade-in animation */
  z-index: 1; /* Puts wrapper above the video */
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Title */
h1 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
}

  /* Form styling */
  #login-form {
    border-radius: 15px;
    padding: 15%;
    width: 100%;
    max-width: 40%;
  }

/* Input group */
.input-box {
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.input-box input {
  width: 100%;
  padding: 12px 40px 12px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.input-box input:focus {
  border-color: #000000;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  outline: none;
}

.input-box i {
  position: absolute;
  right: 15px; /* Move icon to the far right */
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #757575;
  cursor: pointer; /* Permet de cliquer sur l'icône */
}

/* Remember and forgot */
.remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
}

.remember-forgot a {
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.remember-forgot a:hover {
  text-decoration: underline;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* Login button */
.action-btn {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #000000;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.action-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
}

.action-btn:active {
  transform: scale(0.95);
}

/* Register */
.register-link {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #000000;
}

.register-link a {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.register-link a:hover {
  text-decoration: underline;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

/* Footer text */
.footer-text {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 14px;
}

.footer-text a {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
}

.footer-text a:hover {
  text-decoration: underline;
}


.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
