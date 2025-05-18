<template>
    <section class="favorite">
      <h3>MY FAVORITE GAMES</h3>
      <div class="carousel-wrapper">
        <button class="arrow" @click="prev">‹</button>
        <div class="carousel">
          <div class="game-card" v-for="game in visible" :key="game.title">
            <img :src="game.image" />
            <p><strong>{{ game.title }}</strong><br />{{ game.duration }}<br />{{ game.players }}</p>
          </div>
        </div>
        <button class="arrow" @click="next">›</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FavoriteGames',
    data() {
      return {
        current: 0,
        games: [
          { title: 'Battleship', image: '/battleship.png', duration: '10–60 minutes', players: '2 players' },
          { title: 'Connect 4', image: '/connect4.png', duration: '10 minutes', players: '2 players' },
          { title: 'Clue', image: '/clue.png', duration: '10–60 minutes', players: '3–6 players' }
        ]
      }
    },
    computed: {
      visible() {
        return this.games.slice(this.current, this.current + 3)
      }
    },
    methods: {
      next() {
        this.current = (this.current + 1) % this.games.length
      },
      prev() {
        this.current = (this.current - 1 + this.games.length) % this.games.length
      }
    }
  }
  </script>
  
  <style scoped>
  .favorite {
    background: black;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
  }
  .carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .carousel {
    display: flex;
    gap: 2rem;
  }
  .game-card {
    width: 160px;
  }
  .game-card img {
    width: 100%;
    border-radius: 6px;
  }
  .arrow {
    background: none;
    border: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
  </style>