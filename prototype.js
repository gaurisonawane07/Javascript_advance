// let myName = "Gauri     "
// console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]
let heroPower = {
    thor:"Hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        // console.log(`Spider powes is ${this.spiderman}`);
    }
}

Object.prototype.gauri = function(){
    // console.log(`gauri is present in all objects`);
}

Array.prototype.heyGauri = function(){
    // console.log(`Gauri says hello`);
}
// myHeroes.gauri()
// myHeroes.heyGauri()

//heroPower.gauri()

//****************************INHERITANCE*********************************/
const User ={
    name:"chai",
    email:"hbgdsdx@google.com"
}
const Teacher = {
    makeVideo :true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__:teachingSupport
}
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUserName = "chaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUserName.trueLength()