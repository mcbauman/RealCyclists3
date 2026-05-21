<script setup>
import Article from '@/components/Article.vue';
import { content } from '@/assets/content';
const articles = content
</script>

<template>
  <main>
    <Article v-for="article in articles" :article="article"/>
  </main>
</template>
