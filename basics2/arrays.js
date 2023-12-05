//array

const myArr = [0 ,1,2,3,4 ,5,6];

// JavaScript array-copy operations create shallow copies

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)




// A shallow copy of an object is a copy whose properties share the same references


// A deep copy of an object is a copy whose properties do not share the same references 


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

 //const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

 console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//Splice removes the portion of the range in the ORIginal Array.