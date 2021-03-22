---
title: "Part I: Squares and Pieces"
series: ["Let's Build a Chess Engine in Golang"]
date: '2021-03-04'
draft: false
summary: |
    Let's explore one of JavaScript's most undervalued feature and find
    out how to make the best of it.
---

<script defer type='module' src='https://cdn.skypack.dev/chessboard-element'></script>

If we're gonna write a chess engine, we better have a chessboard! The first question we must answer for ourselves is: how then, should we represent that chessboard in memory?

An intuitive answer would be create an 8-by-8 array of pieces. 

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

However, we can do a lot better than this. With this setup, checking if a square is inbounds takes 4 comparisons + 3 ANDs. This isn't good enough for this kind of hot path.

## Enter the x88

There's a fairly straightforward trick we can use to optimize this code path, but we'll have to use a different board representation:

```go
type Board [128]Piece
type Sq int16

func (sq Sq) Inbounds() bool {
	return sq & 0x88 == 0
}
```



<div class='font-mono flex justify-center'>

| Nibble | Hex | Nibble | Hex |
|:-------|:----|:-------|:----|
| 0b0000 | 0x0 | 0b1000 | 0x8 |
| 0b0001 | 0x1 | 0b1001 | 0x9 |
| 0b0010 | 0x2 | 0b1010 | 0xa |
| 0b0011 | 0x3 | 0b1011 | 0xb |
| 0b0100 | 0x4 | 0b1100 | 0xc |
| 0b0101 | 0x5 | 0b1101 | 0xd |
| 0b0110 | 0x6 | 0b1110 | 0xe |
| 0b0111 | 0x7 | 0b1111 | 0xf |
</div>

<style>
chess-board::part(square)::after {
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
  text-align: center;
  margin-top: 1rem;
  font-family: 'Fira Mono', monospace;
}
chess-board::part(square a1)::after {
  content: '0x00'
}
chess-board::part(square c1)::after {
  content: '0x02'
}
chess-board::part(square f2)::after {
  content: '0x15'
}
chess-board::part(square e4)::after {
  content: '0x34'
}
chess-board::part(square a6)::after {
  content: '0x50'
}
chess-board::part(square h8)::after {
  content: '0x77'
}
</style>
<figure class='max-w-lg mb-32'>
    <chess-board id='x88-board'></chess-board>
    <chess-board id='x88-dummy' style='filter: grayscale(1)'></chess-board>
</figure>

## Further reading
* Bitboards
* Chessboard representations