const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
/*los empty son drop zone que es el area en el cual se puede soltar la imagen */

//Fill Listeners
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    /*El evento dragover se activa cuando un elemento o texto se arrastra 
    a un objetivo válido (cada pocos cientos de milisegundos). */
    empty.addEventListener('dragenter', dragEnter)
    /*se activa cuando un elemento ingresa a un destino de colocación válido */
    empty.addEventListener('dragleave', dragLeave)
     /*se activa cuando un elemento arrastrado o una selección de texto deja 
    un destino de colocación válido.*/
    empty.addEventListener('drop', dragDrop)
    /* se activa cuando se coloca un elemento o una selección de texto 
    en un destino de colocación válido.*/
}


//funciones
function dragStart() {
    console.log('inicio');
    this.className += ' hold' 
    /*this.clasName = clasName + 'hold' */
    /*Cuando se inicializa se le asigna la clase hold la cual le da estilos a 
    el elemento que se arrastra*/
    setTimeout(() => this.className = 'invisible', 0)
    /*esto vuelve invisible el clas name para que no se vea
    el lugar en donde estuvo */
}

function dragEnd() {
    console.log('Final');
    this.className = 'fill'
    /*captar el lemento que llega a los empty */
    
}

function dragOver(e) {
    console.log('over');
    e.preventDefault()
    /* esto captura la clase fill en el elemento al cual se acerca*/
    /*Cancela el evento si este es cancelable, sin detener el resto del 
  funcionamiento del evento, es decir, puede ser llamado de nuevo. */
}

function dragEnter(e) {
    console.log('enter');
    e.preventDefault()
    this.className += ' hovered'
    /*asigana los estilos del hovered para cuando se acerca el elemento a los emptys */
}

function dragLeave() {
    console.log('leave');
    this.className = 'empty'
    /*le quita los estilos del hovered cuando el elemento se 
    aleja del empty */
}

function dragDrop() {
    console.log('drop');
    this.className = 'empty'
    /*se le asignana los estilos del empty para evitar que quede con la 
    linea punteada  */
    this.append(fill)
    /*el elemnto empty al cual se le asigna toma los valores de pill */
    /*inserta el contenido especificado al final de los elementos seleccionados. */
}


