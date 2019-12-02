const inputAdd = document.getElementById('idInput');
const colorInput = document. getElementById('colorInput');


function setCard(){
    const card = document.getElementById(inputAdd.value);
    card.style.color = colorInput.value
}

function reset (){
    const card = document.getElementById(inputAdd.value);
    inputAdd.value = '';
    colorInput.value = '';
    card.style.color = 'grey';
}

// 