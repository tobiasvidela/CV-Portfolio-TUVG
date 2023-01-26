'use strict'; // Modern JavaScript
// ANIMATE TRAJECTORY COLUMNS
const column = document.querySelectorAll('.column');
let clicks = 0, timer = null;

column.forEach(item =>{
    let description = item.children[1],
        badges = item.children[2];
    item.addEventListener('click',()=>{
        clicks++;
        if (clicks === 1) {
            timer = setTimeout(() => {
                description.classList.toggle('show-description');
                setTimeout(() => { // badges delay
                    badges.classList.toggle('show-description');
                }, 300);
                if (description.classList.contains('show-description')) {
                    description.style.height = `${description.scrollHeight}px`;
                    //scrollHeight returns an objects height; includes the padding, but does not includes for scrollbar, margin and borders
                } else {
                    description.style.height = '0px'; // hide
                }
                //Show after hiding the description
                if (badges.classList.contains('show-description')) {
                    setTimeout(() => { //more delay
                        badges.style.height = `${badges.scrollHeight}px`;
                    }, 500);
                } else {
                    badges.style.height = '0px';
                }
                clicks = 0;
            }, 400); //400 miliseconds for better fluid animation and properly work for the double-click prevention
        } else { //if there are fast clicks
            clearTimeout(timer);
            //alert user to stop clicking like that
            swal({ //SweetAlert
                title: 'STOP!',
                text: 'Please, be more gentle.\nDon\'t treat this page like that.',
                icon: 'warning',
                button: false,
                timer: 3200,
            });
            clicks = 0;
        };
    });
    item.addEventListener('dblclick',e=>{
        e.preventDefault(); //prevents double clicks
    });
});