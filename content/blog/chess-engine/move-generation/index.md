---
title: "Part II: Move Generation"
series: ["Let's Build a Chess Engine in Golang"]
date: '2021-03-05'
draft: true
summary: |
    Let's explore one of JavaScript's most undervalued feature and find
    out how to make the best of it.
---

<script defer type='module' src='https://cdn.skypack.dev/chessboard-element'></script>
<script defer src='../wasm_exec.js'></script>
<script defer src='../wasm_load.js'></script>
<script defer type='module' src='../chessboard.js'></script>
<script defer type='module' src='index.js'></script>
<div id='chessboard-styles'></div>

If you're new to computer chess, your first intuition might be to represent the board like this.
However, representing the board like this forces us to make four integer comparisons every time we want to know if a square is inbounds.

<figure class='max-w-lg h-96 mb-32'>
    <chess-board id='intro'
        style='max-width: 30rem; max-height: 30rem; margin: 0 auto'
        draggable-pieces
        position='start'>
    </chess-board>
</figure>
