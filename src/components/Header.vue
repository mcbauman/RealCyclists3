<script setup>
import { inject } from "vue";

const theme = inject("theme");
const toggleTheme = inject("toggleTheme");
</script>

<template>
  <header class="webHeader">
    <RouterLink class="headerElement" to="/">Home</RouterLink>
    <RouterLink class="headerElement" to="/testberichte">Testberichte</RouterLink>
    <RouterLink class="headerElement" to="/produkte">Produkte</RouterLink>
    <RouterLink class="headerElement" to="/reiseberichte">Reiseberichte</RouterLink>
    <RouterLink class="headerElement" to="/rundumsRad">Rund ums Rad</RouterLink>
    <RouterLink class="headerElement" to="/community">community</RouterLink>
    <button class="headerElement" @click="toggleTheme">
      {{ theme === "dark" ? "🌙" : "☀️" }}
    </button>
  </header>
  <header class="phoneHeader">
    <select>
      <option value="all">Alle Artikel</option>
      <option value="testberichte">Testberichte</option>
      <option value="produkte">Produkte</option>
      <option value="reiseberichte">Reiseberichte</option>
      <option value="rundumsRad">Rund ums Rad</option>
      <option value="community">Community</option>
    </select>
        <button class="headerElement" @click="toggleTheme">
      {{ theme === "dark" ? "🌙" : "☀️" }}
    </button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black07);
  padding: 0 10px;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(5px);
  z-index: 99;
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
