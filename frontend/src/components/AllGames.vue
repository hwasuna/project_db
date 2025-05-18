<template>
    <section>
      <h2>See All Games</h2>
      <div class="games-grid">
        <div
          v-for="game in games"
          :key="game.GameID"
          class="game-card"
        >
          <h3>{{ game.Name }}</h3>
          <p><strong>Year:</strong> {{ game.YearPublished }}</p>
          <p><strong>{{ game.NbPlayers }}</strong></p>
          <button @click="openModal(game)">See Details</button>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="selectedGame" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <h2>{{ selectedGame.Name }}</h2>
          <p><strong>Year:</strong> {{ selectedGame.YearPublished }}</p>
          <p><strong>Players:</strong> {{ selectedGame.NbPlayers }}</p>
          <p>{{ selectedGame.Description }}</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
export default {
  name: "AllGames",
  data() {
    return {
      games: [],
      selectedGame: null // stores the game to show in modal
    };
  },
  mounted() {
    fetch("http://localhost:4000/api/games")
      .then((res) => res.json())
      .then((data) => {
        this.games = data;
        console.log(this.games)
      })
      .catch((err) => {
        console.error("Failed to fetch games:", err);
      });
  },
  methods: {
    openModal(game) {
      this.selectedGame = game;
    },
    closeModal() {
      this.selectedGame = null;
    }
  }
};
</script>
  
  <style scoped>
  .games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  justify-items: center;
}

.game-card {
  border: 2px solid black;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  background-color: white;
  text-align: center;
}

button {
  margin-top: 0.5rem;
  padding: 5px 10px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
}

button:hover {
  background-color: #333;
}

/* Modal styles */
.modal-overlay {
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
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  text-align: center;
}

h2 {
    text-align: center;
    font-size: 3rem;
}
  </style>