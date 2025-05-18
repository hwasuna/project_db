<template>
    <section class="hero">
      <div class="search-wrapper">
        <h1>Your Next Favorite Game<br />Is Just A Click Away !</h1>
        <input
          v-model="query"
          @input="filterGames"
          placeholder="Search by name, category or play time"
          class="search-input"
        />
        <ul v-if="suggestions.length" class="suggestions">
          <li
            v-for="game in suggestions"
            :key="game.GameID"
            @click="showGameDetails(game)"
          >
            {{ game.Name }} ({{ game.YearPublished }} – {{ game.NbPlayers }})
          </li>
        </ul>
  
        <!-- Game Details Modal -->
        <div v-if="showDetails" class="modal">
          <div class="modal-content">
            <button class="close" @click="closeModal">✖</button>
            <h3>{{ selectedGame.Name }}</h3>
            <p><strong>Year:</strong> {{ selectedGame.YearPublished }}</p>
            <p><strong>Players:</strong> {{ selectedGame.NbPlayers }}</p>
            <p><strong>Average Rating:</strong> {{ selectedGame.AverageRating || 'N/A' }}</p>
            <p class="desc">{{ selectedGame.Description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Hero",
    data() {
      return {
        query: "",
        games: [],
        suggestions: [],
        selectedGame: null,
        showDetails: false
      };
    },
    mounted() {
      fetch("http://localhost:4000/api/games")
        .then(res => res.json())
        .then(data => {
          this.games = data;
        })
        .catch(err => console.error("Fetch error:", err));
  
      document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    },
    methods: {
      filterGames() {
        const q = this.query.toLowerCase();
        this.suggestions = this.games.filter(game =>
          game.Name.toLowerCase().includes(q) ||
          game.NbPlayers.toLowerCase().includes(q) ||
          String(game.YearPublished).includes(q)
        ).slice(0, 5);
      },
      showGameDetails(game) {
        this.selectedGame = game;
        this.showDetails = true;
        this.suggestions = [];
      },
      closeModal() {
        this.showDetails = false;
      },
      handleClickOutside(event) {
        const wrapper = this.$el.querySelector(".search-wrapper");
        if (wrapper && !wrapper.contains(event.target)) {
          this.suggestions = [];
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .hero {
    text-align: center;
    padding: 4rem 1rem;
    background-color: #f5f5f5;
  }
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .search-wrapper {
    position: relative;
    display: inline-block;
    width: 90%;
    max-width: 600px;
  }
  
  .search-input {
    width: 100%;
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    border-radius: 999px;
    border: 2px solid #000000;
    outline: none;
  }
  
  .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 250px;
    overflow-y: auto;
    z-index: 10;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .suggestions li {
    padding: 0.75rem 1rem;
    cursor: pointer;
  }
  
  .suggestions li:hover {
    background-color: #f0f0f0;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
    position: relative;
  }
  
  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.8rem;
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .desc {
    margin-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.4;
  }
  </style>