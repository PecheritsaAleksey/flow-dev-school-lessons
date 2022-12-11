// Map

let myMap = new Map();

myMap.set("name", "Bob");

console.log(myMap);

console.log(myMap.get("name"));

let user1 = { name: "Alex" };
let user2 = { name: "Bob" };

let blogPosts = new Map();

blogPosts.set(user1, 5);
blogPosts.set(user2, 8);

console.log(blogPosts);

//Set

let array = [1, 2, 1, 3, 2, 5, 7, 2, 2, 4, 5, 4, 2, 5, 8, 12, 34, 12, 123, 34];

let onlyUnique = new Set(array);

console.log(onlyUnique);

let uniqueArray = Array.from(onlyUnique);

console.log(uniqueArray);
console.log(uniqueArray.length);
