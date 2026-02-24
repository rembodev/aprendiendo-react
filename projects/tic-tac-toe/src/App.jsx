import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { TURNS } from './constans.js'
import { checkWinner } from './logic/Winner.js'
import { checkEndGame } from './logic/Winner.js'
import confetti from 'canvas-confetti'
import { WinnerModal } from './components/WinnerModal.jsx'

/*
tratar de no mutar las props, tener en cuenta que los estados tienen que ser inmutables
*/

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = index => {
    if (board[index] || winner) return // con esto ya se sobreescribe
    const newBoard = [...board]
    newBoard[index] = turn
    const newWinner = checkWinner(newBoard)
    setBoard(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    } else {
      setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
