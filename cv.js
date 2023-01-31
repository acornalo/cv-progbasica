


function showText(button, id) {
    let hideText = document.getElementById(id);
    // hideText.classList.toggle("show");
    

    if (hideText.classList.contains('show')){
        hideText.className = "hide"
        button.innerHTML = "+"; 
    }
    else {
        hideText.className = "show"
        button.innerHTML = "-";
    }
}



// Hacer lo mismo para experiencia laboral.


/* let hideText_btn = document.getElementsByClassName("ampliar_btn");

hideText_btn.addEventListener("click", toggleText);

let hideText = document.getElementsByClassName("hide");


function toggleText() {
    hideText.classList.toggle("show");
} */


/* let hideText_btn = document.getElementById("hideText_btn");
hideText_btn.addEventListener("click", toggleText);

function toggleText(id) {
    let hiddenText = document.getElementById(id);
    
    hiddenText.classList.toggle("show");

    function showPersonalData() { // showText("personalDataText")
    let hideText = document.getElementById("personalDataText");
    hideText.classList.toggle("show");
}

function showExperienciaLaboral() {
    let hideText = document.getElementById("laboralDataText");
    hideText.classList.toggle("show");
} */