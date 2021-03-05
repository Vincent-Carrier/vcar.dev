---
title: "Prologue: Why Even Bother?"
series: ["Let's Build a Chess Engine in Golang"]
date: '2021-01-16'
summary: |
    Let's explore one of JavaScript's most undervalued feature and find
    out how to make the best of it.
---
There's been a renewed enthusiasm for chess recently, in no small part thanks to Netflix and Anya Taylor-Joy's freakishly large eyes.

<figure class='float-right transform translate-x-32'>
    <img src="https://d1qxviojg2h5lt.cloudfront.net/images/01EN3E1TKV6M1S4K7ATJHRTAS4/gambit.jpg" alt="Queen's Gambit" />
    <figcaption>Stop staring at me like that, you freak!</figcaption>
</figure>


That's all the better for us computer nerds, because chess-playing is one the oldest, most fascinating problems in our domain. From Ken Thompson's (*yes, that Ken Thompson*) Belle engine first defeating human chess Masters, to Deep Blue's victory over Kasparov, to AlphaZero's emergence as an AI Grandmaster, computer chess has been through it all.

Chess engines today are insanely sophisticated, way beyond the skill level of any human chess player. Stockfish, the top program, can scale up to 512 threads, with over a terabyte of endgame positions in its database.

Learning how computers play might not only make you a better chess player, it will also make you a better programmer. Writing an effective chess engine will test every inch of your programming skillset, including:

* Trees and recursion
* Bitwise operations and hexadecimals
* Concurrency and parallelism
* Data-oriented design
* And much, much more

I don't intend to touch on all these points with you. For one, I'm not much of a systems programmer. I have never written a line of C++, and I can hardly read assembly. What I'd like, however, is for you to develop a solid understanding of the high-levels ideas involved in computer chess, while also gaining a firm grasp on Go's idioms and usage patterns.

I will assume that you have, at the very least, a basic understanding of Go's syntax. Fortunately, the language is quite small and you can [learn the syntax in an afternoon](http://tour.golang.org). In the spirit of Go, the implementation will strike a nice balance between performance and simplicity.

If all that sounds interesting to you, then come on over to [Part I](), where we will tackle our first problem: representing the chessboard and its pieces.
