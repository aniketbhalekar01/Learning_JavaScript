for(let i=1; i<=10; i++) {
    document.write("5 * "+i+" = "+(5*i)+"<br>");
}
document.write("<h2>Even Numbers </h2>");
for(let i=1; i<=20; i++) {
    if(i % 2 == 0) {
        document.write(i+"<br>");
    }
}
document.write("<h2>Odd Numbers</h2>");
for(let i=1; i<=20; i++) {
    if(i % 2 != 0) {
        document.write(i+"<br>");
    }
}