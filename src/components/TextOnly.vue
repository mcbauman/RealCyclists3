<script setup>
const props = defineProps(["content"]);
</script>

<template>
  <div>
    <h3>{{ content.title }}</h3>
    <p>{{ content.text }}</p>
  </div>
</template>

<style scoped>
div{
  padding: 20px;;
}
@media only screen and (max-width: 900px) {
  article {
    flex-direction: column;
  }
}
</style>