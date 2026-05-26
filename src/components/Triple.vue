<script setup>
const pops = defineProps(["content"])
</script>

<template>
  <article>
    <h3 v-if="content.title && content.title.length > 0">{{ content.title }}</h3>
    <p v-if="content.text && content.text.length > 0">{{ content.text }}</p>
    
    <div class="trippleComponent">
      <div 
        v-for="(element, index) in content.content" 
        :key="index"
        class="trippleComponentContent"
        :style="{ backgroundImage: 'url(' + element.picture + ')' }"
        @click="handleClick(element)"
      >

        <div class="content" >
          <div :class="'textBoxWP '+element.colorSchema">
            <h4>{{ element.header }}</h4>
            <h3>{{ element.title }}</h3>
            <p>{{ element.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.trippleComponent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  gap: 10px;
  box-sizing: border-box;
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

.trippleComponentContent {
  position: relative;
  width: 32%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  box-shadow: 0 4px 30px var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.trippleComponentContent:hover .textBoxWP {
  /* display: block; */
  opacity: 1;
}


/* Overlay über dem Bild */
.colorOverlay {
  position: absolute;
  inset: 0;
  opacity: 0.4;
}

/* Content sitzt unten */
.content {
  position: relative;
  z-index: 1;
  /* padding: 10px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  overflow-y: auto;
}

.textBoxWP {
  /* background: rgba(0, 0, 0, 0.25); */
  backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 6px;
  /* display: none;  */
  opacity: 0;
  transition: all 0.6s ease;
  height: 100%;
}

@media only screen and (max-width: 900px) {
  main {
    padding: 5px;
  }
  .textBoxWP {
    display: block;
    opacity: 1;
  }
}

@media only screen and (max-width: 700px) {
  .trippleComponent {
    flex-direction: column;
    height: auto;
  }

  .trippleComponentContent {
    width: 100%;
    /* height: 200px; */
  }
}
</style>