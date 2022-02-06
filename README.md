# Preprocessor to the mdbook

This preprocessor for [mdbook](https://rust-lang.github.io/mdBook/) is related to the card game bridge.

At the moment the preprocessor only convert suits to correct char, and add a class to the span containing the char. This to make it possible to change the colors of the suits in with css classes.

```txt
!s => <span class="suit-s">♠</span>
!h => <span class="suit-h">♥</span>
!d => <span class="suit-d">♦</span>
!c => <span class="suit-c">♣</span>

And 2 more swedish chars!

!r => <span class="suit-d">♦</span>
!k => <span class="suit-c">♣</span>
```
