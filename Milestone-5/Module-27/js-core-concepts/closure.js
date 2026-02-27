function outerFunction() {
    function innerFunction() {
        console.log('This is the inner function');
    }
    return innerFunction;
}

const result = outerFunction();
// result();
// console.log( 'in the outside', result);

function counter(owner){
    let count = 0;
    function increment() {
        count = count + 1;
        console.log('value of counter', owner, count);
    }
    return increment;
}

const rahimCounter = counter('Rahim');
rahimCounter()
rahimCounter()
rahimCounter()
rahimCounter()
const karimCounter = counter('Karim');
karimCounter();
karimCounter();
rahimCounter();
rahimCounter();
// const count1 = counter();
// count1();
// count1();
// count1();
// count1();