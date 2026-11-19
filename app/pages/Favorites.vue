<template>
    <div>
        PAgina de favorits
          <div v-for="item in favoritesStore.favorites" :key="item.idMeal"  class="card-link">
                
                    <itemCard :itemInfo="item" >
                      <template #actions>
                           <button @click="favoritesStore.removeFavorite(item.idMeal)">Eliminar de Favorit</button>
                      </template>
                    </itemCard>
                </div>
    </div>
</template>

<script setup>

const favoritesStore = useFavoritesStore()

useHead({
  title: 'Favorits',
  meta: [
    { name: 'La pagina de favorits del coleccionista', content: 'El coleccionista digital.' },
  ],
 /* bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }],*/
})
</script>

<style scoped>

</style>