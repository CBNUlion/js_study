# chapter 12 이터레이터와 제너레이터

- 제너레이터는 이터레이터에 의존하는 개념
- 이터레이터는 **책갈피**와 비슷하다.
- 배열은 *이터레이블* 객체의 좋은 예시다.

```js
const book = [
    "one",
    "two",
    "three",
    "four",
    "five",
];

```
이 배열에 values를 써서 이터레이터 객체를 만들 수 있다.
```js
const it = book.values();
```
- 이터레이터는 보통 it이라고 줄여쓴다.
- 현재는 책갈피만 만든 것이지, 아직 책갈피를 꽃을 수는 없다. 
    - 읽지 않았기 때문
- 읽고 싶다면 next 메서드를 사용해서 호출
    - 반환 객체
        - value 프로퍼티 ( 지금 보이는 페이지 )
        - done 프로퍼티 ( 마지막 페이지를 읽으면 true로 바뀐다.)

```js
// 책 읽는 과정
it.next();      // {value:"one", done:false}
it.next();      // {value:"two", done:false}
it.next();      // {value:"three", done:false}
it.next();      // {value:"four", done:false}
it.next();      // {value:"five", done:false}
it.next();      // {value:undefined, done:true}

```
- 이터레이터의 특징
    1. next에서 책의 마지막 페이지를 반환했다고 해서 끝난 것은 아니다.
        - 책의 비유로는 맞지 않는 부분
    2. 이터레이터가 끝까지 진행하면 뒤로 돌아가서 다른 데이터를 제공할 수 없다.
    3. it.next()를 호출하는 중간에 다른 일을 할 수 있다.
    4. 배열의 요소를 나열하는 목적이라면 for 루프나 for...of 루프를 사용할 수 있다.
        - for : 배열 요소의 인덱스는 숫자형이고 순차적, 인덱스 변수를 써서 해당하는 배열 요소에 접근 가능
        - for...of : 이터레이터 활용

```js
// 이터레이터와 while 루프를 사용해서 for...of 루프 흉내내보기

const it = book.values();
let current = it.next();        // value와 done이 객체 형태로 들어가게 된다.
while(!current.done){
    console.log(current.value);
    current = it.next();
}
```
- 이터레이터는 모두 독립적
    - 새 이터레이터를 만들 때마다 처음에서 시작한다.
    - 여러개 동시 사용 가능하다

```js
// 여러개 동시 사용하는 이터레이터의 예시
const it1 = book.values();
const it2 = book.values();
// 아직 어느 이터레이터도 시작하지 않았다.

// it1으로 두 페이지를 읽는다.
it1.next();         //{value: "one", done : false}
it1.next();         //{value: "two", done : false}

// it2로 한페이지를 읽는다.
it2.next();         //{value: "one", done: false}

// it1으로 한페이지 더 읽기
it1.next();         // {value:"three", done:false}
```

## 12.1 이터레이션 프로토콜

> 이터레이션 프로토콜 : 모든 객체를 이터러블 객체로 바꿀 수 있다.

- 메세지에 타임스탬프를 붙이는 로그클래스가 필요한 예시
- 내적으로 타임스탬프가 붙은 메세지는 배열에 저장함
```js
class Log{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({ message, timestamp:Date.now() });
    }
}
```
- 로그에 붙은 항목을 순회하고 싶다면?
    - 이터레이션 프로토콜로 접근해보기
    - 이터레이션 프로토콜은 클래스에 심볼 메서드 `Symbol.iterator`가 있다.

```js
// Log 클래스에 Symbol.iterator 메서드를 추가해보자

class Log{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({message, timestamp: Date.now()});
    }
    [Symbol.iterator](){               // 메서드를 추가해서 이터러블 객체를 만들어준다.
        return this.messages.values();
    }
}
```
이제 Log 인스턴스를 배열처럼 순회할 수 있다.
```js
const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");
//...

// 로그를 배열처럼 순회합니다!
for(let entry of log){
    console.log(`${entry.message} @ ${entry.timestamp}`);
}
//first day at sea @ 1563165757371
//spotted whale @ 1563165757371
//spotted another vessel @ 1563165757371

```
- 위의 예제는 messages 배열에서 이터레이터를 가져와 이터레이터 프로토콜을 구현했다.
- 하지만, 다음과 같이 직접 이터레이터를 만들 수도 있다.

