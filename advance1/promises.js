const promiseOne = new Promise( (resolve , reject) => {
// Do an async task 
//Db calls , cryptography 

setTimeout( () => {
    console.log('Async task in complete');
    resolve() // connecting with the then part. with promiseOne
}, 1000)
})

promiseOne.then(() =>{
    console.log('Promise Consumed');
})


new Promise ( (resolve, reject) => {
setTimeout( () => {
    console.log("Async task 2 ");
    resolve();
} , 1000)
}).then( () => {
    console.log('Async 2 resolved.')
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); // data is passed  from resolve.
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "harsh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username // this is for chaining  upper then will send argument to downwards then
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))







const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


