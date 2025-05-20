<template>
  <div class="user-greeting">
    <h2>Welcome Back, <br /> {{ userName }}</h2>
    <div class="button-group">
      <button class="btn-black" @click="handleCreateEvent">Create an event</button>
      <button class="btn-white" @click="handleRateGame">Rate a game</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserGreeting",
  props: {
    userName: String,
  },
  methods: {
    handleCreateEvent() {
      this.$router.push('/event')
    },
    handleRateGame() {
      this.$router.push('/rating')
    }
  }
};
</script>

<style scoped>
.user-greeting {
  text-align: center;
  margin: 2rem 0;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-black {
  background-color: black;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn-white {
  background-color: white;
  color: black;
  border: 2px solid black;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

h2 {
  font-size: 3rem;
}
</style>