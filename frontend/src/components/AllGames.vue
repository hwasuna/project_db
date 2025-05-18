<template>
    <section class="all-games">
      <h2>SEE ALL GAMES</h2>
  
      <div class="grid">
        <div class="game-card" v-for="(game, index) in games" :key="index">
          <img :src="game.image" :alt="game.title" />
          <p>
            <strong>{{ game.title }}</strong><br />
            {{ game.duration }}<br />
            {{ game.players }}
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AllGames',
    data() {
      return {
        games: [
          {
            title: 'Operation',
            image: '/operation.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Monopoly',
            image: '/monopoly.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Life',
            image: '/life.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Jenga',
            image: '/jenga.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Jenga',
            image: '/jenga.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Operation',
            image: '/operation.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Monopoly',
            image: '/monopoly.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Life',
            image: '/life.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Jenga',
            image: '/jenga.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Operation',
            image: '/operation.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Monopoly',
            image: '/monopoly.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Life',
            image: '/life.png',
            duration: '10–60 minutes',
            players: '2 players'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .all-games {
  background-color: #f5f5f5;
  padding: 3rem 1rem;
  text-align: center;
  color: black;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* ✅ exactly 4 per row */
  gap: 2rem;
  justify-content: center; /* ✅ center the grid */
  max-width: 1000px;
  margin: 0 auto;
}

.game-card {
  width: 100%;
  text-align: center;
}

.game-card img {
  width: 100%;
  max-width: 160px;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
  </style>