---
title: "Prologue: Why Even Bother?"
series: ["Let's Build a Chess Engine in Golang"]
date: '2021-01-16'
draft: true
summary: |
    Let's explore one of JavaScript's most undervalued feature and find
    out how to make the best of it.
---
There's been a renewed enthusiasm for chess recently, in no small part thanks to Netflix and Anya Taylor-Joy's bedazzling eye sockets.

<figure class='hanging left'>
    <img src="https://d1qxviojg2h5lt.cloudfront.net/images/01EN3E1TKV6M1S4K7ATJHRTAS4/gambit.jpg" alt="Queen's Gambit" />
    <figcaption>Stop staring at me like that, you freak!</figcaption>
</figure>


Computer chess has a rich history that's deeply intertwined with computer science history as a whole. In a way, computer chess predates computers themselves: the *Mechanical Turk* was an elaborate hoax, secretly operated by a human chess master. It went on to defeat, among others, Napoléon Bonaparte and Benjamin Franklin.

The first paper on the subject was written in 1950 by Claude Shannon, a.k.a. the father of information theory. The first chess engine to challenge US chess Masters was Ken Thompson's Belle machine in 1980. Yes, this is the same Ken Thompson who wrote the UNIX operating system and co-authored the Go language.

IBM's Deep Blue became the first computer to surpass a World Champion, beating Kasparov in 1997. Since then, computer chess has been refined to perfection by engines like Stockfish and AlphaZero, using sophisticated techniques like neural nets and magic bitboards.

We won't be building the next Stockfish today. Instead, in the spirit of Golang, we'll try build something that's both simple enough to extend, yet strong enough to get you banned from [chess.com]().

<div class='two-cols'>

* Trees and recursion
* Bitwise operations and hexadecimals
* Concurrency and parallelism
* Data-oriented design
* And much, much more
</div>

More importantly, writing a chess engine teaches you how to use a language, both from the point of view of a library maintainer and an application author.

I don't intend to touch on all these points with you. For one, I'm not much of a systems programmer. I have never written a line of C++, and I can hardly read assembly. What I'd like, however, is for you to develop a solid understanding of the high-levels ideas involved in computer chess, while also gaining a firm grasp on Go's idioms and usage patterns.

I will assume that you have, at the very least, a basic understanding of Go's syntax. Fortunately, the language is quite small and you can [learn the syntax in an afternoon](http://tour.golang.org). In the spirit of Go, the implementation will strike a nice balance between performance and simplicity.

If all that sounds interesting to you, then come on over to [Part I](../squares-and-pieces), where we will tackle our first problem: representing the chessboard and its pieces.

## Acknowledgements

This series wouldn't have been possible without the help of some amazing open-source projects:

* Justin Fagnani's `chessboard-element`, which powers all my interactive demos
* The TinyGo compiler, which let me compile the engine's code into WebAssembly and run it straight inside the browser

## Bug reports

If you find a bug, send me a PR.

[^ken]: As if inventing UNIX and co-authoring the Go language wasn't enough for one career.
