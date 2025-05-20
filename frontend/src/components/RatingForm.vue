<template>
    <div class="rating-form-container">
      <div class="rating-card">
        <h1 class="rating-title">Rate a Game</h1>
        <form @submit.prevent="submitRating">
          <select v-model="ratingData.gameID" required>
            <option disabled value="">Select a Game</option>
            <option v-for="game in games" :key="game.GameID" :value="game.GameID">
              {{ game.Name }}
            </option>
          </select>
  
          <select v-model="ratingData.score" required>
            <option disabled value="">Score (1 to 5)</option>
            <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
          </select>
  
          <input
            v-model="ratingData.userID"
            type="number"
            placeholder="User ID"
            required
          />
  
          <button type="submit">Submit Rating</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RatingForm",
    data() {
      return {
        ratingData: {
          gameID: "",
          score: "",
          userID: "",
        },
        games: [],
      };
    },
    methods: {
      fetchGames() {
        fetch("http://localhost:4000/api/games")
          .then((res) => res.json())
          .then((data) => {
            this.games = data;
          })
          .catch((err) => {
            console.error("Failed to fetch games:", err);
          });
      },
      submitRating() {
        fetch("http://localhost:4000/api/rate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.ratingData),
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then((data) => {
                throw new Error(data.error || "Unknown error");
              });
            }
            return res.json();
          })
          .then(() => {
            alert("✅ Rating submitted!");
            this.ratingData = { gameID: "", score: "", userID: "" };
          })
          .catch((err) => {
            alert(`${err.message}`);
          });
      },
    },
    mounted() {
      this.fetchGames();
    },
  };
  </script>
  
  <style scoped>
  .rating-form-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .rating-card {
    border: 2px solid black;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: white;
  }
  
  .rating-title {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    font-weight: bold;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  select,
  input {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #aaa;
    border-radius: 5px;
  }
  
  button {
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    opacity: 0.85;
  }
  </style>