```js
class Log{
     constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({message, timestamp: Date.now()});
    }
    [Symbol.iterator](){    // 이터레이터 직접 만들기
        let i =  0;
        const messages = this.messages;
        return{
            next(){
                if(i >= messages.length)
                    return {value:undefined, done: true}
                return {value : messages[i++], done : false};
            }
        }
    }
}
```
- 길이 제한이 없는 곳에서도 이터레이터를 쓴다
- 예 ) 피보나치 수열
```js
// 피보나치 수열
// 피보나치 수열 확인하려고 돌릴 때, break점 잡아주자
// 안 잡아 줬다가 컴퓨터 멈춤...
class FibonacciSequence {
    [Symbol.iterator](){
        let a = 0, b = 1;
        return {
            next(){
                let rval = {value : b, done : false};
                b +=a;
                a = rval.value;
                return rval;
            }
        };
    }
}
```
```js
// 10 회 계산 후 빠져나오기
const fib = new FibonacciSequence();
let i = 0;
for (let n of fib){
    console.log(n);
    if(++i > 9) break;
}
```
## 12.2 제너레이터

> 이터레이터를 사용해 자신의 실행을 제어하는 함수

- 제너레이터가 새로 도입하나 두개지 개념
    1. 함수의 실행을 개별적 단계로 나눔
    2. 실행 중인 함수와 통신
- 제너레이터는 두 가지 예외를 제외하면 일반적인 함수와 같다.
    1. 제너레이터는 언제든 호출자에게 권한을 넘길 수 있다.
    2. 제너레이터는 호출한 즉시 실행되지는 않는다. 대신 이터레이터를 반환하고, 이터레이터의 next메서드를 호출함에 따라 실행된다.

- 제너레이터를 만들 때에는 `function` 키워드 뒤에 애스터리스크(*)를 붙인다.
- 제너레이터에서는 `return` 대신 `yield`를 쓴다.

```js
//무지개 색깔을 반환하는 단순한 제너레이터 예제
function* rainbow(){ // * 기호는 제너레이터 문법
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}
```
- 제너레이터를 호출하면 이터레이터를 얻는다.
- 함수를 호출한 다음 에터레이터를 써서 단계별로 진행한다.
- 제너레이터를 어떻게 호출하는지의 예제이다.
```js
const it = rainbow();
it.next(); // {value: "red", done:false}
it.next(); // {value: "orange", done:false}
it.next(); // {value: "yellow", done:false}
it.next(); // {value: "green", done:false}
it.next(); // {value: "blue", done:false}
it.next(); // {value: "indigo", done:false}
it.next(); // {value: "violet", done:false}
it.next(); // {value: undfined, done:true}
```
- rainbow 제너레이터는 이터레이터를 반환하므로 for...of 루프에서 쓸 수 있다.
```js
// 무지개색 전부 콘솔에 기록
for(let color of rainbow()){
    console.log(color);
}
```

### 12.2.1 yield 표현식과 양방향 통신

> 제너레이터와 호출자 사이에서 양방향 통신이 가능하다.

- 통신은 `yield` 표현식을 통해 이뤄진다.

```js
function* interrogate(){
    const name = yield "What is your name?";    //  yield가 끝나면 제어권을 반드시 호출자에게 넘긴다.
    const color = yield "What is your favorite color?";
    return `${name}'s favofite color is ${color}`.;
}
```
```js
// 위 예제의 결과

const it = interrogate();
it.next();          // {value : "What is your name?", done : false}
it.next('taemi');   // {value : "What is your favorite color?", done: false}
it.next('red');     // {value : "taemi's favorite color is red.", done:true}

```
- 제너레이터는 이처럼 호출자가 함수의 실행을 제어할 수 있어서 아주 유용하다.
### 12.2.2 제너레이터와 return 

- `yield`문은 제너레이터의 마지막 문이더라도 제너레이터를 끝내지 않는다.
- 제너레이터에서 `return`를 사용하면 즉시 done은 true가 되고, value 프로퍼티는 return이 반환하는 값이 된다.

```js
function* abc(){
    yield 'a';
    yield 'b';
    return 'c';

}

const it = abc();
it.next();      //{value : 'a', done: false}
it.next();      //{value : 'b', done: false}
it.next();      //{value : 'c', done: true}
```
- 이러한 방식은 정확하지만 보통 done이 true 이면 value에 신경쓰지 않는다.
- 예 ) 제너레이터를 for...of에 넣으면 c는 절대 출력되지 않는다.

```js
// a,b 는 출력되지만 c는 출력되지 않는다.
for(let l of abc()){
    console.log(l);
}
```
- 주의!
    - 제너레이터의 반환 값을 return 으료 사용하지 말 것. 
    - 반환값은 yield로, 종료는 return 으로!







# 주의

- 이터레이션 프로토콜 부분 예시 다시 한 번 해보기
