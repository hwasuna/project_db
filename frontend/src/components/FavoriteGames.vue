<template>
    <section class="favorite-section">
      <h2>My Favorite Games</h2>
      <div class="carousel">
        <div
          v-for="(game, index) in favoriteGames"
          :key="index"
          class="game-card"
        >
          <img :src="getImage(game.Name)" alt="Game Image" />
          <h3>{{ game.Name }}</h3>
          <p>{{ game.NbPlayers }}</p>
          <p>{{ game.YearPublished }} minutes</p>
          <p>⭐ {{ game.AverageRating.toFixed(1) }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "FavoriteGames",
    data() {
      return {
        favoriteGames: [],
      };
    },
    mounted() {
      fetch("http://localhost:4000/api/favorites")
        .then((res) => res.json())
        .then((data) => {
          this.favoriteGames = data;
        })
        .catch((err) => {
          console.error("Failed to load favorite games:", err);
        });
    },
    methods: {
      getImage(name) {
        const filename = name.toLowerCase().replace(/\s/g, "") + ".png";
        return `/assets/Board Game_Images/${filename}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .favorite-section {
    background-color: #000;
    color: white;
    text-align: center;
    padding: 2rem 1rem;
  }
  
  .carousel {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  
  .game-card {
    width: 150px;
    text-align: center;
  }
  
  .game-card img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }
  </style>