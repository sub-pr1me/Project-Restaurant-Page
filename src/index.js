import "./styles.css";
import { homepage } from "./homepage.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

    const content = document.getElementById('content');
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');
    const aboutBtn = document.querySelector('.about');

    homeBtn.addEventListener('click', () => {
        content.textContent = '';
        homepage();
    });
    menuBtn.addEventListener('click', () => {
        content.textContent = '';
        menu();
    });
    aboutBtn.addEventListener('click', () => {
        content.textContent = '';      
        about();
    });

homepage();