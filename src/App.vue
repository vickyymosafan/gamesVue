<script setup lang="ts">
import GameHand from './components/GameHand.vue'
import GameChoice from './components/GameChoice.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import { useGame } from './composables/useGame'
import { CHOICES, EMOJIS, getResultMessage } from './types'

const {
  score,
  playerChoice,
  computerChoice,
  result,
  isLoading,
  playGame,
  resetGame
} = useGame()
</script>

<template>
  <ParticleBackground />
  
  <div class="game-container">
    <h1>Rock Paper Scissors</h1>
    <div class="score-container">
      <div class="score">Score: {{ score }}</div>
      <button class="new-game-btn" @click="resetGame">New Game</button>
    </div>
    
    <div class="hands">
      <GameHand
        :emoji="playerChoice ? EMOJIS[playerChoice] : '🤔'"
        :is-shaking="!!playerChoice"
        :is-winner="result === 'win'"
      />
      <div v-if="isLoading" class="loading"></div>
      <GameHand
        v-else
        :emoji="computerChoice ? EMOJIS[computerChoice] : '🤖'"
        :is-shaking="!!computerChoice"
        :is-winner="result === 'lose'"
      />
    </div>
    
    <div class="result">{{ getResultMessage(result) }}</div>
    
    <div class="choices">
      <GameChoice
        v-for="choice in CHOICES"
        :key="choice"
        :choice="choice"
        :emoji="EMOJIS[choice]"
        :disabled="isLoading"
        :on-select="playGame"
      />
    </div>
  </div>
</template>