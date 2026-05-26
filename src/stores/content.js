import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {articles} from '../assets/articles'


export const useContentStore = defineStore('content', () => {
  const content = articles
  const categories = [
    {title:"Alle Artikel", short:"home"},
    {title:"Testberichte", short:"testberichte"},
    {title:"Produkte", short:"produkte"},
    {title:"Reiseberichte", short:"reiseberichte"},
    {title:"Rund ums Rad", short:"rundumsrad"},
    {title:"Community", short:"community"},
  ]
  const selectedCategorie = ref("home")
  const contentFiltered = computed(() => {
    return content.filter(article => article.categorie === selectedCategorie.value)
  })
  const contentDisplayd = computed(() => {
    return selectedCategorie.value === "home" ? content : contentFiltered.value
  })
  const currentArticle = ref(false)
  
  return { content, categories, selectedCategorie, contentDisplayd, currentArticle }
})
