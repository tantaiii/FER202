const double = (x) => x * 2;
console.log(double(7)); // 14
const double2 = (x) => {
     return x * 2; 
    };
console.log(double2(7)); // 14

const isEven = (x) => { 
    return x % 2 === 0;
 };
console.log(isEven(7));
 // false
const isEven2 = x => x % 2 === 0;
console.log(isEven2(10)); // true
console.log(isEven2(7));  // false
 