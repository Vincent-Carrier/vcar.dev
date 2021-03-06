import {html, render} from 'https://cdn.skypack.dev/lit-html'
import {ChessBoardElement} from 'https://cdn.skypack.dev/chessboard-element'

ChessBoardElement.prototype.highlight = function (...squares) {
    render(html`
			<style>
				${squares.map(sq => `chess-board::part(square ${sq})`).join(', ')} {
					outline: 4px dashed hsla(0, 20%, 20%, 50%);
					outline-offset: -8px;
				}
			</style>
    `, $('#chessboard-styles'))
}

ChessBoardElement.prototype.init = function () {
    this.addEventListener('mouseover-square', (e) => {
        let moves = this.moves(e.detail.square);
        this.highlight(...moves)
    })
    this.addEventListener('mouseout-square', (e) => {
        this.highlight()
    })
    this.addEventListener('drop', (e) => {
        const move = game.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) {
            setAction('snapback');
        }
        this.highlight()
    })
}


Object.assign(window, {ChessBoardElement})

const go = new Go()
const WASM_URL = '../main.wasm';

let wasm;

if ('instantiateStreaming' in WebAssembly) {
    WebAssembly.instantiateStreaming(fetch(WASM_URL), go.importObject).then(function (obj) {
        wasm = obj.instance;
        go.run(wasm);
    })
} else {
    fetch(WASM_URL).then(resp =>
        resp.arrayBuffer()
    ).then(bytes =>
        WebAssembly.instantiate(bytes, go.importObject).then(function (obj) {
            wasm = obj.instance;
            go.run(wasm);
        })
    )
}
