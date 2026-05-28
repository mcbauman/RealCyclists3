<script setup>
import { inject } from "vue";
import { useContentStore } from '@/stores/content';
const content = useContentStore()
const theme = inject("theme");
const toggleTheme = inject("toggleTheme");
</script>

<template>
  <header>
    <nav class="webHeader">
      <span class="headerElement" @click="content.selectedCategorie='home'">Home</span>
      <span class="headerElement" @click="content.selectedCategorie='testberichte'">Testberichte</span>
      <span class="headerElement" @click="content.selectedCategorie='produkte'">Produkte</span>
      <span class="headerElement" @click="content.selectedCategorie='reiseberichte'">Reiseberichte</span>
      <span class="headerElement" @click="content.selectedCategorie='rundUmsRad'">Rund ums Rad</span>
      <span class="headerElement" @click="content.selectedCategorie='community'">Community</span>
      <button class="headerElement" @click="toggleTheme">
        {{ theme === "dark" ? "🌙" : "☀️" }}
      </button>
    </nav>
    <nav class="phoneHeader">
      <select v-model="content.selectedCategorie">
        <option value="home">Alle Artikel</option>
        <option value="testberichte">Testberichte</option>
        <option value="produkte">Produkte</option>
        <option value="reiseberichte">Reiseberichte</option>
        <option value="rundUmsRad">Rund ums Rad</option>
        <option value="community">Community</option>
      </select>
          <button class="headerElement" @click="toggleTheme">
        {{ theme === "dark" ? "🌙" : "☀️" }}
      </button>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--black07);
  position: fixed;
  width: 100%;
  backdrop-filter: blur(5px);
  z-index: 99;
  margin: 0;
  padding: 0;
}
nav{
  padding: 0 10px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headerElement {
  color: var(--white);
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.6s;
  padding: 5px 15px;
  border-radius: 7px;
  font-weight: bold;
}
.headerElement:hover {
  background-color: var(--bg);
}
select{
  background-color: var(--black07);
  color: var(--white);
  width: 100%;
  line-height: 1.6;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 20px;
  border: none;
  padding: 10px 0;
}
@media (max-width: 920px) {
	.webHeader{
    display: none;
  }
}
@media (min-width:920px) {
  .phoneHeader{
    display: none;
  }
}
</style>
