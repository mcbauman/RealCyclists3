<script setup>
import { inject } from "vue";

const theme = inject("theme");
const toggleTheme = inject("toggleTheme");
</script>

<template>
  <header>
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
</style>
