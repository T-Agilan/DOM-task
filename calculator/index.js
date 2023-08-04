let a = document.getElementById("output");

function display(num) {
  a.value += num;
}
function calculate() {
  a.value = eval(a.value);
}
function clearAll() {
  a.value = " ";
}
function del() {
  a.value = a.value.slice(0, -1);
}
