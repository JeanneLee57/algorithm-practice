// function solution(s) {
//     let l = s.length;
//     let h = parseInt(l/2)
//     if(l % 2) return s.slice(h, h+1)
//     else return s.slice(h-1, h+1)
// }

function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}