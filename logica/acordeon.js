'use strict'
// ANIMAR TRAJECTORY
const columna = document.querySelectorAll('.columna')

columna.forEach(item =>{
    let descripcion = item.children[1],
        badges = item.children[2]
    item.addEventListener('click',()=>{ //al hacer click, animar
        descripcion.classList.toggle('mostrar-descripción')
        setTimeout(() => { //retardar badges
            badges.classList.toggle('mostrar-descripción')
        }, 500);
        if (descripcion.classList.contains('mostrar-descripción')) {
            descripcion.style.height = `${descripcion.scrollHeight}px`
            //scrollHeight devuelve la altura de un elemento incluyendo el padding pero no el scrollbar, ni el margin ni borders
        } else {
            descripcion.style.height = '0px' // esconder
        }
        //Mostrar luego de esconder la descripción
        //me gustó más porque genera un efecto rebote
        if (badges.classList.contains('mostrar-descripción')) {
            setTimeout(() => {
                badges.style.height = `${badges.scrollHeight}px`
            }, 800);
            /*hay un bug cuando se clickea demasiado, debería usar un función asíncrona 
            para esperar que termine uno para animar el otro. Pero no me queda mucho tiempo 
            para seguir probando y probando cosas, luego lo mejoraré. (estoy haciendo cursos y trbaajando)*/
        } else {
            badges.style.height = '0px'
        }
        //Animar después de (y esconder junto con) la descripción
        // if (badges.classList.contains('mostrar-descripción')) {
        //     badges.style.height = '0px'
        // } else {
        //     setTimeout(() => { // animar luego de esconder el anterior
        //         badges.style.height = `${badges.scrollHeight}px`
        //     }, 800);
        // }
    })
})