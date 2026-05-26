<script setup>
  const props = defineProps(["height","content"])
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="height"
    :height="height"
    fill="currentColor"
    class="bi bi-house"
    viewBox="0 0 16 16"
  >
    <path
      :d=content
    />
  </svg>
</template>
