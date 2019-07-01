# chapter4 제어문

## 4.1 제어문의 기초

### 4.1.1 while 루프
> while()
### 4.1.2 블록문
> {}
- 제어문 없이 블록문만 써도 되지만 별 의미는 없음

### 4.1.3 공백
- 공백을 신경쓰지 않는다.
### 4.1.4 보조 함수
- 나중에 설명
### 4.1.5 if else 문
### 4.1.6 do while 루프
> while과 다른 점 : 시작하면서 조건을 검사하지 않고 마지막에 검사한다.
>> body를 최소한 한번이라도 실행해야 할 때 사용
```js
do {
    내용
}while(조건);
```
### 4.1.7 for 루프
 `for (let roll = 0; roll<3; roll++) `
### 4.1.8 if문
`if(조건){실행 코드}`
### 4.1.9 하나로 합치기
## 4.2 자바스크립트의 제어문
1. 조건문   
    - if, else if, else
    - switch
2. 반복문
    - for
    - while
    - do while

### 4.2.1 제어문의 예외
> 일반적인 실행 방식을 바꾸는 4가지 문

1. break
    - 루프 중간에 빠져나간다.
2. continue
    - 루프에서 다음단계로 바로 넘어간다.
3. return 
    - 제어문을 무시하고 현재 함수를 즉시 빠져나간다.
4. throw
    - 예외 핸들러에서 반드시 처리해야 할 예외를 일으킨다.

### 4.2.2 if , else is, else 문을 체인으로 연결하기

- else if 가 사실은 else + if 였다. 나는 지금까지 그냥 문법 그 자체인 줄..

### 4.2.3 메타 문법

> 다른 문법을 설명하는 문법
1. `[]` : 옵션
2. `(...)` : 여기 들어갈 내용이 더 있다.

### 4.2.4 for 루프의 다른 패턴
> 하나의 for 문 안에 여러 문을 결합할 수 있다.
```js
for(let temp, i = 0, j = 1; j < 30; temp = i , i = j , j = i + temp)
    console.log(j)
```
```js
for(;;){console.log("이건 무한루프지");}
```
### 4.2.5 switch문
```js
switch(expression){
    case value1:
        [break;]
    case value2:
        [break;]
        (...)
    case valueN:
        [break;]
    default:
        [break;]
}

```
**중간에 break가 없으면 다음문을 실행하게 된다!!!!**
- break를 쓰는 습관을 들이자

### 4.2.6 for ... in 루프

```js
//문법
for(variable in object)
    statement
```
```js
const player = {name : 'Thomas', rank:'Midshipman', age:25};
for (let prop in player){
    if(!player.hasOwnProperty(prop)) continue;  // 프로토타입을 빼주는 코드, 생략하면 에러가 생길 때가 많음
    console.log(prop + ':' + player[prop]);
}
```
[(참고)프로토타입에 대해서 설명한 블로그](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)

### 4.2.7 for ... of 루프
> ES6에서 새로 생긴 반복문
- `for(variable of object){stament}`
- 배열은 물론이고 이터러블 객체에 모두 사용 가능한 범용적인 루프
- 배열에 루프를 실행하는데 인덱스는 필요 없을 때 사용
```js
const hand=[randFace(), randFace(), randFace()];
for (let face of hand)
    console.log('음... ${face}');
```
```js
// 위 코드를 일반적인 제어문으로 사용했을 때
const hand=[randFace(), randFace(), randFace()];
for(let i =0; i < hand.length; i ++)
    console.log('Roll ${i+1}: ${hand[i]}'); //어떻게 불러오는 거지..?
```
## 4.3 유용한 제어문 패턴
### 4.3.1 continue 문을 사용하여 조건 중첩 줄이기
> 반복문 안에 조건문이 있을 때
### 4.3.2 break나 return 문을 써서 불필요한 연산 줄이기
> 무언가를 찾는 루프, 찾고 나서 사용하기
- 루프 나오려면 break, 함수라면 return도 괜찮다.
### 4.3.3 루프를 완료한 뒤 인덱스 값 사용하기
### 4.3.4 배열을 수정할 때 감소하는 인덱스 사용하기
> 배열에 루프를 실행하면서 루프 바디에서 배열을 수정하는 것은 위험하다. 종료 조건을 자꾸 바꾸기 때문에.



# Q
- 블록문 지역 변수, 전역 변수 관련 찾아보기
- 134p에서 for문 두번 째 예제 출력할 때 불러오는 게 어떻게 되는 건지 잘 모르겠다.


# 참고
- `프로토타입` 뭔지 찾아보기
- for in 을 사용할 때 프로토타입
- 어떤 특성 때문에 왜 그렇게 쓰는지 알면 더 좋음 (심화)
- veloperty ->> 누구든지 하는 리액트
