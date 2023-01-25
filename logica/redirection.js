'use strict';
const iconosContenedor = document.querySelectorAll('.iconos-contenedor > a');

iconosContenedor.forEach(icon => {
    if (icon.className == 'proyectosGH') {
        icon.addEventListener('click', () => { // redirigir al GitHub del proyecto seleccionado
            swal({
                title: 'Wait!',
                text: `You're being redirected to the repository of ${icon.name}.\n\nSee you soon!`,
                buttons: false,
                timer: 2500,
            });
            setTimeout(() => {
                window.open(`https://github.com/tobiasvidela/${icon.name}`, '_blank', 'noopener noreferrer'); // abrir de manera segura
            }, 2500);
        });
    } else if (icon.className == 'proyectos') { // redirigir al proyecto seleccionado
        icon.addEventListener('click', () => {
            swal({
                title: 'Wait!',
                text: `You're being redirected to ${icon.name}.\n\nSee you soon!`,
                buttons: false,
                timer: 2500,
            });
            setTimeout(() => {
                window.open(`https://tobiasvidela.github.io/${icon.name}`, '_blank', 'noopener noreferrer'); // abrir de manera segura
            }, 2500);
        });
    } else {
        console.error('There was an error while selecting the project redirection.');
    };
});

// proyectosGH[0].addEventListener('click', ()=>{ //redirigir a GitHub de CrochetMind
//     swal({
//         title: 'Wait!',
//         text: `You're being redirected to the repository of CrochetMind.\n\nSee you soon!`,
//         buttons: false,
//         timer: 2500,
//     });
//     setTimeout(() => {
//         window.open('https://github.com/tobiasvidela/CrochetMind','_blank','noopener noreferrer'); //abrir de manera segura
//     }, 2500);
// });
// proyectos[0].addEventListener('click', ()=>{ //redirigir a CrochetMind
//     swal({
//         title: 'Wait!',
//         text: `You're being redirected to CrochetMind.\n\nSee you soon!`,
//         buttons: false,
//         timer: 2500,
//     });
//     setTimeout(() => {
//         window.open('https://tobiasvidela.github.io/CrochetMind/','_blank','noopener noreferrer');
//     }, 3000);
// });
// proyectosGH[1].addEventListener('click', ()=>{ //redirigir a GitHub de CalcWeekDay
//     swal({
//         title: 'Wait!',
//         text: `You're being redirected to the repository of CalcWeekDay.\n\nSee you soon!`,
//         buttons: false,
//         timer: 2500,
//     });
//     setTimeout(() => {
//         window.open('https://github.com/tobiasvidela/CalcWeekDay','_blank','noopener noreferrer');
//     }, 2500);
// });
// proyectos[1].addEventListener('click', ()=>{ //redirigir a CalcWeekDay
//     swal({
//         title: 'Wait!',
//         text: `You're being redirected to CalcWeekDay.\n\nSee you soon!`,
//         buttons: false,
//         timer: 2500,
//     });
//     setTimeout(() => {
//         window.open('https://tobiasvidela.github.io/CalcWeekDay/','_blank','noopener noreferrer');
//     }, 3000);
// });
// proyectosGH[2].addEventListener('click', ()=>{ //redirigir a GitHub de SpeedCubeVM
//     swal({
//         title: 'Wait!',
//         text: `You're being redirected to the repository of SpeedCubeVM.\n\nSee you soon!`,
//         buttons: false,
//         timer: 2500,
//     });
//     setTimeout(() => {
//         window.open('https://github.com/tobiasvidela/SpeedCubeVM','_blank','noopener noreferrer');
//     }, 2500);
// });
// proyectos[2].addEventListener('click', ()=>{ //redirigir a SpeedCubeVM
//     swal({
//         title: 'Wait!',
//         text: `You're being redirected to SpeedCubeVM.\n\nSee you soon!`,
//         buttons: false,
//         timer: 2500,
//     });
//     setTimeout(() => {
//         window.open('https://tobiasvidela.github.io/SpeedCubeVM/','_blank','noopener noreferrer');
//     }, 3000);
// });
