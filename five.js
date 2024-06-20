// const coding = ["js","ruby","java","python","cpp"]
// const values = coding.forEach((item)=>{
//     console.log(item);
    

// })

// console.log(values);

 const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num)=>{
//     return num>4;
// })
// console.log(newNums);

const newNums = []
myNums.forEach((num)=>{
    if(num>2){
        newNums.push(num)
    }
})
//console.log(newNums);

const books = [
    {title:'book one',genre:'fiction',publish:1981,
        edition:2004 },
    {title:'book two',genre:'Non-fiction',publish:1992,
        edition:2008 },
    {title:'book three',genre:'History',publish:1999,
        edition:2007}, 
    {title:'book four',genre:'spiritual',publish:1989,
        edition:2010 },
    {title:'book five',genre:'self help',publish:2009,
        edition:2014 },
    {title:'book six',genre:'History',publish:1987,
        edition:2010 }, 
    {title:'book seven',genre:'motivational',publish:1986,
        edition:1996 },  
];
const userBooks = books.filter((bk)=>bk.publish > 2000)
console.log(userBooks);
