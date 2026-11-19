import axios from 'axios'
import { useRuntimeConfig } from '#imports'

export function createCommunicationManager() {

  // Obtenim la configuració de Nuxt
  const config = useRuntimeConfig()

  // Instància d'Axios amb la URL base de l'API
  const api = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000
  })

  // 1. Obtenir totes les categories (FET)
  async function getCategories() {
    const response = await api.get('/categories.php')
    return response.data.categories
  }

  // 2. Cercar receptes pel nom (FET)
  async function searchItems(query) {
    const response = await api.get('/search.php', {
      params: { s: query }
    })
    console.log(response.data.meals)
    return response.data.meals ?? []
  }

  // 3. Obtenir receptes d'una categoria (PER FER)
  async function getItemsByCategory(category) {
    // TODO: Fer una petició GET a /filter.php
    // TODO: Enviar la categoria com a paràmetre "c"
    // TODO: Retornar l'array de receptes

    const response = await api.get('/filter.php', {
      params: { c: category }
    })
    return response.data.meals ?? []

  }

  // 4. Obtenir els detalls d'una recepta (PER FER)
  async function getItemById(id) {
    // TODO: Fer una petició GET a /lookup.php
    // TODO: Enviar l'identificador com a paràmetre "i"
    // TODO: Retornar una única recepta, no un array
   const response = await api.get('/lookup.php', {
      params: { i: id }
    })

    return response.data.meals?.[0] ?? null

  }

  return {
    getCategories,
    searchItems,
    getItemsByCategory,
    getItemById
  }
}