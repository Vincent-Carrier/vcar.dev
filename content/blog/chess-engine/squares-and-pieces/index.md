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
<script defer type='module' src='../chess.js'></script>
<style>
    chess-board::part(e4) {
      outline: 3px solid #F9FAFB;
      outline-offset: -3px;
    }
</style>

If you're new to computer chess, your first intuition might be to represent the board like this:

```go
type Board [8][8]Piece

type Sq struct {
    X, Y int8
}
```

However, representing the board like this forces us to make four integer comparisons every time we want to know if a square is inbounds.

```go
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


<figure class='max-w-lg h-96 mb-32'>
    <chess-board id='intro'
        style='max-width: 30rem; max-height: 30rem; margin: 0 auto'
        position='start'
        draggable-pieces>
    </chess-board>
</figure>
