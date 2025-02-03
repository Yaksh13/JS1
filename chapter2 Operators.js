// ---------------------------------------------------------Arithmetic Operators------------------------------------------------------------

let a = 5;
let b = 2;

console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a % b = ",a % b);
console.log("a ** b =",a ** b);

// -------------------------------------------------------------Unary Operators------------------------------------------------------------

let x = 10;
x++;
//x--;
console.log("x++ = ",x++);
//console.log("x-- = ",x--);

// Post-decrement
let g = 5;
--g;
console.log("--g = ",--g);

// ------------------------------------------------------------Assignment Operators------------------------------------------------------------

let p = 10;
let q = 20;

//p += q;
//p -= q;
p *= q;
//p /= q;
//p %= q;
//p **= q;

//console.log("p += q = ",p);
//console.log("p -= q = ",p);
console.log("p *= q = ",p);
//console.log("p /= q = ",p);
//console.log("p %= q = ",p);
//console.log("p **= q = ",p);

// -----------------------------------------------------------------Comparison Operators------------------------------------------------------------

let m = 10;
let n = 20;

console.log("m == n ",m == n);
console.log("m != n ",m != n);
console.log("m === n ",m === n);
console.log("m !== n ",m !== n);
console.log("m > n ",m > n);
console.log("m < n ",m < n);
console.log("m >= n ",m >= n);
console.log("m <= n ",m <= n);

// -------------------------------------------------------------------Logical Operators------------------------------------------------------------

let w = 6;
let z = 4;

let cond1 = w < z;
let cond2 = w === 6;

console.log("cond1 && cond2 = ",cond1 && cond2);

console.log("cond1 || cond2 = ",cond1 || cond2);

console.log("!(w < z) =  ",!(w === z));

// ---------------------------------------------------------------------Ternary Operator------------------------------------------------------------

let age1 = 18;

let result = age1 >= 18 ? "Vote" : "Not Vote";
console.log(result);