'use strict'
// ANIMAR COMPUTADORA
const skills = document.querySelector('.s-icons') //obtener elemento

function trasladarX (elementos) { //animación para desplazar horizontalmente
    const animation = elementos.animate([
        //inicio
        {transform: 'TranslateX(0px)'},
        {transform: `TranslateX(-66px)`}
        //fin
    ],{
        //opciones de animación
        easing: 'ease-in-out',
        iterations: 1,
        duration: 900
    })
    return animation.finished
}
function intercambiar () {
    trasladarX(skills) //ejecutar la animación
    .then(()=>{ //luego
        //ubicar el primer elemento y posicionarlo al último
        skills.appendChild(skills.querySelectorAll('.s-icons > img')[0])
    })
}
setInterval(()=>{ //repetir
    intercambiar()
},1900)// 1 segundo más que la animación (espera un segundo antes de repetir la animación)

// ANIMAR ICONOS DE TITULO
const iconos = document.querySelectorAll('.iconos') //obtener íconos (hero)

// animaciones de iconos:
function sacudir (icon) { // animación de sacudida
    const sacudida = icon.animate([
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
        {transform: 'Rotate(0turn)'},
    ],{
        easing: 'ease-out',
        iterations: 1,
        duration: 700,
    })
    return sacudida.finished
}
function sacudirYLatido (icon) { // animación de sacudir y latido
    const shakeAndBeat = icon.animate([
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
    ],{
        easing: 'ease',
        iterations: 1,
        duration: 1500
    })
    return shakeAndBeat.finished
}
function girarYVoltear (icon) { // animación de girar y voltear
    const turnAndFlip = icon.animate([
        //Voltear
        {transform: 'rotateY(0)', opacity: '1'},
        {transform: 'rotateY(45deg)'},
        {transform: 'rotateY(90deg)'},
        {transform: 'rotateY(0)', opacity: '0'},
        //Girar
        {transform: 'rotateZ(180deg)', opacity: '0'},
        {opacity: '1'},
    ],{
        easing: 'ease',
        iterations: 1,
        duration: 1500,
    })
    return turnAndFlip.finished
}
// asignar animaciones a los íconos
iconos[0].addEventListener('mouseover',()=>{ //fa-circle-question
    sacudir(iconos[0])
})
iconos[1].addEventListener('mouseover',()=>{ //fa-heart
    sacudirYLatido(iconos[1])
})
iconos[2].addEventListener('mouseover',()=>{ //fa-user-tie
    girarYVoltear(iconos[2])
})

// ANIMAR HOBBIES Y GUSTOS
const hobbies = document.querySelector('.hobbies')

function trasladarY () { // animación para desplazar verticalmente
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
    trasladarY()
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

/* ANIMAR FOTO DE PERFIL //descartado temporalmente
const profile = document.querySelector('#profile')
function profileFrames () {
    const floatingImg = profile.animate([
        {transform: 'translateY(0px)'},
        {transform: 'translateY(-5px)'},
        {transform: 'translateY(-10px)'},
        // {transform: 'translateY(-15px)'},
        // {transform: 'translateY(-20px)'},
        // {transform: 'translateY(-15px)'},
        // {transform: 'translateY(-10px)'},
        {transform: 'translateY(-5px)'},
        {transform: 'translateY(0px)'},
        // {transform: 'translateY(5px)'},
        // {transform: 'translateY(10px)'},
        // {transform: 'translateY(15px)'},
        // {transform: 'translateY(20px)'},
        // {transform: 'translateY(15px)'},
        // {transform: 'translateY(10px)'},
        // {transform: 'translateY(5px)'},
        // {transform: 'translateY(0px)'},
    ],{
        easing: 'ease-in-out',
        iterations: Infinity,
        duration: 2000,
        direction: 'alternate',
    })
    return floatingImg.finished
}
requestAnimationFrame(profileFrames)*/

// ANIMAR SLIDER
const slider = document.querySelector('#slider'),
      btnIzq = document.querySelector('#btn-izq'),
      btnDer = document.querySelector('#btn-der')
let sliderSection = document.querySelectorAll('.slider-section'),
    sliderSectionLast = sliderSection[sliderSection.length - 1]
      
slider.insertAdjacentElement('afterbegin', sliderSectionLast) //desplazar el último elemento al inicio

function moverIzq(){ //funcion para desplazar hacia la izquierda
    let sliderSection = document.querySelectorAll('.slider-section'),
        sliderSectionLast = sliderSection[sliderSection.length - 1]
    slider.style.marginLeft = '0%'
    slider.style.transition = 'all 1.2s'
    setTimeout(() => {
        slider.style.transition = 'none'   
        slider.insertAdjacentElement('afterbegin',sliderSectionLast)
        slider.style.marginLeft = '-100%'
    },1200);
}
function moverDer () { //funcion para desplazar hacia la derecha
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0]
    slider.style.marginLeft = '-200%'
    slider.style.transition = 'all 1.2s'
    setTimeout(() => {
        slider.style.transition = 'none'   
        slider.insertAdjacentElement('beforeend',sliderSectionFirst)
        slider.style.marginLeft = '-100%'
    },1200);
}
btnDer.addEventListener('click',()=>{
    moverDer()
})
btnIzq.addEventListener('click',()=>{
    moverIzq()
})
setInterval(() => { //repetir
    moverDer()
}, 15000);

