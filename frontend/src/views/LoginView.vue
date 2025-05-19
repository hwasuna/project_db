<template>
  <div class="register-container">
    <div class="form-card">
      <h1>Welcome Back!</h1>
      <p>Please log into your account</p>
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      console.log("Login attempted with", this.email, this.password);
      // Implement your login logic here
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #f5f7fa, #f8f8f8);
  animation: fadeIn 1s ease-in-out;
}

.form-card {
  background: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.form-card h1 {
  margin-bottom: 0.5rem;
}

.form-card p {
  margin-bottom: 1.5rem;
  color: #555;
}

input {
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: #910D00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>