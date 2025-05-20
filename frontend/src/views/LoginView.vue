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
<<<<<<< HEAD

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
=======
</style>
>>>>>>> rith
