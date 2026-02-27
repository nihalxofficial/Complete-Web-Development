function firstSum (arr1, arr2) {
    arr1[0] = 100;
    arr2[0] = 200;
    const first = arr1[0];
    const second = arr2[0];
    return first + second;
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log('before the function call: ', num1, num2);

const result = firstSum(num1, num2);

console.log('after the function call: ', num1, num2);