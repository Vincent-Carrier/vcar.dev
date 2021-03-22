import { html, render } from 'https://cdn.skypack.dev/lit-html'
import { ChessBoardElement } from 'https://cdn.skypack.dev/chessboard-element'
import './wasm_exec.js'

const WASM_URL = '/chess/main.wasm'

// Makes the `chess` global var available
async function loadWasm() {
  const go = new Go()
  let obj
  if ('instantiateStreaming' in WebAssembly) {
    obj = await WebAssembly.instantiateStreaming(fetch(WASM_URL), go.importObject)
  } else {
    let resp = await fetch(WASM_URL)
    let bytes = await resp.arrayBuffer()
    obj = await WebAssembly.instantiate(bytes, go.importObject)
  }
  go.run(obj.instance)
  console.log('WASM initialized')
}

export default async function augmentChessBoard() {
  await loadWasm()
  Object.assign(ChessBoardElement.prototype, {
    init() {
      chess.newMatch.call(this, this.id)
      this.addEventListener('mouseover-square', (e) => {
        if (e.detail.piece) {
          let moves = chess.moves.call(this, e.detail.square)
          this.highlight(...moves)
        }
      })
      this.addEventListener('mouseout-square', (e) => {
        this.highlight()
      })
      this.addEventListener('drop', (e) => {
        let move = chess.exec.call(this, `${e.detail.source}-${e.detail.target}`)
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
