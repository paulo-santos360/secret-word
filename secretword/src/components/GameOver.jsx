import './GameOver.css'

function GameOver({ retry }) {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={retry}>Reseta jogo</button>
    </div>
  )
}

export default GameOver