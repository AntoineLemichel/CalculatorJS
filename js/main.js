let numbers = document.getElementsByClassName("numbers");
let resultat = "";
let display = document.getElementById("res");
let equal = document.getElementById("equal");
let operator = document.getElementsByClassName("operators");
let clear = document.getElementById("clear");


for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    getValue(this);
  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    getValue(this);
  });
}

clear.addEventListener("click", function () {
  resultat = "";
  display.innerHTML = "0";
});

function getValue(element) {
  resultat += element.innerHTML;
  display.innerHTML = resultat;
}

equal.addEventListener("click", function () {
  var resultTotal = eval(resultat);
  eval(resultTotal);
  display.innerHTML = resultTotal;
});
