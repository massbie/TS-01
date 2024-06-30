{
    const returnValue = (value1) => {
        return value1;
    };
    const putfunctionvalue = (returnvalue) => {
        let returnValued = returnValue(`testing`);
        console.log(returnValued);
    };
    putfunctionvalue(returnValue);
}
// double the number with the help of map.
const num = [1, 2, 3, 4, 5, 6];
const doubleNum = num.map((abc) => abc * 2);
console.log(doubleNum);
//converting numbers to string
const num1 = [1, 2, 3, 4, 5, 6];
const changetype = num.map((abc1) => abc1.toString());
console.log(changetype);
//get even number with the help of filter
const num2 = [1, 2, 3, 4, 5, 6];
const getEven = num.filter((abc2) => abc2 % 2 === 0);
console.log(getEven);
//filter even numer greter than 3.
const num3 = [1, 2, 3, 4, 5, 6];
const greter3 = num.filter((abc3) => abc3 > 3);
console.log(greter3);
//arry element covert into the uppercase with the help of map.
const num4 = [1, 2, 3, 4, 5, 6];
const upper = num.map((abc4) => abc4);
console.log(upper);
//java script reduce code
const num5 = [1, 2, 3, 4, 5, 6];
const massab = num5.reduce((mas, ham) => {
    return -mas + ham;
});
console.log(massab);
// Write a program that uses filter to remove all negative numbers from an array of numbers...
let nums1 = [1, -10, 19, -22, -45, 23, 34, -43, -1, -4, -6, -32];
let nums1Result = nums1.filter((element) => element > 0);
console.log(nums1Result);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2...
let nums2 = [1, 2, 3, 4, 5];
let nums2Result = nums2.map((element) => element * 2);
console.log("nums2Result", nums2Result);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters...
let fruits = ["apple", "banana", "cherry", "date", "grape"];
let fruitsResult = fruits.filter((element, index) => element.length > 5);
console.log("fruitsResult", fruitsResult);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!"...
let names = ["Alice", "Bob", "Charlie", "David", "Emily"];
let modifiedName = names.forEach((element) => element + "!");
console.log("modifiedName", modifiedName);
``;
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32...
let temperatures = [0, 10, 20, 30, 40];
let newTemperature = temperatures.map((element) => (element * 9) / 5 + 32);
console.log("newTemperature", newTemperature);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers...
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareOfNumbers = nums3
    .filter((element) => element % 2 == 0)
    .map((element) => element * element);
console.log(squareOfNumbers);
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers...
let nums4 = [3, 6, 9, 12, 15, 18];
let oddNumbers = nums4
    .filter((element) => element % 2 != 0)
    .map((element) => element * 2);
console.log("oddNumbers", oddNumbers);
let a = 10;
let b = 20;
let c = undefined;
// diffrence btween any and unkonw
let data;
//let data : unknown;
data = 20;
data = `massab`;
let item;
item = data;
// or when we assingn unkown variable to type
let dato;
data = 20;
data = `massab`;
let atom;
if (typeof dato === `string`) {
    atom = dato;
}
// tuple in code
const details = {
    id: 1,
    name: "massab",
    role: [1, "Admin"],
};
// typeof function
function checkNumber(a) {
    if (typeof a === "number") {
        return true;
    }
    else {
        return false;
    }
}
var res = checkNumber("2");
console.log(res);
function checkNumber1(a) {
    if (typeof a === "number") {
        return {
            status: true,
            msg: ` ${a} is a number`
        };
    }
    else {
        return {
            status: false,
            msg: ` ${a} is not a number`
        };
    }
}
var MAS = checkNumber1("1");
console.log(MAS);
// class
class Animal {
    name = "";
}
let dog = new Animal();
dog.name = "nawaz shrif";
let cat = new Animal();
cat.name = "cato";
export {};
