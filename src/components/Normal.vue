<script setup>
import { useContentStore } from '@/stores/content';
const contentstore = useContentStore()
const props = defineProps(["content"]);
</script>

<template>
    <article @click="contentstore.currentArticle = content">
      <h1>normal Component</h1>
      <img
        class="homePictures"
        v-if="content.picture"
        :src="content.picture"
        :alt="content.picture"
      />
      <div>
        <h3>{{ content.title }}</h3>
        <p>{{ content.text }}</p>
      </div>
    </article>
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