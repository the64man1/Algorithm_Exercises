// Write a function called power which accepts a base and an exponent.
// The function should be recursive and return the power of the base to the exponent
// Does not include negative bases and exponents
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2) {
    if (num2 === 0) return 1;
    if (num2 === 1) return num1;
    return num1 * power(num1, num2-1);
}
