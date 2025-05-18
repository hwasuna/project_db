<template>
    <section class="top-rated-section">
      <h2>TOP RATED GAMES</h2>
  
      <div class="carousel-wrapper">
        <button class="arrow" @click="prevSlide">‹</button>
  
        <div class="carousel">
          <div
            class="game-card"
            v-for="(game, index) in visibleGames"
            :key="index"
          >
            <p>
              <strong>{{ game.title }}</strong><br />
              {{ game.duration }}<br />
              {{ game.players }}<br />
              ⭐ {{ game.rating.toFixed(1) }}
            </p>
          </div>
        </div>
  
        <button class="arrow" @click="nextSlide">›</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TopRatedGames',
    data() {
      return {
        currentIndex: 0,
        games: []
      };
    },
    computed: {
      visibleGames() {
        return this.games.slice(this.currentIndex, this.currentIndex + 3);
      }
    },
    mounted() {
      fetch("http://localhost:4000/api/top-games")
        .then((res) => res.json())
        .then((data) => {
          this.games = data.map(game => ({
            title: game.Name,
            duration: `${game.YearPublished} edition`,
            players: game.NbPlayers,
            rating: game.AverageRating
          }));
        })
        .catch(err => {
          console.error("Failed to load top rated games:", err);
        });
    },
    methods: {
      prevSlide() {
        if (this.currentIndex > 0) this.currentIndex--;
      },
      nextSlide() {
        if (this.currentIndex + 3 < this.games.length) this.currentIndex++;
      }
    }
  };
  </script>
  
  <style scoped>
  .top-rated-section {
    background-color: black;
    color: white;
    text-align: center;
    padding: 3rem 1rem;
    box-sizing: border-box;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  
  .carousel-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  
  .carousel {
    display: flex;
    gap: 2rem;
  }
  
  .game-card {
    width: 180px;
    text-align: center;
  }
  
  .game-card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  
  .arrow {
    background: transparent;
    border: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;
  }
  </style>