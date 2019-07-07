
# ch5. 표현식과 연산자

> 표현식은 대부분 연산자 표현식
곱셈표현식은 *와 피연산자 두 개로 이루어진다.

## 5.2 산술연산자
+,-,/,*/%
-,+
++,--
> %의 경우
나머지 연산자는 보통 정수 피연산자에서만 사용이 되는데, js의 경우 피연산자에 소수점이 있어도 잘 동작함
10 % 3.6 = 2.8

## 5.3연산자 우선순위
우선순위가 같은 연산자는 오른쪽-->왼쪽 or 왼쪽-->오른쪽

## 5.4 비교 연산자
비교 연산자는 이름처럼 두 개의 값을 비교함
일치함 (===)과 동등함(==) 으로 나누어짐
##### 일치함과 동등함의 차이
일치
- 두 값이 같은 객체를 가르키거나 같은 타입이고 값도 같다면(원시타입) 값이 일치한다.
- 두 값이 일치하는지 확인시 === or !== 연산자를 활용한다

동등
- 두 값이 같은 객체를 가리키거나 같은 값을 갖도록 변환할 수 있을 경우
- 같은 값을 갖도록 변환할 수 있는 경우: 문자열 "33"은 숫자 33으로 변환할 수 있다-->동등 O 일치 X(타입 다름)
>기계적으로 동등연산자(==)를 사용하는 것은 지양해야 한다. null, undefined, "", 0때문에 문제가 발생한다.
```javascript 
const a={name:"an object"};
const b={name:"an object"};
a===b; //false ->객체는 항상 다르다
```
관계연산자
<= < > >=

## 5.5 숫자비교
NaN은 그 자신을 포함하여 무엇과도 같지 않다.
-->NaN===NaN false && NaN\==NaN false
```javascript
let  n=0;
while (true){
n+=0.1;
if (n===0.3) break;
}
console.log(`Stopped at ${n}`);
//이 경우 영원히 실행된다. js에서 숫자는 모두 double형이기 때문에

let  n=0;
while(true)
n+=0.1;
if(Math.abs(n-0.3)<Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);
//Number.EPSILON은 0을 제외한 가장 작은 숫자
```
## 5.6 문자열 병합
+연산자는 덧셈과 문자열 병합에 모두 사용된다
```javascript
3+5+"8" //"88" 3+5먼저
"3"+5+8 //"358" "3"이 문자열이여서
```

## 5.7 논리 연산자
논리연산자는 불리언값만 다룰 수 있고, 불리언에는 false와 true 두가지 밖에 없다. js에서 논리 연산자는 불리언이 아닌 값도 다룰 수 있고, 불리언이 아닌 값을 반환하기도 한다. <b>논리 연산자를 불리언 값에 사용하면 결과는 불리언 값 뿐</b>
#### 5.7.1 참 같은 값과 거짓 같은 값
거짓 같은 값: undefined, null, false, 0, NaN, ''(빈 문자열)
참 같은 값: 모든 객체, 배열, " ", "false"

## 5.8 AND,OR,NOT
AND: 둘 다 true-->true
OR: 하나만 true-->true
NOT: 반대로
#### 5.8.1 단축평가
AND인 경우 앞에거가 거짓-->뒤에거 안봄
OR인 경우 앞에거가 참-->뒤에거 안봄
```javascript
const a=true;
let x=0;
const result=a||x++;
// x++을 안해서 증가 X

const a=false;
let x=0;
const result=a||x++;
// x++을 해서 증가 O
```
이 경우에 a값에 따라 x의 증가여부가 달려있다, 주의해서 작성해야 함
#### 5.8.2 피연산자가 불리언이 아닐 때 논리 연산자가 동작하는 방법
```javascript
const options=suppliedOptions||{name:"Default"}
// suppliedOptions 가 false가 아닌 이상 options=suppliedOptions임
// suppliedOptions 가 false면(null, undefined) options=default
```
객체는 항상 참 같은 값으로 평가된다.
#### 5.8.3 조건 연산자
if else와 같은 표현식 : 삼항연산자
```javascript
b=a?1:2;
```
#### 5.8.4 쉼표 연산자
표현식을 결합하여 두 표현식을 평가한 후, 두 번째 표현식의 결과를 반환
```javascript
let x=0,y=10,z;
z=(x++, y++); 
//z의 값은 y++를 반환함
```
## 5.9 연산자 그룹
#### 5.9.1 비트 연산자
& | ^ ~ << >> >>>
^:하나만 1이여야 1
#### 5.9.2 typeof 연산자
typeof의 반환값
```javascript
undefined="undefined"
null="object"
{}="object"
true="boolean"
1="number"
""="string"
Symbol()="symbol"
function() {}="function"
```
typeof(x) 이거로 안하고 typeof x 이거도 가능하다
#### 5.9.3 void 연산자
피연산자를 평가한 후 undefined를 반환함.
```html
<a href="javascript:void 0">Do nothing.</a>
```
#### 5.9.4 할당 연산자
l-value:변수, 프로퍼티, 배열 요소 중 하나여야 함(값을 저장할 수 있는 것)
```javascript
let  v,v0;
v=v0=0.9;
//v0 부터 값이 할당, 그 후 v값이 할당
const  nums=[3,,15,7,5];
let  n,i=0;
while((n=nums[i]<10) &&  i++<nums.length){
console.log(`Number less than 10:${n}.`);
}
console.log(`Number greater than 10 found:${n}.`);
console.log(`${nums.length-i-1} numbers remain`);
```
####5.10 해체 할당
ES6 새로운 기능
객체 해체
```javascript
const  obj={b:2, c:3, d:4};
const {a,b,c}=obj;
a; //undefined
d; //ReferenceError d가 정의 X
```
객체  해체는  할당만으로  이뤄질  수도  있지만, 반드시  괄호를  사용해야한다.
```javascript
const  obj={b:2,c:3,d:4};
let  a,b,c;
{a,b,c}=obj; //오류 남
({a,b,c}=obj);
```
확산 연산자(...)을 사용시 남은 요소를 새 배열에 할당할 수 있다.
```javascript
const  arr=[1,2,3,4,5];
let [x,y,...rest]=arr;
x;
y;
rest;
```
파이썬처럼 바로 바꾸는것도 가능하다
```javascript
let  a=5,b=10;
[a,b]=[b,a];
a;b;
```
## 5.11 객체와 배열 연산자
연산자
. [] in new instanceof ... delete
## 5.12 템플릿 문자열과 표현식
```javascript
const  roomTempC=21.5;
let  currentTempC=19.5;
const  message=`current temp is`+`${currentTempC-roomTempC}\u00b0c different than room temperature.`;
const  fahrenheit=`the current temp is ${currentTempC*9/5+32}\u00b0F`;
```
## 5.13 표현식과 흐름 제어 패턴
#### 5.13.1 if ... else 문을 3항 연산자로 바꾸기
```javascript
b=a?1:2;
```
#### 5.13.2 if문을 단축 평가
```javascript
if(!options) options={};
options=options||{};
```