{
  const returnValue = (value1: string) => {
    return value1;
  };
  const putfunctionvalue = (returnvalue: (value1: string) => string) => {
    let returnValued = returnValue(`testing`);
    console.log(returnValued);
  };
  putfunctionvalue(returnValue);
}
// double the number with the help of map.
const num: number[] = [1, 2, 3, 4, 5, 6];
const doubleNum: number[] = num.map((abc: number) => abc * 2);
console.log(doubleNum);
//converting numbers to string
const num1: number[] = [1, 2, 3, 4, 5, 6];
const changetype: string[] = num.map((abc1: number) => abc1.toString());
console.log(changetype);
//get even number with the help of filter
const num2: number[] = [1, 2, 3, 4, 5, 6];
const getEven = num.filter((abc2: number) => abc2 % 2 === 0);
console.log(getEven);
//filter even numer greter than 3.
const num3: number[] = [1, 2, 3, 4, 5, 6];
const greter3 = num.filter((abc3: number) => abc3 > 3);
console.log(greter3);
//arry element covert into the uppercase with the help of map.
const num4: number[] = [1, 2, 3, 4, 5, 6];
const upper = num.map((abc4: number) => abc4);
console.log(upper);
//java script reduce code
const num5: number[] = [1, 2, 3, 4, 5, 6];
const massab = num5.reduce((mas, ham) => {
  return -mas + ham;
});
console.log(massab);

// Write a program that uses filter to remove all negative numbers from an array of numbers...

let nums1: number[] = [1, -10, 19, -22, -45, 23, 34, -43, -1, -4, -6, -32];
let nums1Result: number[] = nums1.filter((element: number) => element > 0);
console.log(nums1Result);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2...

let nums2: number[] = [1, 2, 3, 4, 5];
let nums2Result: number[] = nums2.map((element: number) => element * 2);
console.log("nums2Result", nums2Result);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters...

let fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];
let fruitsResult: string[] = fruits.filter(
  (element: string, index: number) => element.length > 5
);
console.log("fruitsResult", fruitsResult);

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!"...

let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
let modifiedName = names.forEach((element: string) => element + "!");
console.log("modifiedName", modifiedName);
``;
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32...

let temperatures: number[] = [0, 10, 20, 30, 40];
let newTemperature: number[] = temperatures.map(
  (element: number): number => (element * 9) / 5 + 32
);
console.log("newTemperature", newTemperature);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers...

let nums3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareOfNumbers: number[] = nums3
  .filter((element: number): any => element % 2 == 0)
  .map((element: number): number => element * element);
console.log(squareOfNumbers);

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers...

let nums4: number[] = [3, 6, 9, 12, 15, 18];
let oddNumbers: number[] = nums4
  .filter((element: number): any => element % 2 != 0)
  .map((element: number): number => element * 2);
console.log("oddNumbers", oddNumbers);

// type aliyas
type vartypes = string | number | undefined;
let a: vartypes = 10;
let b: vartypes = 20;
let c: vartypes = undefined;

// diffrence btween any and unkonw
let data: any;
//let data : unknown;
data = 20;
data = `massab`;
let item: string;
item = data;
// or when we assingn unkown variable to type
let dato: unknown;
data = 20;
data = `massab`;
let atom: string;
if (typeof dato === `string`) {
  atom = dato;
}

// tuple in code
const details: {
  id: number;
  name: string;
  role: [number, string];
} = {
  id: 1,
  name: "massab",
  role: [1, "Admin"],
};



// typeof function
function checkNumber(a: any): boolean {
  if (typeof a === "number") {
      return true;
  } else {
       return false;
  }
}
var res = checkNumber("2");
console.log(res);



function checkNumber1(a: any):object{
    if(typeof a === "number"){
        return {
        status: true,
        msg: ` ${a} is a number`
        };
    }else{
        return {
        status: false,
        msg: ` ${a} is not a number`
        }
    }
    }
        var MAS= checkNumber1("1");
        console.log(MAS);
        
        
// class
        class Animal{
name : string = "";
        }
        let dog = new Animal();
        dog.name = "nawaz shrif";
        let cat = new Animal();
        cat.name = "cato";