<template>
  <div id="app">
    <Header/>
    <div>
      <Word/>
    </div>

  </div>
</template>

<script>
import Header from './components/Header'
import Word from './components/Word'

export default {
  name: 'app',
  components: {
    Header,
    Word
  }
}
</script>

<style>

</style>
