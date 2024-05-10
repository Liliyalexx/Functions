// 1) 
//a) Take an array of numbers and return the sum.
let nums = [1, 2, 3, 4, 5, 6, 7];
function sum(arr){
    let total = 0;
    for( let i =0; i < arr.length; i++){
        total+= arr[i]
    }
    
    return total;
}
console.log(sum(nums));
console.log("__________________________________________________")
//b) Take an array of numbers and return the average.
let nums1 = [1, 2, 3, 4, 5, 6, 7];
function average(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i];
       
    }
    average = sum/arr.length
    return average;
}
   console.log(average(nums1));

   console.log("__________________________________________________")
//c Take an array of strings and return the longest string.

let str = ["Say", "Hello", "Something", "Flower"];
function longestString(strings){
    let longest = strings[0];
    for (let i = 0; i < strings.length; i++){
        if(strings[i].length > longest.length){
          longest = strings[i];  
        }
       
        
    }
 return longest;
}
console.log(longestString(str));
