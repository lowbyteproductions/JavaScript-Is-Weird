const True = "!![]";

const zero = "+[]";
const one = `+${True}`;
const two = `(${True}+ ${True})`;
const three = `(${two}+ ${True})`;
const four = `${two}*${two}`;
const five = `${four}+ ${True}`;
const six = `${two}*${three}`;

const number = (n) => {
    const toNum = (num) => {
        // Hardcoded numbers to reduce the length as much as possible
        if (num == 0) return zero;
        if (num == 2) return two;
        if (num == 3) return three;
        if (num == 4) return four;
        if (num == 5) return five;
        if (num == 6) return six;
        if (num == 7) return `(${four}+ ${three})`;
        if (num == 8) return `${two}*${four}`;
        if (num == 9) return `${three}*${three}`;

        return Array.from({ length: num }, () => one).join("+ ");
    };

    if (n < 10) return toNum(n);
    const length = (n + []).length;
    const digits = (n + [])
        .split("")
        .map((digit) => toNum(+digit))
        .map((digit) => `${digit}+[]`)
        .map((digit, index) => {
            if (index == length - 1) return digit;
            return digit + "+ ";
        })
        .join("");

    const result = `+(${digits})`;
    if (eval(result) != n) throw new Error(`Failed to convert the number \`${n}\`, instead got ${eval(result)}!\ncode: ${result}`);
    return result;
};

const map = {};

const fromString = (s) =>
    s
        .split("")
        .map((x) => {
            if (!(x in map)) {
                const charCode = x.charCodeAt(0);
                return `([]+[])[${fromString("constructor")}][${fromString("fromCharCode")}](${number(charCode)})`;
            }
            return map[x];
        })
        .join("+");

const compile = (code) => `(()=>{})[${fromString("constructor")}](${fromString(code)})()`;

map.a = `(+{}+[])[${number(1)}]`;
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[" "] = `({}+[])[${number(7)}]`;
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(4)}]`;
map.S = `([]+([]+[])[${fromString("constructor")}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString("constructor")}])[${number(14)}]`;
map.p = `([]+(/-/)[${fromString("constructor")}])[${number(14)}]`;
map["\\"] = `(/\\\\/+[])[${number(1)}]`;
map.d = `(${number(13)})[${fromString("toString")}](${number(14)})`;
map.h = `(${number(17)})[${fromString("toString")}](${number(18)})`;
map.m = `(${number(22)})[${fromString("toString")}](${number(23)})`;
map.C = `((()=>{})[${fromString("constructor")}](${fromString("return escape")})()(${map["\\"]}))[${number(2)}]`;

console.log(compile('console.log("Hello world!");'));
