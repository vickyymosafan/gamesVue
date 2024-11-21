import { ref } from 'vue'
import confetti from 'canvas-confetti'
import type { Choice, GameResult } from '../types'
import { CHOICES } from '../types'

export function useGame() {
  const score = ref(0)
  const playerChoice = ref<Choice | null>(null)
  const computerChoice = ref<Choice | null>(null)
  const result = ref<GameResult>(null)
  const isLoading = ref(false)

  const getComputerChoice = (): Choice => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
  }

  const determineWinner = (player: Choice, computer: Choice): GameResult => {
    if (player === computer) return 'draw'
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'win'
    }
    return 'lose'
  }

  const resetGame = () => {
    score.value = 0
    playerChoice.value = null
    computerChoice.value = null
    result.value = null
    isLoading.value = false
  }

  const playGame = async (choice: Choice) => {
    playerChoice.value = choice
    isLoading.value = true
    computerChoice.value = null
    result.value = null
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const computer = getComputerChoice()
    computerChoice.value = computer
    isLoading.value = false
    
    const gameResult = determineWinner(choice, computer)
    result.value = gameResult
    
    if (gameResult === 'win') {
      score.value++
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }

  return {
    score,
    playerChoice,
    computerChoice,
    result,
    isLoading,
    playGame,
    resetGame
  }
}