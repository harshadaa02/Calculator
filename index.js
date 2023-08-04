result = document.querySelector(".result");

function number(value) {
  document.calcul.result.value += value;
}

function sin() {
  document.calcul.result.value = Math.sin(document.calcul.result.value);
}

function cos() {
  document.calcul.result.value = Math.cos(document.calcul.result.value);
}

function tan() {
  document.calcul.result.value = Math.tan(document.calcul.result.value);
}

function rad() {
  document.calcul.result.value = document.calcul.result.value * (Math.PI / 180);
}

function deg() {
  document.calcul.result.value = document.calcul.result.value * (180 / Math.PI);
}

function log() {
  document.calcul.result.value = Math.log10(document.calcul.result.value);
}

function ln() {
  document.calcul.result.value = Math.log(document.calcul.result.value);
}

function pi() {
  document.calcul.result.value = Math.PI * document.calcul.result.value;
}

function squared() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
}

function cubed() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
}

function sqrt2() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 1 / 2);
}

function sqrt3() {
  document.calcul.result.value = Math.pow(document.calcul.result.value, 1 / 3);
}

function remv() {
  document.calcul.result.value = "";
}

function backspc() {
  a = document.calcul.result.value;
  document.calcul.result.value = a.substring(0, a.length - 1);
}

function equal() {
  document.calcul.result.value = eval(document.calcul.result.value);
}
