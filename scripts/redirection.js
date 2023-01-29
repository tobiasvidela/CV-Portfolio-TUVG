'use strict';
//  - Redirections -
//Projects
const icons = document.querySelectorAll('.project-modal-footer > a'); //select each anchor in the container
console.log(icons)

icons.forEach(icon => {
    if (icon.className == 'projectGH') {
        icon.addEventListener('click', () => { // redirect to the GitHub of the selected project
            swal({
                title: 'Wait!',
                text: `You're being redirected to the repository of ${icon.name}.\n\nSee you soon!`,
                buttons: false,
                timer: 2500,
            });
            setTimeout(() => {
                window.open(`https://github.com/tobiasvidela/${icon.name}`, '_blank', 'noopener noreferrer'); // safe way to open a link in a new tab
            }, 2500);
        });
    } else if (icon.className == 'projectWeb') { // redirect to the selected project
        icon.addEventListener('click', () => {
            swal({
                title: 'Wait!',
                text: `You're being redirected to ${icon.name}.\n\nSee you soon!`,
                buttons: false,
                timer: 2500,
            });
            setTimeout(() => {
                window.open(`https://tobiasvidela.github.io/${icon.name}`, '_blank', 'noopener noreferrer');
            }, 2500);
        });
    } else {
        console.error('There was an error while selecting the project redirection.');
    };
});

//Contacts
const contacts = document.querySelectorAll('.contact');

contacts.forEach(contact => {
    contact.addEventListener('click',() => {
        swal({
            text: `You're being redirected to ${contact.name}.\n\nSee you soon!`,
            buttons: false,
            timer: 3000,
        });
        let link = getLink(contact.name)
        setTimeout(() => {
            window.open(`${link}`,'_blank','noopener noreferrer');
        }, 3300);
    });
});
function getLink (name) { //obtain the correct link
    let link = '';
    switch (name) { //filter the contact clicked
        case 'GitHub':
            link = 'https://github.com/tobiasvidela';
            break;
        case 'LinkedIn':
            link = 'https://www.linkedin.com/in/tob%C3%ADas-uriel-videla-guliotti-26b89b1ba/';
            break;
        case 'Instagram':
            link = 'https://www.instagram.com/mind_972/';
            break;
        case 'Mail':
            link = 'mailto:tobiasvidelaug14@gmail.com';
            break;
        default:
            break;
    };
    return link;
};