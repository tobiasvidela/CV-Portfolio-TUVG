"use strict";
// ANIMAR COMPUTADORA
const skills = document.querySelector('.s-icons') //obtener elemento

function frames () { //animar elementos
    const animation = skills.animate([
        //keyframes
        {transform: 'TranslateX(0px)'},
        {transform: `TranslateX(-65px)`} //dejaré para más tarde hacer que pueda variar junto con el tamaño de cada imagen para que pueda ser responsive
    ],{
        //opciones
        easing: 'Linear',
        iterations: 1,
        duration: 1000
    })
    return animation.finished
}
function desplazarX () { //desplazar primer elemento al final
    frames()
    .then(()=>{
        skills.appendChild(skills.querySelectorAll('.s-icons > img')[0]) //arregla los errores al hacerlo con skills.firstChild
    })
}
setInterval(()=>{ //repetir
    desplazarX()
},2000)

// ANIMAR ICONOS DE TITULO
const iconos = document.querySelectorAll('.iconos')

function frames2 () { //animar iconos
    const animate = iconos[0].animate([
        {transform: 'TranslateX(-3%)'},
        {transform: 'Rotate(.05turn)'},
        {transform: 'TranslateX(3%)'},
        {transform: 'Rotate(-.1turn)'},
        {transform: 'TranslateX(-1%)'},
        {transform: 'Rotate(.1turn)'},
        {transform: 'TranslateX(1%)'},
        {transform: 'Rotate(-.05turn)'},
        {transform: 'TranslateX(-3%)'},
        {transform: 'Rotate(.05turn)'},
    ],{
        easing: 'Linear',
        iterations: 1,
        duration: 700,
    })
    return animate.finished
}
function sacudirX () {
    frames2()
    .then(()=>{
        // console.log(iconos[0])
    })
}
iconos[0].addEventListener('mouseover',()=>{
    sacudirX()
})
iconos[1].addEventListener('mouseover',()=>{
    iconos[1].animate([
        {transform: 'TranslateX(-3%)'},
        {transform: 'Rotate(.05turn)'},
        {transform: 'TranslateX(3%)'},
        {transform: 'Rotate(-.1turn)'},
        {transform: 'TranslateX(-1%)'},
        {transform: 'Rotate(.1turn)'},
        {transform: 'TranslateX(1%)'},
        {transform: 'Rotate(-.05turn)'},
        {transform: 'TranslateX(-3%)'},
        {transform: 'Rotate(.05turn)'},
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)'},
        {transform: 'scale(1)'},
        {transform: 'scale(1)'},
        {transform: 'scale(1.2)'},
        {transform: 'scale(1)'},
    ],{
        easing: 'Linear',
        iterations: 1,
        duration: 2000
    })
})
iconos[2].addEventListener('mouseover',()=>{
    iconos[2].animate([
        {transform: 'rotateX(45deg)'},
        {transform: 'rotateY(-45deg)'},
        {transform: 'rotateX(-45deg)'},
        {transform: 'rotateX(0deg)'},
        {transform: 'rotateY(0deg)'},
    ],{
        easing: 'linear',
        iterations: 1,
        duration: 3000,
    })
})

// ANIMAR GUSTOS
const hobbies = document.querySelector('.hobbies')

function frames3 () {
    const mover = hobbies.animate([
        {transform: 'translateY(0px)', opacity: '1'},
        {opacity: '.85'},
        {transform: 'translateY(-100px)', opacity: '1'},
    ],{
        easing: 'linear',
        iterations: 1,
        duration: 700,
    })
    return mover.finished
}
function desplazarY () {
    frames3()
    .then(()=>{
        hobbies.appendChild(hobbies.querySelectorAll('.hobbies > img')[0])
    })
}
let animarHobbies = setInterval(() => {
    desplazarY()
}, 4000)
hobbies.addEventListener('click',()=>{
    desplazarY()
    clearInterval(animarHobbies)
})
//cambiar por promises para cuando (pasado un tiempo de hacer click) se reinicie la animación automática

// ANIMAR FOTO DE PERFIL
// ANIMAR SLIDER
// ANIMAR ICONOS DE CONTACTO
// ANIMAR TRAJECTOR