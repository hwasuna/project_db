<template>
    <section class="greeting">
      <h2>Welcome Back,<br />Rith Chea</h2>
      <div class="buttons">
        <button class="primary">Create an event</button>
        <button class="secondary">Invite Friends</button>
      </div>
    </section>
  </template>
  
  <style scoped>
  .greeting {
    text-align: center;
    padding: 2rem;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  button.primary {
    background: black;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
  }
  
  button.secondary {
    background: white;
    color: black;
    border: 1px solid black;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
  }
  </style>