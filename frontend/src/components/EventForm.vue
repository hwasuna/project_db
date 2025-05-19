<template>
  <div class="page">
    <div class="main-container">
      <!-- Form Container -->
      <div class="form-container">
        <h2>Host An Epic Moment</h2>
        <p class="subtitle">Bring players together and share your love of board games</p>

        <form @submit.prevent="submitForm">
          <input type="text" placeholder="Event Name" v-model="form.eventName" />
          <input type="text" placeholder="Location / Address" v-model="form.address" />

          <div class="row">
            <input type="text" placeholder="City" v-model="form.city" />
            <input type="text" placeholder="Postcode" v-model="form.postcode" />
          </div>

          <input type="text" placeholder="Contact Phone" v-model="form.phone" />
          <input type="email" placeholder="E-mail" v-model="form.email" />
          <input type="text" placeholder="Game You'll Play" v-model="form.game" />

          <!-- New date and time fields -->
          <input type="date" v-model="form.date" />
          <input type="time" v-model="form.time" />

          <button type="submit">CREATE MY EVENT</button>
        </form>
      </div>

      <!-- Map Container -->
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41952.060708281215!2d2.2944813!3d48.8588443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf1e9b4363%3A0x80c2c45c0f4f1b00!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1682712000000!5m2!1sfr!2sfr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        eventName: '',
        address: '',
        city: '',
        postcode: '',
        phone: '',
        email: '',
        game: '',
        date: '',
        time: '',
        organizerId: 1
      }
    };
  },
  methods: {
    submitForm() {
      if (!this.form.date || !this.form.time) {
        alert('Please provide both date and time for the event.');
        return;
      }

      fetch('http://localhost:3000/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventName: this.form.eventName,
          address: this.form.address,
          city: this.form.city,
          postcode: this.form.postcode,
          phone: this.form.phone,
          email: this.form.email,
          game: this.form.game,
          date: this.form.date,
          time: this.form.time,
          organizerId: this.form.organizerId,
          userId: this.form.organizerId
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert('Event created!');
          this.form = {
            eventName: '',
            address: '',
            city: '',
            postcode: '',
            phone: '',
            email: '',
            game: '',
            date: '',
            time: '',
            organizerId: 1
          };
        } else {
          alert('Error: ' + data.message);
        }
      })
      .catch(err => {
        console.error('Client-side error:', err);
        alert('An unexpected error occurred.');
      });
    }
  }
};
</script>

<style scoped>
/* Background and centering */
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #f8fbff, #e6f0ff);
  padding: 40px;
}

/* Main container (form + map) */
.main-container {
  display: flex;
  width: 100%;
  max-width: 1100px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

/* Form side */
.form-container {
  flex: 1;
  padding: 40px;
}

.form-container h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}

.subtitle {
  margin-bottom: 30px;
  color: #666;
}

.form-container form {
  display: flex;
  flex-direction: column;
}

.form-container input {
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.row {
  display: flex;
  gap: 10px;
}

.row input {
  flex: 1;
}

button {
  padding: 14px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

/* Map side */
.map-container {
  flex: 1;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
