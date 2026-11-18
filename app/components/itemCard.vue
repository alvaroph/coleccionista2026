
<template>
  <div class="recipe-card">
    <img
      :src="itemInfo.strMealThumb"
      :alt="itemInfo.strMeal"
      class="recipe-image"
    />

    <div class="recipe-content">
      <h3>{{ itemInfo.strMeal }}</h3>
      <p class="category">{{ itemInfo.strCategory }}</p>
      <p class="country">{{ itemInfo.strArea }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemInfo: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.recipe-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.recipe-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
}

.recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.recipe-content {
  padding: 18px;
}

h3 {
  margin: 0 0 12px;
  font-size: 18px;
  color: #231f20;
}

.category {
  display: inline-block;
  background: #e5f7fd;
  color: #007fae;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 10px;
}

.country {
  color: #666;
  font-size: 14px;
  margin: 0;
}
</style>
