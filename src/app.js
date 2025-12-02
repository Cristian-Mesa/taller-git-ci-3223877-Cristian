// 1. CORRECCIÓN: Se añade 'export' a la función suma para que pueda ser testeada.
export function suma(a, b) { 
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

// 2. CORRECCIÓN: Se añade el EventListener para el botón con ID,
//    resolviendo el comentario sobre no usar 'onclick' en el HTML.
document.addEventListener('DOMContentLoaded', () => {
    const agregarBtn = document.getElementById('agregar-btn');
    if (agregarBtn) {
        agregarBtn.addEventListener('click', () => {
            agregarItem('Elemento añadido por EventListener');
        });
    }
});