
# ch9. 객체와 객체지향 프로그래밍
```c
배열과 마찬가지로 자바스크립트 객체 역시 컨테이너
두가지 측면에서의 차이점
1. 배열은 숫자형 인덱스 O, 객체는 프로터피를 가지며 각 프로퍼티에는 문자열이나 심볼 인덱스가 있음
2. 배열에는 순서가 있지만 객체는 순서가 보장되지 않는다
```
## 9.1 프로퍼티 나열
프로퍼티 나열에서 중요한 것은 순서가 보장되지 않는 것
#### 9.1.1 for ... in
문자열 프로퍼티가 몇 개 있고 심볼 프로퍼티가 하나 있는 객체
```javascript
const  SYM=Symbol();
const  o={a:1,b:2,c:3,[SYM]:4};
for(let  prop  in  o){
	if(!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}:${o[prop]}`);
}
```
hasOwnProperty: 객체가 특정 프로터티에 대한 소유 여부를 반환한다.

#### 9.1.2 Object.keys
Object.keys는 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환한다.
```javascript
const SYM=Symbol();
const o={a:1,b:2,c:3,[SYM]:4};
Object.keys(o).forEach(prop=>console.log(`${prop}:${o[prop]}`));
```
객체의 프로퍼티 키를 배열로 가져와야 할 때는 Object.keys가 편리하다.
```javascript
const o={apple:1,xochitl:2,ballon:3,guitar:4,xylophone:5,};
Object.keys(o)
	.filter(prop=>prop.match(/^x/))
	.forEach(prop=>console.log(`${prop}:${o[prop]}`));
```

## 9.2 객체지향 프로그래밍
<용어정리>
> 클래스: 추상적이고 범용적인 것
> 인스턴스: 구체적이고 한정적인 것
> 메소드: 기능
> 클래스 메소드: 클래스에 속하지만 특정 인스턴스에 묶이지 않는 기능
> 생성자: 인스턴스를 처음 만들때 실행, 생성자는 객체 인스턴스를 초기화
> 
OOP: 클래스를 계층적으로 분류하는 수단을 제공
> 자동차보다 더 범용적인 운송 수단 클래스
> 운송 수단 클래스에는 자동차와 마찬가지로 충전 없이 이동할 수 있는 거리인 범위 프로퍼티가 있음
> BUT) 자동차와 달리 바퀴는 없을 수도 있음
> EX) 보트: 바퀴가 없는 운송수단
>운송수단: 자동차의 슈퍼 클래스
>자동차: 운송수단의 서브클래스
>운송 수단 클래스에는 자동차,보트 등 여러가지 서브 클래스가 있음
>서브클래스는 서브클래스를 또 가질 수 있음

#### 9.2.1 Object.keys

ES6에서는 클래스를 만드는 간편한 새 문법을 도입
```javascript
class Car{
	constuctor(){
	}
}
```
새 클래스 Car을 만듬
인스턴스를 만들 때는 new 키워드를 사용
```javascript
const  car1=new  Car();
const  car2=new  Car();
```
Car 클래스의 인스턴스가 두개 생김
 instanceof 연산자: 객체가 클래스의 인스턴스인지 확인함
 ```javascript
car1  instanceof  Car  //true
car1  instanceof  Array  //false
```
car1은 Car의 인스턴스, Array의 인스턴스는 아님
기능 추가
 ```javascript
class  Car{
	constructor(make,model){
		this.make=make;
		this.model=model;
		this.userGears=['P','N','R','D'];
		this.userGears=this.userGears[0];
	}
	shift(gear){
		if(this.userGears.indexOf(gear)<0)
			throw  new  Error(`Invalid gear:${gear}`);
			this.userGear=gear;
	}
}
```
this 키워드는 의도한 목적, 메서드를 호출한 인스턴스를 가리키는 목적으로 쓰임. 
this는 일종의 플레이스 홀더이다. 
클래스를 만들 때 사용한 this키워드는 나중에 만들 인스턴스의 플레이스 홀더임.
```javascript
const  car1=new  Car("Tesla","Model S");
const  car2=new  Car("Mazda","3i");
car1.shift('D');
car2.shift('R');

