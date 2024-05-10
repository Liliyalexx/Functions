// // let date = new Date();
// // let sales = getSalesData(date);
// // let labor = getLaborCosts(date);
// // let budget = getBudget(date);
// // let report = generateReport(date, sales, labor, budget);
// // sendReport(report);

// // function getSalesData(forDate) {
// //   let netSales = getNetSales(forDate);
// //   let salesTax = computeSalesTax(netSales);
// //   return {netSales, salesTax};
// // }

// // function getLaborCosts(forDate) {
// //   let staffCosts = getStaffCosts(forDate);
// //   let mgtCosts = getMgtCosts(forDate);
// //   return {staffCosts, mgtCosts};
// // }

// // function getBudget(forDate) {
// // //   let salesBudget = getSalesBudget(forDate);
// // //   let laborBudget = getLaborBudget(forDate);
// // //   return {salesBudget, laborBudget};
// // // }

// // // function generateReport(forDate, dailySales, dailyLabor, budget) {
// // //   ...
// // // }

// // // function sendReport(report) {
// // //   ...
// // // }
// // // sayHello("Alice");
// // // saidHello();
// // add(2,3);

// // // function sayHello(name) {
// // //     console.log('Hello ' + name + '!');
// // // }



// // // //Arrow function

// // // function add(a, b) {
// // // 	return a + b;
// // // }
// // const add = (a, b) => a + b;

// // // const saidHello = () => {
// // //     console.log("Hello World")
// // // }
// //  add(25, 100);

// function areBothEven(n1, n2) {
//     return !(n1 % 2) && !(n2 % 2);
//   }

//   console.log(areBothEven(5, 7))

//   function computeArea(width, height){
//     return (width * height ) 
//   }
//   console.log(`The area of a rectangle with a width of ${44} and a height of ${55} is ${computeArea(44, 55)}.`);  
//   console.log(computeArea(44, 77));
//   console.log(computeArea(77, 88));
//   console.log(computeArea(22, 99));

//   function planetHasWater(planet){
//     const lowerCasePlanet = planet.toLowerCase();
//   if( lowerCasePlanet === "earth" || lowerCasePlanet === "mars"){
//     return true;

// }else{
//     return false;
// }

//   }
//   console.log(planetHasWater("Earth"));
//   console.log(planetHasWater("Jupiter"));

//   let maria = getDevObject('Maria', 25, 'HTML', 'CSS', 'JavaScript', 'jQuery');

// //   {
// // 	devName: 'Maria',
// // 	jobSkills: ['HTML', 'CSS', 'JavaScript', 'jQuery']
// // }

// // function getDevObject(name, ages) {
// //     let skills = [];
// //     for (let i = 2; i < arguments.length; i++) {
// //       skills.push(arguments[i]);
// //     }
// //     return {
// //       devName: name,
// //       ages: ages,
// //       jobSkills: skills
// //     };
// //   }
// //   let res = getDevObject("Maria", 25, 'HTML', 'CSS', 'JavaScript', 'jQuery' )
// //   console.log(res);
// //   console.log(maria);

// function getDevObject(name,ages, ...skills) {
   
//     // for (let i = 2; i < arguments.length; i++) {
//     //   skills.push(arguments[i]);
//     // }
//     return {
//       devName: name,
//       ages: ages,
//       jobSkills: skills
//     };
//   }
//   let res = getDevObject("Maria", 25, 'HTML', 'CSS', 'JavaScript', 'jQuery' )
//   console.log(res);
//   console.log(maria);


//   function setColors(bicycle, color = 'purple'){
//     bicycle.color = color;
//     return bicycle;
//   }
//   console.log(setColors({name:"Unicycle", color:"green"}))

//   function person(name, Lastname){
//     console.log(`You name is ${name + " " + Lastname}`)
//   }
//   console.log("Matthew")




//   var a = ['red', 'green', 'blue'];

// a.forEach(function(color) {
//   console.log(color);
// });

// // function goodbye(){
// //     sayHello()
// //     console.log(`Goodbye`)
// // }
// // goodbye();

// var a = ['red', 'green', 'blue'];

// a.forEach(function(color) {
//   console.log(color);
// });
// console.log("____________________")

// function hoist() {
// 	console.log(x);  // outputs undefined, not a ReferenceError
// 	var x = 25;
// 	console.log(x);  // outputs 25
// }
// hoist();

// console.log("____________________")

// function hoist1() {
// 	var x;
// 	console.log(x);  // outputs undefined, not a ReferenceError
// 	x = 25;
// 	console.log(x);  // outputs 25
// }
// hoist1();

// console.log("____________________")


// // let x = 5;

// // {
// //   let y = 6;
// //   console.log(x); // outputs 5
// // // }

// // // console.log(y); // outputs ReferenceError

// // console.log("____________________")

// // let x1 = 5;

// // {
// //   console.log(x1);
// //   let x1 = 6;
// // // }
// // console.log("____________________")
// // ///Hoisting
// // calculate("+", 13, 13);
// // function calculate(opr, num1, num2){
// //     switch(opr){
// //         case"+":
// //         return sum(num1, num2)
// //         case"-":
// //         return subtruction(num1, num2)
        

// //     }

// // }
// // function sum(num1, num2){
// //     return num1 + num2;
// // }

// // function subtruction(num1, num2){
// //     return num1 * num2
// // }
// // console.log("____________________")

