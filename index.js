// 1. Sum of Array Elements
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) 
    sum += arr[i];
  return sum;
}
console.log("Sum:", sumArray([1, 2, 3, 4, 5]));


// 2. Find Maximum Value
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log("Max:", findMax([1, 7, 3, 9, 2]));


// 3. Remove Duplicates
function removeDuplicates(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  }
  return result;
}
console.log("Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4]));


// 4. Merge Two Arrays (without duplicates)
function mergeArrays(arr1, arr2) {
  var combined = arr1.concat(arr2);
  return removeDuplicates(combined);
}
console.log("Merge Arrays:", mergeArrays([1, 2], [2, 3, 4]));


// 5. Array Chunking
function chunkArray(arr, size) {
  var chunks = [];
  for (var i = 0; i < arr.length; i += size) {
    var chunk = [];
    for (var j = i; j < i + size && j < arr.length; j++) {
      chunk.push(arr[j]);
    }
    chunks.push(chunk);
  }
  return chunks;
}
console.log("Chunk Array:", chunkArray([1, 2, 3, 4, 5], 2));


// 6. Object Key Count
function countKeys(obj) {
  var count = 0;
  for (var key in obj) count++;
  return count;
}
console.log("Key Count:", countKeys({ a: 1, b: 2, c: 3 }));


// 7. Merge Two Objects
function mergeObjects(obj1, obj2) {
  var result = {};
  for (var key in obj1) result[key] = obj1[key];
  for (var key in obj2) result[key] = obj2[key];
  return result;
}
console.log("Merge Objects:", mergeObjects({ a: 1 }, { a: 2, b: 3 }));


// 8. Filter Object Properties
function filterKeys(obj, keysToKeep) {
  var result = {};
  for (var i = 0; i < keysToKeep.length; i++) {
    var key = keysToKeep[i];
    if (obj.hasOwnProperty(key)) result[key] = obj[key];
  }
  return result;
}
console.log("Filter Keys:", filterKeys({ a: 1, b: 2, c: 3 }, ["a", "c"]));


// 9. Convert Object to Array
function objectToArray(obj) {
  var result = [];
  for (var key in obj) result.push([key, obj[key]]);
  return result;
}
console.log("Object to Array:", objectToArray({ x: 10, y: 20 }));


// 10. Deep Clone Object
function deepClone(obj) {
  var copy;
  if (typeof obj !== 'object' || obj === null) return obj;
  copy = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}
var original = { a: 1, b: { c: 2 } };
var cloned = deepClone(original);
cloned.b.c = 99;
console.log("Deep Clone - original.b.c:", original.b.c);


// 11. Sum with Rest Operator
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) total += arguments[i];
  return total;
}
console.log("Sum (rest):", sum(1, 2, 3, 4));


// 12. Concatenate Arrays with Spread (basic way)
function concatArrays() {
  var result = [];
  for (var i = 0; i < arguments.length; i++) {
    var arr = arguments[i];
    for (var j = 0; j < arr.length; j++) {
      result.push(arr[j]);
    }
  }
  return result;
}
console.log("Concat Arrays:", concatArrays([1, 2], [3, 4], [5]));


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
 
   