//getlength (.length)

function getLength(str){
    console.log("original length is", str)
    console.log("length after ", str.length)    // .length is provided by javascript to check any string length by applying string name .length

}
getLength("Abhineet");

const str = "abhineet";
console.log(str.length);


//indexof (.indexof(target))

function findindexof(str,target){
    console.log("original string" , str);
    console.log("index of target string" , str.indexOf(target));
}
findindexof("hello world", "world");


//lastIndexOf (.lastIndexOf(target))

function findlastindexof(str,target){
    console.log("original string" , str);
    console.log("index of target string" , str.lastIndexOf(target));
}
findlastindexof("hello world world", "world");


//slice

function getslice(str, start, end){
    console.log("original string" , str);
    console.log("after slice" , str.slice(start,end));
}

getslice("Hello World" ,2 ,4);


//substring

function getsubstring(str, start, end){
    console.log("original string" , str);
    console.log("after substring" , str.substring(start,end));
}

getsubstring("Hello World" ,2 ,4);



// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");



// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");



// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");



// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");



// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");