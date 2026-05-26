<script setup>
const props = defineProps(["content"])
import { useContentStore } from '@/stores/content';
const contentstore = useContentStore()
</script>

<template>
  <article @click="contentstore.currentArticle = content">
  <h3>BigPicture</h3>
    <img class="modelPicture" :src="content.picture" alt="" />
    <section :class="content.orientation + ' ' + content.colorSchema">
      <h4>{{ content.header }}</h4>
      <h3>{{ content.title }}</h3>
      <p>
        {{ content.text }}
      </p>
    </section>
  </article>
</template>

<style scoped>

section {
  max-width: 100%;
  position: absolute;
  box-sizing: border-box;
  /* background: radial-gradient(circle, var(--gradient1), var(--gradient1), var(--gradient2)); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  text-shadow: 0px 0px 3px var(--gradient1);
  padding:10px
}

.blackOnWhite{
  background: radial-gradient(circle, var(--gradient3), var(--gradient3), var(--gradient4));
  text-shadow: 0 0 3px white;
  color: black;
}

.inverted{
  background: radial-gradient(circle, var(--gradient1), var(--gradient1), var(--gradient2));
  text-shadow: 0 0 3px black;
  color: white;
}

.modelPicture {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 30px var(--shadow);
}

.top {
  top: 0;
  /* max-width: 100%; */
  width: 100%;
}

.topright {
  width: 40%;
  top: 0;
  right: 0;
}

.right {
  height: 100%;
  width: min-content ;
  /* width: 33%; */
  right: 0;
}

.bottomright {
  width: 40%;
  bottom: 0;
  right: 0;
}

.bottom {
  bottom: 0%;
  width: 100%;
}

.bottomleft {
  width: 40%;
  bottom: 0;
  left: 0;
}

.left{
  height: 100%;
  width: min-content ;
  left: 0;
}

.topleft {
  width: 40%;
  top: 0;
  left: 0;
}

@media only screen and (max-width: 900px) {
  article {
    flex-direction: column;
  }

  section{
    text-shadow: none;
  }

  .modelPicture {
    width: 100%;
  }
  .blackOnWhite{
  background: radial-gradient(circle,  black);
  text-shadow: none;
  color: white;
}

.inverted{
  background: radial-gradient(circle,  black);
  text-shadow: none;
  color: white;
}
}

@media only screen and (max-width: 700px) {
section {
    position: relative;
    width: unset;
    padding: 5px;
  }
  .top, .topright, .right, .bottomright, .bottom, .bottomleft, .lef, .topleft{
    width: unset;
  }
}
  </style>