car1.userGear  //"D"
car2.userGear  //"R"
```
이렇게 하면 car1.userGear='X'라고 설정하는 것을 막을 수 있음
```javascript
class  Car{
	constructor(make,model){
		this.make=make;
		this.model=model;
		this._userGears=['P','N','R','D'];
		this._userGear=this._userGears[0];
	}
	get  userGear() {return  this._userGear;}
	set  userGear(value){
		if(this._userGears.indexOf(value)<0)
			throw  new  Error(`Invalid gear:${value}`);
		this._userGear=value;
	}
	shift(gear){this.userGear=gear; }
}
```
```javascript
// WeakMap을 클로저로 감싸고 바깥에서 접근할 수 없게 했음.
// WeakMap은 클래스 외부에서 접근하면 안 되는 프로퍼티를 안전하게 저장한다.
const  Car=(function(){
	const  carProps=new  WeakMap();
	class  Car{
		constructor(nake,model){
			this.make=make;
			this.model=model;
			this._userGears=['P','N','R','D'];
			carProps.set(this,{userGear:this._userGears[0]});
		}
	get  userGear(){return  carProps.get(this).userGear;}
	set  userGear(value){
		if(this._userGears.indexOf(value<0))
			throw  new  Error(`Invalid gear:${value}`);
			carProps.get(this).userGear=value;
			}
		}
})();
```
#### 9.2.2 클래스는 함수다
클래스 === 함수
```javascript
function  Car(make,model){
	this.make=make;
	this.model=model;
	this._userGears=['P','N','R','D'];
	this._userGear=this.userGear[0];
}
```
ES6에서도 똑같이 할 수 있음
```javascript
class  Es6Car{}
function  Es5Car{}
typeof  Es6Car  //function
typeof  Es5Car  //function
```
#### 9.2.3 프로토타입
프로토타입 메서드: 클래스의 인스턴스에서 사용할 수 있는 메서드
Car의 인스턴스에서 사용할 수 있는 shift 메서드 : Car.prototype.shift
Array의 forEach: Array.prototype.forEach
> Car.prototype.shift === Car#shift

함수의 prototype 프로퍼티가 중요해지는 시점은 new 키워드로 새 인스턴스를 만들 때
new 키워드로 만든 새 객체는 생성자의 prototype 프로퍼티에 접근할 수 있다
객체 인스턴스는 생성자의 prototype 프로퍼티를 __proto__ 프로퍼티에 저장할 수 있다.
> __proto__ 프로퍼티는 자바스크립트의 내부 동작 방식에 영향을 미친다.

동적 디스패치 메커니즘이 프로토타입에서 중요
디스패치 === 메서드 호출
객체의 프로퍼티나 메서드에 접근하려 할 때 이런 프로퍼티나 메서드가 미존재시, 자바스크립트는 객체의 프로토타입에서 해당 프로퍼티나 메서드를 찾는다.
클래스의 인스턴스는 모두 같은 프로토타입을 공유하므로--> 프로토타입에 프로퍼티나 메서드가 있다면 해당 클래스의 인스턴스는 모두 그 프로퍼티나 메서드에 접근할 수 있다.
> 클래스의 프로토타입에서 데이터 프로퍼티를 수정하는것은 not good
> 인스턴스에 초깃값이 필요하다면 생성자에서 만드는게 나음.

인스턴스에서 메서드나 프로퍼티를 정의하면 프로토타입에 있는 것을 가리는 효과가 있음.
js는 먼저 인스턴스를 체크하고-->프로토타입을 체크함.
```javascript
const  car1=new  Car();
const  car2=new  Car();
car1.shift===Car.prototype.shift; //true
car1.shift('D');
car1.shift('d'); //error
car1.userGear; //'D'
car1.shift===car2.shift  //true
car1.shift=function(gear){this.userGear=gear.toUpperCase();}
car1.shift===Car.prototype.shift; //false
car1.shift===car2.shift; //false
car1.shift('d');
car1.userGear; //D
```
car1 객체에는 shitf 메서드 없음
BUT) car1.shift('D')를 호출시 car1의 프로토타입에서 메서드를 검색
car1에 shift메서드를 추가시 car1과 프로토타입에 같은 이름의 메서드가 존재
이후 car1.shift('d')를 호출시 car1의 메서드가 호출되고 프로토타입의 메서드는 호출되지 않음
#### 9.2.4 정적 메서드

메서드: 인스턴스 메서드 , 정적 메서드
정적 메서드는 특정 인스턴스에 적용되지 않는다.
정적 메서드에서 this는 인스턴스가 아니라 클래스 자체에 묶인다.
BUT) 정적메서드에는 this 대신 클래스 이름을 사용하는 것이 좋은 습관이다.
> 정적 메서드는 클래스에 관련되지만 인스턴스완느 관련이 없는 범용적인 작업에 사용이 된다.
> 자동차 전체를 대상으로 하는 추상적인 개념이르모 정적 메서드로 사용하는게 어울린다,

> 정적 메서드는 여러 인스턴스를 대상으로 하는 작업에도 종종 쓰인다.
```javascript
class  Car{
	static  getNextVin(){
		return  Car.nextVin++; //this.nextVin도 가능하지만, Car을 앞에 쓰면 정적 메서드여서 상기하기 쉬움
	}
	constructor(make,model){
		this.make=make;
		this.model=model;
		this.vin=Car.getNextVin();
	}
	static  areSimilar(car1,car2){
		return  car1.make===car2.make&&car1.model===car2.model;
	}
	static  areSame(car1,car2){
		return  car1.vin===car2.vin;
	}
}
Car.nextVin=0;
const  car1=new  Car("Tesla","5");
const  car2=new  Car("Mazda","3");
const  car3=new  Car("Mazda","3");
car1.vin; //0
car2.vin; //1
car3.vin; //2

