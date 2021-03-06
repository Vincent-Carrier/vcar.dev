---
title: "Part I: Squares and Pieces"
series: ["Let's Build a Chess Engine in Golang"]
date: '2021-03-04'
summary: |
    Let's explore one of JavaScript's most undervalued feature and find
    out how to make the best of it.
---

<script defer type='module' src='https://cdn.skypack.dev/chessboard-element'></script>
<script defer src='../wasm_exec.js'></script>
<script defer type='module' src='../wasm_load.js'></script>
<script defer type='module' src='index.js'></script>
<div id='chessboard-styles'></div>

If you're new to computer chess, your first intuition might be to represent the board like this.
However, representing the board like this forces us to make four integer comparisons every time we want to know if a square is inbounds.

```go
type Board [8][8]Piece

type Sq struct {
    X, Y int8
}

func (sq Sq) Inbounds() bool {
    return 0 <= sq.X && sq.X <= 7 && 
           0 <= sq.Y && sq.Y <= 7
}
```

Instead, we can use a clever trick:
```go
type Board [128]Piece
type Sq int16
```

<div class='font-mono flex justify-center space-x-4'>

| Nibble   | Hex digit   |
|:---------|:------------|
| 0b0000   | 0x0         |
| 0b0001   | 0x1         |
| 0b0010   | 0x2         |
| 0b0011   | 0x3         |
| 0b0100   | 0x4         |
| 0b0101   | 0x5         |
| 0b0110   | 0x6         |
| 0b0111   | 0x7         |

| Nibble   | Hex digit   |
| :------- | :---------- |
| 0b1000   | 0x8         |
| 0b1001   | 0x9         |
| 0b1010   | 0xa         |
| 0b1011   | 0xb         |
| 0b1100   | 0xc         |
| 0b1101   | 0xd         |
| 0b1110   | 0xe         |
| 0b1111   | 0xf         |
</div>

<style>
chess-board::part(square)::after {
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-family: system-ui, Helvetica, sans-serif;
}
chess-board::part(square a1)::after {
  content: '0x00'
}
chess-board::part(square b1)::after {
  content: '0x01'
}
chess-board::part(square e4)::after {
  content: '0x34'
}
chess-board::part(square a2)::after {
  content: '0x10'
}
chess-board::part(square h8)::after {
  content: '0x77'
}
</style>
<figure class='max-w-lg h-96 mb-32'>
    <chess-board id='intro'
        style='max-width: 30rem; max-height: 30rem; margin: 0 auto'>
    </chess-board>
</figure>
