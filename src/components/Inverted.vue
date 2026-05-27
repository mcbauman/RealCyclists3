<script setup>
const props = defineProps(["content"]);
const imageUrl = props.content.picture
  ? new URL(`../assets/images/${props.content.picture}`, import.meta.url).href
  : "";
</script>

<template>
    <div>
    <h3>{{ content.title }}</h3>
    <p>{{ content.text }}</p>
  </div>
  <img
    class="homePictures"
    v-if="content.picture"
    :src="imageUrl"
    :alt="content.title"
  />
</template>

<style scoped>
.homePictures {
  width: 300px;
  height: 225px;
  object-fit: cover;
  border-radius:0 10px 10px 0;
}
div{
  padding:10px 20px;
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