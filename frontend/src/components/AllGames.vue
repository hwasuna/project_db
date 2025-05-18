<template>
    <section>
      <h2>See All Games</h2>
      <div class="games-grid">
        <div v-for="game in games" :key="game.GameID" class="game-card">
  <h3>{{ game.Name }}</h3>
  <p><strong>Players:</strong> {{ game.NbPlayers }}</p>
  <p><strong>Year:</strong> {{ game.YearPublished }}</p>
  <p class="description">{{ game.Description.substring(0, 120) }}...</p>

  <!-- Rating input -->
  <select v-model="ratings[game.GameID]" class="rating-select">
    <option disabled value="">Rate this game</option>
    <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
  </select>
  <button @click="submitRating(game.GameID)">Submit Rating</button>
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
      ratings: {}, // Holds selected rating per game
      userID: 1     // TEMP: replace this with actual logged-in user ID later
    };
  },
  mounted() {
    fetch("http://localhost:4000/api/games")
      .then(res => res.json())
      .then(data => {
        this.games = data;
      })
      .catch(err => {
        console.error("Failed to fetch games:", err);
      });
  },
  methods: {
    async submitRating(gameID) {
      const score = this.ratings[gameID];
      if (!score) {
        alert("Please select a rating.");
        return;
      }

      try {
        const res = await fetch("http://localhost:4000/api/rate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userID: this.userID,
            gameID: gameID,
            score: score
          })
        });

        const result = await res.json();
        alert(result.message || "Rating submitted successfully!");
      } catch (err) {
        console.error("Failed to submit rating:", err);
        alert("Error submitting rating.");
      }
    }
  }
};
</script>
  
  <style scoped>

.rating-select {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  font-size: 0.9rem;
}

  .games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.game-card {
  width: 180px;
  text-align: center;
  background: transparent;
}

.game-card img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.game-card h3 {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  font-weight: bold;
}

.game-card p {
  margin: 0.25rem 0;
  font-size: 0.85rem;
  color: #000000;
}
  </style>