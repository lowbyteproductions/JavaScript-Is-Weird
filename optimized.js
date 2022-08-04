//Allowed Chars:  ({[/>+!-=\]})

const zero = '+[]';
const one = '+!![]';

let fromString = null;

const number = n => {
  if (n === 0) return zero;
  if (n === 1) return one;
  if (n === 2) {
    return '!![]+!![]';
  }
  if (n === 3) {
    return '!![]+!![]+!![]';
  }
  if (n === 4) {
    return '!![]+!![]+!![]+!![]';
  }
  if (n === 5) {
    return '((+!![]+[]+ +[])>>!![])';
  }
  if (n === 6) {
    return '((+!![]+[]+ +[])>>!![])+!![]';
  }
  if (n === 7) {
    return '(+!![]+[]+ +[])-!![]-!![]-!![]';
  }
  if (n === 8) {
    return '(+!![]+[]+ +[])-!![]-!![]';
  }
  if (n === 9) {
    return '(+!![]+[]+ +[])-!![]';
  }
  if (n === 10) {
    return '(+!![]+[]+ +[])-[]';
  }
  if (n === 14) {
    return '(+!![]+[]+(!![]+!![]+!![]+!![]))-[]';
  }
  if (n === 11) {
    return '(+!![]+[]+ +!![])-[]';
  }
  if (n === 18) {
    return '(+!![]+!![]+[]+ +![])-!![]-!![]';
  }
  if (n === 17) {
    return '(+!![]+!![]+[]+ +![])-!![]-!![]-!![]';
  }
  if (n === 20) {
    return '(+!![]+!![]+[]+ +![])-[]';
  }
  if (n === 30) {
    return '(+!![]+!![]+!![]+[]+ +![])-[]';
  }
  if (n === 26) {
    //100>>2 + 1
    return '((+!![]+[]+ +![]+ +![])>>!![]+!![])+!![]';
  }
  if (n === 31) {
    return '(+!![]+!![]+!![]+[]+ +![])-[]+!![]';
  }
  if (n === 32) {
    return '(+!![]+!![]+!![]+[]+ +![])-[]+!![]+!![]';
  }
  if (n === 33) {
    return '(+!![]+!![]+!![]+[]+ +![])-[]+!![]+!![]+!![]';
  }
  if (n === 34) {
    return '(+!![]+!![]+!![]+[]+ +![])-[]+!![]+!![]+!![]+!![]';
  }
  if (n === 35) {
    return '(+!![]+!![]+!![]+[]+ +![])-[]+!![]+!![]+!![]+!![]+!![]';
  }
  if (n === 36) {
    return '(+!![]+!![]+!![]+[]+ +![])-[]+!![]+!![]+!![]+!![]+!![]+!![]';
  }
  if (n === 46) {
    //100 >> 1 - 4
    return '((+!![]+[]+ +![]+ +![])>>!![])-!![]-!![]-!![]-!![]';
  }
  if (n === 75) {
    //300 >> 2
    return '(!![]+!![]+!![]+[]+ +![]+ +![])>>!![]+!![]';
  }
  if (n === 74) {
    return '((!![]+!![]+!![]+[]+ +![]+ +![])>>!![]+!![])-!![]';
  }
  if (n === 76) {
    return '((!![]+!![]+!![]+[]+ +![]+ +![])>>!![]+!![])+!![]';
  }
  if (n === 77) {
    return '((!![]+!![]+!![]+[]+ +![]+ +![])>>!![]+!![])+!![]+!![]';
  }
  if (n === 42) {
    return '(+!![]+!![]+!![]+!![]+[]+ +![])-[]+!![]+!![]';
  }
  if (n === 122) {
    return '(+!![]+[]+ +(!![]+!![])+ +(!![]+!![]))-[]';
  }
  if (n === 70) {
    return '(!![]+!![]+!![]+!![]+!![]+!![]+!![]+[]+ +[])-[]';
  }
  if (n === 68) {
    return '(!![]+!![]+!![]+!![]+!![]+!![]+!![]+[]+ +[])-!![]-!![]';
  }
  if (n === 69) {
    return '(!![]+!![]+!![]+!![]+!![]+!![]+!![]+[]+ +[])-!![]';
  }
  if (n === 72) {
    return '(!![]+!![]+!![]+!![]+!![]+!![]+!![]+[]+ +[])-[]+!![]+!![]';
  }
  if (n === 71) {
    return '(!![]+!![]+!![]+!![]+!![]+!![]+!![]+[]+ +[])-[]+!![]';
  }
  if (n === 80) {
    return '((+!![]+[]+ +[])-!![]-!![]+[]+ +[])-[]';
  }
  if (n === 81) {
    return '((+!![]+[]+ +[])-!![]-!![]+[]+ +!![])-[]';
  }
  if (n === 82) {
    return '((+!![]+[]+ +[])-!![]-!![]+[]+ +!![])-[]+!![]';
  }
  if (n === 84) {
    return '((+!![]+[]+ +[])-!![]-!![]+[]+ +!![])-[]+!![]+!![]+!![]';
  }
  if (n === 85) {
    return '((+!![]+[]+ +[])/!![]-!![]+[]+ +[])-!![]-!![]-!![]-!![]-!![]';
  }
  if (n === 90) {
    return '((+!![]+[]+ +[])-!![]+[]+ +[])-[]';
  }
  if (n === 89) {
    return '((+!![]+[]+ +[])-!![]+[]+ +[])-!![]';
  }
  if (n === 88) {
    return '((+!![]+[]+ +[])-!![]+[]+ +[])-!![]-!![]';
  }
  if (n === 87) {
    return '((+!![]+[]+ +[])-!![]+[]+ +[])-!![]-!![]-!![]';
  }
  if (n === 86) {
    return '((+!![]+[]+ +[])-!![]+[]+ +[])-!![]-!![]-!![]-!![]';
  }
  if (n === 60) {
    return '(+!![]+[]+ +(!![]+!![])+ +![])>>!![]';
  }
  if (n === 63) {
    return '((+!![]+[]+ +(!![]+!![])+ +![])>>!![])+!![]+!![]+!![]';
  }
  if(n > 10) {
    //console.log('missing number:' + n);
    //Fallback for undefined large numbers
    return `(${fromString(n + '')})-[]`
  }
  throw new Error('Undefined number encoding');
}

