자바스크립트의 기본 문법
=======================


변수
---------
변수는 값을 저장하고 그 저장된 값을 참조하기 위해 사용한다. 
변수는 위치(주소)를 기억하는 저장소이다. 위치란 메모리 상의 주소(address)를 의미한다. 
즉, 변수란 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자(identifier)이다.
변수를 선언할 때 var 키워드를 사용한다. 할당 연산자 =는 변수에 값을 할당하기 위해 사용한다.
```{.javascript}
var x;
x = 12;
```

값
----
1. 데이터 타입
  프로그래밍 언어에서 사용할 수 있는 값의 종류
2. 변수
  값이 저장된 메모리 공간의 주소를 가리키는 식별자
3. 리터럴
  소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위

자바스크립트의 데이터 타입 7가지
- number
- string
- boolean
- null
- undefined
- symbol
- object (객체 타입)

자바스크립트는 변수를 선언할 때 데이터 타입을 미리 지정하지 않는다.
변수에 할당된 값의 타입에 의해 동적으로 변수의 타입이 결정된다.
```{.javascript}
// Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Object
var obj = { name: 'Lee', gender: 'male' };

// Array
var array = [ 1, 2, 3 ];

// function
var foo = function() {};
```

연산자
--------
연산자는 다른 언어와 똑같다
연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다. 
이때 연산의 대상을 피연산자라 한다.


함수
-------
함수란 어떤 작업을 수행하기 위해 필요한 문들의 집합을 정의한 코드 블록이다. 
함수는 이름과 매개변수를 갖으며 필요한 때에 호출하여 코드 블록에 담긴 문들을 일괄적으로 실행할 수 있다.

```{.javascript}
// 함수의 정의(함수 선언문)
function square(number) {
  return number * number;
}


// 함수의 정의(함수 선언문)
function square(number) {
  return number * number;
}

// 함수의 호출
square(2); // 4
```

객체
------
자바스크립트는 객체 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다. 
원시 타입을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.

자바스크립트 객체는 키(이름)와 값으로 구성된 프로퍼티(property)의 집합이다.
프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다.
자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있다.
따라서 프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.

```{.javascript}
var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee
```

이와 같이 객체는 데이터를 의미하는 프로퍼티(property)와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합이다.
객체는 데이터(프로퍼티)와 그 데이터에 관련되는 동작(메소드)을 모두 포함할 수 있기 때문에 데이터와 동작을 하나의 단위로 구조화할 수 있어 유용하다.
자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 “프로토타입”이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.
이 프로토타입은 타 언어와 구별되는 중요한 개념이다.


배열
------
배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함하고 있다.

```{.javascript}
var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2
```






