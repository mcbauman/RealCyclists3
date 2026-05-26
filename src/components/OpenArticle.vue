<script setup>
import { storeToRefs } from "pinia";
import { useConfigStore } from "@/stores/configStore";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

const configStore = storeToRefs(useConfigStore());
const { openArticle } = configStore;
</script>
<template>
  <div class="modalBackground">
    <section class="articleModal">
      <h3 class="articleModalHeader">
        {{ openArticle.header }}
        <button @click="openArticle = false">
          <CloseIcon />
        </button>
      </h3>
      <div class="alticleContent">
        <article class="acticleSection">
          <img
            class="homePictures"
            v-if="openArticle.picture"
            :src="openArticle.picture"
            :alt="openArticle.picture"
          />
          <div>
            <h3>{{ openArticle.title }}</h3>
            <p>{{ openArticle.text }}</p>
          </div>
        </article>
         <div class="moreContent">
          <div v-for="section in openArticle.section">
            <img
              class="homePictures" v-if="section.picture" 
              :src="section.picture"
              :alt="section.picture"
            />
            <span>
              <h3>{{ section.title }}</h3>
              <p>{{ section.text }}</p>
            </span>
          </div>
        
        </div>
      </div>
      <button @click="openArticle = false"><CloseIcon /> Schließen</button>
      <div class="endSpace"></div>
    </section>
  </div>
</template>
<style scoped>
p, h3{
  padding:0 20px;
  line-height: 2em;
}

h3{
  font-size: x-large;
}

p{
  font-size: larger;
}

.modalBackground {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  background-color: var(--gradient2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.articleModal {
    position: absolute;
    box-sizing: border-box;
    width: 90%;
    max-width: 1440px;
    max-height: 100%;
    overflow: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    box-shadow: 0 0 3px var(--colorMenu);
}

.articleModalHeader {
  display: flex;
  background-color: var(--backgroundHeader);
  color: var(--acticleColorHover);
  justify-content: space-between;
  align-items: center;
  margin: 0;
  border-radius: 10px 10px 0 0;
  padding: 0 20px;
}

.alticleContent{
  max-height: 80vh;
  border-radius: 0 0 10px 10px;
  /* padding: 10px; */
  overflow-y: auto;
  overflow-x: hidden;
}

.acticleSection {
  display: flex;
  margin: 20px;
  box-shadow: 0 0 1px var(--colorMenu);
}

.moreContent{
  background-color: var(--articleBG);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(246, 240, 239, 0.4);
  margin: 30px 20px;
  border-radius: 10px;
  transition: all 0.5s;
}

.moreContent>div{
  margin: 20px 0;
}

.mainPicture {
  width: 30%;
  border-radius: 10px;
  object-fit: cover;
}

.homePictures {
  width: 300px;
  height: 225px;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
}


@media only screen and (max-width: 900px) {
  article {
    flex-direction: column;
  }
  .homePictures {
    width: 100%;
    border-radius:10px 10px 0 0;
  }
}
@media only screen and (max-width: 900px) {
  article {
    flex-direction: column;
  }

  .modelPicture {
    width: 100%;
  }
}

@media only screen and (max-width: 700px) {
section {
    position: relative;
    width: unset;
    padding: 5px;
  }
}
</style>