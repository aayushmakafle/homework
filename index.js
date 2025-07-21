let numbers = [1, 2, 3, 4, 6, 5, 7, 8, 9];
let moreNumbers = [2, 4, 6, 8, 10, 12];
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { c: 4, d: 5, e: 6 };
// // 1. Sum of Array Elements
// function sumArray(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++)
//     sum += arr[i];
//   return sum;
// }
// console.log("Sum:", sumArray([numbers]));


// // 2. Find Maximum Value
// const findMax = (arr) => {
//   return Math.max(...arr);
// };

// console.log("Max = ", findMax(numbers));



// 3. Remove Duplicates
function removeDuplicates(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  }
  return result;
}
console.log("Remove Duplicates:", removeDuplicates([numbers]));


// // 4. Merge Two Arrays (without duplicates)
// const mergeArrays = (arr1, arr2) => {
//   let mergedArray = [...arr1, ...arr2];
//   return removeDuplicates(mergedArray);
// };

// console.log("Merged Array = ", mergeArrays(numbers, moreNumbers));



// // // 5. Array Chunking
// const chunkArray = (arr, size) => {
//   let chunkedArray = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunkedArray.push(arr.slice(i, i + size));
//   }
//   return chunkedArray;
// };

// console.log("Chunked Array = ", chunkArray(numbers, 3));




// // 6. Object Key Count
// const countObjectKeys=(obj)=> {
//   return Object.keys(obj).length;
// };
// console.log("Object Key Count:", countObjectKeys({obj1}));


// // 7. Merge Two Objects
// function mergeObjects(obj1, obj2) {
//   return {...obj1,...obj2};
// };
// console.log("Merge Objects:", mergeObjects(obj1,obj2));


// // 8. Filter Object Properties
// function filterKeys(obj, keys) {
//   return Object.fromEntries(
//     Object.entries(obj).filter(([key])=>keys.include(key))  
//   );
// };
// console.log("Filter Keys:", filterKeys(obj1,["a", "c"]));


// // 9. Convert Object to Array
// function objectToArray(obj) {
//   return Object.entries(obj);
// };
// console.log("Object to Array:", objectToArray({ obj1 }));


// // 10. Deep Clone Object
// const original = {
//   name: "Ram",
//   class: 2,
//   roll: 5,
// };
// const deepClone = (obj) => {
//   const copy = JSON.parse(JSON.stringify(obj));
//   return copy;
// };
// console.log("Deep Cloned Project=", deepClone(original));


// // 11. Sum with Rest Operator
// const sumWithRest = (...numbers) => {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// };

// console.log("Sum with Rest Operator = ", sumWithRest(1, 2, 3, 4, 5));


// 12. Concatenate Arrays with Spread (basic way)
function concatenateArrays() {
  return[].concat(...arrays);
    };
console.log("Concatenated Arrays:", concatenateArrays([1, 2], [3, 4], [5]));


// 13. Copy and Modify Object
function copyAndModify(obj, key, newValue) {
  var copy = {};
  for (var k in obj) {
    copy[k] = obj[k];
  }
  copy[key] = newValue;
  return copy;
}
console.log("Copy & Modify:", copyAndModify({ a: 1, b: 2 }, 'b', 99));


// 14. Dynamic Function Arguments
function logArguments() {
  console.log("14. Arguments:");
  for (var i = 0; i < arguments.length; i++) {
    console.log(" -", arguments[i]);
  }
}
logArguments("Hello", 42, true);


// 15. Merge and Override
function mergeAndOverride(obj1, obj2) {
  var result = {};
  for (var key in obj1) result[key] = obj1[key];
  for (var key in obj2) result[key] = obj2[key];
  return result;
}
console.log("Merge & Override:", mergeAndOverride({ a: 1 }, { a: 2, b: 3 }));


// 16. Array to Object
function arrayToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i][0];
    var value = arr[i][1];
    obj[key] = value;
  }
  return obj;
}
console.log("Array to Object:", arrayToObject([["a", 1], ["b", 2]]));


// 17. Flatten Nested Arrays (1-level deep)
function flattenOnce(arr) {
  var flat = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j]);
      }
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
console.log("Flatten:", flattenOnce([1, [2, [3, 4]], 5]));


// 18. Dynamic Object Builder
function createObj() {
  var obj = {};
  for (var i = 0; i < arguments.length; i += 2) {
    obj[arguments[i]] = arguments[i + 1];
  }
  return obj;
}
console.log("Create Object:", createObj("name", "John", "age", 30));


// 19. Filter and Transform Array
function filterAndTransform(arr, conditionFn, transformFn) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (conditionFn(arr[i])) {
      result.push(transformFn(arr[i]));
    }
  }
  return result;
}
var users = [{ age: 17 }, { age: 21 }, { age: 25 }];
console.log("Filter & Transform:", filterAndTransform(users, u => u.age >= 18, u => ({ ...u, adult: true })));


// 20. Deep Merge Objects
function deepMerge(obj1, obj2) {
  var result = {};
  for (var key in obj1) {
    if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      result[key] = deepMerge(obj1[key], {});
    } else {
      result[key] = obj1[key];
    }
  }
  for (var key in obj2) {
    if (
      typeof obj2[key] === 'object' && obj2[key] !== null &&
      typeof result[key] === 'object'
    ) {
      result[key] = deepMerge(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
console.log("Deep Merge:", deepMerge({ a: { b: 1 } }, { a: { c: 2 } }));

