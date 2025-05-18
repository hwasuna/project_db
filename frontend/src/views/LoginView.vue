<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Welcome Back</h2>
        <p>Please enter your credentials to log in</p>
  
        <form @submit.prevent="handleLogin">
          <input type="text" placeholder="Your username" v-model="username" required />
          <input type="password" placeholder="Your password" v-model="password" required />
          <button type="submit">Log In</button>
        </form>
  
        <p class="register-link">
          Don't have an account?
          <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleLogin() {
        // Example login logic
        console.log('Logging in:', this.username, this.password)
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #fafafa;
    padding: 2rem;
  }
  
  .login-box {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 400px;
  }
  
  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #444;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  button {
    background: darkred;
    color: white;
    border: none;
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
  
  button:hover {
    background: #a10000;
  }
  
  .register-link {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
  
  .register-link a {
    color: darkred;
    font-weight: bold;
    text-decoration: none;
  }
  </style>