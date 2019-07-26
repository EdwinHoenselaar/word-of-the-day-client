<template>
  <div>
    <h1>{{this.currentWord.word}}</h1>
    <h3>{{this.currentWord.description}}</h3>
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
  created() {
    axios
      .get('http://localhost:3000/words')
      .then(res => {
        this.words = res.data.word
        this.currentWord = this.words[Math.floor(Math.random() * this.words.length)]
      })
      .catch(err => console.log(err))
  },
}
</script>

