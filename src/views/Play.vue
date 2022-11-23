<template>
  <div class="all">
    <h3 id="number">Question {{rightAnswers + 1}}</h3>
    <h3 id="category">{{category}}</h3>
    <h3 id="difficulty" v-if="difficulty === 'easy'">⭐️</h3>
    <h3 id="difficulty" v-if="difficulty === 'medium'">⭐️⭐️</h3>
    <h3 id="difficulty" v-if="difficulty === 'hard'">⭐️⭐️⭐️</h3>
    <p id="question">{{question}}</p>
    <div id="ok" class="primeiro">
      <button @click="answerCheck($event)" id="button" :value="allAnswers[0]">{{allAnswers[0]}}</button>
    </div>
    <div id="ok" class="segundo">
      <button @click="answerCheck($event)" id="button" :value="allAnswers[1]">{{allAnswers[1]}}</button>
    </div>
    <div id="ok" class="terceiro">
      <button @click="answerCheck($event)" id="button" :value="allAnswers[2]">{{allAnswers[2]}}</button>
    </div>
    <div id="ok" class="quarto">
      <button @click="answerCheck($event)" id="button" :value="allAnswers[3]">{{allAnswers[3]}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Play",
    data(){
      return{
        question: '',
        correctAnswer: '',
        incorrectAnswers: [],
        difficulty: '',
        category: '',
        rightAnswers: 0,
        allAnswers: []
      }
    },
    created(){
      this.getQuestion()

      if(!this.getStoredScore('bestScore')){
        this.setScore('bestScore', '0')
      }
    },
    beforeUnmount(){
      if(this.getStoredScore('bestScore') < this.rightAnswers){
        this.setScore('bestScore', this.rightAnswers)
      }
    },
    computed:{
      categories(){
        return this.$store.getters['getCategories'].filter(categories =>{
          return categories.selected
        })
      },
    },
    methods:{
      shuffleArray(array){
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1))
          var temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }   
      },

      async getQuestion(){
        let cat = this.categories.map(x => x.name)

        const res = await fetch('https://the-trivia-api.com/api/questions?' + new URLSearchParams({
          categories: cat,
          limit: 1,
        }))
        const data = await res.json()

        this.question = data[0].question
        this.correctAnswer = data[0].correctAnswer
        this.difficulty = data[0].difficulty
        this.incorrectAnswers = [...data[0].incorrectAnswers]
        this.category = data[0].category
        this.allAnswers = [data[0].correctAnswer, ...data[0].incorrectAnswers]
        this.shuffleArray(this.allAnswers)
      },
      answerCheck(e){
        const clicked = e.target.value
        if(clicked === this.correctAnswer){
          console.log('certo')
          this.rightAnswers++
          this.getQuestion()
        }
        else{
          this.$store.dispatch('addScore', this.rightAnswers)
          this.$router.push('lose')
        }
      },
      setScore(name, value){
        window.localStorage.setItem(name, value)
      },
      getStoredScore(name){
        return window.localStorage.getItem(name)
      }
    }
  }
  
</script>

<style scoped>
.all{
  font-family: 'Montserrat';
  color: #cccc;
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(4,25%);
  grid-template-rows: repeat(8,10%);
  margin: 15vh 0;
}

#number{
  grid-column: 2;
  padding: 0 10px;
 
}
#category{
  grid-row: 2;
  grid-column: 2;
  padding: 0 10px;
}
#difficulty{
  justify-self: flex-end;
  padding: 0 10px;
}
#question{
  word-break: break-word;
  padding: 0 10px;
  grid-row: 3/span 2;
  grid-column: 2/span 2;
}
.primeiro{
  grid-row: 6;
  grid-column: 2;
}
.segundo{
  grid-row: 6;
  grid-column: 3;
}
.terceiro{
  grid-row: 7;
  grid-column: 2;;
}
.quarto{
  grid-row: 7;
  grid-column: 3;
}

#button{
  background-color: rgb(124, 77, 199);
  cursor: pointer;
  width: 98%;
  height: 95%;
  align-items: center;
  border: none;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-size: auto;
}
#button:hover{
  background-color: rgb(124, 77, 250);
}
</style>