const task3Element = document.getElementById('task-3');
function showAlert() {
    alert("Hello Gailloty !");
}

function showAlertName(name) {
    alert("Hello, " + name);
}

function concatStrings(a, b, c) {
    return a + " " + b + " " + c;
}

showAlert() ; showAlertName()

task3Element.addEventListener("click", showAlert)

res = concatStrings("My name", "is", "Gailloty")

alert(res)