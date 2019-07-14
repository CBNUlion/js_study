
# ch8. 배열과 배열처리

## 8.1 배열의 기초
> 순서가 있는 데이터 집합, 0으로 시작하는 숫자형 인덱스 사용
> 한 배열의 요소가 모두 같은 타입일 필요는 없다, 다른 배열이나 객체도 포함
> 배열 리터럴은 대괄호로, 접근도 []
> length 프로퍼티: 요소가 몇개 있는지
> 배열 길이보다 큰 인덱스를 사용해서 요소 할당시 배열은 자동으로 늘어나고, 빈 자리는 undefined로
> Array 생성자를 써서 배열을 만들수 도 있다
```javascript
const  arr1=[1,2,3];
const  arr2=["one",2,"three"];
const  arr3=[[1,2,3],["one",2,"three"]];
const  arr4=[
	{name:"fred",type:"object",lucknumbers:[5,17,3]},
	[
		{name:"susan",type:"object"},
		{name:"anthony",type:"object"},
	],
	1,
	function(){return  "arrays can contain functions too";},
	"three",
];
arr1[0];
arr1[2];
arr3[1];
arr4[1][0];
arr1.length;
arr4.length;
arr4[1].length;
arr1[4]=5;
arr1; //빈 공간에 undefined 채워짐
arr1.length;
arr2[10]; //접근만으로는 늘어나지 않음
arr2.length;
const  arr5=new  Array();
const  arr6=new  Array(1,2,3);
const  arr7=new  Array(2); //길이가 2인 배열, 요소 모두 undefined
const  arr8=new  Array("2");
```
## 8.2 배열 요소 조작
배열 메소드 중 일부는 배열 '자체'를 수정하고 
다른 일부는 새 배열을 반환한다.
EX) push-->배열 자체를 수정 // concat-->새 배열을 반환

#### 8.2.1 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기
push:배열의 **끝에** 요소를 추가하거나 제거(수정)
shift,unshift:배열의 **처음에** 요소를 제거하거나 추가
```javascript
const arr=["b","c","d"];
arr.push("e");
arr.pop();
arr.unshift("a");
arr.shitf();
```
#### 8.2.2 배열의 끝에 여러 요소 추가하기
```javascript
//concat 은 사본을 반환한다.
const arr=[1,2,3];
arr.concat(4,5,6);
arr.concat([4,5,6]);
arr.concat([4,5],6); //앞에 있으면 하나의 배열요소로 들어가는데
arr.concat([4,[5,6]]); //이렇게 있으면 [1,2,3,4,[5,6]]으로 된다
```

#### 8.2.3 배열 일부 가져오기
배열의 일부만 가져올 때는 slice메서드를 사용한다
slice(어디서부터 가져올지,어디까지 가져올지[바로앞])
두번째 매개변수를 생략 시 배열의 마지막까지 반환한다.
음수 인덱스를 사용시 배열의 끝에서부터 요소를 센다.
```javascript
 //arr는 변하지 않는다.
const  arr=[1,2,3,4,5];
arr.slice(3); //[4,5]
arr.slice(2,4); //[3]
arr.slice(-2); //[4,5]
arr.slice(1,-2); //[2,3]
arr.slice(-2,-1); //[[4]
```

#### 8.2.4 임의의 위치에 요소 추가하거나 제거하기
splice는 배열을 자유롭게 수정할 수 있다.
splice(수정을 시작할 인덱스, 제거할 요소 길이)
splice(해당 인덱스부터, 삭제할 개수)
아무 요소도 제거하지 않을 때는 0을 넘기고, 나머지 매개변수는 배열에 추가될 요소
```javascript
const  arr=[1,5,7]; 
arr.splice(1,0,2,3,4); //[1,2,3,4,5,7]
arr.splice(5,0,6); //[1,2,3,4,5,6,7]
arr.splice(1,2); //[1,4,5,6,7]
arr.splice(2,1,'a','b'); //[1,4,'a','b',6,7]
```

#### 8.2.5 배열 안에서 요소 교체하기
copyWithin : ES6에서 도입한 새 메서드
배열 요소를 복사해서 다른 위치에 붙여넣고, 기존의 요소를 덮어 쓴다.
```javascript
const arr=[1,2,3,4];
arr.copyWithin(1,2); //arr=[1,3,4,4]
arr.copyWithin(2,0,2); //arr=[1,3,1,3]
arr.copyWithin(0,-3,-1); //arr=[3,1,1,3]
```

