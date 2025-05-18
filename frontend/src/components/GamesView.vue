<template>
  <div class="page-wrapper">
    <h1 class="title">See All Games</h1>
    <div class="games-grid">
      <div v-for="game in games" :key="game.GameID" class="game-card">
        <img :src="getGameImage(game.Name)" alt="Game cover" />
        <div class="game-info">
          <h3>{{ game.Name }}</h3>
          <p>{{ game.Description }}</p>
          <p>{{ game.NbPlayers }} players</p>
          <p>{{ game.YearPublished }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const games = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/games')
    games.value = res.data
  } catch (error) {
    console.error('Failed to load games:', error)
  }
})

function getGameImage(name) {
  const images = {
    Catan: '/assets/catan.jpg',
    Chess: '/assets/chess.jpg',
    Pandemic: '/assets/pandemic.jpg',
    'Ticket to Ride': '/assets/ticket.jpg',
    Carcassonne: '/assets/carcassonne.jpg',
    Dominion: '/assets/dominion.jpg',
    '7 Wonders': '/assets/7wonders.jpg',
    Codenames: '/assets/codenames.jpg',
  }
  return images[name] || '/assets/default.jpg'
}
</script>

<style scoped>
.page-wrapper {
  text-align: center;
  padding: 40px 20px;
}

.title {
  font-size: 28px;
  margin-bottom: 30px;
  color: #222;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 24px;
  justify-items: center;
}

.game-card {
  background: white;
  border-radius: 8px;
  width: 140px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
}

.game-card:hover {
  transform: scale(1.05);
}

.game-card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.game-info {
  font-size: 12px;
  color: #333;
  text-align: center;
}

.game-info h3 {
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 600;
}
</style>