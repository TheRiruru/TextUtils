// 07/12/2023

let menuBtn = document.getElementById('menuBtn');
let navMenu = document.getElementById('navMenu');
let textarea = document.getElementById('inp');
let normalBox = document.getElementById('normalBox');
let lowerBox = document.getElementById('lowerBox');

let tiny_fonts = {
    "a": "ᴀ", "b": "ʙ", "c": "ᴄ", "d": "ᴅ", "e": "ᴇ", "f": "ғ", "g": "ɢ", "h": "ʜ", "i": "ɪ", "j": "ᴊ", "k": "ᴋ", "l": "ʟ", "m": "ᴍ",
    "n": "ɴ", "o": "ᴏ", "p": "ᴘ", "q": "ǫ", "r": "ʀ", "s": "s", "t": "ᴛ", "u": "ᴜ", "v": "ᴠ", "w": "ᴡ", "x": "x", "y": "ʏ", "z": "ᴢ",
    "A": "A", "B": "B", "C": "C", "D": "D", "E": "E", "F": "F", "G": "G", "H": "H", "I": "I", "J": "J", "K": "K", "L": "L", "M": "M",
    "N": "N", "O": "O", "P": "P", "Q": "Q", "R": "R", "S": "S", "T": "T", "U": "U", "V": "V", "W": "W", "X": "X", "Y": "Y", "Z": "Z"
}

function tiny_text(text) {
    let normal_text = "";
    let lower_text = "";

    for (let char of text) {
        if (tiny_fonts[char]) {
            normal_text += tiny_fonts[char];
            lower_text += tiny_fonts[char.toLowerCase()];
        }
        else {
            normal_text += char;
            lower_text += char;
        }
    }
    return [normal_text, lower_text];
}

function copy(element) {
    navigator.clipboard.writeText(element.parentElement.nextElementSibling.innerText);
    let div = document.createElement('div');
    div.className = "copy";
    element.append(div);
    setTimeout(() => {
        div.remove();
    }, 1000)
}

menuBtn.onclick = (e) => {
    if (e.target.innerText == "menu") {
        e.target.innerText = "close";
    }
    else {
        e.target.innerText = "menu";
    }
    navMenu.classList.toggle('toggleMenu');
}

textarea.oninput = e => {
    [normalBox.innerText, lowerBox.innerText] = tiny_text(textarea.value);
}