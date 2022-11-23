<template>

  <div class="router-div">
    <router-link to="/" id="title"><h1 id="title">QUIZZ</h1></router-link>
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
  import HomeView from './views/HomeView'
  import Footer from './components/Footer'

export default{
  name: 'App',
  components: {
    HomeView,
    Footer,
  }
}
</script>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cccc;
  background-color: #303030;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}
#title{
  font-family: "Sofia";
  color: rgb(124, 77, 199);
}
.router-div{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 90%;
}
.router-div #title{
  text-decoration: none;
  margin-left: 10px;
}
#app{
  width: 100vw;
  height: 100vh;
}
</style>
