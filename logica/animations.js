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
function desplazarY () { //desplazar primer elemento al final
    frames()
    .then(()=>{
        skills.appendChild(skills.querySelectorAll('.s-icons > img')[0]) //arregla los errores al hacerlo con skills.firstChild
    })
}
setInterval(()=>{ //repetir
    desplazarY()
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
        const animate = iconos[1].animate([
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
            {transform: 'TranslateX(3%)'},
            {transform: 'Rotate(-.05turn)'},
        ],{
            easing: 'Linear',
            iterations: 1,
            duration: 900
        })
        return animate.finished
    })
}
setInterval(() => {
    sacudirX()
}, 7500);

// ANIMAR GUSTOS
// ANIMAR FOTO DE PERFIL
// ANIMAR SLIDER
// ANIMAR ICONOS DE CONTACTO
// ANIMAR TRAJECTORY