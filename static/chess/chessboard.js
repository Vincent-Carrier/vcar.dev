import { html, render } from 'https://cdn.skypack.dev/lit-html'
import { ChessBoardElement } from 'https://cdn.skypack.dev/chessboard-element'
import loadWasm from './wasm_load.js'

export default async function augmentChessBoard() {
  await loadWasm()
  Object.assign(ChessBoardElement.prototype, {
    init() {
      this.newMatch(this.id)
      this.addEventListener('mouseover-square', (e) => {
        if (e.detail.piece) {
          console.log(e.detail.square)
          let moves = chess?.moves(this.fen(), e.detail.square)
          console.log(moves)
          this.highlight(...moves)
        }
      })
      this.addEventListener('mouseout-square', (e) => {
        this.highlight()
      })
      this.addEventListener('drop', (e) => {
        let move = this.exec(`${e.detail.source}-${e.detail.target}`)
        // if (!move) {
        //   e.detail.setAction('snapback')
        // }
        this.highlight()
      })
    },
    highlight(...squares) {
      render(
        html`
          <style>
            ${squares.map((sq) => `chess-board::part(square ${sq})`).join(', ')} {
              outline: 4px dashed hsl(0, 100%, 70%);
              outline-offset: -8px;
            }
          </style>
        `,
        $('#chessboard-styles')
      )
    },
  })
}
