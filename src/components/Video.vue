<script setup>
const props = defineProps(["videourl"])
</script>
<template>
    <iframe
    width="100%"
    height="810"
    :src="videourl.videoLink"
    title="LTKurz"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>