import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {

  // Array reactiu amb les receptes favorites
  const favorites = ref([])

  // Comprova si una recepta ja és favorita
function isFavorite(id) {
  for (var i = 0; i < favorites.value.length; i++) {
    if (favorites.value[i].idMeal === id) {
      return true;
    }
  }
  return false;
}

// Afegeix una recepta evitant duplicats
function addFavorite(item) {
  if (!isFavorite(item.idMeal)) {
    favorites.value.push(item);
  }
}

// Elimina una recepta pel seu identificador
function removeFavorite(id) {
  var result = [];
  for (var i = 0; i < favorites.value.length; i++) {
    if (favorites.value[i].idMeal !== id) {
      result.push(favorites.value[i]);
    }
  }
  favorites.value = result;
}

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite
  }
})