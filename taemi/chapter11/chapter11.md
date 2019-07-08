# chapter11 예외와 에러 처리

## 11.1 Error 객체

> 자바스크립트에 내장된 Error객체
```js
// 에러 메세지 지정 방식
const err = new Error('invalid email');
```
```js
// 이메일의 유효성을 판단하는 코드
function validateEmail(email){
    return email.match(/@/) ?
        email : 
        new Error(`invalid email:${email}`);
}
```
```js
// instanceof 연산자를 써서 Error인스턴스가 반환되었는지 확인
const email = "jane@doe.com";

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error){
    console.error(`Error: ${validatedEmail.message}`);
} else {
    console.log(`Valid email:${validatedEmail}`);
}

// Valid email : jane@doe.com
```
## 11.2 try/catch 와 예외 처리
> 시도하고, 예외가 있으면 잡는다.
- 에러를 캐치 했기 때문에 프로그램은 멈추지 않는다.

```js
const email = null;

try{
    const validatedEmail = validateEmail(email);
    if(validatedEmail instanceof Error){
        console.error(`Error:${validatedEmail.message}`);
    } else {
        console.log(`Valid email:${validatedEmail}`);
    }
} catch(err) {
    console.error(`Error: ${err.messsage}`);
}
```
## 11.3 에러 일으키기
> 직접 에러를 일으켜서 예외 처리 작업하기

- 객체 뿐만 아니라 숫자, 문자열 등 어떤 값이든 catch에 넘길 수 있다.
- 하지만 에러 인스턴스를 넘기는 게 가장 편리

```js
// 계좌의 잔고가 요청 받은 금액보다 작으면 예외
function billPay(amount, payee, account){
    if(amout > account.balance){
        throw new Error("insufficient funds");
    }
    account.transfer(payee, acount);
}
```
- `throw` 함수 즉시 멈춤

## 11.4 예외 처리와 호출 스택
> 호출 스택 : 함수에서 함수를 부를 경우 함수가 쌓이는 것

- **에러는 catch 될 때까지 호출 스택을 따라간다!**
- 에러는 호출 스택 어디서든 캐치 할 수 있음
- 디버그에 유용
    - 자바스크립트는 스택이 쌓여있는 상태에서 에러가 나면 쌓인 스택들을 알려줌

<hr>

> 대부분의 자바스크립트 환경에서 Error 인스턴스에는 스택을 문자열로 표현한 stack 프로퍼티가 있다.

```js
function a(){
    console.log('a:calling b');
    b();
    console.log('a: done');
    }

function b(){
    console.log('b: calling c');
    c();
    console.log('b:done');
    }

function c(){
    console.log('c: throwing error');
    throw new Error('c error');
    console.log('c:done');
}

function d(){
    console.log('d: calling c');
    c();
    console.log('d:done');
}

try{
    a();
    } catch(err){
        console.log(err.stack);
}

try{
    d();
} catch(err){
    console.log(err.stack);
}

```
```html
결과값

a:calling b
VM107:8 b: calling c
VM107:14 c: throwing error
VM107:28 Error: c error
    at c (<anonymous>:15:11)
    at b (<anonymous>:9:5)
    at a (<anonymous>:3:5)
    at <anonymous>:26:5
VM107:20 d: calling c
VM107:14 c: throwing error
VM107:34 Error: c error
    at c (<anonymous>:15:11)
    at d (<anonymous>:21:5)
    at <anonymous>:32:5
```

- 책에서는 @기호, 여기서는 at가 있는 행은 스택추적

## 11.5 try...catch...finally

> `finally` 에러가 일어나든 말든 반드시 호출

```js
try{
    console.log("this line is executed...");
    throw new Error("whoops");
    console.log("this line is not...");
} catch(err) {
    console.log("there was an error...");
} finally{
    console.log("...always executed");
    console.log("perform cleanup here");
}


# Q
- try catch에서 어떻게 err 넘어가는지
