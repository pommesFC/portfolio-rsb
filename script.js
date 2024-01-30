const animateText = document.querySelector('.animation span');
const words = ["नमस्कार!", "Hello!", "Hallo!", "¡Hola!"];
let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    animateText.textContent = currentChar;
    animateText.classList.add("stop-blinking");
    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex >0 ){
        charIndex--;
        setTimeout(typeEffect, 100);
    } else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 900);
    }
}
typeEffect();