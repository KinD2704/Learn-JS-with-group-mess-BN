const name = "Nguyen Quy Dat";
console.log(name);
console.log(typeof name);

const name2 = "KinD";
const newStr = "My name is KinD and I am developer";
const newStr2 = "My name is " + name2 + " and I am developer";
console.log(newStr2);
// backtick giống thẻ Pre trong html
const newStr3 = `My name is ${name2} and I am developer
I love coding
`;
console.log(newStr3);

console.log(name2.length);

console.log("--------------------------------------");

const myStr = "Frontend Developer D";
console.log(myStr.split(""));
console.log(myStr.split(" "));
console.log(myStr.split("/"));
console.log(myStr.toLowerCase()); // frontend developer
console.log(myStr.toUpperCase()); // FRONTEND DEVELOPER
console.log(myStr.startsWith("frontend")); // false
console.log(myStr.endsWith("Developer")); // true
console.log(myStr.includes("end")); // true
console.log(myStr.includes("abc")); // false
console.log(myStr.indexOf("D")); // 9
console.log(myStr.lastIndexOf("D")); // 19
console.log(myStr.replace("Developer", "Designer"));
console.log(myStr.slice(0, 8)); // frontend

const myStr2 = "      Nguyen        Quy        Dat      ";
console.log(myStr2.trim());
