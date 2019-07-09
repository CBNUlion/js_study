# chapter 8 배열과 배열 처리

## 8.1 배열의 기초

- 순서 있음 ( 0부터 시작 )
- *비균질적* ( 데이터 타입이 모두 같은 필요x)
- 배열 리터럴은 대괄호로 만들고, 인덱스 접근도 대괄호
- length : 배열의 요소 수를 나타내는 프로퍼티
- 배열보다 큰 자리 인덱스에 요소를 할당하면 배열은 자동으로 늘어나고 빈자리는 undefined
- Array생성자도 있지만 잘 쓰지 않는다.

```js
// 기본 성질 확인 코드

//1. 배열 리터럴
const arr1 = [1,2,3];
const arr2 = ["one",2,"three"];
const arr3 = [[1,2,3],["one",2,"three"]];
const arr4 = [
    {name : "Fred", type:"object", luckyNumber:[5,7,13]},
    [
        {name : "Susan", type:"object"},
        {name : "Amthony", type:"object"},
    ],
    1,
    function(){return "arrays can contain functions too";},
    "three",
];

// 배열 요소에 접근하기
arr1[0]; // 1
arr1[2]; // 3
arr3[1]; // ["one",2,"three"]
arr4[1][0]; //{name:"Susan", type:"object"}

// 배열 길이
arr1.length;    // 3
arr4.length;    // 5
arr4[1].length;    // 2

// 배열 늘리기
arr1[4] = 5;
arr1;   //[1,2,3, undefined, 5]
arr1.length; //5

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로
//배열의 길이가 늘어나지는 않습니다.
arr2[10];       // undefined
arr2.length;    //3

// Array생성자 ( 거의 사용 안 함)
const arr5 = new Array();       //빈 배열
const arr6 = new Array(1,2,3);  // [1,2,3]
const arr7 = new Array(2);      // 길이가 2인 배열, 요소는 전부 undefined
const arr8 = new Array("2");    //["2"]

```
- 주의
    - 배열의 길이을 늘리면 나머지는 undefined
    - 배열의 없는 인덱스에 **접근만**하면 배열의 길이는 늘어나지 않는다
## 8.2 배열 요소 조작
- 배열 조작 메서드
    1. 배열 '자체를' 수정
    2. 새 배열을 반환

### 8.2.1 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기
- push
    - 배열 끝에 요소 추가
- pop 
    - 배열 끝에 요소 제거
- shift
    - 배열의 처음을 제거
- unshift
    - 배열의 처음을 추가
    
<br><br>
- `push`, `unshift` : 새 요소를 추가해서 늘어난 길이 반환
- `pop`,`shift` : 제거된 요소를 반환
```js
const arr = ["b", "c", "d"];
arr.push("e");  //4    arr는 이제 ["b","c","d","e"]
arr.pop(); //"e"    arr는 이제 ["b","c","d"]
arr.unshift("a"); //4  arr는 이제 ["a","b","c","d"]
arr.shift();    // "a", arr는 이제 ["b", "c", "d"]
```
### 8.2.2 배열 끝에 여러 요소 추가하기

- `concat` 
    - 배열 끝에 요소 추가
    - 사본 반환
    - **배열을 분해**한 뒤 원래 배열에 추가한 사본을 반환한다.
```js
// 모두 arr는 바뀌지 않는다.
const arr = [1,2,3];
arr.concat(4,5,6);      //[1,2,3,4,5,6]
arr.concat([4,5,6]);    //[1,2,3,4,5,6]
arr.concat([4,5],6);    //[1,2,3,4,5,6] 배열을 분해해서 4,5가 나오게 됨 따라서 4,5,6이 들어감
arr.concat([4,[5,6]]);  //[1,2,3,4,[5,6]]  배열 분해를 한 번 밖에 하지 않아서 4,[5,6]으로 들어감
```

### 8.2.3 배열 일부 가져오기
- `slice` 메서드 사용
    - 매개변수 2개
        1. 어디서부터 가져올지
        2. 어디까지 가져올지( 그 전 인덱스까지 가져옴)
    - 두번째 매개변수를 생략하면 끝까지 가져옴
    - 음수 인덱스 가능
        - 음수 인덱스는 배열 끝에서부터 요소를 센다.
