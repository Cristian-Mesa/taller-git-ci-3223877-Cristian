function suma(a, b) {
    return a + b;
}

// ESTA ES LA FUNCIÓN FINAL DESPUÉS DE LA MEJORA (Commit 3)
function agregarItem(texto) {
    const lista = document.getElementById('lista');
    
    // ESTA ES LA MEJORA (Refactor)
    if (lista) { 
        const newItem = document.createElement('li');
        newItem.textContent = texto;
        lista.appendChild(newItem);
    }
}

console.log('App lista');