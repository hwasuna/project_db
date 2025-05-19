<template>
  <div class="event-form-wrapper">
    <div class="event-card">
      <h2 class="title">Create an Event</h2>
      <form @submit.prevent="submitEvent">
        <input type="date" v-model="eventDate" required />
        <input type="time" v-model="eventTime" required />
        <input type="text" v-model="location" placeholder="Location" required />
        <input type="number" v-model="organizerId" placeholder="Organizer ID" required />
        <input type="number" v-model="userId" placeholder="User ID" required />

        <select v-model="gameId" required>
          <option disabled value="">Select Game</option>
          <option v-for="game in games" :key="game.GameID" :value="game.GameID">
            {{ game.Name }}
          </option>
        </select>

        <button type="submit">Create Event</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventForm",
  data() {
    return {
      eventDate: "",
      eventTime: "",
      location: "",
      organizerId: "",
      userId: "",
      gameId: "",
      games: []
    };
  },
  mounted() {
    fetch("http://localhost:4000/api/games")
      .then((res) => res.json())
      .then((data) => {
        this.games = data;
      })
      .catch((err) => {
        console.error("Failed to fetch games:", err);
      });
  },
  methods: {
    submitEvent() {
      const eventData = {
        EventDate: this.eventDate,
        EventTime: this.eventTime,
        Location: this.location,
        OrganizerID: parseInt(this.organizerId),
        UserID: parseInt(this.userId),
        GameID: parseInt(this.gameId)
      };

      fetch("http://localhost:4000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData)
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to create event");
          alert("✅ Event successfully created");
          this.eventDate = "";
          this.eventTime = "";
          this.location = "";
          this.organizerId = "";
          this.userId = "";
          this.gameId = "";
        })
        .catch((err) => {
          console.error(err);
          alert("❌ Failed to create event");
        });
    }
  }
};
</script>

<style scoped>
.event-form-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.event-card {
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
select {
  padding: 0.75rem;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  background-color: black;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #222;
}
</style>