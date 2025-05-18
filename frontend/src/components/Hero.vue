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
    padding: 3rem 1rem;
    background: #f5f5f5;
    text-align: center;
    margin: 0;         /* ✅ no top margin */
    box-sizing: border-box;           

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
    background: black;
    border-radius: 50px;
    padding: 1rem 2rem;
    color: white;
    margin-top: 2rem;
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