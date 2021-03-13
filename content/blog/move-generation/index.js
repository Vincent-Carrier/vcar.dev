import loadWasm from '/chess/wasm_load.js'

loadWasm().then(wasm => {
  /**
   * @type {import('chessboard-element').ChessBoardElement}
   */
  const board = $('chess-board')
  board.init()
})
