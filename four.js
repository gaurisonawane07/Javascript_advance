//for in
const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'

}
for (const key in myObject) {
    console.log(myObject[key]);
   
}
//for each

const myCoding = [
    {
        languageName:"Javascript",
        fileName:"js"
    },
    {
        languageName:"C++",
        fileName:"Cpp"
    },
    {
        languageName:"python",
        fileName:"py"
    }
]
myCoding.forEach((item)=>{

    console.log(item.languageName);
})
