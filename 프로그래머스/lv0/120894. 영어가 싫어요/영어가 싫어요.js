// function solution(numbers) {
//   let answer = "";
//   let str = "";
//   let obj = {
//     zero: "0",
//     one: "1",
//     two: "2",
//     three: "3",
//     four: "4",
//     five: "5",
//     six: "6",
//     seven: "7",
//     eight: "8",
//     nine: "9",
//   };
    
//   let i = 3;
//   while (i < 6) {
//     str = numbers.slice(0, i);
//     if (obj[str]) {
//       answer += obj[str];
//       numbers = numbers.slice(i, numbers.length);
//       i = 3;
//     } else i++;
//   }

//   return Number(answer);
// }

function solution(numbers) {
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
    }
    return +numbers
}