alert("Правила: копите деньги и прокачиваетесь, в минус можно уходить до -100, далее вы проиграете!")
var score = 0;
updating = 1;
function clickBtn() {
  score = score + updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  new Audio('img/jg-032316-sfx-elevator-button.mp3').play(); return false;
}
function update() {
  score = score - 100;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 1;
}
function update1() {
  score = score - 150;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 2;
}
function update2() {
  score = score - 250;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 3;
}
function update3() {
  score = score - 500;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 10;
}
function auto() {
  score = score - 10000;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  setTimeout("plusauto()", 1000);
}
function if1 () {
  if (score < -100) {
    document.write('<title>Game over</title><link rel="stylesheet" href="./style.css"><link rel="icon" href="img/mouse.png">Вы проиграли, так-как вы превысили лимит кредита<a href="/index.html"><button>Начать заново</button></a>');
  }
}
function plusauto () {
  score += updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  setTimeout("auto1()", 1000);
}
function auto1 () {
  score += updating;
  setTimeout("plusauto()", 1000);
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function pashalka () {
  score += 10000;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function reboot () {
  alert("Ваш уровень прокачки " + updating + ". Ваш баланс " + score + " .");
}


