# Chapter5 배열과 배열처리

##### 배열의 기본적인 특징

* 순서가 있는 데이터 집합이며, 0으로 시작하는 인덱스를 가짐
* 비균질적이다. 즉, 하나의 배열에 서로 다른 자료형의 데이터가 들어갈 수 있다
* 리터럴 형은 []이며 인덱싱 할때도 []를 쓴다
* 배열 요소의 갯수를 리턴하는 length 프로퍼디타 있다
* 배열 길이보다 큰 인덱스를 사용해서 요소를 할당하면 자동으로 그 인덱스에 맞게 배열의 크기가 늘어난다. 이 때에 빈 자리는 undefined로 채워진다

> 주의할 점으로 배열의 현재 길이보다 큰 인덱스에 접근하는 것으로 배열의 길이가 늘어나는 것이 아니다. 접근이 아닌 새로운 요소를 할당할때 길이가 늘어난다

## 8.2 배열 요소 조작

일부 메소드는 원본 배열을 수정하기도 한다. 따라서 각 메소드들이 원본을 수정하는지 사본을 반환하는 지 잘 익혀야한다.

### 8.2.1 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기

첫 요소 : 인덱스가 0

마지막 요소 : 인덱스가 arr.length - 1

**push와 pop은 각각 배열의 끝에 요소를 추가하거나 제거**한다. **shift와 unshift는 각 배열의 처음에 요소를 추가하거나 제거**한다.

> push, unshift -> 늘어난 배열의 길이가 반환된다
> pop, shift -> 제거된 요소를 반환한다

~~~javascript
const arr = ['a', 'b', 'c']
arr.push('d'); // 4 -> [ 'a', 'b', 'c', 'd' ]
arr.pop(); // 'd'
arr.shift(); // 'a'
arr; // [ 'b', 'c' ]
arr.unshift('aa'); // 3 -> [ 'aa', 'b', 'c' ]
~~~

### 8.2.2 배열의 끝에 여러 요소 추가하기

원본이 변하는 것이 값이 추가된 새로운 사본을 반환한다. 인자로 들어본 배열을 풀어서 값을 추가하게 되는데 이중배열로 들어오게 될 경우 한 번만 분해한다는 점을 조심하자.

~~~javascript
const arr1 = [1, 2, 3];
arr1.concat(['a', 'b', 'c']); // [ 1, 2, 3, 'a', 'b', 'c' ] 생성
arr1 // [1, 2, 3]
arr1.concat(['a', ['b', 'c']]) // [ 1, 2, 3, 'a', [ 'b', 'c' ] ] 생성
~~~

### 8.2.3 배열 일부 가져오기

slice 메소드를 사용한다. 파이썬의 리스트에서 slice 메소드 없이 대괄호를 통해 슬라이싱 하는 것과 같다. 마찬가지로 새로운 사본을 반환한다.

~~~javascript
const arr2 = [0, 1, 2, 3, 4, 5];
arr2.slice(1) // [ 1, 2, 3, 4, 5 ]
arr2.slice(3, 5) // [ 3, 4 ]
arr2.slice(-5, -1) // [ 1, 2, 3, 4 ]
~~~

두 번째 인자를 생략하면 배열의 마지막까지 반환한다.

### 8.2.4 임의의 위치에 요소 추가하거나 제거하기

splice 메소드를 사용한다. 그리고 배열 원본이 수정된다. 첫 매개변수는 수정을 시작할 인덱스이고, 두 번째 매개변수는 제거할 요소 숫자이다.

~~~javascript
const arr = [0, 1, 2, 3, 4, 5];
arr.splice(0, 1, 'a', 'b', 'c'); // [ 'a', 'b', 'c', 1, 2, 3, 4, 5 ]
arr.splice(3, 5, 'aa') // [ 'a', 'b', 'c', 'aa' ]
~~~

### 8.2.5 배열 안에서 요소 교체하기

ES6에서 새로 도입한 copyWithin 메소드이다. 배열 요소를 복사해서 다른 위치에 붙여놓고, 기존의 요소를 덮어쓴다. 첫 번째 매개변수는 복사한 요소를 붙여넣을 위치이며, 두 번째 매개변수는 복사를 시작할 위치이고, 세 번째 매개변수는 복사를 끝낼 위치이다. 세 번째는 생략할 수 있다. 

~~~javascript
const arr1 = [1, 2, 3, 4];
arr1.copyWithin(1, 2); // [ 1, 3, 4, 4 ]
arr1.copyWithin(2, 0, 2); // [1, 3, 1, 3]
~~~

### 8.2.6 특정 값으로 배열 채우기

ES6에서 도입된 fill 메소드이다. 정해진 값으로 배열을 채운다. 크기를 지정해서 배열을 생성하는 Array 생성자와 잘 쓰인다. 배열의 일부만 채우려고 할 때는 시작 인덱스와 끝 인덱스를 지정하면 된다.

~~~javascript
const arr2 = new Array(5).fill('a'); // [ 'a', 'a', 'a', 'a', 'a' ] 생성
arr2.fill('bb', 3) // [ 'a', 'a', 'a', 'bb', 'bb' ]
~~~

### 8.2.7 배열 정렬과 역순 정렬

reverse는 원본 배열의 요소 순서를 반대로 바꾼다

~~~javascript
const arr3 = [1, 2, 3, 4, 5];
arr3.reverse(); // [ 5, 4, 3, 2, 1 ]
~~~

sort는 배열 요소의 순서를 정렬한다. 기본값으로 오름차순으로 정렬한다.

~~~javascript
const arr4 = [2, 4, 1, 3, 5];
arr4.sort() // [ 1, 2, 3, 4, 5 ]
~~~

sort는 정렬 기준으로 함수를 사용할 수 있다.

~~~javascript
const arr = [
    { name: 'suzanne' },
    { name: 'jim' }, 
    { name: 'trevor' },
    { name: 'amanda' }
];

arr.sort() // 정렬되지 않음
arr.sort((a, b) => a.name > b.name);
// 결과
// [ { name: 'amanda' },
//   { name: 'jim' },
//   { name: 'suzanne' },
//   { name: 'trevor' } ]
~~~

## 8.3 배열 검색

indexOf | lastIndexOf | findIndex

## 8.4 map과 filter

map은 배열 요소를 변형시킨다. 일정한 형식의 배열을 다른 형식으로 바꿔야 할 필요가 있을때 사용한다. 또한 복사된 배열을 반환한다.

~~~javascript
const cart = [{ name: 'widget', price: 9.95}, { name: 'gadget', price: 22.95 }];
const names = cart.map(obj => obj.name);
const prices = cart.map(obj => obj.price);
~~~

콜백 함수는 각 요소에서 호출될 때 요소 자체와 요소 인덱스, 그리고 배열 전체를 매개변수로 받는다.

~~~javascript
const items = ['widget', 'gadget'];
const prices = [9.95, 22.95];
const cart = items.map((item, idx) => ({ name: item, price: prices[idx] }));
~~~

filter는 이름에서 알 수 있듯이 배열의 요소를 필터링할 때 사용할 수 있다. map과 마찬가지로 사본을 반환한다.

~~~javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = numbers.filter(num => { if (num % 2 === 1) return num })
~~~

## 8.7 문자열 병합

배열 요소로 들어가있는 문자열들을 구분자로 합칠때 사용한다. 파이썬의 문자열 메소드인  join과 비슷하다.

~~~javascript
const arr = [1, null, 'hello', true, undefined];
delete arr[3];
arr.join(); // '1,,hello,,'
~~~