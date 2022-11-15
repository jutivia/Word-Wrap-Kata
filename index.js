class Wrapper {
  static wrap(line, col) {
    if (line.length <= col) {
      return line;
    }
    const pre = line.substring(0, col).indexOf(" ");
    if (pre !== -1) {
      return (
        line.substring(0, pre) + "\n" + this.wrap(line.substr(pre + 1), col)
      );
    } else if (pre === -1 && line[col] === " ") {
      return (
        line.substring(0, col) + "\n" + this.wrap(line.substr(col + 1), col)
      );
    } else {
      return line.substring(0, col) + "\n" + this.wrap(line.substr(col), col);
    }
  }
}
// console.log(Wrapper);
module.exports = Wrapper;