```js
// arr는 바뀌지 않는다

const arr = [1,2,3,4,5];
arr.slice(3);       // [4,5] 
arr.slice(2,4);     // [3,4]
arr.slice(-2);       // [4,5]
arr.slice(1,-2);    // [2,3]
arr.slice(-2, -1);  // [4] 
```
### 8.2.4 임의의 위치에 요소 추가하거나 제거하기
- `splice`
    - 배열을 자유롭게 수정 가능
    - 매개변수의 의미
        - 첫 번째 : 수정을 시작할 인덱스
        - 두 번째 : 제거할 요소 숫자 ( 없을 때는 0 , 몇개를 제거할 건지)
        - 나머지 : 추가 요소
```js
const arr = [1,5,7];
arr.splice(1,0,2,3,4);  //[]. arr -> [1,2,3,4,5,7]
arr.splice(5,0,6); //[], arr-> [1,2,3,4,5,6,7]
arr.splice(1,2); // [2,3] arr-> [1,4,5,6,7]
arr.splice(2,1,'a', 'b') // [5] arr-> [1,4,'a', 'b', 6,7]
```
### 8.2.5 배열 안에 요소 교체하기
> `copyWithin`은 ES6에서 새로 도입한 새 메서드
- 배열을 복사해서 다른 위치에 붙여넣고, 기존의 요소를 덮어쓴다.
- 매개변수의 의미
    - 첫 번째 : 복사한 요소를 붙여넣을 위치
    - 두 번째 : 복사를 시작할 위치
    - 세 번째 : 복사를 끝낼 위치
- 음수는 배열 끝에서부터 센다.
```js
const arr = [1,2,3,4];
arr.copyWithin(1,2);    // [1,3,4,4]
arr.copyWithin(2,0,2);  // [1,3,1,3]
arr.copyWithin(0, -3, -1);  //[3,1,1,3]
```
### 8.2.6 특정 값으로 배열 채우기
> `fill` 은 ES6에서 도입한 새 메서드
> 정해진 값으로 배열을 채운다
- 크기를 지정해서 배열을 생성하는 `Array`생성자와 잘 어울림
- 배열의 일부만 채우기
    - 시작 인덱스, 끝 인덱스 지정
    - 음수 인덱스 사용가능

```js
const arr = new Array(5).fill(1);
arr.fill("a");      //["a","a","a","a","a"]
arr.fill("b", 1);   // ["a","b","b","b","b"]
arr.fill("c", 2,4); // ["a","b","c","c","b"]
arr.fill(5.5, -4);  // ["a", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); //["a", 5.5, 0, 0, 5.5]
```

### 8.2.7 배열 정렬과 역순 정렬
> `reverse` : 배열 요소의 순서를 반대로 바꿈
```js
const arr = [1,2,3,4,5];
arr.reverse();      //[5,4,3,2,1]
```
> `sort` : 배열의 요소 순서를 정리
```js
const arr = [5,4,4,2,1];
arr.sort(); //[1,2,3,4,5]
```
- `sort`는 *정렬함수*를 받을 수 있음.
    - 일반적으로 객체가 들어있는 배열은 정렬할 수 없지만, *정렬함수* 사용하면 가능
```js
const arr = [{name : "Suzanne"}, {name : "Jin"}, {name : "Trenor"},{name:"Amanda"}];

arr.sort(); //arr 바뀌지 않음, 객체라서
arr.sort((a,b)=> a.name>b.name); //arr는 name 프로퍼티의 알파벳 순으로 정렬됩니다.
arr.sort((a,b)=> a.name[1]< b.name[1]);
```
## 8.3 배열 검색
1. `indexOf`
    - **명확히 일치 (===)** 하는 첫번째 요소의 인덱스 반환
    - `lastIndexOf` : 배열의 끝부터 찾음
    - 일치 하는 것을 찾지 못하면 -1 반환
    - 시작 인덱스 지정 가능
