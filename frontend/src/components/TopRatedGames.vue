<template>
    <section class="top-rated-section">
      <h2>Top Rated Games</h2>
      <div class="carousel">
        <button @click="prevSlide">‹</button>
        <div class="carousel-window">
          <div
            class="game-card"
            v-for="(game, index) in visibleGames"
            :key="game.GameID"
          >
            <h3>{{ game.Name }}</h3>
            <p><strong>Year:</strong> {{ game.YearPublished }}</p>
            <p><strong>{{ game.NbPlayers }}</strong></p>
            <p><strong>Avg Rating:</strong> {{ game.AverageRating ?? 'N/A' }}</p>
            <button @click="showDetails(game)">See Details</button>
          </div>
        </div>
        <button @click="nextSlide">›</button>
      </div>
  
      <div v-if="selectedGame" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <h3>{{ selectedGame.Name }}</h3>
          <p><strong>Year:</strong> {{ selectedGame.YearPublished }}</p>
          <p><strong>Players:</strong> {{ selectedGame.NbPlayers }}</p>
          <p><strong>Average Rating:</strong> {{ selectedGame.AverageRating ?? 'N/A' }}</p>
          <p>{{ selectedGame.Description }}</p>
          <button @click="selectedGame = null">Close</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
export default {
  name: "TopRatedGames",
  data() {
    return {
      topRatedGames: [],
      currentIndex: 0,
      selectedGame: null
    };
  },
  computed: {
    visibleGames() {
      return this.topRatedGames.slice(this.currentIndex, this.currentIndex + 3);
    }
  },
  mounted() {
    fetch("http://localhost:4000/api/toprated")
      .then((res) => res.json())
      .then((data) => {
        this.topRatedGames = data;
      });
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) this.currentIndex--;
    },
    nextSlide() {
      if (this.currentIndex < this.topRatedGames.length - 3) this.currentIndex++;
    },
    showDetails(game) {
      this.selectedGame = game;
    },
    closeModal(){
        this.selectedGame = null;
    }
  }
};
</script>
  
<style scoped>
.top-rated-section {
  background: #000;
  color: #fff;
  padding: 2rem;
  text-align: center;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel button {
    padding: 0.5rem;
    margin: 1rem;
    border-radius: 10px;
}

.carousel-window {
  display: flex;
  gap: 1rem;
}

.game-card {
  background: #ffffff;
  color: #000;
  padding: 1rem;
  width: 200px;
  border-radius: 10px;
  text-align: center;
}

.modal {
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-content {
  background: #fff;
  color: #000;
  padding: 2rem;
  margin: 10% auto;
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
}
</style>