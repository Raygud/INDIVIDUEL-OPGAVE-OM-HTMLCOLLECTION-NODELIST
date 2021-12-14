let myNodelist = document.querySelectorAll("p");
let Ivalue = document.getElementById("Ivalue");
let HTMLCollectionObject = document.getElementsByTagName("p")

console.log({myNodelist})
console.log("Number of P ellements on the page: " +HTMLCollectionObject.length)

function ItteraterNodelist(){
    myNodelist[4].classList.remove("rainbow")
    IvalueN.innerHTML = 0

let i = 0;
do {
  task(i);
  i++;
} while (i < myNodelist.length);
function task(i) {
  setTimeout(function() {
    myNodelist[i].classList.add("rainbow")
    myNodelist[i-1].classList.remove("rainbow")
    IvalueN.innerHTML = i
    console.log(myNodelist[i])
    
  }, 2000 * i);
  
}}

function ItteraterHTMLCollectionObject(){
    myNodelist[4].classList.remove("rainbow")
    IvalueC.innerHTML = 0

let i = 0;
do {
  task(i);
  i++;
} while (i < myNodelist.length);
function task(i) {
  setTimeout(function() {
    HTMLCollectionObject.item(i).classList.add("rainbow")
    HTMLCollectionObject[i-1].classList.remove("rainbow")
    IvalueC.innerHTML = i
    console.log(HTMLCollectionObject[i])
    
  }, 2000 * i);
  
}}


console.log("myNodeList Length: " + myNodelist.length + "\n" + "HTMLCollection Object Length: " + HTMLCollectionObject.length)

console.log({myNodelist, HTMLCollectionObject})