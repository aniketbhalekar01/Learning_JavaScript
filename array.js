let cars = ["BMW","Audi","Tata","Mahindra","Toyota","Suzuki","Honda"];
for(let i=0; i<cars.length; i++) {
    document.write(cars[i]+"<br>");
}
document.write("<br>");
let arr = [10,20,30,40,50,60,70];
let sum = 0;
for(let i=0; i<arr.length; i++) {
    sum += arr[i];
}
document.write("Total Sum = "+sum);
document.write("<br>");
let arr2 = [1,3,6,8,9,12,13,16];
let s = 0;
for(let i=0; i<arr2.length; i++) {
    if(arr2[i]%2==0) {
        s+=arr2[i];
    }
}
document.write("Sum of Even Numbers : "+s);
document.write("<br>");
let arr3 = [1,3,6,8,9,12,13,16];
let s2 = 0;
for(let i=0; i<arr2.length; i++) {
    if(arr3[i]%2 !=0) {
        s2+=arr3[i];
    }
}
document.write("Sum of Odd Numbers : "+s2);


document.write("<br>");
let arr4 = [10,20,30,40,50,60,70];
let s3 = 0;
for(let i=0; i<3; i++) {
    s3 += arr4[i];
}
document.write("Sum  = "+s3);

document.write("<br>");

let s4 = 0;
let len = arr4.length;
for(let i= len-3; i<arr4.length; i++) {
    s4+=arr4[i];
}
document.write("sum = "+s4);