// // function openNewAccount(name, openingBalance) {
// //     let acctNum = generateAcctNum();
  
// //     // createAccount is a function available outside this function
// //     let acct = createAccount(acctNum, openingBalance);
// //     return acct;
  
// //     // helper function that provides a unique account number
// //     function generateAcctNum() {
// //       return Date.now();  // super amazing algorithm :)
// //     }
// //   }
// //   console.log(openNewAccount("Liliya", 15));

// //   let myVar = 20;

// // function passBy(myVar) {
// //     myVar = myVar * 10;
// //     return myVar;
// // }
// // console.log(myVar);           // 20
// // console.log(passBy(myVar));   // 200
// // console.log(myVar);//20
// // console.log("____________________")
// // let myVar = 20;

// // function passBy(x) {
// //     x = x * 10;
// //     return x;
// // }
// // console.log(myVar);
// // console.log(passBy(myVar));
// // // console.log(myVar);

// // console.log("____________________")

// // let myVar = { value: 20, type: 'Number' }

// // function passBy(x) {
// //     x.value = x.value * 20;
// // }
// // console.log(myVar);           // 20
// // passBy(myVar);                // 200
// // console.log(myVar);  

// // let array1 = ["Apple", "banana", "pear"];

// // let array2 = array1;
// // array1.push("Mango", "Strawberry");
// // console.log(array1)
// // console.log(array2)



// // let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// // function returnEven(array) {
// //     for (let i in array) {
// //         if (array[i] % 2 !== 0) {
// //             array.splice(i, 1);
// //         }
// //     }

// //     return array;
// // }

// // console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// // let newArray = returnEven(numArray);
// // console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// // console.log(numArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]


// console.log("______________________________________________")
// // let numArray1 = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// // function returnEven(array) {
// //     let newArray1 = [];

// //     array.forEach((element) => {
// //         if (element % 2 == 0) {
// //             newArray1.push(element);
// //         }
// //     });

// //     return newArray1;
// // }

// // console.log(numArray1);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// // let newArray1 = returnEven(numArray1);
// // console.log(newArray1);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// // console.log(numArray1);    

// // console.log("______________________________________________")

// // let myVar = 20;
// // function passBy(x){
// //     x = x * 20;
// //     return x;
// // }
// // myVar = passBy(myVar);
// // console.log(passBy(myVar));

// // console.log("______________________________________________")

// // let numArray = [
// //     { value: 10 },
// //     { value: 20 },
// //     { value: 0 },
// //     { value: -10 }, 
// //     { value: 15 }, 
// //     { value: 28 }, 
// //     { value: -1000 },
// //     { value: 42 },
// //     { value: 7 }
// // ];

// // function returnEven(array) {
// //     let newArray = [];

// //     array.forEach((element) => {
// //         if (element.value % 2 == 0) {
// //             newArray.push(element);
// //         }
// //     });

// //     return newArray;
// // }

// // let newArray = returnEven(numArray);

// // newArray[0].value += 10;

// // numArray[3].value = 67;

// // let myEvenValue = newArray[1].value;
// // myEvenValue /= 2;


// // // Assume these variables are reset for each of the examples below.
// // let numbers = [[1], [2], [3]];
// // let numbersCopy = [];

// // // For Loops
// // for (let i = 0; i < number.length; i++) {
// //     numbersCopy[i] = numbers[i];
// // }

// // // While Loops
// // let j = -1;
// // while (++j < numbers.length) {
// //     numbersCopy[j] = numbers[j];
// // }

// // // Spread Operator
// // numbersCopy = [...numbers];

// // // Array.map
// // numbersCopy = numbers.map((ele) => ele);


// // const myPerson = {
// //     name: {
// //         first: 'Timmy',
// //         last: 'Timtim'
// //     },
// //     age: 30,
// //     location: {
// //         city: 'New York',
// //         state: 'New York',
// //         zip: 10001
// //     }
// // }

// // function copyPerson(oldPerson) {
// //     const newPerson = {
// //         name: {},
// //         age: null,
// //         location: {}
// //     };

// //     newPerson.name.first = oldPerson.name.first;
// //     newPerson.name.last = oldPerson.name.last;
// //     newPerson.age = oldPerson.age;
// //     newPerson.location.city = oldPerson.location.city;
// //     newPerson.location.state = oldPerson.location.state;
// //     newPerson.location.zip = oldPerson.location.zip;

// //     return newPerson;
// // }
// // console.log("______________________________________________")
// // const myPersonCopy = copyPerson(myPerson);

// // const myPerson = {
// //     name: {
// //         first: 'Timmy',
// //         last: 'Timtim'
// //     },
// //     age: 30,
// //     location: {
// //         city: 'New York',
// //         state: 'New York',
// //         zip: 10001
// //     }
// // }

// // function copyPerson(oldPerson) {
// //     let jsonString = JSON.stringify(oldPerson);

// //     return JSON.parse(jsonString);
// // }

// // const myPersonCopy = copyPerson(myPerson);

// //default paramentr

// function name(firstName, lastName){
//     console.log(`Hello ${firstName} ${lastName}`)
// }
// console.log(name("Dylan", "smith"))
function outer() {

       let count = 0;
    
       function inner() {
    
          count += 1;
    
          return count;
    
    }  
    
    return inner;
    
    }
    
    const increment = outer();
    
    console.log(increment());
    
    console.log(increment());