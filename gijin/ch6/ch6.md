
# ch6. 표현식과 연산자

> 함수: 하나의 단위로 실행되는 문의 집합
```javascript
function sayHello(){
console.log("hello world")
```

## 6.1 반환 값

```javascript
function getGreeting(){
return "hello World!";
```

## 6.2 호출과 참조
js에서 함수도 객체이다-->다른 객체와 마찬가지로 넘기거나 할당할 수 있음
> 함수 호출과 참조의 차이
()를 쓰면 자바스크립트는 함수를 호출하려 한다고 이해함
()을 쓰지 않으면 함수를 참조하는 것이며, 이 함수는 실행되지 않음
```javascript
getGreeting(); //"Hello World"
getGreeting; //function getGreeting()
```
함수를 호출하지 않고 다른 값과 마찬가지로 참조하기만 할 수 있는 특징 : js를 매우 유연한 언어로 만듬
```javascript
const f=getGreeting;
f(); //"Hello world"
```
함수를 객체 프로퍼티에 할당할 수 있음
```javascript
const o={};
o.f=getGreeting;
o.f() //"Hello world"
```
배열 요소로 할당할 수 있음
```javascript
const arr=[1,2,3];
arr[1]=getGreeting; //arr는 [1,function getGreeting(),2]
arr[1](); //"Hello, world"
```
js에서 ()가 하는 일: 값 뒤에 ()를 붙이면 이 값을 함수로 간주하고 호출한다.
**값 뒤에 괄호를 쓰면 자바스크립트는 이 값이 함수라고 간주하고 호출**
## 6.3 함수와 매개변수
함수에 정보를 전달하려면 매개변수를 이용한다
매개변수는 함수가 호출되기 전에는 존재하지 않는다는 점을 제외하면 일번적인 변수와 같음
```javascript
//숫자형 매개변수 두 개를 받고 그 평균을 반환하는 함수
function avg(a,b){
	return (a+b)/2;
}
```
a,b는 매개변수
```javascript
avg(5,10); //7.5
```
실제 매개변수:5,10
```javascript
const a=5,b=10;
avg(5,10);
```
a,b는 함수 avg의 매개변수인 a,b,와 같은 이름이지만, 엄연히 다른 변수임
함수를 호출하면 함수 매개변수는 변수 자체가 아니라 그 값을 전달받음
```
function f(x){
	console.log(`f 내부:x=${x}`);
	x=5;
	console.log(`f 내부:x=${x} (할당 후)`);
}

let x=3;
console.log(`f를 호출하기 전:x=${x}`);
f(x);
console.log(`f를 호출한 다음:x=${x}`);
```

```javascript
f를 호출하기 전:x=3
f내부:x=3
f내부:x=5(할당 후)
f를 호출한 다음:x=3
```
함수 안에서 매개변수에 값을 할당해도 함수 바깥에 있는 어떤 변수에도 아무런 영향이 없음
but) 함수 안에서 객체 자체를 변경하면 그 객체는 함수 바깥에서도  바뀐 점이 반영된다

```javascript
function f(o){
	o.message=`f 안에서 수정함(이전 값: '${o.message}')`;
}
let o={
	message: "초기값"
};
console.log(`f를 호출하기 전:o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음:o.message="${o.message}"`);
```
```javascript
f를 호출하기 전:o.message="초기값"
f를 호출한 다음:o.message=f 안에서 수정함(이전 값: '초기값')"
//o는 서로 다른 개체이지만 둘은 같은 객체를 가리키고 있다.
```
함수 f안에서 객체 o를 수정하고, 이렇게 바꾼 내용은 함수 바깥에서도 o에 그대로 반영됨
> 원시 값은 불변이므로 수정할 수 없다
원시 값을 담은 변수는 수정할 수 있지만 원시 값 자체는 바뀌지 않는다
반면 객체는 변경가능하다.
```javascript
function  f(o){
	o.message="f에서 수정함";
	o={
	message:"새로운 객체"
	};
	console.log(`f 내부:o.message="${o.message}" (할당 후)`);
}
let  o={
message:'초기값'
}
console.log(`f를 호출하기 전:o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음:o.message="${o.message}"`);
```
```javascript
f를 호출하기 전:o.message="초기값"
f 내부:o.message="새로운 객체!"(할당후)
f를 호출한 다음:o.message="f에서 수정함"
```
핵심: 함수 내부의 매개변수 o와 함수 바깥의 변수 o가 다르다는 것
f를 호출하면 둘은 같은 객체를 가리키지만, f내부에서 o에 할당한 객체는 새로운 객체이다
#### 6.3.1 매개변수가 함수를 결정하는가?
함수 f가 있다면 호출할 때 매개변수를 **한 개 전달하든
열개를 전달하든 같은 함수를 호출**하는 것

