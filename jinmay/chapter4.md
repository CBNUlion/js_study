# Chapter4 제어문

### 4.1.1 while 루프

while 루프는 조건을 만족하는 동안 코드를 계속 반복한다.

```javascript
while (condition) {
  statement;
}
```

### 4.1.5 if ... else 문

조건문에 해당하며 반복 기능이 없다.

```javascript
if (condition) {
  statement;
} else {
  statement;
}
```

### 4.1.6 do ... while 루프

while 루프처럼 반복을 수행하지만 차이점이 있다. do ... while 루프는 시작하면서 조건을 검사하지 않고 마지막에 검사한다. 때문에 최소한 한 번의 실행은 보장된다.

```javascript
do {
  statement;
} while (condition);
```

### 4.1.7 for 루프

어떤 일을 정해진 숫자만큼 반복할때 주로 사용하면 좋다. 또는 현재 작업 하고 있는 게 몇번째 작업 중인지 알아야할때 사용한다.

```javascript
for ([initialization]; [condition]; [final - expression]) {
  statement;
}
```

### 4.2.1 제어문의 예외

##### break

루프 중간에 빠져나간다. 만약 두 개의 루프가 중첩되어 있다면 가장 break를 포함하고 있는 루프가 깨지게된다.

##### continue

다음 루프 단계로 건너뛴다. continue 아래에 있는 코드를 실행하지 않고 다음 루프로 이동한다.

##### throw

예외를 발생시킨다.

### 4.2.2 if ... else 문을 체인으로 연결하기

여러 조건으로 분기할 때 사용한다.

```javascript
if (condition) {
  statement;
} else if (condition) {
  statement;
}
```

### 4.2.5 switch문

if ... else 문은 두 가지 중 하나를 선택하지만, switch문은 조건 하나로 여러 가지 중에서 하나를 선택할때 사용한다. switch문의 조건은 값으로 평가될 수 있는 표현식(expression)이어야 한다.

```javascript
switch(expression) {
    case value1:
        statement
        [break;]
    case value2:
        statement
        [break;]
    case value3:
        statement
        [break;]
}
```

expression을 평가하고 일치하는 첫 번째 case를 찾아서 break, return, continue, throw를 만나거나 switch 문이 끝날때 까지 실행한다. 즉 아래와 같이 case를 실행 후 break가 없다면 아래의 case로 같이 실행하게 된다.

```javascript
switch(expression) {
    case value1:
    case value2:
        statement
        break;
    case value3:
        statement
        [break;]
}
```

case1과 case2는 같이 실행된다.(case를 실행 후 break가 없으면 다음 case를 실행한다.)

default 절도 사용할 수 있는데, 필수는 아니지만 일치하는 case 절이 없을때 실행된다.

```javascript
switch(expression) {
    case value1:
        statement
        [break;]
    case value2:
        statement
        [break;]
    case value3:
        statement
        [break;]
    default:
        console.log('no matched');
        break;
}
```

### 4.2.6 for ... in 루프

객체의 프로퍼티에 루프를 실행하도록 할때 사용한다.

```javascript
for (variable in object) {
  statement;
}
```

중요한 점으로 Array에서 사용하지 않는 다는 것이다. prototype에 걸려 있는 프로퍼티에도 루프를 할 수 있어서 방지하기 위해 객체에만 사용하는 것이다.

### 4.2.7 for ... of 루프

ES6에서 새로 생긴 반복문이다. 컬렉션의 요소에 루프를 실행한다.

```javascript
for (variable of object) {
  statement;
}
```
