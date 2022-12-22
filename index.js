
class Wrapper {
  static wrap(line, col) {
    let temp = "";
    let result = "";
    let lastSpacePointer = null;
    for (let i = 0; i < string.length; i++) {
      temp += string[i]; //add characters to temp as i loop
      if (string[i] === " ") lastSpacePointer = temp.length - 1;
      //if your temp is at capacity offload it to your result
      if (temp.trim().length >= col) {
        // if there is a previous space in temp and the current word can't break use previous space
        if (lastSpacePointer && string[i + 1] !== " ") {
          result += temp.slice(0, lastSpacePointer).trim() + "\n";
          temp = temp.slice(lastSpacePointer + 1);
        }
        // word can have a clean break or would have a rough break
        else {
          const addContinuation = string[i + 1] !== " ";
          result += temp.trim() + `${addContinuation ? "-\n" : "\n"}`;
          temp = "";
        }
        // reset last space point for new set of temp
        lastSpacePointer = null;
      }
    }
    result += temp.trim();
    return result;
  }
}
module.exports = Wrapper;






