let pi = 3.14;
add(2,5);

function add (a, b) {
    const factor = 0.5;
    const result = (a + b) * factor + pi;
    const total = doubleIt(result);
    const value = addTwo(total);

    function addTwo(num) {
        num = num + pi;
        return num + 2;
    }

    return value;
}

function doubleIt(num) {
    return num * 2;
}

add(5, 10);

// console.log(factor, pi);


const multiply = (a, b) => {
    console.log(result);
    // TDZ:
    const result = a * b;
    return result;
}
multiply(2, 5);

if(true) {

}

while(true) {

}

const age = 21;