#### 8.2.6 특정 값으로 배열 채우기
fill 메서드 : 정해진 값으로 배열을 채운다.
크기를 지정해서 배열을 생성하는 Array 생성자와 잘 어울림
배열을 일부만 채우려 할 때-->시작, 끝 인덱스 지정
```javascript
const  arr=new  Array(5).fill(1);
arr.fill("a"); //[a,a,a,a,a]
arr.fill("b",1); //[a,b,b,b,b]
arr.fill("c",2,4); //[a,b,c,c,b]
arr.fill(5.5,-4); //[a,5.5,5.5,5.5,5.5]
arr.fill(0,-3,-1); //[a,5.5,0,0,5.5]
```
#### 8.2.7 배열 정렬과 역순 정렬
reverse 메서드는 배열 요소의 순서를 반대로 바꾼다
```javascript
const arr=[1,2,3,4,5];
arr.reverse() //[5,4,3,2,1]
```
sort 메서드는 배열 요소의 순서를 정렬한다
```javascript
const arr=[5,3,2,4,1];
arr.sort(); //[1,2,3,4,5]
```
sort는 정렬 함수를 받을 수 있다.
일반적으로 객체가 들어있는 배열은 정렬할 수 없지만, 정렬 함수를 사용시 가능하다
```javascript
const  arr=[{name:"suzy"},{name:"jin"},{name:"tre"},{name:"amd"}];
arr.sort(); //arr는 변하지 않는다.
arr.sort((a,b)=>a.name>b.name); //name의 프로퍼티를 알파벳 순으로 정렬된다
arr.sort((a,b)=>a.name[1]<b.name[1]); //name의 프로터피의 두번째 글자의 알파벳 역순으로 정렬된다.
```

## 8.3 배열검색
배열에서 요소를 찾으려고 할 때 사용하는 메소드
indexOf: 찾고자 하는 것과 정확히 일치(===)하는 첫 번째 요소의 인덱스를 반환한다.
inDexOf의 짝인 lastIndexOf
lastIndexOf: 배열의 끝에서부터 검색한다.
특정 문자열이 마지막에 나타나는 위치를 반환하는 메서드
배열의 일부분만 검색하려면 시작 인덱스를 지정할 수 있다.
indexOf와 lastIndexOf는 일치한 것 찾지 못하면 -1을 반환한다.
```javascript
const  o={name:"Jerry"};
const  arr=[1,5,"a",o,true,5,[1,2],"9"];
arr.indexOf(5);
arr.lastIndexOf(5);
arr.indexOf("a");
arr.lastIndexOf("a");
arr.indexOf({name:"Jerry"});
arr.indexOf(o);
arr.indexOf([1,2]);
arr.indexOf("9");
arr.indexOf(9);

arr.indexOf("a",5); //-1
arr.indexOf(5,5); //5
arr.lastIndexOf(5,4); //1
arr.lastIndexOf(true,3); //-1
```

