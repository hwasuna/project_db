<template>
  <section>
    <h2>Planned Events</h2>
    <div class="event-grid">
      <div v-for="event in events" :key="event.EventID" class="event-card">
        <h3>{{ event.GameName }}</h3>
        <p><strong>Date:</strong> {{ new Date(event.EventDate).toISOString().split('T')[0] }}</p>
        <p><strong>Time:</strong> {{ event.EventTime }}</p>
        <p><strong>Location:</strong> {{ event.Location }}</p>
        <p><strong>Organizer:</strong> {{ event.Organizer }}</p>
        <button class="details-button" @click="openModal(event)">See Details</button>
      </div>
    </div>

    <div v-if="selectedEvent" class="modal" @click.self="selectedEvent = null">
      <div class="modal-content">
        <h3>{{ selectedEvent.GameName }}</h3>
        
        <p><strong>Date:</strong> {{ new Date(selectedEvent.EventDate).toISOString().split('T')[0] }}</p>
        <p><strong>Time:</strong> {{ selectedEvent.EventTime }}</p>
        <p><strong>Location:</strong> {{ selectedEvent.Location }}</p>
        <p><strong>Organizer:</strong> {{ selectedEvent.Organizer }}</p>
        <button @click="selectedEvent = null">Close</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlannedEvents",
  data() {
    return {
      events: [],
      selectedEvent: null,
    };
  },
  mounted() {
    fetch("http://localhost:4000/api/events")
      .then((res) => res.json())
      .then((data) => {
        this.events = data;
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
      });
  },
  methods: {
    openModal(event) {
      this.selectedEvent = event;
    }
  }
};
</script>

<style scoped>
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  justify-content: center;
}

.event-card {
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  background: white;
}

.details-button {
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.details-button:hover {
  background-color: #333;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  text-align: center;
}
</style>