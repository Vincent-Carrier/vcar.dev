import * as ChessboardElement from 'https://cdn.skypack.dev/chessboard-element'

console.log(ChessboardElement)

Object.assign(window, { ChessboardElement })

/**
 * @type {import('chessboard-element').ChessBoardElement}
 */
window.board = document.getElementById('intro')

const go = new Go()

if (WebAssembly && !WebAssembly.instantiateStreaming) {
    // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        let result = await resp;
        const source = await result.arrayBuffer()
        return await WebAssembly.instantiate(source, importObject)
    }
}

async function main() {
    const result = await WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject)
    go.run(result.instance)
}

main()
