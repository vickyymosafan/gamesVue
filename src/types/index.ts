export type Choice = 'rock' | 'paper' | 'scissors'
export type GameResult = 'win' | 'lose' | 'draw' | null

export const CHOICES: Choice[] = ['rock', 'paper', 'scissors']

export const EMOJIS: Record<Choice, string> = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
}

export const getResultMessage = (result: GameResult): string => {
  if (!result) return ''
  if (result === 'win') return 'You win! 🎉'
  if (result === 'lose') return 'You lose! 😢'
  return 'Draw! 🤝'
}