```js
const o = {name : "Jerry"};
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
arr.indexOf(5);         // 1
arr.lastIndexOf(5);     // 5
arr.indexOf("a");       // 2
arr.lastIndexOf("a");   // 2
arr.indexOf({name:"Jerry"}); //-1 찾지 못한 것
arr.indexOf(o);         // 3
arr.indexOf([1,2]);     // -1 주의! 이걸 왜 못찾지?
arr.indexOf("9");       // 7
arr.indexOf(9);         // -1

arr.indexOf("a", 5);    // -1 뒷자리 시작 인덱스, 거기부터 0이 된다.
arr.indexOf(5, 5);      // -1
arr.lastIndexOf(5, 4);  // 1
arr.lasIndexOf(true, 3); // -1
```
2. `findIndex`
    - 일치하는 인자가 없을 때 -1를 반환 ( `indexOf`와 비슷)
    - 보조함수를 써서 검색 조건 지정 가능
        - 더 다양한 상황에서 활용가능
    - 검색을 시작할 인덱스 설정 불가능
    - 뒤에서 찾는 `findLastIndex` 같은 짝도 없다
```js
const arr = [{id : 5, name : "Judith"}, {id : 7, name : "Francis"}];
arr.findIndex(o => o.id === 5);     //0
arr.findIndex(o => o.name === "Francis");   //1
arr.findIndex(o => o === 3); // -1
arr.findIndex(o => o.id === 17)     //-1
```
3. `find` : 요소의 인덱스가 아닌 요소 자체를 원할 때 사용
    - 검색 조건을 함수로 전달할 수 있음
    - 조건에 맞는 요소가 없을 때는 undefined 반환
```js
const arr = [{id:5, name="Judith"},{id:7, name:"Frandis"}];
arr.find(o => o.id === 5);  //객체{id:7, name :"Francis"} 객체로 넘어옴 주의
arr.find(o => o.id === 2);  // undefined
```
- `find`와 `findIndex`에 전달하는 함수의 매개변수
    - 첫 번째 매개변수 : 배열의 각 요소
    - 현재 요소 인덱스와 배열 자체도 받음

```js
// 특정 인덱스보다 뒤에 있는 제곱수 찾기
const arr = [1,17, 16, 5, 4, 16, 10, 3, 49]
arr.find((x,i)=> i > 2 && Number.inInteger(Math.sqrt(x)));  //4
// 인덱스 2 다음에 있는 제곱수 반환
```
```js
// find, findIndex에 전달하는 함수의 this도 수정할 수 있다.
// ID를 조건으로 Person 객체를 검색하는 예제
class Person{
    constructor(name){
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");
const arr = [jamie, juliet, peter, jay];

//옵션 1: ID직접 비교
arr.find( p => p.id === juliet.id); //juliet객체


//옵션 2: "this" 매개변수 이용
arr.find(function (p){
    return p.id === this.id
}, juliet);         // juliet 객체

```                        
<hr>

- 조건을 만족하는 요소가 있는지 없는지만 확인   
    - `some`, `every`

1. `some`
    - 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true 반환
    - 찾지 못하면 false
```js
const arr = [5,7,12,15,17];
arr.some(x => x%2 ===0 );       //true
arr.some(x => Number.isInteger(Math.sqrt(x))); // false
```
2. `every`
    - 배열의 모든 요소가 조건에 맞아야 true 반환
    - 그렇지 않으면 false
```js
const arr = [4,6,16,36];
arr.every(x => x%2===0);    // true
arr.every(x => Number.inInteger(Math.sqrt(x))); // false
```
> const와 every역시 콜백 함수를 호출할 때 this로 사용할 값을 두번 째 매개변수로 받을 수 있다.

## 8.4 map와 filter

> map과 filter는 배열 메서드 중에서 가장 유용한 메서드
> 사본을 반환하여 원래 배열은 바뀌지 않는다

1. `map`
    - 배열 요소 변형
