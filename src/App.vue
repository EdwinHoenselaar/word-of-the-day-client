<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import Word from './components/Word'
import NewWord from './components/NewWord'

export default {
  name: 'app',
  components: {
    Header,
    Word,
    NewWord
  }
}
</script>

<style>

</style>
