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
    const arr = [];
	const result = [];
    for (let i = 0; i < expr.length; i += 2) {
		if (expr[i] === '0' && expr[i + 1] === '0') arr.push('+');
		if (expr[i] === '1' && expr[i + 1] === '0') arr.push('.');
		if (expr[i] === '1' && expr[i + 1] === '1') arr.push('-');
		if (expr[i] === '*' && expr[i + 1] === '*') arr.push('*');
	}
	
	for (let j = 0; j < arr.length; j += 5) {
		let word = arr.slice(j, j + 5);			
        word = word.filter(x => x !== '+').join('');
        if (word === '*****') result.push(' ');		
		result.push(MORSE_TABLE[word]);
	}
	return result.join('');
}

module.exports = {
    decode
}
