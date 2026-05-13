import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GameCard from './gameCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GameCard title="Tic Tac Toe" description='A basic game of Tic Tac Toe!' redirectURL='tic-tac-toe.html'/>
    <GameCard title="Snake" description="A classic game of Snake! Don't run into yourself!" redirectURL='snake.html'/>
  </StrictMode>,
)
