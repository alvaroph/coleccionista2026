<template>
    <div class="search">
        <div class="search-bar">
            <input type="text" v-model="query" placeholder="Cerca una recepta..." @keyup.enter="search" />

            <button @click="search" :disabled="loading">
                {{ loading ? 'Cercant...' : 'Cercar' }}
            </button>
        </div>

        <!-- Indicador de càrrega -->
        <p v-if="loading" class="loading">
            Carregant receptes...
        </p>

        <!-- Error de comunicació -->
        <p v-if="error" class="error" role="alert">
            {{ error }}
        </p>

        <!-- Cerca sense resultats -->
        <p v-if="hasSearched && !loading && !error && results.length === 0" class="empty">
            No s'han trobat receptes.
        </p>

        <!-- Resultats -->
        <div class="results">
            <div v-for="item in results" :key="item.idMeal">
                <!--NuxtLink v-for="item in results" :key="item.idMeal" :to="`/item/${item.idMeal}`" class="card-link"-->
                <div v-for="item in results" :key="item.idMeal"  class="card-link">
                
                    <itemCard :itemInfo="item" >
                        <template #actions>
                            <button @click="modificarEstatFavorit(item)">Afegir/Eliminar favorit</button>
                        </template>
                    </itemCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//No faig l'import perque esta a /stores i ja s'entera nuxt

// Accedim a l'store global de favorits
const favoritesStore = useFavoritesStore()

function modificarEstatFavorit(item) {
 //si ja era favorit l'eliminem, si no era favorit l'afegim
  if (favoritesStore.isFavorite(item.idMeal)) {
    favoritesStore.removeFavorite(item.idMeal)
  } else {
    favoritesStore.addFavorite(item)
  }
}

const {
    query,
    results,
    loading,
    error,
    hasSearched,
    search
} = useSearch()

</script>

<style scoped>
.search-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

input {
    flex: 1;
    padding: 13px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

input:focus {
    outline: 2px solid #00aeef;
}

button {
    background: #00aeef;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

button:disabled {
    opacity: 0.5;
    cursor: wait;
}

.results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
}

.loading,
.error,
.empty {
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.loading {
    background: #e5f7fd;
    color: #007fae;
}

.error {
    background: #ffe6e6;
    color: #b00020;
}

.empty {
    background: #f0f0f0;
    color: #666;
}

@media (max-width: 600px) {
    .search-bar {
        flex-direction: column;
    }
}
</style>
