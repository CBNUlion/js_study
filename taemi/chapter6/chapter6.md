# chapter 6 함수
```js
// 선언
function sayhello(){
    console.log("hello");
}

// 호출
sayhello();
```
## 6.1 반환 값

`return`
- 어떤 값이던지 반환할 수 있다.
- `return`이 없는 함수라면 반환 값은 undefined

## 6.2 호출과 참조

- 호출과 참조의 차이를 이해하는 것이 중요!
1. 호출
    - `function()`
2. 참조
    - `function`
- 자바스크립트는 참조만 할 수 있는 특징이 있어서 여러곳에 할당 가능
    - 변수 할당 가능
    - 함수 객체 프로퍼티에 할당 가능
    - 배열 요소로도 할당 가능
## 6.3 함수와 매개변수
- **원시 값과 객체의 핵심적인 차이**를 이해해야 한다!
- 매개변수와 변수가 같을 시 
    - 원시값
        - 함수 안 매개변수가 변해도 함수 밖 변수는 변화 x
    - 객체
        - 함수 안 매개변수가 변하면 함수 밖 변수 역시 변화
        - 다른 개체지만(객체 아니고 개체라고 쓴 거 맞음) 같은 객체를 가리키고 있기 때문에.

## 6.3.1 매개변수가 함수를 결정하는가?
- 자바에서는 매개변수로 함수를 결정할 수 없다.
    - 모두가 같은 함수
    - 매개변수가 없다면 undefined

## 6.3.2 매개변수 
1. 객체를 변수로 해체
```js
// 값을 하나식 해체해서 받음
function getSentence({subject, verb, object}{ return `${subject} ${verb} ${object}`};
}

const o = {
    subject : "I",
    verb : "love",
    object : "JavaScript",
};

getSentence(o);
```
- 프로퍼티 이름은 반드시 유효한 식별자여야 한다.
- 들어오는 객체 당 프로퍼티가 없는 변수는 undefined를 할당 받는다.

2. 배열 해체
```js
function getSentence([subject, verb, object]{
    return `${subject} $[verb] $[object]`;
}

const arr = ["i", "love","JavaScript"];
getSentence(arr);
```
3. 확산 연산자(...)를 써서 매개변수 이용하기
```js
function addPrefix(prefixm, ...words){
    // 나중에 더 좋은 방법을 알려준다고 하네요
    const prefixedWords = [];
    for(let i = 0; i < words.length; i++){
        prefixedWords[i] = prefix + words[i];
    }
    return prefixeWords;
}
addPrefix("con", "verse", "vex");
//["converse", "convex"]
```
- 확산 연산자는 반드시 마지막 매개변수로 사용할 것

### 6.3.3 매개변수 기본값
> ES6에서는 매개변수 기본값을 지정하는 기능도 추가되었다.

```js
function f(a,b = "default", c = 3){
    return '${a}-${b}-${c}';
}

// b,c 에는 값을 안 주면 default
// a에는 값을 안 주면 undefined
```

### 6.3.4 객체의 프로퍼티인 함수

- 메서드  
    - 객체의 프로퍼티인 함수를 메서드라고 불러서 일반 함수와 구별한다.
    - 객체 이터럴에도 메서드를 추가할 수 있다.

```js
const o = {
    name : 'Wallace',                       //원시값 프로퍼티
    bark : function({return 'Woof!'};),     // 함수 프로퍼티(메서드)
}
```
> ES6에서는 간단하게 메서드를 추가할 수 있는 문법이 생겼다.
```js
// 위와 같은 예제
const o = {
    name = 'Wallace',           //원시값 프로퍼티
    bark() {return 'Woof!';},   //함수 프로퍼티(메서드)
}
```
## 6.5 this 키워드
> 함수 바디 안에는 특별한 읽기 전용 값인 this가 있다.

- **일반적으로 this는 객체의 프로퍼티인 함수에서 의미가 있다.**<br>
**메서드를 호출하면 this는 호출한 메서드를 소유하는 객체가 됩니다.**

```js
const o = {
    name : 'Wallace',
    speak(){return `My name is ${this.name}!`},
}

o.speak() // 호출하게 되면 this 는 o 에 묶입니다.
// "My name is Wallace!"
```
- this 함수를 어떻게 **선언**했느냐가 아닌 어떻게 **호출**했느냐에 따라 달라진다
- 즉, this가 o에 묶인 이유는 speak가 o의 프로퍼티여서가 아니라, o에서 speak를 호출했기 때문이다.

```js
// 같은 함수를 변수에 할당하면
const speak = o.speak;
speak === o.speak; // T  두 변수는 같은 함수를 가리킨다.
speak();        // "My name is undefined!"

//함수가 어디에 속하는지 알 수 없으므로 this는 undefined

```
- 개인적인 생각인데, python의 self라고 생각하면 편할 것 같다. 다른 곳에 가서 함수만 뺀다고 해서 self의 값이 들어가지 않는 것처럼 여기서도 마찬가지

