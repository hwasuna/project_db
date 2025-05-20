<template>
    <section class="past">
      <h3>MY PAST GAMES</h3>
      <div class="grid">
        <div class="game" v-for="(game, index) in games" :key="index">
          <img :src="game.image" />
          <p><strong>{{ game.title }}</strong><br />{{ game.duration }}<br />{{ game.players }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PastGames',
    data() {
      return {
        games: [
          { title: 'Operation', image: '/operation.png', duration: '10–60 minutes', players: '2 players' },
          { title: 'Monopoly', image: '/monopoly.png', duration: '10–60 minutes', players: '2 players' },
          { title: 'Life', image: '/life.png', duration: '10–60 minutes', players: '2 players' },
          { title: 'Jenga', image: '/jenga.png', duration: '10–60 minutes', players: '2 players' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .past {
    background: white;
    color: black;
    padding: 2rem 1rem;
    text-align: center;
  }
  .grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .game {
    width: 160px;
  }
  .game img {
    width: 100%;
    border-radius: 6px;
  }
  </style>