```js
const cart = [{name:"Widget", price:9.95},{name:"Gadget", price:22.95}];
const names = cart.map(x => x.name);    //["Widget", "Gadget"]
const prices = cart.map(x => x.price);  //[9.95, 22.95]
const discountPrices = prices.map(x=> x*0.8);   //[7.96, 18.36]

```
[(참고) 이때 콜백함수에 대한 이야기 나오길래 콜백함수 정의](https://yubylab.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

```js
// 상품과 가격을 결합
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x,i)=>({name:x, price:price[i]}));
```
2. `filter`
    - 배열에서 필요한 것들만 남긴다
    - 사본 반환
    - 어떤 요소를 남길지 판단하는 함수 넘김
```js
// 카드 덱을 만든다
const cards=[];
for(let suit of ['H','C','D','S'])
    for(let value=1; value<=13;value++)
        cards.push({suit, value});

//value가 2인 카드
cards.filter(c => c.value ===2 );
//[
//  { suit:'H', value:2},
//  { suit:'C', value:2},
//  { suit:'D', value:2},
//  { suit:'S', value:2}
//]

// 다이아몬드
cards.filter( c=> c.suit ==='D');   //length:13

// 킹, 퀸, 주니어
cards.filter( c=> c.value > 10);    //length:12

//하트의 킹, 퀸, 주니어
cards.filter( c=> c.value > 10 && c.suit === 'H');  //length: 3

```
- `map`과 `filter` 결합하기
```js
function cardToString(c){
    const suits = {'H':'\u2665', 'C':'\u2663','D':'\u2666','S':'\u2660'}
    const values = {1:'A', 11:'J',12:'Q',13:'K'};
    //cardToString 을 호출 할 때마다 매번 값을 만드는 건 별로 효율적인 방법이 아니다.
    for(let i=2; i <=10; i ++) values[i]=i;
    return values[c.value] + suits[c.suit];
}

//value가 2인 카드
cards.filter( c => c.value===2)
    .map(cardToString);         
// 하트의 킹, 퀸, 주니어
cards.filter( c=> c.value > 10 && c.suit === 'H')
    .map(cardToString);
```

## 8.5 배열의 마법 reduce
> `reduce` 는 *배열 자체 변경*
> 보통 배열을 값 하나로 줄이기 위해 사용( ex. 배열에 있는 숫자를 더하거나 평균을 구함)
- 반환하는 값 하나는 객체 or 다른 배열
- 콜백 함수 받음
    - 매개 변수
        - 첫 번째 : **줄어드는 대상인 어큐뮬레이터**
        - 두 번째 ~ : 현재 배열 요소, 현재 인덱스, 배열 자체 
        - 초기 값도 옵션으로 받기 가능
```js
const arr = [5, 7, 2, 4 ];
const sum = arr.reduce((a, x) => a += x, 0);
//18
//a = 누적값
// x = 현재 배열 

const sum2 = arr.reduce((a,x) => a + x, 0);
//18
```
- 누적 값이 `undefined`로 시작한다면?
    - **초기값은 첫 번째 배열의 수**
    - 두번 째 수인 7부터 함수가 호출됨
    - 배열의 첫 번째 요소가 그대로 초기값이 될 수 있을 때는 초깃값을 생략해도 됨
```js
const arr = [5, 7, 2, 4]
const sum = arr.reduce((a, x) => a += x);
//18
```
- 누적 값은 숫자, 문자열, 객체 모두 가능
```js
const words = ["Baaechball", "Rodeo", "Angel", "Aardvark", "Xylophone","November","Chocolate","Papaya","Uniform","Joker","Clover","Bali"];
const alphabatical = words.reduce((a,x) => {
    if(!a[x[0]]) a[x[0]] = [];  // 원래 없다면 빈배열에
    a[x[0]].push(x);    // 값을 넣음
    return a;   
}, {});     // a 의 초기값 {}

//alphabatical
//{B: Array(2), R: Array(1), A: Array(2), X: Array(1), N: Array(1), …}
//A: (2) ["Angel", "Aardvark"]
//B: (2) ["Baaechball", "Bali"]
//C: (2) ["Chocolate", "Clover"]
//J: ["Joker"]
//N: ["November"]
//P: ["Papaya"]
//R: ["Rodeo"]
//U: ["Uniform"]
//X: ["Xylophone"]
```
```js
// 6글자 이상 단어들 모으기
const words = ["Baaechball", "Rodeo", "Angel", "Aardvark", "Xylophone","November","Chocolate","Papaya","Uniform","Joker","Clover","Bali"];
const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();

// longWords : "Baaechball Aardvark Xylophone November Chocolate Uniform"
```
## 8.6 삭제되거나 정의되지 않은 요소들
- `map`, `filter`, `reduce`는 *삭제되거나 정의되지 않은 요소들*에서 콜백 함수를 호출하지 않는다.
```js
// 정의되지 않은 요소
const arr = Array(10).map(function(x){return 5});
// arr = [empty x 10]

// 대신 정의된 요소를 넣어주면 원하는 값으로 초기화 가능
const arr1 = [1,1,1,1,1]
const arr2 = arr1.map(function(x){return 5});

// arr2 = [5,5,5,5,5]
```
- 중간 요소를 삭제해도 비슷하게 동작
```js
const arr  = [1,2,3,4,5];
delete arr[2];
arr.map(x = > 0);       //[0, 0, undefined, 0 ,0 ]
```

## 8.7 문자열 병합
- `Array.prototype.join`
    - 매개변수 : 구분자 하나 ( 기본 : 쉼표 )
    - 반환 : 요소들을 하나로 합친 문자열
    - 정의되지 않은 요소, 삭제된 요소, null, undefined는 모두 빈문자열 취급
```js
const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join(); //"1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- ') // "1 -- -- hello -- -- true --"
```
- 문자열 병합과 `Array.prototype.join`을 함께 써서 HTML <ul> 리스트 만들기
```js
const attributes = ["Nimble", "perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</ul><li>'+'</li></ul>');
// html : "<ul><li>Nimble</ul><li></li></ul>perceptive</ul><li></li></ul>Generous"
```

# Q

- 왜 210p 정렬 예제 정렬이 안 되지
    - 크롬에서만 안 됐었다.
    - 어떻게 돌아가는지도 잘 모르겠다.
- 213p 첫번 째 예제에서 마지막 줄에 두번째 매개변수는 this로 받은 건가..?


# 추가
## 쉽게 찾아보기
1. `push`
    - 배열 끝 넣기, 배열 자체 수정
2. `pop`
    - 배열 끝 내보내기, 배열 자체 수정
3. `unshift`
    - 처음에서 하나를 추가, 배열 자체 수정
4. `shift`
    - 맨 처음 하나를 삭제, 배열 자체 수정
5. `concat`
    - 넣고 싶은 만큼 넣을 수 있음 
    - 사본만 반환
    - `arr.concat(3,4,5)`
    - 배열을 넣을 경우 분해해서 사용 ( 한 번만 분해한다. )
6. `slice`
    - 배열의 일부를 가져온다 
    - `arr.slice(1,3)`
        - 인덱스 1 에서 2까지 가져온다
7. `splice`
    - 임의의 위치의 요소를 추가하거나 제거하는 요소
    - `splice(1,2,4,5,6)`
        - 처음 : 추가 인덱스 자리
        - 두번 째 : 제거 숫자
        - 나머지 : 추가될 배열 요소들
8. `copyWithin`
    - 매개변수
        - 첫 번째 : 어디에다가 넣을 건지
        - 두 번째 : copy할 첫자리
        - 세 번째 : copy할 마지막 자리 + 1
9. `fill`
    - 특정 값으로 채운다
    - 매개변수 
        - 1 : 채우고자 하는 값
        - 2 : 시작되는 값
        - 3 : 끝나는 값
10. `sort`
    - 배열 순서대로 정렬
    - 다양한 형태가 섞여있으면 숫자> 문자> 불리언 ( 배열은 자기 첫 자리만 기준)
11. `reverse`
    - 반대로 정렬
    - 다양한 형태가 섞여있으면 숫자> 문자> 불리언 ( 배열은 자기 첫 자리만 기준)
12. `indexOf`
    - `===` 찾는 것
    - 첫번 째 인덱스 요소 반환
    - 매개변수로 시작 위치 정할 수 있음
13. `lastIndexOf`
    - 마지막 요소부터 반환
14. `findIndex`
    - 찾고자 하는 것과 일치하는 인덱스를 찾을 수 있다
    - 보조 함수를 써서 검색 조건을 지정할 수 있다.
15. `find`
    - 인덱스가 아니라 요소 자체를 얻을 때 사용
16. `this`
    - 213p
17. `some`
    - 원하는 값이 있는가
18. `every`
    - 원하는 값이 전부 채워져 있는가
19. `map`
    - 배열 요소를 변형한다.
    - 원본은 변하지 않음
20. `filter`
    - 원하는 값을 뽑아낼 때 사용
21. `reduce`
    - 매개변수 4개임
    - 누적값을 이용
22. `delete` 
    - 삭제
    - 삭제 후 자리 변화 없음, undefined로 할당되거나 empty로 나옴
    