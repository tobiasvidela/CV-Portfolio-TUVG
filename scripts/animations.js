'use strict';
// COMPUTER ICONS
const skillIcons = document.querySelector('.skillIcons');

function displaceX (elements) { //displace horizontally
    const Xdisplacement = elements.animate([
        //start
        {transform: 'TranslateX(0px)'},
        {transform: `TranslateX(-66px)`}
        //end
    ],{
        //options
        easing: 'ease-in-out',
        iterations: 1,
        duration: 900
    });
    return Xdisplacement.finished;
};
function swap (element,direction = null) { //swap images in a container element
    //verify direction is a string
    if (typeof direction != 'string') {
        return console.error('The direction must be a string value');
    };

    let dir = direction.toLowerCase();

    if (dir == 'x') { //horizontal
        displaceX(element).then(()=>{ //after animation
            //send the first image to the last position
            element.appendChild(element.querySelectorAll(`.${element.className} > img`)[0]);
        });
    } else if (dir == 'y') { //vertical
        displaceY(element).then(()=>{
            element.appendChild(element.querySelectorAll(`.${element.className} > img`)[0]);
        });
    } else {
        console.error('Any direction was detected.');
    };
};
setInterval(()=>{ //repeat
    swap(skillIcons,'x');
},1900); // wait a second before repeating the animation

// HERO-ICONS
const heroIcons = document.querySelectorAll('.hero-icons');

// hero-icons animations:
function shake (icon) { //shakes an icon horizontally
    const shaking = icon.animate([
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
    });
    return shaking.finished;
};
function shakeAndBeat (icon) { // shakes a litle, then does one beat
    const shakingAndBeat = icon.animate([
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
    });
    return shakingAndBeat.finished;
};
function turnAndFlip (icon) { // turns vertically and flips once
    const turningAndFlipping = icon.animate([
        //Turn
        {transform: 'rotateY(0)', opacity: '1'},
        {transform: 'rotateY(45deg)'},
        {transform: 'rotateY(90deg)'},
        {transform: 'rotateY(0)', opacity: '0'},
        //Flip
        {transform: 'rotateZ(180deg)', opacity: '0'},
        {opacity: '1'},
    ],{
        easing: 'ease',
        iterations: 1,
        duration: 1500,
    });
    return turningAndFlipping.finished;
};
// set animations to hero-icons
heroIcons[0].addEventListener('mouseover',()=>{ //fa-circle-question
    shake(heroIcons[0]);
});
heroIcons[1].addEventListener('mouseover',()=>{ //fa-heart
    shakeAndBeat(heroIcons[1]);
});
heroIcons[2].addEventListener('mouseover',()=>{ //fa-user-tie
    turnAndFlip(heroIcons[2]);
});

// HOBBIES
const hobbies = document.querySelector('.hobbies');

function displaceY (elements) { // displace vertically
    const Ydisplacement = elements.animate([
        {transform: 'translateY(0px)', opacity: '1'},
        {opacity: '.85'},
        {transform: 'translateY(-100px)', opacity: '1'},
    ],{
        easing: 'linear',
        iterations: 1,
        duration: 700,
    });
    return Ydisplacement.finished;
};
let animateHobbies = setInterval(() => {
    swap(hobbies,'y');
}, 4000);

let clicks = 0, timer = null; //clicks prevention

hobbies.addEventListener('click',()=>{ //switch to manual animation
    clicks++; //count clicks
    if (clicks === 1) {
        timer = setTimeout(() => {
            swap(hobbies,'y'); //animate
            clearInterval(animateHobbies); //stop automatic animation
            clicks = 0; //reset clicks
        }, 750); //waits for next click
    } else { //for more than one click
        clearTimeout(timer); //stop timer
        //Ask user to stop clicking that fast
        swal({ //SweetAlert
            title: 'STOP!',
            text: 'Please, be more patient.\nDon\'t treat this page like that.',
            icon: 'warning',
            button: false,
            timer: 3200,
        });
        clicks = 0; // reset clicks
    };
    hobbies.addEventListener('dblclick',e=>{
        e.preventDefault(); //prevents double clicks
    });
});

// SLIDER
const slider = document.querySelector('#slider'),
      btnLeft = document.querySelector('#btn-left'),
      btnRight = document.querySelector('#btn-right');
let sliderSection = document.querySelectorAll('.slider-section'),
    sliderSectionLast = sliderSection[sliderSection.length - 1];
      
slider.insertAdjacentElement('afterbegin', sliderSectionLast); //move last element to the start

function moveLeft(){ //slide to left
    let sliderSection = document.querySelectorAll('.slider-section'),
        sliderSectionLast = sliderSection[sliderSection.length - 1];

    slider.style.marginLeft = '0%';
    slider.style.transition = 'all 1.2s';

    setTimeout(() => {
        slider.style.transition = 'none'; 
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = '-100%';
    },1200);//slide duration
};
function moveRight () { //slide to right
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];

    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 1.2s';

    setTimeout(() => {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend',sliderSectionFirst); //move first element to the end
        slider.style.marginLeft = '-100%';
    },1200);
};

btnRight.addEventListener('click',()=>{
    moveRight();
});
btnLeft.addEventListener('click',()=>{
    moveLeft();
});

setInterval(() => { //repeat slider
    moveRight();
}, 15000);