<script setup>
import { ref, provide, watchEffect } from 'vue'
import Header from './components/Header.vue';
import { useContentStore } from '@/stores/content';
import Article from '@/components/Article.vue';
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
    <Article v-for="article in content.contentDisplayd" :article="article"/>
  </main>
</template>
