'use strict'
//Alerts al contactarme
const contactos = document.querySelectorAll('.contact')

contactos[0].addEventListener('click',()=>{ //redirigir a mi perfil de github
    swal({
        text: `You're being redirected to My GitHub.\n\nSee you soon!`,
        buttons: false,
        timer: 3000,
    })
    setTimeout(() => {
        window.open('https://github.com/tobiasvidela','_blank','noopener noreferrer')
    }, 3300);
})
contactos[1].addEventListener('click',()=>{ //redirigir a mi perfil de LinkedIn
    swal({
        text: `You're being redirected to my LinkedIn.\n\nSee you soon!`,
        buttons: false,
        timer: 3000,
    })
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/tob%C3%ADas-uriel-videla-guliotti-26b89b1ba/','_blank','noopener noreferrer')
    }, 3300);
})
contactos[2].addEventListener('click',()=>{ //redirigir a mi perfil de instagram
    swal({
        text: `You're being redirected to my Instagram.\n\nSee you soon!`,
        buttons: false,
        timer: 3000,
    })
    setTimeout(() => {
        window.open('https://www.instagram.com/mind_972/','_blank','noopener noreferrer')
    }, 3300);
})
contactos[3].addEventListener('click',()=>{ //mandarme un mail
    swal({
        text: `You're being redirected to send me a mail.\n\nSee you soon!`,
        buttons: false,
        timer: 3000,
    })
    setTimeout(() => {
        window.open('mailto:tobiasvidelaug14@gmail.com','_blank','noopener noreferrer')
    }, 3300);
})