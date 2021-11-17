
const play = document.getElementById("play");

play.addEventListener('click', function(){
    const selezione = document.querySelector("#difficolta").value;
    const cont = document.querySelector(".container");
    let oggetti = "";
    for(let i = 1; i <= selezione; i++){
        if(selezione == 100)oggetti += `<div class="quadrato">${i}</div>`
        else if(selezione == 81)oggetti += `<div class="quadrato hard">${i}</div>`
        else if(selezione == 49)oggetti += `<div class="quadrato crazy">${i}</div>`
    }
    cont.innerHTML = oggetti;
});
