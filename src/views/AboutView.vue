<script setup>
import Article from '@/components/Article.vue';
const articles = [{
  title:"Title",
  text:"text",
  content:[{
    title:"Title",
    text:"text",
  }]
},{
  title:"Title",
  text:"text",
  content:[{
    title:"Title",
    text:"text",
  }]
},{
  title:"Title",
  text:"text",
  content:[{
    title:"Title",
    text:"text",
  }]
}
]
</script>

<template>
  <main>
    <Article v-for="article in articles" :article="article"/>
  </main>
</template>