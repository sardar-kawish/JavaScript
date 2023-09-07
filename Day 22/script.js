let Mathematics = parseFloat(prompt("choose an operation\npress (1) for Addition\npress (2) for subtraction\npress (3)for Multiplacation\npress (4)  for Division"))

let a = parseFloat(prompt("Entre first valyue"))
let b = parseFloat(prompt("Entre second valyue"))

let k = function Addition(a, b) {
    console.log(a + b);
}
let l = function subtraction(a, b) {
    console.log(a - b);
}
let m = function Multiplacation(a, b) {
    console.log(a * b);
}
let n = function Division(a, b) {
    console.log(a / b);
}




switch (Mathematics) {
    case 1:
        console.log(`Addition of ${a} + ${b} is given below`);
        k(a, b);
        break;
    case 2:
        console.log(`subtraction of ${a} - ${b} is given below`);
        l(a, b);
        break;
    case 3:
        console.log(`Multiplacation of ${a} * ${b} is given below`);
        m(a, b);
        break;
    case 4:
        console.log(`Division of ${a} / ${b} is given below`);
        n(a, b);
        break;
    default:
        break;
}