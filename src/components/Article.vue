<script setup>
import Normal from './Normal.vue';
import BigPicture from './BigPicture.vue';
import TextOnly from './TextOnly.vue';
import Triple from './Triple.vue';
import Video from './Video.vue';
// import OpenArticle from './OpenArticle.vue';
const props = defineProps(["article"])
</script>

<template>
    <div v-if="article.viewStyle==='normal'">
        <Normal :content=article />
    </div>
    <div v-if="article.viewStyle==='bigPicture'">
        <BigPicture :content=article />
    </div>
    <div v-if="article.viewStyle==='textOnly'">
        <TextOnly :content=article />
    </div>
    <div v-if="article.viewStyle==='video'">
        <TextOnly :content=article.videoLink />
    </div>
        <div v-if="article.viewStyle==='triple'">
        <Triple :content=article />
    </div>
    <!-- <article>
        <h3>{{ article.title }}</h3>
        <p>{{ article.text }}</p>
    </article> -->
</template>

<style>
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