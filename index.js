class Wrapper {
  static wrap(line, num) {
    if (line.length <= num) {
      return line;
    }
    const pre = line.substring(0, num).indexOf(" ");
    if (pre !== -1) {
      return (
        line.substring(0, pre) + "\n" + this.wrap(line.substr(pre + 1), num)
      );
    } else if (pre === -1 && line[num] === " ") {
      return (
        line.substring(0, num) + "\n" + this.wrap(line.substr(num + 1), num)
      );
    } else {
      return line.substring(0, num) + "\n" + this.wrap(line.substr(num), num);
    }
  }
}
// console.log(Wrapper);
module.exports = Wrapper;


