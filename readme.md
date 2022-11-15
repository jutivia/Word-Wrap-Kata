# Word Wrap Kata
### Problem Statement
<i> Write a class called Wrapper, that has a single static function
named wrap that takes two arguments, a string, and a column number. The
function returns the string, but with line breaks inserted at just the
right places to make sure that no line is longer than the column number.
You try to break lines at word boundaries.
Like a word processor, break the line by replacing the last space in a
line with a newline.</i>

#
### Explanation
- The function should take in a string and a number
- The string returns '/n' at every column count
- The string returns '/n' at every word boundary
- If the column count is also a word boundary, only one '/n' should be provided
#
### Language
Javascript