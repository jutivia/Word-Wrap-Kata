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
### Thought Process
I tried solving this word kata earlier in november (check the formerSoln.js file for reference), and I remember not being very satisfied with my solution for a number of reasons. I was using a recursion approach, which had a too many conditions to make some actions, dependent on where the col stops, including: 
    - creating a temporary `pre` variable that stores the last index of an empty space in the string cut at `col` length from the `line` left from the recusrions. This `pre` value is then used as a guide to cutting the line. Some of the conditions being checked for includes:
    - checking if `pre` is greater than 0, then checking if the line starts with n empty space and not end with one, I did a `line.substr(1)`, which returns the whole line, but the first character, and then calling the `breakStatement` function that returns the previously formatted part of the line, plus the new part of the line broken at col (based on the break confdition it fits in) plus the recursive wrap function, which takes in what's left of the line
    
Some other conditions for breaking a line included: 
    - checking if the line's index at col is an empty string, but doesn't end with an empty string, then breaking appropriately
    -checking if the line starts with an empty string and the line's index at col is also an empty string, the breaking accordingly, etc

There are a couple more conditions I checked for, and tho this approach works quite alright in achieving the goals for this kata (the lines I passed into the Kata broke as it should), I felt like the approach could be improved into a cleaner and more structured logic with more generic edge cases. 

I randomly picked up this kata again last week, and I'll be taking you through my new approach, and I hope you enjoy it, as much I enjoyed solving this:

- As the instruction says, It s a class with a static function called wrap, that takes in 2 paramenters, the line to be formatted, and the col which guides the line break. 
- I used 3 block scoped variables, `temp`, `result` and `lastSpacePointer` which holds characters are temporarily added as it loops, the `result` which holds the formatted parts of the line, already lopped through (the temp gets added to this, then emptied), and the `lastSpacePointer`, which keeps track of the index of the last space that's seen in the temp.
- A for-loop is created to loop through each characters of the line provided, with the temp concatenanted with the line[i] at every loop.
- I then came up with some conditions at which a line break occurs, but before then, I check if I encounter any spaces as we loop, then set the `lastSpacePointer` to the last index of temp (as the space would have already been added to the temp in the beginning of the loop). I also  check if the temp.length is equal to the col provided, if this condition is true, we then check for these 2 other conditions: 
    - if the lastSpacePointer exists, (i.e there is at least a space the the temp stored so far), and if the current charcater at string of the current index + 1 (string[i+1]) is not equal to an empty string, (i.e, the col doesn't break the word at the word boundary, but a space exists in temp), then I slice the word off at the `lastSpaceIndex` and add the sliced part to the result, then slice temp off to retain the later part of temp that's left from the slice. This is then kept as part of the next temp batch to be added to the result once temp reaches its max limit of col.

    - Otherwise, if the lastSpacePointer doesn't exist, I make a quick check on another variable called `addContinuation` which checks if the col ends at a word boundary, if yes, it adds a line break and adds the temp to the existing result, otherwise, to make a cleaner output, it adds temp to the result and it adds a '-' at line break, and empties temp.
    - lastly, lastSpacePointer is assigned back to null (this is to ensure that if there's no space in the new temp, `lastSpacePointer` doesn't exist)
    -temp is trimmed before adding it to the result to remove any extra spaces around it.

Even though, at worse case, both solutions have the same time complexity of 0(n^2), I think this new approach is cleaner, simpler and more understandable than the former. 


#
### Language
Javascript

## Example:
Input: string= "this is a sentence", column= 5
####
Output: "this\nis a\nsente-\nnce"
 

## Constraints:
1 <= string.length <= 10^4
####
string consists only of English letters and ' '.
####
1 <= column <= 10^4

