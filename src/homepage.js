import homeImg from "./imgs/home.png"
import facebook from "./icons/facebook.svg"
import instagram from "./icons/instagram.svg"
import whatsapp from "./icons/whatsapp.svg"

const imgHome = document.createElement('img');
imgHome.classList.add('homeImg');
imgHome.src = homeImg;

const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'EL CAFÉ';

const reserve = document.createElement('button');
reserve.classList.add('reserve');
reserve.textContent = 'Make a reservation';

const socDiv = document.createElement('div');
const fb = document.createElement('img');
const inst = document.createElement('img');
const wa = document.createElement('img');

fb.src = facebook;
inst.src = instagram;
wa.src = whatsapp;

socDiv.classList.add('socDiv')
fb.classList.add('social');
inst.classList.add('social');
wa.classList.add('social');

    const homepage = () => {
        content.appendChild(imgHome);
        content.appendChild(logo);
        content.appendChild(reserve);
        content.appendChild(socDiv);
        socDiv.appendChild(fb);
        socDiv.appendChild(inst);
        socDiv.appendChild(wa);
    };

export { homepage };