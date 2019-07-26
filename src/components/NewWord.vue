<template>
  <div class="from-container">
    <form @submit.prevent="onSubmit()">
      <input type='text' v-model="nieuwWord" class="text-input" placeholder="Voer een woord in..">
      <input type='text' v-model="nieuwDescription" class="text-input" placeholder="Voer een description in..">
      <button type=submit class="button">Save</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "NewWord",
  data() {
    return {
      nieuwWord: '',
      nieuwDescription: '',
    }
  },
  methods: {
    onSubmit() {
      const object = {}
      this.nieuwWord ? object.word = this.nieuwWord : alert('Voer een woord in!')
      this.nieuwDescription ? object.description = this.nieuwDescription : alert('Voer een description in!')

      console.log('test', this.nieuwWord)
    }
  },
}
</script>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: row;
  }
  .text-input {
    width: 20vw;
    height: 1.2rem;
    border-radius: 5px;
  }
  .button {
    width: 5vw;
    height: 1.2rem;
    border: none;
    border-radius: 5px;
    background-color: lightblue;
    margin-left: 2rem;
  }
</style>


