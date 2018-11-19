const wrap = (line, maxLen) => {
  if (line.length === 0) {
    return '';
  } else {
    let indexSpace = -1;
    let indexPrevSpace = 0;
    let newLine = '';
    let temp = '';
    while (indexSpace < line.length) {
      indexSpace = line.indexOf(' ', indexSpace + 1); // 5
      if (indexSpace <= maxLen) {
        temp += line.slice(indexPrevSpace, indexSpace);
        indexPrevSpace = indexSpace;
      } else {
        newLine += `${temp}\n`;
      }
    }
  }
};

module.exports = wrap;
