
# ch7. 스코프

변수와 상수, 매개변수가 언제 어디서 정의되는지 결정함.
변수의 스코프가 어떤 함수라고 말할 때는, 함수를 실제 호출할 때까지는 
**함수 바디의 정해진 매개변수가 존재하지 않음을 반드시 상기해야 한다.
함수를 호출할 때마다 매개변수가 나타나고, 함수가 제어권을 반환하면 스코프 밖으로 사라진다.**
>선언 정의
>선언: 식별자를 주어서 그 존재를 알리는 것
>정의: 선언과 함께 값도 부여하는 것
>BUT) js는 변수를 선언과 동시에 값이 주어져서 두 용어 구분 X
## 7.1 반환 값
>아직 선언하지 않은 변수나 함수가 종료되면서 존재하지 않게 된 변수는 분명
>스코프 안에 '있지 않다'
>스코프==가시성
>스코프: 실행 컨텍스트에서 현재 보이고 접근할 수 있는 식별자
## 7.2 정적스코프와 동적스코프
```javascript
const  x=3;
function  f(){
	console.log(x);
	console.log(y);
}
{
	const  y=5;
	f();
}
```
이때 오류남-->y의 스코프를 f()가 접근 X
## 7.3 전역스코프
```javascript
let  name="a";
let  age=25;
function  greet(){
	console.log(`hello, ${name}`);
}
function  getBirthYear(){
	return  new  Date().getFullYear()-age;
}
//컨텍스트에 의존적인 코드이다.

let user={
	name="a",
	age=25,
}
function  greet(){
	console.log(`hello, ${user.name}`);
}
function  getBirthYear(){
	return  new  Date().getFullYear()-user.age;
}
//이렇게 하면 다수의 사용자의 정보도 보관할 수 있다.
//BUT 전역변수 user에 의존한다.

function  greet(user){
	console.log(`hello, ${user.name}`);
}
function  getBirthYear(user){
	return  new  Date().getFullYear()-user.age;
}
```
## 7.4 블록스코프
이 블록에만 보이는 식별자
```javascript
console.log('before block');
{
	console.log('inside block');
	const  x=3;
	console.log(x);
}
console.log(`outside block; x=${x}`); //x는 여기서 정의 x
//x는 블록 안에서 정의되고, 블록을 나가는 즉시 x도 스코프 밖으로 사라진다.
```

## 7.5 변수 숨기기

```javascript
{
	const  x='blue';
	console.log(x);
}
console.log(typeof  x); //x는 스코프 밖에 있음
{
	const  x=3;
	console.log(x);
}
console.log(typeof  x);
```
스코프 중첩의 경우
```javascript
{
	let  x='a';
	console.log(x); //a
	{
		let  x=3; //여기서도 두 변수 모두 스코프 안에 있음, 가려진 것
		console.log(x); //3
	}
	console.log(x); //a
}
console.log(typeof  x); //undefined
```
```javascript
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
```
## 7.6 함수,클로저,정적스코프
클로저: 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 경우
clouser==함수 주변으로 closing(좁히는 것)
```javascipt
let  globalFunc;
{
	let  blockVar='a'
	globalFunc=function(){
		console.log(blockVar);
	}
}
globalFunc(); //a
```
스코프 안에서 함수를 정의시 해당 스코프는 더 오래 유지
```javascript
let  f;
{
	let  o={note:'Safe'};
	f=function(){
		return  o;
	}
}
let  oRef=f();
oRef.note="not safe";
```
함수를 정의해 클로저를 만들면 접근할 수 없었던 것에 접근할 방법이 생김

## 7.7 즉시 호출하는 함수 표현식(IIFE)
```javascript
(function(){
})();
```
```javascript
const  f=(function(){
	let  count=0;
	return  function(){
	return  `${++count}`;
	}
})();
f(); //1
f(); //2
```
## 7.8 함수 스코프와 호이스팅
ES6 let 전에는 var를 써서 변수를 선언
var로 선언한 전역변수는 명시적인 함수안에 있지 않지만 함수 스코프와 같게 동작
>let과 var의 차이
>var로 선언한 변수는 현재 스코프 안이라면 어디서든 사용 가능, 선언 전에도 사용 가능
```javascript
x; //x는 정의되지 않음
let x=3; //위줄에서 에러나서 이거 실행 X
```
var로 선언시 선언하기 전에도 사용 가능
```javascript
x; //undefinde
var x=3;
x; //3
```
--> (내가 헷갈린 부분)
**var로 선언한 변수는 
함수나 전역 스코프 전체를 살펴보고
var로 선언한 변수를 맨 위로 끌어올림
선언만! 할당은 X**
```javascript
var x; //실제로는 이렇게 됨
x; //undefinde
var x=3;
x; //3
```

```javascript
var x;
var y;
//원래 선언이 안됐는데 선언 된것처럼 생각함
if(x!==3){
	console.log(y);
	var y=5;
	if(y===5){
		var x=3;
	}
	console.log(y);
}
if(x===3){
	console.log(y);
}
```

var으로 선언하는 경우
```javascript
var x;
//js는 이렇게 해석
x=3;
if(x===3){
	x=2;
	console.log(x);
}
console.log(x);		
```
var을 쓰면 혼란스럽고 쓸모없는 코드가 생길 수 있어서 let키워드를 만듬
## 7.9 함수 호이스팅
함수 선언도 스코프 맨 위로 끌어롤려짐-->함수를 선언하기 전에 호출할 수 있음.
```javascript
f(); //f
function  f(){
	console.log('f');
}
```
BUT) 변수에 할당한 함수 표현식은 끌어올려지지 않는다.
## 7.10 사각지대
let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다
사각지대 in 스코프: 변수가 선언되기 전의 코드
```javascript
if(typeof  x=="undefined"){
	console.log("x");
}
else{
}
let  x=5;
//에러 발생-->사각지대
```
## 7.11 스트릭트 모드
암시적인 전역변수를 허용하지 않음
"use strict"
```javascript
(function(){
	'use strict';
	})();
```
	