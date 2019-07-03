# chapter 7 스코프

> 스코프( scope )는 변수, 상수, 매개변수가 언제 어디서 정의되는지를 정의

```js
function f(x){
    return x + 3;
}

f(5);       //8
x;          // ReferenceError : x is nor defined
```
- `x` 는 `function` 내부에서만 존재
- 정의 : `x`의 스코프가 함수 `f`이다.
- 변수의 스코프가 어떤 함수일 때   
    - 함수 호출 전까지는 바디에 정해진 매개변수가 존재하지 않음

## 7.1 스코프와 존재
> 스코프와 존재는 반드시 구별해야 한다.
- 스코프(가시성)
    - 현재 실행 중인 부분, 즉 실행 컨텍스트에서 현재 보이고 접근할 수 있는 식별자
- 존재
    - 식별자가 메모리가 할당된(예약된) 무언가를 가리키고 있다.
## 7.2 정적 스코프와 동적 스코프

```js
function f1(){
    console.log('one');
}    
function f2(){
    console.log('two');
}

f2();
f1();
f2();
```
- 코드만 보면 위에서 아래로 읽어내리지만( 정적 ), 프로그램을 실행하면 실행 흐름은 읽는 순서와 다르다.( 동적 )
- 자바스크립트의 스코프는 정적
    - 코드만 봐도 스코프의 여부를 알 수 있다
```js
 const x = 3;

 function f() {             // 함수 f 정의할 때
     console.log(x);        // x 존재
     console.log(y);        // y 다른 스코프에 존재
 }
 {
     //새 스코프
     const y = 5;
     f();       // 호출 시 x는 바디 안에 스코프에 있지만 y는 그렇지 않다.
     
     // 결국 f는 자신이 정의될 때 접근할 수 있었던 식별자에게는
     // 여전히 접근할 수 있지만 ( x )
     // 호출할 때 스코프에 있는 식별자에는 접근할 수 없다. ( y )  
 }
 ```
- 자바스크립트의 정적스코프 
    1. 전역 스코프 (global scope)
    2. 블록 스코프 (block scope)
    3. 함수 스코프 (function scope)

## 7.3 전역 스코프
> 프로그램이 시작할 때 암시적으로 주어지는 스코프
- 전역 변수
    - 전역 스코프에서 선언된 변수
    - 전역 변수의 남용은 좋지 않음
    - 전역 변수에 의존하는 것은 피해야 한다!
        - 이름과 나이 이런한 정보들을 아무대서나 변경할 수 있기 때문에
        - 다른 용도로 쓰일 가능성이 있기 때문에
<비교예제>
```js
// 전역 변수 사용
let name = "Irena";
let age = 25;

function greet(){
    console.log(`hello, ${name}!`);
}
function getBirthYear(){
    return new Date().getFullYear()-age;
}
```
```js
// 전역 변수 대신 단일 객체로 보관
// 그래도 누구나 수정 가능한 전역 변수처럼 쓸 수 있음
let user = {
    name = "Irena";
    age = 25;
}

function greet(){
    console.log(`hello, ${user.name}!`);
}
function getBirthYear(){
    return new Date().getFullYear()-user.age;
}
```
```js
//  객체를 넘겨줘야만 수정 가능
function greet(user){
    console.log(`hello, ${user.name}!`);
}
function getBirthYear(user){
    return new Date().getFullYear()-user.age;
}
```
## 7.4 블록 스코프
> `let`과 `const`는 식별자를 블록 스코프에서 선언
> 블록 스코프 ? : 그 블록의 스코프에서만 보이는 식별자
```js
console.log('before block');
{
    console.log('inside block1);
    const x = 3;
    console.log(x);
}
console.log(`outside block; x = ${x}`); //ReferenceError : x가 정의되지 않음
```
- 블록 그 자체로도 유효한 문법
- 블록 안에서 선언한 식별자는 블록을 나가면 스코프 밖으로 사라짐
    - 정의되지 않은 것으로 판단

## 7.5 변수 숨기기
> 이름이 같은 식별자를 내부, 외부 블록에서 정의했을 때 외부 블록 안의 스코프의 식별자를 숨겨줌

## 7.6 함수, 클로저, 정적 스코프
> 클로저 : 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 것.
-  스코프를 함수 주변으로 좁히는 것
1. 스코프를 더 오래 유지시켜준다
2. 접근할 수 없는 것에 접근할 수 있는 효과가 있다.
```js
//1. 스코프를 더 오래 유지시켜준다
//자신의 지역을 나가면 없어지는 것이 맞는데, 여기는 아님
let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function(){
        console.log(blockVar);
    }
}
globalFunc();
```
```js
//2. 접근할 수 없는 것에 접근할 수 있는 효과가 있다.
// o에 접근할 수 없는데 접근 가능하게 만듦
let f;
{
    let o = { note : 'Safe'};
    f = function(){
        return o;
    }
}
let oRef = f();
oRef.note = "Not so safe after all!";
```

## 7.7 즉시 호출하는 함수 표현식
> 함수 표현식을 사용하면 *즉시 호출하는 함수 표현식(IIFE)*이란 것을 만들 수 있다.
- IIFE 는 함수를 선언하고 즉시 실행해야 한다.
```js
//형식
(function(){
    //IIFE 바디
})();
```
- 장점
    - 내부의 것들이 모두 자신만의 스코프를 가지지만, IIFE 자체는 함수이므로 스코프 밖으로 무언가를 내보낼 수 있다.

```js
const message = (function(){
    const secret = " i'm secret!";
    return `The secret is ${secret.length} characters long.`;
})();
console.log(message);       //값이 전달되어서 나타남
```
- 외부에서는 접근 불가
```js
const f = (function(){
   let count = 0;
    return function(){
        return `i have been called ${++count} time(s).`;
    }
})();
f();
f(); 
```
## 7.8 함수 스코프와 호이스팅

> 선언되지 않은 변수는 에러를 일으키지만, 존재하되 값이 undefined인 변수는 에러를 일으키지 않음
- let
    - 선언 전엔 존재하지 않음
- var
    - 선언하기 전에도 사용할 수 있음
    - 끌어올린다는 뜻의 호이스팅(hoisting)이라는 메커니즘을 따름
    - 전체 스코프를 살펴보고 **선언만 끌어올림**을 주의!
    - 같은 변수를 여러번 정의하더라도 무시
## 7.9 함수 호이스팅
> 함수 선언 전에 호출 가능, 호이스팅해서
- **할당한 함수표현식**은 끌어올려지지 않는다.

## 7.10 사각지대
> 변수가 선언되기 전의 코드 (let의 특성을 잘 보여줌)
- 확인하는 방법
```js
if(typeof x === "undefined"){
    console.log("x doesn't exist or is undefined");
} else {
    //x를 사용해도 안전한 코드
}

```
## 7.11 스트릭트 모드
> 암시적인 전역 변수의 허용 x
- `use strict` : 선언된 지역 내에서 스트릭트 모드로 실행
- 전역 스트릭트는 사용하지 않는 것이 좋음 ( 모든 코드들이 모두 정확하진 않으므로..)
```js
(function(){
    'use strict';
    //코드를 전부 이 안에 작성
    // 이 안에 작성된 코드는 전부 스트릭트 모드로 작동
})();
```

# Q