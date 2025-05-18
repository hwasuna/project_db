<template>
    <section class="hero">
      <h1 class="headline">Your Next Favorite Game<br />Is Just A Click Away !</h1>
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search by name, category or play time..."
        />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style scoped>
  .hero {
    text-align: center;
    padding: 10rem 1rem;
    background-color: #f5f5f5;
    position: fixed;         
    top: 0;
    left: 0;
    width: 100vw;            

  }
  
  .headline {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    line-height: 1.3;
  }
  
  .search-container {
    display: inline-flex;
    align-items: center;
    background-color: black;
    border-radius: 50px;
    padding: 1rem 2rem;
    color: white;
  }
  
  .search-icon {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  
  .search-container input {
    border: none;
    background: none;
    color: white;
    font-size: 1rem;
    width: 290px;
    outline: none;
  }
  </style>