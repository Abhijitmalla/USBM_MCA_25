//mathemetical operator
// let num1=5;
// let num2=3;
// let result=num1+num2;
// let sub=num1-num2;
// let mul=num1*num2;
// let div=num1/num2;
// console.log(result,sub,mul,div);
// //modulo operator
// let num=29;
// let even =num%2;
// console.log(even);
// //exponent operator(power)
// let squre=2**2;
// let cube=2**3;
// console.log(squre);
// console.log(cube);
// //equality operator
// console.log(5==5);
// console.log(5=="5");
// console.log(5==="5");
// console.log(5!="5");
// console.log(5!=="5");
// //conditional statement
//     //falsy value:false,0,-0,null,undefined,"",``,NaN
//     let total_bill=10000;
//     let discount;
//     if (total_bill<10000)
//     {
//         console.log("discount");
        
//     }
//     else{
//         console.log("no discount");
        
//     }
//     let age=60;
// console.log("age is", age);

// if (age >= 18 && age < 60) {
//     console.log("adult");
// } else if (age >= 60) {
//     console.log("senior");
// } else {
//     console.log("minor");
// }
// let alphabet = prompt("Enter a letter:");
// console.log(alphabet);

// if (alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u') {
//     console.log("It's a vowel");
// } else {
//     console.log("It's a consonant");
// }
let alphabet = "t";
console.log(alphabet);

switch (alphabet.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("It's a vowel");
        break;
    default:
        console.log("It's a consonant");
        break;
}
let day = 9;


switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number! Please enter a number between 0 and 6.");
        break;
}

