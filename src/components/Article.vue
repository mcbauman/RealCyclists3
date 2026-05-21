<script setup>
const props = defineProps(["article"])

</script>

<template>
    <article>
        <h3>{{ article.title }}</h3>
        <p>{{ article.text }}</p>
    </article>
</template>

<style scoped>
    article{
        background-color: var(--bgText);
        padding: 10px;
        border-radius: 10px;
        margin-top: 20px;
        backdrop-filter: blur(10px);
    }

    h3{
        margin: 5px 0 5px 0;
        /* padding: 0; */
    }
    p{
        margin: 0;
    }
</style>