findIndex는 일치하는 것 찾지 못하면 -1을 반환한다
string.lastIndexOf(value,start0
value: 찾으려는 문자열을 넣음
start: 검색을 끝낼 인덱스
```javascript
const  arr=[{id:5, name:"Judith"},{id:7,name:"Francis"}]; 
arr.findIndex(o=>o.id===5); // 0
arr.findIndex(o=>o.name==="Francis"); // 1
arr.findIndex(o=>o===3); // -1
arr.findIndex(o=>o.id===17); //-1
```
indexOf와 findIndex는 조건에 맞는 요소의 인덱스를 찾을 때는 알맞은 메서드
요소 자체를 원할 때는 find메서드를 사용한다.
조건에 맞는 요소가 없으면 undefinde를 반환한다
```javascript
const  arr=[{id:5,name:"Judith"},{id:7,name:"Francis"}];
arr.find(o=>o.id===5);
arr.find(o=>o.id===2); //undefined
```
```javascript
const arr=[1,17,16,5,4,16,10,3,49];
arr.find((x,i)=>i>2 && Number.isInteger(Math.sqrt(x))); //4
```
```javascript
class  Person{
	constructor(name){
		this.name=name;
		this.id=Person.nextId++;
	}
}
Person.nextId=0;
const  jamie=new  Person("Jamie"),
juliet=new  Person("juliet"),
peter=new  Person("peter"),
jay=new  Person("jay");
const  arr=[jamie,juliet,peter,jay];
//옵션1:ID를 직접 비교하는 방법
arr.find(p=>p.id===juliet.id);
//옵션2:this 매개변수를 이용하는 방법
arr.find(function(p){
	return  p.id===this.id
},juliet);
```
some, every메서드
some: 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true값을 반환한다.
조건에 맞는 요소를 찾지 못하면 false를 반환한다.
```javascript
const arr=[5,7,12,15,17];
arr.some(x=>x%2===0); //true
arr.some(x=>Number.isInteger(Math.sqrt(x))); //false
```
## 8.4 map과 filter
map: 배열 요소를 변형한다.
map과 filter모두 사본을 반환하며 원래 배열은 바뀌지 않는다.
```javascript
const  cart=[{name:"Widget",price:9.95},{name:"Gadet",price:22.95}];
const  names=cart.map(x=>x.name);
const  prices=cart.map(x=>x.price);
const  discountPrices=prcies.map(x=>x*0.8);
```
```javascript
const  items=["Widget","Gadget"];
const  prices=[9.95,22.95];
const  cart=items.map((x,i)=>({name:x,price:prices[i]}));
//cart:[{name:"Widget",price:9.95},{name:"Gadget",price:22/95}]
```
map-->다른 배열에서 정보를 가져와서 문자열로 이루어진 배열을 객체 배열로 변형했음.

filter:배열에서 필요한 것들만 남길 목적으로 사용, 
새 배열에는 필요한 요소만 남음

```javascript
const  cars=[];
for(let  suit  of ['H','C','D','S']) //하트,클로버,다이아몬드,스페이드
	for(let  value=1;value<=13;value++)
	cards.push({suit,value});
	cards.filter(c=>c.value===2);
// [
//	{suit:'H',value:2},
// 	{suit:'C',value:2},
// 	{suit:'D',value:2},
// 	{suit:'S',value:2},
// ]
cards.filter(c=>c.suit==='D');
cards.filter(c=>c.value>10);
cards.filter(c=>c.value>10&&c.suit==='H');
```

```javascript
function  cardToString(c){
	const  suits={'H':'\u2665','C':'\u2663','D':'\u2666','S':'\u2660'};
	const  values={1:'A',11:'J',12:'Q',13:'K'};
	for(let  i=2;i>=10;i++)
		values[i]=i;
	return  values[c.value]+suits[c.suit];
}
cards.filter(c=>c.value===2)
	.map(cardToString);
cards.filter(c=>c.value>10&&c.suit==='H')
	.map(cardToString);
```

## 8.5 배열의 마법 reduce
map: 배열의 각 요소를 변형
reduce:배열 자체를 변형
reduce:배열을 값 하나로 줄이는데 쓰여서 붙음, 
reduce가 반환하는 값 하나는 객체일수도 있고, 다른 배열일 수도 있다.

reduce는 map이나 filter와 마찬가지로 콜백함수를 받음
BUT) 첫번째 매개변수는 항상 배열요소 <-->reduce가 받는 첫번째 매개변수는 배열이 줄어드는 대상인 '어큐물레이터'
두번째 매개변수부터는 현재 배열요소,현재 인덱스, 배열 자체이다.

```javascript
const arr=[5,7,2,4];
const sum=arr.reduce((a,x)=>a+=x,0);
```
1. 첫 번째 배열 요소 5에서 익명 함수를 호출한다. a의 초깃값은 0이고 x의 값은 5이다. 함수는 a와 x(5)의 합을 반환함. 이 값은 다음 단계에서 a의 값이 됨
2. 두 번째 배열 요소 7에서 함수를 호출함. a의 초깃값은 이전 단계에서 전달한 5이고, x의 값은 7이다. 함수는 a와 x의 합 12를 반환함. 이 갑은 다음 단계에서 a의 값이 됨
3. 세 번째 배열 요소 2에서 함수를 호출함. 이 단계에서 a는 12이고 x는 2이다. 함수는 a와 x의 합인 14를 반환함
4. 네 번째이자 마지막 배열 요소인 4에서 함수를 호출함. a는 14이고 x는 4이다. 함수는 a와 x의 합인 18을 반환하며 이 값은 reduce의 값이고 sum에 할당되는 값임

if) 처음에 값이 undefined로 시작된다면 ? 두번째 요소부터 함수를 호출한다.

