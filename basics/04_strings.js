const name = "Harsh"
const repoCount = 50

console.log(`Hello my name us ${name}  and repoCount is ${repoCount}`);



const gameName = new String('felonyisticallly')//string is  a object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//replaces the thing in the URL

console.log(url.includes('sundar'))

console.log(gameName.split('-'));