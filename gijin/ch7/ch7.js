const x=3;
function f(){
    console.log(x);
    console.log(y);
}

{
    const y=5;
    f();
}

let name="a";
let age=25;

function greet(){
    console.log(`hello, ${name}`);
}

function getBirthYear(){
    return new Date().getFullYear()-age;
}

let user={
    name="a",
    age=25,
}
function greet(){
    console.log(`hello, ${user.name}`);
}

function getBirthYear(){
    return new Date().getFullYear()-user.age;
}

console.log('before block');
{
    console.log('inside block');
    const x=3;
    console.log(x);
}
console.log(`outside block; x=${x}`); //x는 여기서 정의 x

{
    const x='blue';
    console.log(x);
}
console.log(typeof x); //x는 스코프 밖에 있음
{
    const x=3;
    console.log(x);
}
console.log(typeof x);

{
    let x='a';
    console.log(x); //a
    {
        let x=3;
        console.log(x); //3
    }
    console.log(x); //a
}
console.log(typeof x);

{
    let x={a:'a'};
    let y=x;
    let z=3;
    {
        let x=5;
        console.log(x); //5
        consold.log(y.a); //a
        y.a="b";
        console(z); //3
    }
    console.log(x.a); //b
    console.log(y.a); //b
    console.log(z);
}

{
	let  x={a:'a'};
	let  y=x;
	let  z=3;
	{
		let  x=5;
		console.log(x); //5
		consold.log(y.a); //a
		y.a="b";
		console(z); //3
	}
	console.log(x.a); //b
	console.log(y.a); //b
	console.log(z);
}

let globalFunc;
{
    let blockVar='a'
    globalFunc=function(){
        console.log(blockVar);
    }
}
globalFunc(); //a

let f;
{
    let o={note:'Safe'};
    f=function(){
        return o;
    }
}
let oRef=f();
oRef.note="not safe";

const f=(function(){
    let count=0;
    return function(){
        return `${++count}`;
    }
})();
f(); //1
f(); //2

var x;
var y;
//원래 선언이 안됐는데 선언 된것처럼 생각함

if(x!==3){
    console.log(y);
    var y=5;
    if(y===5)[
        var x=3;
    ]
    console.log(y);
}

if(x===3){
    console.log(y);
}

f(); //f
function f(){
    console.log('f');
}

if(typeof x=="undefined"){
    console.log("x");
}else{

}
let x=5;
//에러 발생-->사각지대