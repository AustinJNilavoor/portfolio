const words = ['Flutter developer', 'Frontend developer', 'Electronics Engineer'];
let wordIndex = 0;
let charIndex = 1;
let typing = true;
const typingSpeed = 140;
const removingSpeed = 40;
const blinkSpeed = 500;
let count = 6;

const typingText = document.getElementById("typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (typing) {
        if (charIndex <= currentWord.length) {
            typingText.innerHTML = currentWord.slice(0, charIndex) + '|';
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            typing = false;
            setTimeout(blinkCursor, 10)
        }
    } else {
        count = 10;
        if (charIndex > 0) {
            typingText.innerHTML = currentWord.slice(0, charIndex) + '|';
            charIndex--;
            setTimeout(typeEffect, removingSpeed);
        } else {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, removingSpeed);
        }
    }
}

function blinkCursor() {
    const currentWord = words[wordIndex];
    if (count > 0) {
        if (typingText.innerHTML.charAt(currentWord.length) == '|')
            typingText.innerHTML = currentWord;
        else
            typingText.innerHTML = currentWord + '|';
        count--;
        setTimeout(blinkCursor, blinkSpeed);
    }
    else
        typeEffect();
}

function toggleMenu() {
    const display = window.getComputedStyle(document.getElementById("menu")).display;
    if (display == 'none') {
        document.getElementById("menu").style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    else {
        document.getElementById("menu").style.display = 'none';
        document.body.style.overflow = 'unset';
    }
}
window.onload = typeEffect;
