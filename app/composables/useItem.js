
import { createCommunicationManager } from '~/services/communicationManager'

export function useItem(id) {
  const api = createCommunicationManager()

  /*
   * useAsyncData() és un composable propi de Nuxt que permet
   * carregar dades asíncrones, també durant el renderitzat al servidor (SSR).
   *
   * Rep dos paràmetres:
   *
   * 1. KEY: identificador únic de la consulta.
   *    Construïm `item-${id}` perquè cada recepta tingui
   *    una clau diferent (item-52772, item-52814...).
   *    Nuxt utilitza aquesta clau per identificar i reutilitzar
   *    les dades de la consulta, evitant peticions innecessàries.
   *
   * 2. FUNCIÓ ASÍNCRONA: funció que obté les dades.
   *    En aquest cas, cridem el nostre CommunicationManager
   *    perquè consulti la recepta a l'API amb Axios.
   *
   * useAsyncData() retorna automàticament:
   * - data: dades obtingudes (la recepta).
   * - pending: indica si la consulta està pendent.
   * - error: error produït durant la consulta.
   * - refresh(): permet tornar a executar la consulta.
   *
   * Si la consulta s'executa al servidor, Nuxt transfereix
   * les dades al navegador durant la hidratació, sense
   * haver de repetir la mateixa petició inicial.
   */
  return useAsyncData(
    `item-${id}`,
    () => api.getItemById(id)
  )
}
