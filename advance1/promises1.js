// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data =  response.json() // json also takes time to get converted ,
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()




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
    

    fetch('https://jsonplaceholder.typicode.com/users') //reponse type is a promise
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))




    /// THE FETCH DATA IS COMING BEFORE ALL THE ASYNC RESOLVED 2 AND ALL WHICH IS ABOVE THEM.