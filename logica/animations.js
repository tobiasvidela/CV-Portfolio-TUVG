// ANIMAR COMPUTADORA
const skills = document.querySelector('.s-icons') //debo usarlo para arreglar errores

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