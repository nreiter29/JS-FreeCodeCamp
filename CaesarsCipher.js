function rot13(str) {
    let maxAscii = 90;
    let minAscii = 65;
    let rotate = 13;

    return str.split('').map(letter => {
        let curLetter = letter.charCodeAt();
        if ((curLetter >= minAscii) && (curLetter <= maxAscii)) {
            curLetter -= 13;
            if (curLetter < 65) { curLetter += 26; }
        }
        return String.fromCharCode(curLetter);
    }).join("");
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");