const map = {};

fromString = s => s.split('').map(x => {
  if (!(x in map)) {
    //console.log(x);
    const charCode = x.charCodeAt(0);
    return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${number(charCode)})`;
  }
  return map[x];
}).join('+');

map['0'] = `(${number(0)}+[])`;
map['1'] = `(${number(1)}+[])`;
map['2'] = `(${number(2)}+[])`;
map['3'] = `(${number(3)}+[])`;
map['4'] = `(${number(4)}+[])`;
map['5'] = `(${number(5)}+[])`;
map['6'] = `(${number(6)}+[])`;
map['7'] = `(${number(7)}+[])`;
map['8'] = `(${number(8)}+[])`;
map['9'] = `(${number(9)}+[])`;

//(+{}+[]) => 'NaN'
map.N = `(+{}+[])[${number(0)}]`;
map.a = `(+{}+[])[${number(1)}]`;

//{}+[] => '[object Object]'
map.O = `({}+[])[${number(8)}]`;
map.b = `({}+[])[${number(2)}]`;
map.j = `({}+[])[${number(3)}]`;
map.o = `({}+[])[${number(1)}]`;
map.c = `({}+[])[${number(5)}]`;
map[' '] = `({}+[])[${number(7)}]`;
map['['] = `({}+[])[${number(0)}]`;

//![]+[] => 'false'
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.l = `(![]+[])[${number(2)}]`;

//!![]+[] => 'true'
map.t = `(!![]+[])[${number(0)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.e = `(!![]+[])[${number(3)}]`;

//(+!![]/+[])+[] => 'Infinity'
map.I = `((+!![]/+[])+[])[${number(0)}]`;
map.n = `((+!![]/+[])+[])[${number(1)}]`;
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.y = `((+!![]/+[])+[])[${number(7)}]`;

//([]+((1)['['])) => 'undefined'
map.d = `([]+((1)[${fromString('[')}]))[${number(2)}]`

//([]+([]+[])['constructor']) => 'function String() { [native code] }'
map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;

//Regex
map['\\'] = `(/\\\\/+[])[${number(1)}]`;
map['/'] = `(/-/+[])[${number(0)}]`;
map['-'] = `(/-/+[])[${number(1)}]`;
map['+'] = `(/-+/+[])[${number(2)}]`;
map['>'] = `(/>/+[])[${number(1)}]`;
map['!'] = `(/!/+[])[${number(1)}]`;
map['='] = `(/=/+[])[${number(1)}]`;
map['('] = `(/()/+[])[${number(1)}]`;
map[')'] = `(/()/+[])[${number(2)}]`;
map['{'] = `(/{/+[])[${number(1)}]`;
map['}'] = `(/}/+[])[${number(1)}]`;
map[']'] = `(/]/+[])[${number(1)}]`;

//(x).toString(x+1 or higher) => char
map.h = `(${number(17)})[${fromString('toString')}](${number(20)})`;
map.k = `(${number(20)})[${fromString('toString')}](${number(30)})`;
map.q = `(${number(26)})[${fromString('toString')}](${number(30)})`;
map.v = `(${number(31)})[${fromString('toString')}](${number(32)})`;
map.w = `(${number(32)})[${fromString('toString')}](${number(33)})`;
map.x = `(${number(33)})[${fromString('toString')}](${number(34)})`;
map.z = `(${number(35)})[${fromString('toString')}](${number(36)})`;


//([]+(+[])['constructor']) => 'function Number() { [native code] }'
map.m = `([]+(+[])[${fromString('constructor')}])[${number(11)}]`;

//([]+([])['constructor']) => 'function Array() { [native code] }'
map.A = `([]+([])[${fromString('constructor')}])[${number(9)}]`;

//([]+(!{})['constructor']) => 'function Boolean() { [native code] }'
map.B = `([]+(![])[${fromString('constructor')}])[${number(9)}]`;

//((()=>{})['constructor']) => 'function Function() { [native code] }'
map.F = `((()=>{})[${fromString('constructor')}]+[])[${number(9)}]`;

//((()=>{})['constructor'](${'return escape')()('\\'))[2]
map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`;
map['%'] = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(0)}]`;
map.E = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['>']}))[${number(2)}]`;
map.D = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['}']}))[${number(2)}]`;

const generic_char_encoding = fromString('^');
//console.log('generic key chars: ' + generic_char_encoding.length);

for (const [key, value] of Object.entries(map)) {
  if(key !== eval(value)) {
    throw new Error("Encoding error for symbol: '" + key + "'");
  }
  //console.log(key + ' encoded chars: ' + value.length);
}

const compile = code => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;

const test_instruction = 'console.log("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789({[/<>+?*%#!-=]})")';

const original_input = 'console.log("Hello world!");';

const test = compile(original_input);

/*
console.log('original   length: ' + test_instruction.length);
console.log('transpiled length: ' + test.length);

eval(test);
*/

console.log(test);
