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
  for (let i = 0; i < expr.length; ){
    arr.push(expr.slice(i, i + 10))
    i += 10;
  }

  const regExp11 = /11/g,
        regExp10 = /10/g,
        regExpX = /[\*]{10}/g,
        newArr = [];

  let str = '';

  for (let j = 0; j < arr.length; j++){
    newArr.push( arr[j].replace(regExp11, '-')
                      .replace(regExp10, '.')
                      .replace(regExpX, ' ')
                      .replace(/0+/g, '')
    )
    if(newArr[j]) {
      str += MORSE_TABLE[newArr[j]] || ' '
    }
  }
  return str;
}


module.exports = {
    decode
}