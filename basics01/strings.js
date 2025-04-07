const name="harshal"
const count=12
// console.log(name+count);
console.log(`hello my name is ${name} and my count is ${count}`);


const gameNAme=new String('fifa-25')
console.log(gameNAme[0])
console.log(gameNAme.__proto__);
// console.log(gameNAme.length);
// console.log(gameNAme.toUpperCase());
console.log(gameNAme.charAt(4));
console.log(gameNAme.indexOf('-'));
const New=gameNAme.substring(2,1)
//here this(2,1) automatically becomes (1,2)
console.log(New);

const another=gameNAme.slice(-6,3)
console.log(another);

const P="      Harshal   "
const Z="http://10.20.184.1:2280/cportal/ip/user_login.php?url=http://detectportal.brave-http-only.com/"
console.log(P);
console.log(P.trim());
console.log(Z.replace('php?','tbsm-'));

console.log(gameNAme.split('a'));

console.log(gameNAme.bold(0,5));
console.log(gameNAme.codePointAt(4));
console.log(String.fromCodePoint(50));

console.log(gameNAme.padEnd(10, "*")); 