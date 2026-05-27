<script setup>
import { ref, provide, watchEffect } from 'vue'
import Header from './components/Header.vue';
import { useContentStore } from '@/stores/content';
import Normal from './components/Normal.vue';
import Inverted from './components/Inverted.vue';
import BigPicture from './components/BigPicture.vue';
import TextOnly from './components/TextOnly.vue';
import Triple from './components/Triple.vue';
import Video from './components/Video.vue';
import OpenArticle from './components/OpenArticle.vue';
const content = useContentStore()

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

provide('theme', theme)
provide('toggleTheme', toggleTheme)

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<template>
  <Header/>
  <main>
    <OpenArticle v-if="content.currentArticle" />
    <div v-for="article in content.contentDisplayd" @click="content.currentArticle = article">
      <article v-if="article.viewStyle==='normal'">
        <Normal :content=article />
      </article>
      <article v-if="article.viewStyle==='inverted'">
        <Inverted :content=article />
      </article>
      <article v-if="article.viewStyle==='bigPicture'">
        <BigPicture :content=article />
      </article>
      <article v-if="article.viewStyle==='textOnly'">
        <TextOnly :content=article />
      </article>
      <article v-if="article.viewStyle==='video'">
        <Video :content=article.videoLink />
      </article>
      <article v-if="article.viewStyle==='triple'">
        <Triple :content=article />
      </article>
    </div>
  </main>
</template>
<style scoped>
  main{
  /* background-color: var(--bgText); */
  color: var(--text);
  padding: 50px 20px 20px 20px;
  margin: 0;
  min-height: 100vh;
}
article{
    background-color: var(--bgText);
    border-radius: 10px;
    margin-top: 20px;
    backdrop-filter: blur(10px);
    display: flex;
    transition: all 0.3s;
}
article:hover{
  box-shadow: 2px 2px 5px var(--text);
  transform: translate(2px, 2px);
}

</style>