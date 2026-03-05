// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope

function deductLifeCounter(studentName) {
  let life = 3;

  return () => {
    if (life > 0) {
      life--;
      console.log(`${studentName} , you lost a life. LIfe remaining: ${life}`);
    } else {
      console.log(`${studentName} , your ife is over! No life left!`);
    }
  };
}

const rifatAlvi = deductLifeCounter("Rifat Alvi");
const najiba = deductLifeCounter("Najiba");

rifatAlvi();
najiba();
rifatAlvi();
rifatAlvi();
rifatAlvi();
najiba();
