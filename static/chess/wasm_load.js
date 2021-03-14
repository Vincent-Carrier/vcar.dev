import './chessboard.js'
import './wasm_exec.min.js'
const WASM_URL = '/chess/main.min.wasm'

const go = new Go()
let obj
if ('instantiateStreaming' in WebAssembly) {
  obj = await WebAssembly.instantiateStreaming(fetch(WASM_URL), go.importObject)
} else {
  let resp = await fetch(WASM_URL)
  let bytes = await resp.arrayBuffer()
  obj = await WebAssembly.instantiate(bytes, go.importObject)
}
console.log('WASM starting')
go.run(obj.instance)
console.log('WASM initialized')
