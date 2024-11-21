<script setup lang="ts">
defineProps<{
  emoji: string
  isShaking?: boolean
  isWinner?: boolean
}>()
</script>

<template>
  <div class="hand" :class="{ shake: isShaking, winner: isWinner }">
    {{ emoji }}
  </div>
</template>