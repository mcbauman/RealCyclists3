<script setup>
import { ref, provide, watchEffect } from 'vue'
import Header from './components/Header.vue';

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
  <RouterView />
</template>
