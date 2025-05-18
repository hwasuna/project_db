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
            <img :src="game.image" :alt="game.title" />
            <p>
              <strong>{{ game.title }}</strong><br />
              {{ game.duration }}<br />
              {{ game.players }}
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
        games: [
          {
            title: 'Battleship',
            image: '/battleship.png',
            duration: '10–60 minutes',
            players: '2 players'
          },
          {
            title: 'Connect 4',
            image: '/connect4.png',
            duration: '10 minutes',
            players: '2 players'
          },
          {
            title: 'Clue',
            image: '/clue.png',
            duration: '10–60 minutes',
            players: '3–6 players'
          },
          {
            title: 'Jenga',
            image: '/jenga.png',
            duration: '15 minutes',
            players: '2+ players'
          },
          {
            title: 'Uno',
            image: '/uno.png',
            duration: '30 minutes',
            players: '2–10 players'
          },
          {
            title: 'Monopoly',
            image: '/monopoly.png',
            duration: '60–180 minutes',
            players: '2–6 players'
          },
          {
            title: 'Scrabble',
            image: '/scrabble.png',
            duration: '30–90 minutes',
            players: '2–4 players'
          }
        ]
      }
    },
    computed: {
      visibleGames() {
        return this.games.slice(this.currentIndex, this.currentIndex + 3)
      }
    },
    methods: {
      nextSlide() {
        if (this.currentIndex >= this.games.length - 3) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      },
      prevSlide() {
        if (this.currentIndex <= 0) {
          this.currentIndex = this.games.length - 3
        } else {
          this.currentIndex--
        }
      }
    }
  }
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