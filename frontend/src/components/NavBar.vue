<template>
    <header class="navbar">
      <h1>Board Right Away</h1>
      <nav>
        <router-link to="/">How It Works ?</router-link>
        <router-link to="/register">Create An Event</router-link>
        <router-link to="/register">My Space</router-link>
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
    position: fixed;         
    top: 0;
    left: 0;
    width: 100vw;            
    background: black;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 1000;           
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