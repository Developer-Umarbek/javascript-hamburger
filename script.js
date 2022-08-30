const acdn = document.querySelector('.acdn')

const none = document.querySelector('.none')

acdn.addEventListener('click', () => {
    acdn.classList.toggle('imgUp')
    none.classList.toggle('drop-down')
})


const acdn2 = document.querySelector('.acdn2')

const hidden = document.querySelector('.hidden')

acdn2.addEventListener('click', () => {
    acdn2.classList.toggle('imgUp')
    hidden.classList.toggle('drop-down2')
})




const body = document.querySelector('.col')

const ham = document.querySelector('.ham')
const times = document.querySelector('#times')
const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger-menu') 

menu.addEventListener('click', () => {
    ham.classList.toggle('hamburger-menu')
    body.classList.toggle('opacity')
});





const acd = document.querySelector('.acd');
const non = document.querySelector('.down')

acd.addEventListener('click' , ()=> {
    acd.classList.toggle('imgUp')
    non.classList.toggle('non')
})





