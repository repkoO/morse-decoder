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
};

function decode(expr) {
    const exprArr = expr.match(/.{1,10}/g)
    const parseIntArr = exprArr.map(el => parseInt(el) || el)
    let resArr = []
    let decodeString = '';
    for (let i = 0; i < parseIntArr.length; i++) {
        resArr.push(String(parseIntArr[i]).replaceAll(10, '.').replaceAll(11, '-').replaceAll('**********', ' ')) 
        resArr[i] === ' ' ? decodeString += ' ' :  decodeString += MORSE_TABLE[resArr[i]]
    }
    return decodeString;
}

module.exports = {
    decode
}