<template>
    <div>
      <h3>Rate a Game</h3>
      <form @submit.prevent="submitRating">
        <input v-model.number="userID" placeholder="User ID" required />
        <input v-model.number="gameID" placeholder="Game ID" required />
        <input v-model.number="score" placeholder="Score (1-5)" required min="1" max="5" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userID: '',
        gameID: '',
        score: ''
      };
    },
    methods: {
      async submitRating() {
        try {
          const res = await fetch('http://localhost:4000/api/rate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userID: this.userID,
              gameID: this.gameID,
              score: this.score
            })
          });
          const result = await res.json();
          console.log(result.message);
        } catch (err) {
          console.error('Rating failed:', err);
        }
      }
    }
  };
  </script>