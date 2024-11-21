<script setup lang="ts">
import type { Choice } from '../types'

defineProps<{
  choice: Choice
  emoji: string
  disabled: boolean
  onSelect: (choice: Choice) => void
}>()
</script>

<template>
  <button
    class="choice-btn"
    @click="onSelect(choice)"
    :disabled="disabled"
  >
    {{ emoji }}
  </button>
</template>