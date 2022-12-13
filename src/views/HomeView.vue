<template>
  <div class="tudo">
    <h2>Select Categories</h2>
    <div class="checkbox-container" v-for="(category, index) in categories" :key="index">
      <div id="input" class="checkbox-container">
        <input type="checkbox" name="category"  v-model="category.selected"/>
        <span>{{category.name}}</span>
      </div>
    </div>
  </div>
  <button @click="$router.push('play')">Play</button>
</template>

<script>
// @ is an alias to /src
  export default {
    name: 'HomeView',
    data(){
      return {
        categories: []
      }
    },
    mounted(){
      this.fetchCategories()
    },
    watch:{
      categories:{
        handler(newValue){
          this.$store.dispatch('addCategories', newValue)
        },
        deep: true
      }
    },
    methods:{
      async fetchCategories(){
        const res = await fetch('https://the-trivia-api.com/api/categories')
        const data = await res.json()
        for (var key in data){
          let category = {
            name: key,
            selected : false,
          }
          this.categories.push(category)
        }
      },
  }
}
</script>

<style scoped>
.tudo{
  font-family: "Montserrat";
  margin: 0 auto;
  max-width: 250px;
  border: 2px solid;
  border-radius: 5px;
  margin-top: 15vh;
  padding: 10px;
}
.tudo h2{
  margin-left: 5px;
  margin-top: 3px;
}
.checkbox-container{
  margin-left: 3%;
  max-width: 250px;
}
.checkbox-container #input{
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5px;
}
.checkbox-container span{
  margin-left: 5px;
}
button{
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  width: 250px;
  height: 40px;
  border: 2px solid;
  border-radius: 180px;
  font-size: 30px;
  background-color: rgb(124, 77, 199); 
  cursor: pointer;
}
button:hover{
  background-color: rgb(124, 77, 250);
}
</style>