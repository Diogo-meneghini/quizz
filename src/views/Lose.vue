<template>
  <div class="container">
    <div class="text">
      <h1>YOU LOSE</h1>
      <h4>YOUR SCORE: {{this.score}}</h4>
      <h4>BEST SCORE: {{this.storedScore()}}</h4>
    </div>
    <div class="btn">
      <button id="btnn" @click="$router.push('play')"><ion-icon name="refresh-outline"></ion-icon></button>
      <button id="btnn" @click="$router.push('/')"><ion-icon name="home-outline"></ion-icon></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Lose",

    computed:{
      score(){
        return this.$store.getters.getScore
      }
    },
    methods: {
      storedScore(){
        return window.localStorage.getItem('bestScore')
      }
    }
  }
</script>

<style scoped>
  .container {
    border: 2px solid;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 20vh;
    padding: 20px 60px;
  }
  .text h1{
    margin-bottom: 20px;
    font-size: 64px;
    color: rgb(124, 77, 199);
    font-family: 'Hellodark';
  }
  .btn{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  #btnn{
    cursor: pointer;
    background-color: rgb(124, 77, 199);
    height: 50px;
    width: 50px;
    padding: 5px;
    border: none;
    border-radius: 50%;
  }
  
  ion-icon{
    font-size: 32px;
    background-color: transparent;
  }
</style>