2. 두 번째 배열 요소 7에서 함수를 호출함. a의 초깃값은 이전 단계에서 전달한 5이고, x의 값은 7이다. 함수는 a와 x의 합 12를 반환함. 이 갑은 다음 단계에서 a의 값이 됨
3. 세 번째 배열 요소 2에서 함수를 호출함. 이 단계에서 a는 12이고 x는 2이다. 함수는 a와 x의 합인 14를 반환함
4. 네 번째이자 마지막 배열 요소인 4에서 함수를 호출함. a는 14이고 x는 4이다. 함수는 a와 x의 합인 18을 반환하며 이 값은 reduce의 값이고 sum에 할당되는 값임

-->단계는 줄었지만 결과는 같음. 첫 번쨰 요소가 그대로 초깃값이 될 수 있을 때는 초깃값을 생략해도 된다.

reduce는 보통 숫자나 문자열 같은 원시 값을 누적값으로 사용하지만 객체 또한 누적값이 될 수 있다.
```javascript
const  words=["Beachball","Rodeo","Angel","Aardvark","Xylophone","November","Chocolate"];
const  alphabetical=words.reduce((a,x)=>{
	if(!a[x[0]]) a[x[0]]=[];
	a[x[0]].push(x);
	return  a;
},{});
```
reduece는 통계에서도 사용이 가능하다
```javascript
const  data=[3.3,5,7.2,12,4,6,10.3];
const  stats=data.reduce((a,x)=>{
	a.N++;
	let  delta=x-a.mean;
	a.mean+=delta/a.N;
	a.M2+=delta*(x-a.mean);
	return  a;
},{N:0,mean:0,M2:0});
if(stats.N>2){
	stats.variance=stats.M2/(stats.N-1);
	stats.stdev=Math.sqrt(stats.variance);
}
```
```javascript
//6글자가 넘는 단어를 모아서 문자열로 만드는 예제
const  words=["Beachball","Rodeo","Angel","Aardvark","Xylophone","November","Chocolate"];
const  longWords=words.reduce((a,w)=>w.length>6?a+" "+w:a,"").trim();```
```

reduce는 배열 메서드 중에서 가장 범용적인 메서드

## 8.6 삭제되거나 정의되지 않은 요소들
map과 filter,reduce는 삭제되거나 정의되지 않은 요소들에서 콜백 함수를 호출하지 않는다.
```javascript
const  arr=[1,2,3,4,5];
delete  arr[2];
arr.map(x=>0); //[0,0,undefined,0,0]
```

## 8.7 문자열 병합
배열의 문자열 요소들을 몇몇 구분자로 합치려 할 때가 많음.
Array.prototype.join은 매개변수로 구분자 하나를 받고 요소들을 하나로 합친 문자열을 반환한다.
매개변수의 디폴트 값은 쉼표
문자열 요소를 합칠 때 정의되지 않은 요소, 삭제된 요소, null, undefined는 모두 빈 문자열로 취급한다.
``` javascript
const  arr=[1,null,"hello","world",true,undefined];
delete  arr[3];
arr.join(); //"1,,hello,,true,"
arr.join(''); //"1hellotrue"
arr.join(' -- ');//"1 -- -- hello -- -- true --"
```
## 8.8 요약
push,pop: 스택을 만들때, 배열 수정
unshift,shift: 큐를 만들때, 배열 수정
concat: 여러 요소를 배열 마지막에 추가할때, 사본 반환
slice: 배열 일부가 필요할 때, 사본 반환
splice: 임의의 위치에 요소를 추가하거나 제거할 때, 배열 수정
copyWithin: 배열 안에서 요소를 교체할 때, 배열 수정
fill: 배열을 채울 때, 배열 수정
reverse: 배열을 반대로 정렬할 때, 배열 수정
sort: 배열을 정렬할 때, 배열 수정

indexOf,findIndex: 요소의 인덱스
lastIndexOf: 인덱스를 뒤에서부터 찾을 때
find: 요소 자체
some: 조건을 만족하는 요소가 들어있는지 확인할 때
every: 모든 요소가 그 조건을 만족하는지 확인할 때

map: 배열의 모든 요소를 변형할 때, 사본 반환
filter: 조건에 맞는 요소만 남길 때, 사본 반환
reduce: 배열 전체를 다른 데이터 타입으로 변형할 때, 사본 반환
join: 요소를 문자열로 바꿔서 하나로 합칠 때, 사본 반환