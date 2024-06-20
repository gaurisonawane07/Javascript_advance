//reduce
const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,curVal){
    console.log(`accumulator is ${acc} + current value is ${curVal}`);
    return acc + curVal
},0)
console.log(myTotal);