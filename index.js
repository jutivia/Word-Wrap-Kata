
class Wrapper {
  static wrap(line, col) {
    if (line.length <= col) {
      return line;
   }
   const pre = line.substring(0, col).lastIndexOf(" ");
   if (pre > 0) {
     if (line.charAt(0) === " " && line.charAt(col) !== " ") {
       line = line.substr(1);
       return this.breakStatement(line, pre + 1, 1, col);
     } else if (line.charAt(col) === " " && line.charAt(0) !== " ") {
       return this.breakStatement(line, col, 1, col);
     } else if (line.charAt(0) === " " && line.charAt(col) === " ") {
       line = line.substr(1);
       return this.breakStatement(line, col - 1, 1, col);
     }
       return this.breakStatement(line, pre, 1, col);
   } else if (pre === 0) {
     line = line.substr(1);
     if (line.charAt(col) === " ") {
       return this.breakStatement(line, col, 1, col);
     }
     return this.breakStatement(line, col, 1, col);
   } else {
     return this.breakStatement(line, col, 0, col);
   }
  }

 static breakStatement(line, position, margin, col) {
    return line.substring(0, position) + "\n" + this.wrap(line.substring(position + margin), col)
  }

}
module.exports = Wrapper;


