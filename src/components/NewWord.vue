<template>
  <div>
    <form v-on="this.onSubmit">
      <input type='text'>
      <button type=submit>Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewWord",
  data() {
    return {
      nieuwWord: '',
    }
  },
  methods: {
    onSubmit(value) {
      this.nieuwWord = value
    }
  },
}
</script>

