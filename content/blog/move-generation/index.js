import augmentChessBoard from '/chess/wasm_load.js'

async function main() {
  await augmentChessBoard()

  /**
   * @type {import('chessboard-element').ChessBoardElement}
   */
  const board = $('chess-board')
  board.init()
}

main()
