function suma(a, b) {
    return a + b;
}

// AÑADIR ESTA FUNCIÓN
function agregarItem(texto) {
    const lista = document.getElementById('lista');
    const newItem = document.createElement('li');
    newItem.textContent = texto;
    lista.appendChild(newItem);
}

console.log('App lista');