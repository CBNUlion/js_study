# chapter9 객체와 객체 지향 프로그래밍

- 배열과 자바스크립트 객체의 차이
    - 배열
        - **값**을 가지며 각 값에는 **숫자형 인덱스**가 있다.
        - 순서 있음
    - 자바스크립트
        - **프로퍼티**를 가지며 각 프로퍼티에는 **문자열이나 심볼 인덱스**가 있다.
        - 순서 없음

## 9.1 프로퍼티 나열

- 순서가 보장되지 않는다.
- 객체 프로퍼티에는 순서가 없다.

### 9.1.1 for...in
```js
const SYM = Symbol();

const o = { a:1 , b:2, c:3, [SYM]:4 };

for(let prop in o ){
    if ( !o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

// a: 1
// b: 2
// c: 3
// undefined
```
- for ...in 루프에는 키가 심볼인 프로퍼티는 포함하지 않음
## 9.1.2 Object.keys

> 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환
- 객체의 프로퍼티 키를 배열로 가져와야 할 때 사용

```js
const SYM = Symbol();

const o = { a:1, b:2, c:3, [SYM]:4 };

Object.keys(o).forEach(prop => console.log(`${prop}: ${o.[prop]}`));
// a: 1
// b: 2
// c: 3
// undefined

Object.keys(o);
// ["a", "b", "c"] 인덱스 0부터 a 가 들어가기 시작한다.

```
```js
//객체에서 x로 시작하는 프로퍼티를 모두 가져오기
const o = {apple :1, xochitl:2, ballon:3, guitar:4, xylophone:5,};

Object.keys(o)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${o[prop]}`));

// xochitl: 2
// xylophone: 5
```
## 9.2 객체 지향 프로그래밍  ( OOP )
> 객체 : 데이터와 기능을 논리적으로 묶어 놓은 것

- 기본 용어
    - 클래스 : 범용적이고 추상적
    - 인스턴스 : 구체적이고 한정적
    - 메서드 : 기능
    - 클래스 메서드 : 클래스에 속하지만 특정 인스턴스에 묶이지 않는 기능
    - 생성자 : 인스턴스를 처음 만들 때 실행, 객체 인스턴스 초기화
    - 슈퍼 클래스 : 부모와 같은 역할
    - 서브 클래스 : 자식 클래스와 같은 역할

### 9.2.1 클래스와 인스턴스 생성
```js
// 새 클레스 Car
class Car{
    constructor(){

    }
}

// 인스턴스 car만들기
const car1 = new Car();
const car2 = new Car();

// 객체가 클래스의 인스턴스인지 확인
car1 instanceof Car // true
car1 instanceof Array // false

