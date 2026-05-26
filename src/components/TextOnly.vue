<script setup>
import { useContentStore } from '@/stores/content';
const contentstore = useContentStore()
const props = defineProps(["content"]);
</script>

<template>
    <article @click="contentstore.currentArticle = content">
    <h3>textOnly</h3>
      <div>
        <h3>{{ content.title }}</h3>
        <p>{{ content.text }}</p>
      </div>
    </article>
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