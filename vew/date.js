/* 
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());


let now = new Date();

console.log(now.getHours());
console.log(now.getMinutes());
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
if (currentHour >=12)
{
    console.log('오후'+(currentHour-12) + '시');
    console.log( ':'+ currentMinute + '분');
}
else
{
    console.log('오전'+currentHour + '시');
    console.log( ':'+ currentMinute + '분');
} 
let grade = 'A';

switch(grade){
    case 'A'
    console.log('100 - 90점');
    break;
    case 'B'
    console.log('100 - 90점');
    break;
    case 'C'
    console.log('100 - 90점');
    break;
    case 'D'
    console.log('100 - 90점');
    break;



 for (let a=0; a>=0; a++)
 {
    for(let b=0; b>a; b++){
        process.stdout.write('*');
}
console.log();
}
for (let c=0; c<5; c++)
{
for(let d=0; d<=c; d++){
   process.stdout.write(' ');
}
   for(let d=5; d>c; d--){
       process.stdout.write('*');
}
console.log();
} 
let add = function(a,b){
    return a+b;
}
function add2(a,b){
    return a+b;
}
console.log(add(3, 4));
console.log(add(3, 4));


setTimeout(function()
{
    console.log("1초가지남");
    
},1000);

setInterval(function()
{
    console.log("1초가지남");
},1000);//비동기라 같이나옴
setTimeout(function()
{
    console.log("1초가지남");
*/

//입력을 받아서 email 형식에 맞는지 여부를 알려주는 프로그랩

var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
r.question("e-mail 주소를 입력하세요.>", function(answer) {
    console. log(answer);
    r.close();
})

// 이메일 정규 표현식

