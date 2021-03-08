const subtrai = function (a, b) {
  return console.log("resultado da subtração:"), a - b;
};
let resultado = subtrai(3, 2);
console.log(resultado);

const testaZero = (a) => {
  return a ? "NÃO É ZERO" : "É ZERO";
};
let resultado2 = testaZero(1);
console.log(resultado2);

function testaSinal(a, b) {
  const func = function (a, b) {
    return subtrai(a, b);
  }
  let resultado3 = func(a, b);

  if (testaZero(resultado3) == "É ZERO") {
    console.log("É ZERO");
  } else if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
    console.log("MESMO SINAL");
  } else {
    console.log("SINAL DIFERENTE");
  }
}
testaSinal(-1, 4);
console.log("FIM");