```js
// 함수 안에 함수가 들어가 있을 때는 또 조심해야 한다.
const o = {
    name : 'Julie',
    greetBackwards:function(){                              // 함수 호출하면서 this는 greetBackwards에 묶임
        function getReverseName(){                          // 함수를 한 번 더 호출하면서 this가 변경됨
            let nameBackwards = '';
            for (let i = this.name.length-1; i >=0; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

o.geetBackwards();

// 변경된 this는 스트릭트 모드인지 아닌지에 따라 undefined가 되기도 하고 전역 객체에 묶이기도 한다.
// 최대한 이런 상황을 피할 것
```
- Q. 이런 문제를 해결하려면 어떻게 해야 하는지? 
    - A. 다른 변수에 this를 할당하라

```js
// 다른 변수에 this 할당하는 예제

const o = {
    name : 'Julie',
    greetBackwards:function(){   // 함수 호출하면서 this는 greetBackwards에 묶임
        const self = this;          //this가 원하는 곳에 묶여 있을 때 변수로 지정해버림
        function getReverseName(){                          // 함수를 한 번 더 호출하면서 this가 변경됨
            let nameBackwards = '';
            for (let i = self.name.length-1; i >=0; i--){           //사용할 때 원하는 this 의 변수로 사용하면 됨
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

o.geetBackwards();
```
- 나중에 나오는 화살표 함수를 써도 이 문제를 해결할 수 있음

## 6.6 함수 표현식과 익명 함수
> 익명함수에서는 식별자가 주어지지 않는다.
- 함수표현식에서 이름을 제거할 수 있다는 점 빼고는 함수 선언과 문법과 완전히 같음<hr>
여기서 구별해야 할 것이 **함수선언** 과 **함수표현식**이다.
- 함수 선언 
```js
function f(){};
```
- 함수 표현식 
```js
const f = function(){};     // function 뒤에 식별자 따로 없음
```

<hr>

- 이름 없는 익명함수를 살펴보자
```js
//일반적인 함수 선언과 동등, 식별자 없음

const f = function(){
    //...
};
```
- 이름 있는 함수를 살펴보자
```js
// 함수 이름을 정하고 다시 변수에 할당함

const g = function f(){     // 이름이 2개 생긴거, 각각 역할이 다름
    // ...
}
// 이름 g에 우선순위가 있다.
// 외부 접근을 할 때에는 g으로 접근을 해야한다.
// f로 접근하려 하면 변수가 정의되지 않았다는 에러
```
```js
// 재귀함수 사용 시 이러한 표현이 필요하다. ( 재귀함수 사용 시 f로 접근을 해야하기 때문에)
// 함수의 이름 2개

const g = function f(stop){
    if(stop) console.log('f stopped');
    f(true);        //자신 호출
};

g(false);
```
- 함수 안 : **f를 써서** 자기자신을 참조
- 함수 밖 : **g를 써서** 함수를 호출

> 컨텍스트로 함수 선언과 함수 표현식을 구분할 수 있다.
#### 함수 선언의 목적
- 함수 선언 : 나중에 호출할 생각
- 함수 표현식 : 다른 곳에 할당하거나 다른 함수에 넘길 목적

## 6.7 화살표 표기법
> ES6에서 새로 만든 문법
> `function`과 `{ }`를 줄이려고 고안된 단축 문법
> 익명함수를 만들어서 다른 곳에 전달하려 할 때 가장 유용

- 화살표 함수에 세가지 단축 문법
    1. `function` 생략 가능
    2. 함수의 매개변수가 하나라면 괄호 `( )` 생략 가능
    3. 함수 바디가 표현식 중 하나라면 `{ }`과 `return`문 생략 가능

- **화살표 함수는 항상 익명이다**
- 변수 할당은 가능하지만 function키워드처럼 이름 붙은 함수를 만들 수는 없다.


