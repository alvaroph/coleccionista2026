
<template>
  <div class="detail">
    <NuxtLink to="/">← Tornar</NuxtLink>

    <p v-if="pending">Carregant recepta...</p>

    <p v-else-if="error">
      Error de comunicació amb el servidor.
    </p>

    <p v-else-if="!item">
      No s'ha trobat aquesta recepta.
    </p>

    <div v-else>
      <h1>{{ item.strMeal }}</h1>

      <p>{{ item.strCategory }} - {{ item.strArea }}</p>

      <img :src="item.strMealThumb" :alt="item.strMeal">

      <h2>Preparació</h2>
      <p class="instructions">{{ item.strInstructions }}</p>

    
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: item, pending, error } =
  await useItem(route.params.id)
</script>

<style scoped>
.detail {
  max-width: 850px;
  margin: 0 auto;
  padding: 30px;
}

img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

h1 {
  margin: 20px 0;
}

.instructions {
  line-height: 1.8;
  white-space: pre-line;
}
</style>
