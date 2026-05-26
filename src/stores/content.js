import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {articles} from '../assets/articles'


export const useContentStore = defineStore('content', () => {
  const content = articles
  return { content}
})