Car.areSimilar(car1,car2); //false
Car.areSimilar(car2,car3); //true
Car.areSame(car2,car3); //false
Car.areSame(car2,car2); //true
```
#### 9.2.5 상속
클래스의 인스턴스는 클래스의 기능을 모두 상속한다.
객체의 프로토타입에서 메서드를 찾지 못하면 자바스크립트는 프로토타입의 프로토타입을 검색한다.
조건에 맞는 프로토타입을 찾지 못하면 에러를 일으킨다.
```javascript
class  Vehicle{
	constructor(){
		this.passengers=[];
		console.log("Vehicle created");
	}
	addPassenger(p){
		this.passengers.push(p);
	}
}

class  Car  extends  Vehicle{
	constructor(){
		super();
		console.log("Car created");
	}
	deployAirbags(){
		console.log("BWOOSH!");
	}
}
```
extends 키워드는 Car을 Vehicle의 서브 클래스로 만든다.
super()는 슈퍼클래스의 생성자를 호출하는 특별한 함수이다. **서브클래스에서는 super()함수를 반드시 호출해야한다! 호출X-->에러**
```javascript
const  v=new  Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
v.passengers; //["Frank","Judy"]
const  c=new  Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
c.passengers; //["Alice","Cameron"]
v.deployAirbags(); //error
c.deployAirbags();
```
c에서는 deployAirbags를 호출할 수 있지만, v에서는 불가능하다.
상속은 단방향이다.
Car 클래스의 인스턴스는 Vehicle 클래스의 모든 메서드에 접근할 수 있지만, 반대는 불가능이다.
#### 9.2.6 다형성
다형성: 여러 슈퍼클래스의 멤버인 인스턴스를 가리키는 말
자바스크립트의 객체는 모두 다형성을 갖고있다고 할 수 있음.
자바스크랩트에는 객체가 클래스의 인스턴스인지 확인하는 instanceof 연산자가 있음. prototype과 __proto__ 프로퍼티에 손대지 않았다면 정확한 결과를 기대할 수 있다.
```javascript
class  Motorcycle  extends  Vehicle{}
const  c=new  Car();
const  m=new  Motorcycle();
c  instanceof  Car; //true
c  instanceof  Vehicle; //true
m  instanceof  Car; //false
m  instanceof  Motorcycle; //true
m  instanceof  Vehicle; //true
```
> js의 모든 객체는 Object의 인스턴스이다.
> o instanceof Object는 항상 true이다.

#### 9.2.7 객체 프로퍼티 나열 다시보기
프로퍼티를 프로토타입에 정의하지 못하도록 강제하는 장치가 없으므로 확실히 확인하려면 hasOwnProperty를 사용하는것을 추천
```javascript
class  Super{
	constructor(){
		this.name='Super';
		this.isSuper=true;
	}
}
//유효하지만, 권장 X
Super.prototype.sneaky='not recommended!';
class  Sub  extends  Super{
	constructor(){
		super();
		this.name='Sub';
		this.isSub=true;
	}
}

const  obj=new  Sub();
for(let  p  in  obj){
	console.log(`${p}:${obj[p]}`+
	(obj.hasOwnProperty(p)?'':'(inherited)'));
}

실행결과
name:Sub
isSuper:true
isSub:true
sneaky:not recommended!(inherited)
```

name,isSuper,isSub 프로퍼티는 모두 프로토타입 체인이 아니라 인스턴스에 정의가 되었다.
반면 sneaky 프로퍼티는 슈퍼클래스의 프로토타입에 직접 정의를 함.
Object.keys를 사용하면 프로토타입 체인에 정의된 프로퍼티를 나열하는 문제를 피할 수 있다.

#### 9.2.8 문자열 표현
모든 객체는 Object를 상속하므로 Object의 메서드는 기본적으로 모든 객체에서 사용가능하다. 
toString도 대표적 메소드
```javascript
class  Car{
	toString(){
		return  `${this.make}${this.model}:${this.vin}`;
	}
}
```
## 9.3 다중 상속, 믹스인, 인터페이스

다중상속: 클래스가 슈퍼클래스 두 개를 가지는 기능
슈퍼클래스의 슈퍼클래스가 존재하는 일반적인 상속과는 다름
다중 상속: 충돌의 위험이 있다.
> 믹스인; 기능을 필요한 만큼 섞어 놓은것
```javascript
class  InsurancePolicy{}
function  makeInsurable(o){
	o.addInsurancePolicy=function(p){this.InsurancePolicy=p;}
	o.getInsurancePolicy=function(){return  this.insurancePolicy;}
	o.isInsured=function(){return  !!this.insurancePolicy;}
}
```
```javascript
makeInsurable(Car.prototype);
const car1=new Car();
car1.addInsurancePolicy(new InsurancePolicy()); //works
```
다른 믹스드인 형태
```javascript
class  InsurancePolicy{}
const  ADD_POLICY=Symbol();
const  GET_POLUCY=Symbol();
const  IS_INSURED=Symbol();
const  _POLICY=Symbol();
function  makeInsurable(o){
	o[ADD_POLICY]=function(p) {this[_POLICY]=p;}
	o[GET_POLICY]=function(p) {return  this[_POLICY];}
	o[ADD_POLICY]=function(p) {return  !!this[_POLICY];}
}
```
