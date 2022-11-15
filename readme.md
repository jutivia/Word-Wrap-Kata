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
### Output Description
- The function should take in a string and a number
- The string returns '/n' at every column count
- The string returns '/n' at every word boundary
- If the column count is also a word boundary, only one '/n' should be provided
#
### Language
Javascript

#
### Example:
Input: string= "this is a sentence", column= 5
Output: "this\nis\n\a\nsente\nnce"
Explanation: 
Under the given constraints, the string would be split into 5 parts
- The first 3 parts is at each word boundary
- The last 2 parts is a split of 'sentence' into the first 5 letters, 'sente' as per the column provided, then the last part is the 'nce' left of the word

#
### Constraints:
1 <= string.length <= 10^4
string consists only of lowercase English letters and ' '.
1 <= column <= 10^4

