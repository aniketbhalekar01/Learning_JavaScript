let arr = ["Aniket",20,"Male","Full Stack Developer"];
document.write(arr+"<br>");
arr[1] = 21;
document.write(arr+"<br>");
delete arr[3];
document.write(arr+"<br>");

let arr2 = ["Tanuja","Sudesh","Kanchan","Rohit","Anish","Prasad","Vaibhav"];
document.write(arr2+"<br>");
arr2.sort();
document.write(arr2+"<br>");
arr2.reverse();
document.write(arr2+"<br>");

arr2.pop();
document.write(arr2+"<br>");
arr2.pop();
document.write(arr2+"<br>");
arr2.push("aniket");
document.write(arr2+"<br>");
arr2.push("Akash");



arr2.shift();
document.write(arr2+"<br>");
arr2.unshift("Aniket");
document.write(arr2+"<br>");
document.write("<br><br>");
let a = ["tanuja","sudesh","kanchan","rohit","anish","vaibhav","eknath"];
let b = ["aniket","akash","prasad","ganesh"];
let c = ["mahesh","vishal"];
let d = a.concat(b,c);
document.write(d);


document.write("<h2>Slice Example</h2>");
let arr3 = ["Tanuja","Sudesh","Kanchan","Rohit","Anish","Vaibhav","Eknath"];
document.write(arr3+"<br>");
document.write(arr3.slice(3)+"<br>");
document.write(arr3.slice(2,6)+"<br>");
document.write(arr3.slice(-5,-2));

document.write("<h2>Splice Example</h2>");
document.write(arr3+"<br>");
//syntax : arr.splice(index,delCount,newElement);
arr3.splice(2,0,"Aniket","Prasad");
document.write(arr3+"<br>");
arr3.splice(3,2);
document.write(arr3+"<br>");
document.write(arr3.splice(3));
document.write(arr3+"<br>");