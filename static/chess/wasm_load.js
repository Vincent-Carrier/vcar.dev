import './wasm_exec.js'

const WASM_URL = '/chess/main.wasm'
const go = new Go()

export default async function loadWasm() {
  let obj
  if ('instantiateStreaming' in WebAssembly) {
    obj = await WebAssembly.instantiateStreaming(fetch(WASM_URL), go.importObject)
  } else {
    let resp = await fetch(WASM_URL)
    let bytes = await resp.arrayBuffer()
    obj = await WebAssembly.instantiate(bytes, go.importObject)
  }
  go.run(obj.instance)
  await import('./chessboard.js')
}
