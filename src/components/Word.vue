<template>
  <div class="container">
    <h1 class="word">{{this.currentWord[0].word}}</h1>
    <h3 class="description">{{this.currentWord[0].description}}</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Word',
    data() {
    return {
      words:[],
      currentWord: {},
    }
  },
  methods: {
    capitalize (s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  },
  created() {
    // Changed the backend endpoint, but saved this bit of code for now

    // axios
    //   .get('http://localhost:3000/words')
    //   .then(res => {
    //     this.words = res.data.word
    //     this.currentWord = this.words[Math.floor(Math.random() * this.words.length)]
    //     this.currentWord.word = this.capitalize(this.currentWord.word)
    //   })
    //   .catch(err => console.log(err))

    axios
      .get('http://localhost:3000/word')
      .then(res => {
        this.currentWord = res.data.word
        this.currentWord[0].word = this.capitalize(this.currentWord[0].word)
      })
      .catch(err => console.log(err))
  },
}
</script>

<style>
  .container {
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    background-size: 100% 100%;
    background-image: url('https://cdn.pixabay.com/photo/2017/02/05/15/04/zen-2040340_960_720.jpg');
    color: white;
  }
  .word {
    font-family: 'Indie Flower', cursive;
    margin-top: 20vh;
    margin-left: 20vw;
  }
  .description {
    margin-left: 20vw;
    margin-top: 5vh;
  }
</style>
