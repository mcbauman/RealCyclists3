<script setup>
const props = defineProps(["content"]);
const imageUrl = props.content.picture
  ? new URL(`../assets/images/${props.content.picture}`, import.meta.url).href
  : "";
</script>

<template>
  <img
    class="homePictures"
    v-if="content.picture"
    :src="imageUrl"
    :alt="content.title"
  />
  <div>
    <h3>{{ content.title }}</h3>
    <p>{{ content.text }}</p>
  </div>
</template>

<style scoped>
.homePictures {
  width: 300px;
  height: 225px;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
}
div{
  padding: 20px;;
}
@media only screen and (max-width: 900px) {
  article {
    flex-direction: column;
  }
  .homePictures {
    width: 100%;
    border-radius:10px 10px 0 0;
  }
}
</style>