```js
const f1 = function(){return "hello!"}      // 매개변수 x, return 문
//또는
const f1 = () =>"hello!";

const f2 = function(name){return `Hello, ${name}!`;}        // 매개변수 1, 변수 포함 return 문
//또는
const f2 = name => `Hello, ${name}!`;

const f3 = function(a,b) {return a+b};          // 매개변수 2,변수 이용 return 문
// 또는
const f3 = (a,b) => a+b;
```
- 화살표 함수는 this가 다른 변수와 마찬가지로 정적으로 묶인다.
```js
// 앞에서 본 예제
// 화살표 함수를 쓰면 내부 함수에서도 this 사용이 가능하다.
const o = {
    name : 'Julie',
    greetBackwards:function(){   // 함수 호출하면서 this는 greetBackwards에 묶임
        const getReverseName = () => {                         // this가 다른 변수가 마찬가지로, 정적으로 묶임
            let nameBackwards = '';
            for (let i = this.name.length-1; i >=0; i--){      // 따라서 내부 함수에서 this를 사용할 수 있다.
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};

o.geetBackwards();
```
- 화살표 함수가 일반적인 함수와 다른 점
    1. 객체 생성자로 사용 불가능
    2. argument 변수도 사용할 수 없음
        - ES6에서 확산 연산자가 생겨서 argument 변수는 필요 없긴하다.
        - 여기서 argument는 전달인자

## 6.8 call 과 apply, bind
- 자바스크립트는 함수를 어디서, 어떻게 호출 했느냐에 관계 없이 this가 무엇인지 지정할 수 있다.

#### 1. call

- 모든 함수 사용가능
- this를 특정 값으로 지정 가능
```js
const bruce = { name : "Bruce"};
const madeline = { name : "Madeline" };

// 이 함수는 어떤 객체에도 연결되어 있지 않지만 this를 사용한다.

function greet(){
    return `Hello, i'm ${this.name}!`;
}

greet();    // Hello, i'm undefined! - this 는 어디에도 묶이지 않음
greet.call(bruce); // Hello, i'm Bruce!  - this는 bruce
greet.call(madeline); // Hello, i'm Madeline!   - this는 madeline

```
1. 함수를 호출하면서 call을 사용하고
2. this로 사용할 객체를 넘기면
3. 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다.

```js
// 객체 말고 값을 넣고 싶다면 이렇게 하면 된다
function update(birthYear, occupation){
    this.bitrhYear = brithYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
//bruce는 이제 {name: "Bruce", birthYear:1949, occupation:"signer"}
update.call(madeline, 1942, 'actress');
//madeline은 이제 {name:"Madeline", birthYear:1942, occupation:"actress"}
```
- 이 예제는 **위와 다른 점**이 있다는 것을 알아야 한다.
    - 위의 예제
        - 객체를 보냄
        - 객체를 활용
    - 아래의 예제
        - 원시 타입을 보냄
        - 객체에 원시 타입이 값이 되어서 추가
#### 2. apply
> 함수의 매개변수 처리하는 방법만 제외하면 call과 완전히 같다.
- call
    - 매개변수를 직접 받음
- **apply**
    - 매개변수를 배열로 받음
```js
// 첫 자리 : this자리 <- 객체를 보냄
// 원시 타입을 보낼 때 : 배열로 만들어서 보냄

update.apply(bruce, [1955, "actor"]);
// bruce -> {name:"Bruce", birthYear:1955, occupation:"actor"}
update.apply(madeline, [1918, "writer"]);
// madeline -> {name:"Madeline", birthday:1918, occupation:"write"}
```
- 배열 요소를 함수 매개변수로 사용해야 할 때 유용
- 흔히 사용하는 예제 : 최솟값, 최댓값 구하라

```js
//내장함수 Math.min, Math.max를 이용해서 최솟값 최댓값 반환하기

const arr = [2,3,-5,15,7];
Math.min.apply(null, arr); // -5
Math.max.apply(null, arr); // 15

// this 자리에 null을 써준 이유는 이 함수들이 this와 관계없이 동작하기 때문
```
```js
const newBruce = [1940, "matrial artist"];
update.call(bruce, ...newBruce);    // apply(bruce, newBruce)와 같다
Math.min(...arr);           //  -5
Math.max(...arr);           //15
```

#### 3. bind
> this 값을 바꿀 수 있는 함수
> this 값을 영구적으로 바꿀 수 있다.
- 이제 `call` or `apply` 등의 this 자리에 매번 지정 안 해도 자동할당
- **영구적 수정** 이기 때문에 나중에 오류 찾기가 어려울 수도 있다.

```js
const updateBruce = update.bind(brice);

updateBruce(1904, "actor");
    // bruce => {name:Bruce, birthYear:1904, occupation:"actor"}
updateBruce.call(madeline, 1274, "king")
    //bind 로 설정을 해놓았으므로 madeline은 변하지 않는데
    // bruce -> {name:"Bruce", birthYear:1274, occupation:"king"}
```
- bind에 **매개변수**를 넘기면 항상 그 매개변수를 받으면서 호출되는 **새 함수**를 만드는 효과가 있다.
```js
// burce의 태어난 해는 고정시키고 직업을 자유로게 바꾸고 싶다면

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer", "songwriter");
//  bruce -> {name : "Bruce", birthYear:1949, occupation: "singer, songwriter}
```




# Q
헷갈리고 처음 보는 문법이 많아서 주의했어야 함
