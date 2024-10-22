import scallop from "./imgs/scallop.png"
import duck from "./imgs/duck.png"
import salmon from "./imgs/salmon.png"
import salad from "./imgs/salad.png"
import left from "./icons/left.svg"
import right from "./icons/right.svg"

let content = document.getElementById('content');
let scallopImg = document.createElement('img');
let duckImg = document.createElement('img');
let salmonImg = document.createElement('img');
let saladImg = document.createElement('img');
let dishName = document.createElement('div');
let leftArrow = document.createElement('img');
let rightArrow = document.createElement('img');

scallopImg.src = scallop;    
saladImg.src = salad;
duckImg.src = duck;
salmonImg.src = salmon;
leftArrow.src = left;
rightArrow.src = right;

dishName.classList.add('dishName');
scallopImg.classList.add('food');
duckImg.classList.add('food');
salmonImg.classList.add('food');
saladImg.classList.add('food');
leftArrow.classList.add('arrow_left');
rightArrow.classList.add('arrow_right');

const scallopText = 'Seared scallops with spinach and black caviar';
const duckText = 'Duck roasted with lavender honey and blueberries';
const salmonText = 'Tasmanian salmon with prosciutto and maltase sauce';
const saladText = 'Butter lettuce salad with cashew dressing';

const menu = () => {
    dishName.textContent = scallopText;
    content.appendChild(dishName);
    content.appendChild(leftArrow);
    content.appendChild(rightArrow);
    content.appendChild(scallopImg);

    leftArrow.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        switch(dishName.textContent) {
            case scallopText:
                content.textContent ='';
                dishName.textContent = saladText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(saladImg);
                break;
            case saladText:
                content.textContent ='';
                dishName.textContent = salmonText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(salmonImg);
                break;
            case salmonText:
                content.textContent ='';
                dishName.textContent = duckText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(duckImg);
                break;
            case duckText:
                content.textContent ='';
                dishName.textContent = scallopText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(scallopImg);
                break;
        };
    });
    rightArrow.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        switch(dishName.textContent) {
            case scallopText:
                content.textContent ='';
                dishName.textContent = duckText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(duckImg);
                break;
            case duckText:
                content.textContent ='';
                dishName.textContent = salmonText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(salmonImg);
                break;
            case salmonText:
                content.textContent ='';
                dishName.textContent = saladText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(saladImg);
                break;
            case saladText:
                content.textContent ='';
                dishName.textContent = scallopText;
                content.appendChild(dishName);
                content.appendChild(leftArrow);
                content.appendChild(rightArrow);
                content.appendChild(scallopImg);
                break;
        };
    });
};

export { menu };