const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    getSymbol = (code) => {
        let s = '';
        for (let j = 0; j < code.length; j += 2) {
            if (code.substr(j, 2) === '10') {
                s = s + '.'
            }
            if (code.substr(j, 2) === '11') {
                s = s + '-'
            }
        }
        return MORSE_TABLE[s];
    }

    let str = '';
    let code = '';

    for (let i = 0; i < expr.length; i += 10) {
        code = expr.substr(i, 10);
        if (code === '**********') {
            str = str + ' ';
        } else {

            str = str + getSymbol(code);
        }
    }

    return str;
}

module.exports = {
    decode
}