let age = document.getElementById("age");
let ageOut = document.getElementById("current-result");

function showResults(nb) {
    alert("The result is " + nb )
}

btn = document.getElementById("ok");
btn.addEventListener("click", () => {
    ageOut.textContent = age.value;
    showResults(age.value)
})