```
```js
class Car{
    constructor(make, model){   
        this.make = make;   
        this.model = model;     
        this.userGears = ['P','N','R','D'];     // 사용할 수 있는 기어 목록
        this.userGear = this.userGears[0];      // 현재 기어이며  사용할 수 있는 첫 번째 기어로 초기화
    }
    shift(gear){                                // 기어 변속 메서드
        if(this.userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear:${gear}`);
        this.userGear = gear;
    }
}
```
```js
const car1 = new Car("Tesla","Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('D');    // 기어 바꾸기
car2.shift('R');    // 기어 바꾸기
```
```js
car1.userGear // "D"
car2.userGear // "R"
```
- 이렇게 직접 기어를 변경하게 되면 바로 접근이 가능하기 때문에 보호 되지 못함
```js
// 어느 정도 막을 수 있는 코드
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];     // 변수 앞에 언더바가 붙음
        this._userGear = this._userGears[0];        // 언더바가 붙음
    }
    get userGear() { return this._userGear;}        // get 추가
    set userGear()  {                               // set 추가
        if(this._userGears.indexOf(value)<0)
            throw new Error(`invalid gear: ${value}`);
        this._userGear = value;
    }
    shift(gear) { this.userGear = gear;}
}
```
- *가짜 접근 제한*을 사용
- 여전히 수정은 가능
    - 대신, 접근하려는 사람이 잘못 접근을 하고 있다는 인지를 줄 수 있다.

<hr>

- 프로퍼티를 꼭 보호해야 할 때 스코프를 이용해 보호하는 WeakMap 인스턴스를 사용

```js
const Car = (finction (){       // 즉시 실행 함수를 써서 WeakMap을 클로저로 감싼다. 바깥에서 접근 불가

    const carProps = new WeakMap();     // 바깥에서 접근하면 안 되는 프로퍼티를 안전하게 저장한다.

    class Car {
        constructor(make, model){
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, {userGear:this._userGear[0] });
        }
    get userGear(){return carProps.get(this).userGear;}
    set userGear(value){
        if(this._usergears.indexOf(value) < 0)
            throw new Error(`Invalid gear: ${value}`);
        carProps.get(this).userGear = Value;
    }
    shift(gear) { this.userGear = gear;}
    }
    return Car;
})();
```
### 9.2.2 클래스는 함수다
- ES5와 비교해서 function으로 class를 만들 수 있다.
### 9.2.3 프로토타입
> 프로토타입 : 클래스의 인스턴스에서 사용할 수 있는 메서드

- 표기
    - ex. `Car.prototype.shift`
    - ex. `Car#shift`

- 객체 인스턴스는 생성자의 prototype 프로퍼티를 `__proto__`프로퍼티에 저장
- 프로토타입에서 중요한 건 **동적디스패치** 라는 매커니즘
    - 디스패치 : 메서드 호출과 같은 의미
- 자바스크립트는 먼저 인스턴스를 체크하고, 거기에 없으면 프로토타입을 체크한다.

```js
// Car 클래스는 이전에 만든, shift 메서드가 있는 클래스이다
// 자바스크립트의 동적 디스패치를 어떻게 구현했는지 잘 보여준다

const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift; // true
car1.shift('D');
car1.shift('d');    //error
car1.userGear;      // "D"
car1.shift === car2.shift       //true

car1.shift = function (gear){return userGear = gear.toUpperCase();}
car1.shift === Car.prototype.shift; // false 주의
car1.shift === car2.shift;          /// false
car1.shift('d');
car1.userGear;      // 'D'
```
### 9.2.4 정적 메서드
> 인스턴스 메서드가 아닌 **정적 메서드(클래스 메서드)** 존재

- 특정 인스턴스에 적용되지 않음
- 정적메서드에서는 this가 인스턴스가 아니라 클래스 자체에 묶인다.
    - but. 정적 메서드는 this대신 클래스 이름을 쓰는 것이 좋다.
- 클래스에는 관련있지만 인스턴스에는 관련 x

<hr>

- 예시의 조건 
    1. 제조사와 모델이 모두 같으면 true를 반환 : areSimilar
    2. 두 자동차의 VIN이 같으면 true를 반환 : areSame

```js
class Car{
    static getNextVin(){
        return Car.nextVin++;
    }

    constructor(make, model){
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    
    static areSimilar(car1, car2){
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1, car2){
        return car1.vin ===car2.vin;
    }
}
Car.nexVin = 0;

const car1 = new Car("Tesla","S");
const car2 = new Car("Mazda","3");
const car3 = new Car("Mazda", "3");

car1.vin;   //0
car2.vin;   //1
car3.vin;   //2

Car.areSimilar(car1, car2); // false
Car.areSimilar(car2, car3); // true
Car.areSame(car2, car3) // flase
Car.areSame(car2, car2) // true

```
### 9.2.5 상속

- 클래스의 인스턴스는 클래스의 기능을 모두 상속한다.

```js
class Vehicle{
    constructor(){
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassener(p){
        this.passengers.push(p);
    }
}

class Car extends Vehicle{
    constructor(){
        super();
        console.log("Car created");
    }
    deployAirbag(){
        console.log("BWOOSH!");
    }
}
```
- `extends` : 서브 클래스로 만들어주는 키워드
- `super()` : 슈퍼 클래스의 생성자를 호출하는 특별한 함수
    - 서브 클래스에서는 이 함수를 반드시 호출해야 한다.
        - 아니면 에러

```js
const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
v.passengers;           // ["Frank", "Judy"]
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
c.passengers;           // ["Alice", "Cameron"]
v.deployAirbags();      // error
c.deployAirbags();      // "BWOOSH!"
```

### 9.2.6 다형성

> 객체지향 언어에서 여러 슈퍼클래스의 멤버인 인스턴스를 가리키는 말

- 객체가 클래스의 인스턴스인지 확인하는 연산자 : `instanceof` 연산자

```js
// 객체가 클래스의 인스턴스인지 확인하는 예제 

class Motorcycle extends Vehicle{}
const c = new Car();
const m = new Motorycycle();
c instanceof Car;       // true
c instanceof vehicle;   // true
m instanceof Car;       //false
m instanceof Motorycycle; // true
m instanceof Vehucle;       // true
```
### 9.2.7 객체 프로퍼티 나열 다시보기

- `hasOwnProperty`
    - ex. `obj.hasOwnProperty(x)`
        - x가 obj 프로퍼티에 있다면 true, 아니면 false

```js
class Super {
    constructor(){
        this.name = 'Super';
        this.isSuper = true;
    }
}

// 유효하지만 권장하지는 않음

Super.prototype.sneaky = 'nor recommended!';

class Sub extends Super {
    constructor(){
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for(let p in obj){
    console.log(`${p} : ${obj[p]}`+
        (obj.hasOwnProperty(p) ? '' : '(inherited)'));
}


// name : Sub
// isSuper : true
// isSub : true
// sneaky : not recommended! (inherited)

// 마지막 sneaky는 원래 super에 있던 애가 아니라 새로 넣어준 애라서 
// sub까지 안 넘어갔다.

```

### 9.2.8 문자열 표현

- `toString` 객체의 기본적인 문자열 표현을 제공

```js
// 위에서 toString 메서드가 제조사, 모델, VIN을 반환하도록 고친다.

class Car {
    toString(){
        return `${this.make} ${this.model} : ${this.vin} `;
    }
}
//...
```

## 9.3 다중 상속, 믹스인, 인터페이스

- 다중 상속
    - 클래스가 슈퍼클래스 두 개를 가지는 것
    - 충돌의 위험이 있다.
- 인터페이스
    - 다중 상속이라는 개념이 없는 곳에서 다중 상속이 필요한 상황을 대처
    - `Car`클래스의 슈퍼클래스는 `Vehicle` 하나뿐이지만, `Insurable`,`Container` 등 여러 인터페이스를 가질 수 있다.

> 자바스크립트는 단일 상속 언어지만, 어떤 면에서는 다중상속이나 인터페이스보다 더 나은 방법을 제공한다.

- 믹스인
    - 다중 상속이 필요한 문제에 대한 해답
    - 기능을 필요한 만큼 섞어 놓은 것

```js
// 자동차에 적용할 수 있는 보험가입 믹스인을 만든다.

class InsurancePolicy{}                        
function makeInsurable(o){                      // 보험 가입 믹스인
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.isInsured = function(){ return !!this.insurancePolicy; }
}

```
```js
// 보험에 가입해보기

makeInsurable(Car);         // 이렇게 하면 안 된다.


const car1 = new Car();
car1.addInsutancePolicy(new InsurancePolicy());         // error 이렇게 하면 에러난다.



const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());     //works
// 작동은 하지만 이렇게 하면 모든 자동자에서 makeInsurable을 호출해줘야 한다.



maekInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());         //works
// 이제 보험 관련 메서드들이 모두 Car클래스에 정의된 것처럼 동작한다.
```
- 정리하자면, 하나의 function에 객체를 받아 추가할 기능들을 넣고, <br>
함수에 클레스 자체를 넘겨주면서, 클래스 자체에 기능을 추가해준다.
- 주의 : 원래 있던 메서드를 건들여 줄 경우 충돌이 일어나게 된다.

<hr>

- 심볼 이용하기
    - 충돌할까봐 걱정된다면 키를 모두 심볼로 바꾼다.

```js
class InsurancePolicy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o){
    o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
    o[GET_POLICY] = function() {return this[_POLICY]; }
    o[IS_INSURED] = function() {return !!this[_POLICY]; }

```

- 심볼은 항상 고유
    - 따라서 믹스인이 Car클래스의 기능과 충돌할 가능성은 없다.
    - 쓰기가 번거로우나, 안전하다.

# Q 
- 229p 아래 예제 다음 장으로 넘어가는 예제 이해 안 됨


