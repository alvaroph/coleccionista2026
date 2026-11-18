import { createCommunicationManager } from '~/services/communicationManager'

export function useSearch() {

  const query = ref('')
  const results = ref([])
  const loading = ref(false)
  const error = ref(null)
  const hasSearched = ref(false)

  const api = createCommunicationManager()

  async function search() {
    if (loading.value) return

    loading.value = true
    error.value = null
    results.value = []
    hasSearched.value = false

    try {
      results.value = await api.searchItems(query.value)
      hasSearched.value = true

    } catch (e) {
      error.value = 'Error de comunicació amb el servidor'
      console.error(e)

    } finally {
      loading.value = false
    }
  }

  return {
    query,
    results,
    loading,
    error,
    hasSearched,
    search
  }
}