정해진 매개변수에 값을 제공하지 않으면 암시적으로 undefined가 할당된다
```javascript
function  f(x){
return  `in f:x=${x}`;
}
f(); //"in f:x=undefined"
```
####  6.3.2 매개변수 해체
```javascript
function  getSentence({subject,verb,object}){
return  `${subject}  ${verb}  ${object}`;
}
const  o={
subject:"I",
verb:"love",
object:"JavaScript",
};
getSentence(o); //"I love JavaScript"
```
프로퍼티 이름은 반드시 유효한 식별자
들어오는 객체에 해당 프로퍼티가 없는 변수는 undefined를 할당받음
```javascript
function  getSentence([subject,verb,object]){
	return  `${subject}  ${verb}  ${object}`;
}
const  o=[
	"I","love","JavaScript"
];
getSentence(o); //"I love JavaScript"
```
확산 연산자(...)를 써서 남는 매개변수를 이용할 수 있다.
```javascript
function  addPre(prefox,...words){
const  prefixedWords=[];
for(let  i=0;i<words.length;i++){
prefixedWords[i]=prefix+words[i];
}
return  prefixedWords;
}
addPre("con","verse","vex"); //["converse", "convex"]
```

#### 6.3.3 매개변수 기본값
매개변수에 기본값 지정 기능 O
```javascript
function  f(a,b="default",c=3){
return  `${a}-${b}-${c}`;
}
f(5); //5-default-3
f(); //undefined-default-3
```


#### 6.4 객체의 프로퍼티인 함수
객체의 프로퍼티인 함수:메서드, 일반적인 함수와 구별
```javascript
const  o={
	name:'Wallance', //원시값 프로퍼티
	bark:function(){ return  'Woof!'; }, //함수 프로퍼티(메서드)
}
--간편한 버전--
const  o={
	name:'Wallance', //원시값 프로퍼티
	bark() { return  'Woof!'; }, //함수 프로퍼티(메서드)
}
```

#### 6.5 this 키워드
this는 객체의 프로퍼티인 함수에서 의미가 있다
메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 됨
```javascript
const  o={
name:'Wallace',
speak() {return  `My name is ${this.name}`;},
}
```
o.speak() 호출시  this는  o에  묶임
```javascript
o.speak(); //"My name is Wallce";
```
this가 o에 묶인 이유는 speak가 o의 프로퍼티여서가 아니라,
o에서 speak를 호출하였기 때문에
```javascript
const speak=o.speak;
speak===o.speak; //true
speak();
```
이 함수가 어디에 속하는지 알 수 없으므로 this는 undefined에 묶인다
```javascript
	const  o={
	name:'a',
		greetBackwards:function(){
			const  self=this;
			function  getReverseName(){
				let  nameBackwards='';
				for(let  i=self.name.length-1;i>=0;i--){
					nameBackwards+=self.name[i];
			}
		return  nameBackwards;
	}
	return  `${getReverseName()} si eman ym ,olleH`;
	}
};
o.greetBackwards();
```

