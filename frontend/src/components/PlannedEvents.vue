<template>
    <section class="planned">
      <h3>MY EVENTS PLANNED</h3>
      <div class="cards">
        <div class="event" v-for="(event, index) in events" :key="index">
          <img :src="event.image" />
          <p>
            <strong>{{ event.title }}</strong><br />
            {{ event.duration }}<br />
            {{ event.players }}
          </p>
          <ul>
            <li>📅 {{ event.date }}</li>
            <li>🕕 {{ event.time }}</li>
            <li>📍 {{ event.location }}</li>
            <li>👥 {{ event.people.join(', ') }}</li>
          </ul>
          <button class="slots">{{ event.slots }} player left</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PlannedEvents',
    data() {
      return {
        events: [
          {
            title: 'Operation',
            image: '/operation.png',
            duration: '10–60 minutes',
            players: '2 players',
            date: '07/05/2025',
            time: '6pm',
            location: 'Bde, 1st flr',
            people: ['Rith', 'Hawa', 'Lina'],
            slots: 1
          },
          {
            title: 'Monopoly',
            image: '/monopoly.png',
            duration: '10–60 minutes',
            players: '2 players',
            date: '07/05/2025',
            time: '6pm',
            location: 'Bde, 1st flr',
            people: ['Rith', 'Hawa', 'Lina'],
            slots: 2
          },
          {
            title: 'Jenga',
            image: '/jenga.png',
            duration: '10–60 minutes',
            players: '2 players',
            date: '07/05/2025',
            time: '6pm',
            location: 'Bde, 1st flr',
            people: ['Rith', 'Hawa', 'Lina'],
            slots: 4
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .planned {
    background: black;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
  }
  .cards {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .event {
    background: white;
    color: black;
    border-radius: 10px;
    padding: 1rem;
    width: 200px;
    text-align: left;
  }
  .event img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
  }
  .slots {
    background: black;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    width: 100%;
    cursor: default;
  }
  </style>