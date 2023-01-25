'use strict' // Modern JavaScript
// ANIMAR TRAJECTORY
const columna = document.querySelectorAll('.columna')
let clicks = 0, timer = null //agregar esto y el demás código relacionado arregló bugs de display luego de animaciones
//Sí, pude haber usado funciones asíncronas pero esta solución me pareció menos laboriosa

columna.forEach(item =>{
    let descripcion = item.children[1],
        badges = item.children[2]
    item.addEventListener('click',()=>{ //al hacer click, animar
        clicks++ // cuento los cliks
        if (clicks === 1) {
            timer = setTimeout(() => {
                
                descripcion.classList.toggle('mostrar-descripción')
                setTimeout(() => { //retardar badges
                    badges.classList.toggle('mostrar-descripción')
                }, 300);
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
                    }, 500);
                } else {
                    badges.style.height = '0px'
                }

                clicks = 0 // resetear clicks
                
                //Animar después de (y esconder junto con) la descripción
                // if (badges.classList.contains('mostrar-descripción')) {
                //     badges.style.height = '0px'
                // } else {
                //     setTimeout(() => { // animar luego de esconder el anterior
                //         badges.style.height = `${badges.scrollHeight}px`
                //     }, 800);
                // }


            }, 400); //400 milisegundos para que la animación sea fluida y se puedan detectar bien los dobleclicks
        } else { //si hay muchos clicksseguidos 
            clearTimeout(timer)
            swal({
                title: 'STOP!',
                text: 'Please, be more gentle.\nDon\'t treat this page like that.',
                icon: 'warning',
                button: false,
                timer: 3200,
            })
            clicks = 0
        }
    })
    item.addEventListener('dblclick',e=>{
        e.preventDefault() //evitar doble click
    })
})