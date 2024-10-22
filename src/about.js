import picture from "./imgs/about.png"

const aboutImg = document.createElement('img');
aboutImg.src = picture;
aboutImg.classList.add('aboutImg');

const aboutText = document.createElement('div');
aboutText.textContent = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here`, making it look like readable English.'
aboutText.classList.add('aboutText');

const logo = document.createElement('div');
logo.classList.add('aboutLogo');
logo.textContent = 'EL CAFÉ';

const about = () => {
    content.appendChild(aboutImg);
    content.appendChild(aboutText);
    content.appendChild(logo);
};

export { about };