var websquad = document.getElementById('web');
var visual = document.getElementById('visual');


function moveRight(){
    if (websquad.classList.contains('open')) {
        websquad.classList.remove('open');
    } else {
        websquad.classList.add('open');
    }
}

function moveLeft(){

}

websquad.addEventListener("click", moveRight);
visual.addEventListener("click", moveLeft);
