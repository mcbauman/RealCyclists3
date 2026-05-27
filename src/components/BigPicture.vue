<script setup>
const props = defineProps(["content"])
function addPicture(pitureName){
  const imageUrl = pitureName ? new URL(`../assets/images/${pitureName}`, import.meta.url).href
  : "";
  return imageUrl
}
</script>

<template>
  <img class="modelPicture" :src="addPicture(content.picture)" alt="" />
  <section :class="content.orientation + ' ' + content.colorSchema">
    <h3>{{ content.title }}</h3>
    <p>
      {{ content.text }}
    </p>
  </section>
</template>

<style scoped>

section {
  /* max-width: 100%; */
  position: absolute;
  box-sizing: border-box;
  /* background: radial-gradient(circle, var(--gradient1), var(--gradient1), var(--gradient2)); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background:var(--bgText);
  text-shadow: 0 0 3px var(--textInverted);
  color: var(--text);
  padding:10px
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
  border-radius: 10px 10px 0 0;
}

.topright {
  width: 40%;
  top: 0;
  right: 0;
  border-radius:0 10px 0 10px;
}

.right {
  height: 100%;
  width: min-content ;
  /* width: 33%; */
  right: 0;
  border-radius:0 10px 10px 0 ;
}

.bottomright {
  width: 40%;
  bottom: 0;
  right: 0;
  border-radius:10px 0 10px 0;
}

.bottom {
  bottom: 0%;
  width: 100%;
  border-radius:0 0 10px 10px;
}

.bottomleft {
  width: 40%;
  bottom: 0;
  left: 0;
  border-radius:0 10px 0 10px;
}

.left{
  height: 100%;
  width: min-content ;
  left: 0;
  border-radius: 10px 10px 0 0;
}

.topleft {
  width: 40%;
  top: 0;
  left: 0;
  border-radius:10px 0 10px 0;
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