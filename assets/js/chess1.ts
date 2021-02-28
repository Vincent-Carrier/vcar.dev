import type { ChessBoardElement } from 'chessboard-element'
import ky from 'ky'

const board = document.getElementById('intro') as ChessBoardElement

const api = ky.create({ prefixUrl: 'http://localhost:8000' })
board.move('e2-e4')

async function main() {
  const moves = await api
    .get('moves', {
      searchParams: { fen: board.fen() },
    })
    .json()
  console.log(moves)
}

main()
