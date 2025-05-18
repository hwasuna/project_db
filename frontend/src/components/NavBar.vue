<template>
    <header class="navbar">
      <h1>Board Right Away</h1>
      <nav>
        <router-link to="/">How It Works ?</router-link>
        <router-link to="/register">Create An Event</router-link>
        <router-link to="/dashboard">My Space</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background: black;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: relative; /* ❌ avoid fixed unless needed */
}
  
  nav a {
    color: white;
    margin-left: 1rem;
    text-decoration: none;
  }
  nav a.router-link-active {
    text-decoration: underline;
  }
  </style>