// const user = {
//     username:"Gauri",
//     loginCount:8,
//     signedIn:true,
//     getUserDetails: function(){
//         //console.log("Got  user details from database");
//         //console.log(`username ${this.username}`);
//     }

// }
//console.log(user.username);
//console.log(user.getUserDetails());

//const promise = new Promise()
//const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    //return this
}

const userOne = new User("Gauri",12,true)
const userTwo = new User("Js",20,true)
console.log(userOne);
//new keyword creates an new object
//after new keyword a constructor function is called
//arguments inject in this keyword

