const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':  ' ',
};

function decode(str) {
    let arr = [];
    let result = '';

    for (let i = 0; i < str.length ; i += 10) {
        arr.push(str.slice(i, i + 10));
    }

    let newarr = [];
    
    for (item of arr) {
        if (item === '**********') {
            newarr.push(' ');
        } else {
            let rem = '';
            for (let j = 0; j < item.length; j += 2) {
                if (item[j] === '1' && item[j + 1] === '1') {
                    rem += '-';
                }
                if (item[j] === '1' && item[j + 1] === '0') {
                    rem += '.';
                } else {
                    item.replace('00', '');
                }
            }
            newarr.push(rem);
        }
    }

    for (item of newarr) {
        result += MORSE_TABLE[item];
    }
    return result;
}

module.exports = {
    decode
}