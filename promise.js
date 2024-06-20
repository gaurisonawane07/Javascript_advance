const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function() {
        console.log('async task is complete');
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    })
}).then(function(){
    console.log("Async two resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai" , email:'chai@example.com'})
    },1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Gauri", password: "123"})
        }else{
            reject('Error:Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
} )
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"));


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }else{
            reject('Error:JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(promiseFive);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()    

fetch('https://api.github.com/users/gaurisonawane07')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error));