#### 6.6 함수 표현식과 익명함수
익명함수: 함수에 식별자가 주어지지 않음
함수 표현식으로 표한 가능
```javascript
const f=function(){
}
```
익명함수는 어디든지 쓸 수 있음
함수에 이름을 정하고 다시 변수를 할당한다면?
```javascript
const g=function f(){
}
```
함수 바깥에서 함수에 접근시에는 g를 써야 하고, f로 접근하려고 하면 에러 발생
왜?--> 자신을 호출할 때 (재귀)시 이 방식 필요
```javascript
const g=function f(stop){
	if(stop) console.log('fstopped');
	f(true);
};
g(false);
```
호출할 생각으로 함수를 만들면 함수 선언을 사용.
다른 곳에 할당하거나 다른 함수에 넘길 목적으로 함수를 만든다면 함수 표현식을 사용

## 6.7 화살표 표기법
ES6에서 새로 만든 문법
간단히 function이라는 단어와 중괄호 숫자를 줄이려고 고안된 단축 문법
> function을 생략해도 됩니다.
> 함수에 매개변수가 단 하나 뿐이라면 괄호(())도 생략할 수 있습니다.
> 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있습니다.
```javascript
const  f1=function(){ return  "Hello"; }
const  f1=()=>"hello";
const  f2=function(name){return  `hello,${name}!`;}
const  f2=name=>`Hello, ${name}!`;
const  f3=function(a,b){return  a+b;}
const  f3=(amb)=>a+b;
```
화살표 함수에는 일반적인 함수와 다른 점 두가지
- 화살표 함수는 객체 생성자로 사용할 수 없다
- arguments 변수도 사용할 수 없다
- ES6에서 확산 연산자가 생겼으므로 arguments 변수는 필요가 없다.
```javascript
const  o={
name:'Julie',
greetBackwards:function(){
	const  getReverseName=()=>{
		let  nameBackwards='';
		for(let  i=this.name.length-1;i>=0;i--){
				nameBackwards+=this.name[i];
			}
			return  nameBackwards;
		};
		return  `${getReverseName()} si eman ym,olleH`;
	},
};
o.greetBackwards();
```
## 6.8 call과 apply,bind
함수를 어디서, 어떻게 호출했느냐와 관계없이 this가 무엇인지 지정할 수 있다.
```javascript
const  bruce={name:"bruce"};
const  madeline={name:"madeline"};
function  greet(){
	return  `Hello, I'm $(this.name)!`;
}
greet(); //"hello,i'm undefined!" this는 X
greet.call(bruce); //"hello,i'm Bruce!" this는 bruce
greet.call(madeline); //"hello,i'm madeline" this는 madeline
```
함수를 호출하면서 call을 사용하고
this로 사용할 객체를 넘기면
해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다.
call의 첫 번째 매개변수는 this로 사용할 값,
매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달된다.
```javascript
function  update(birth,occupation){
	this.birth=birth;
	this.occupation=occupation;
}
update.call(bruce,1949,'singer');
//bruce는 이제 { name: "bruce",birth:1949,occupation:"singer"}
update.call(madeline,1942,'actress');
//bruce는 이제 { name: "madeline",birth:1949,occupation:"actress"}
```
apply는 매개변수를 배열로 받는다
```javascript
update.apply(bruce,[1955,"actor"]);
update.apply(madeline,[1918,"writer"]);
```
apply는 배열 요소를 함수 매개변수로 사용해야 할 때 유용하다.
apply를 사용하면 기존 배열을 이들 함수에 바로 넘길 수 있음
```javascript
const  arr=[2,3,-5,15,7];
Math.min.apply(null,arr);
Math.max.apply(null,arr);
//this의 값에 null을 쓴 이유는 무엇을 넘기든 관계가 없기 때문에
```
확산 연산자(...)를 사용해도 apply와 같은 결과 얻을 수 있다.
```javascript
const  newBruce=[1940,"martial artist"];
update.call(bruce,...newBruce);
Math.min(...arr);
Math.max(...arr);
```
bind함수: 함수의 동작을 영구적으로 바꾼다
```javascript
const  updateBruce=pdate.bind(bruce);
updateBruce(1940,"actor");
updateBruce.call(madeline,1274,"king"); //madeline은 변하지 않음
```
