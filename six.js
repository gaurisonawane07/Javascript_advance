//map
const myNums = [1,2,3,4,5,6,7,8,9,0]

//const newNums = myNums.map((num)=> num+10)
//console.log(newNums);
const newNums = myNums
             .map((num)=>num*10)
             .map((num)=> num+1)
console.log(newNums);
