<script setup>
import { useContentStore } from '@/stores/content';
import Article from '@/components/Article.vue';
const content = useContentStore()
</script>

<template>
  <main>
    <Article v-for="article in content.content" :article="article"/>
  </main>
</template>
