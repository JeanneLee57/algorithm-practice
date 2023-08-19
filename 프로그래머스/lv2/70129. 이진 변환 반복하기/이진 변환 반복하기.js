function solution(s) {
  function convertStr(str) {
    let count = 0;
    let string = "";
    for (let l of str) {
      if (l === "0") count++;
      else string += "1";
    }
    const result = string.length.toString(2);
    return { convertedStr: result, deletedNum: count };
  }
  function sol(str, countZero, countConvert) {
    if (str === "1") return [countConvert, countZero];
    const { convertedStr, deletedNum } = convertStr(str);
    return sol(convertedStr, countZero + deletedNum, countConvert + 1);
  }
  return sol(s, 0, 0);
}