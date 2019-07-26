<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Word from './components/Word'
import NewWord from './components/NewWord'

export default {
  name: 'app',
  components: {
    Word,
    NewWord
  }
}
</script>

<style>

</style>
