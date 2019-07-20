const SYM=Symbol();
const o={a:1,b:2,c:3,[SYM]:4};
for(let prop in o){
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}:${o[prop]}`);
}

class Car{
    constructor(){

    }
}
const car1=new Car();
const car2=new Car();

car1 instanceof Car //true
car1 instanceof Array //false

class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
        this.userGears=['P','N','R','D'];
        this.userGears=this.userGears[0];
    }
    shift(gear){
        if(this.userGears.indexOf(gear)<0)
            throw new Error(`Invalid gear:${gear}`);
        this.userGear=gear;
    }
}

const car1=new Car("Tesla","Model S");
const car2=new Car("Mazda","3i");
car1.shift('D');
car2.shift('R');

car1.userGear //"D"
car2.userGear //"R"

class Car{
    constructor(make,model){
        this.make=make;
        this.model=model;
        this._userGears=['P','N','R','D'];
        this._userGear=this._userGears[0];
    }

    get userGear() {return this._userGear;}
    set userGear(value){
        if(this._userGears.indexOf(value)<0)
            throw new Error(`Invalid gear:${value}`);
        this._userGear=value;
    }
    shift(gear){this.userGear=gear; }
}

const Car=(function(){
    const carProps=new WeakMap();
    class Car{
        constructor(nake,model){
            this.make=make;
            this.model=model;
            this._userGears=['P','N','R','D'];
            carProps.set(this,{userGear:this._userGears[0]});
        }
        get userGear(){return carProps.get(this).userGear;}
        set userGear(value){
            if(this._userGears.indexOf(value<0))
                throw new Error(`Invalid gear:${value}`);
            carProps.get(this).userGear=value;
        }
    }
})();

function Car(make,model){
    this.make=make;
    this.model=model;
    this._userGears=['P','N','R','D'];
    this._userGear=this.userGear[0];
}

class Es6Car{}
function Es5Car{};
typeof Es6Car //function
typeof Es5Car //function

const car1=new Car();
const car2=new Car();
car1.shift===Car.prototype.shift; //true
car1.shift('D');
car1.shift('d'); //error
car1.userGear; //'D'
car1.shift===car2.shift //true

car1.shift=function(gear){this.userGear=gear.toUpperCase();}
car1.shift===Car.prototype.shift; //false
car1.shift===car2.shift; //false
car1.shift('d');
car1.userGear; //D

class Car{
    static getNextVin(){
        return Car.nextVin++; //this.nextVin도 가능하지만, Car을 앞에 쓰면 정적 메서드여서 상기하기 쉬움
    }
    constructor(make,model){
        this.make=make;
        this.model=model;
        this.vin=Car.getNextVin();
    }
    static areSimilar(car1,car2){
        return car1.make===car2.make&&car1.model===car2.model;
    }
    static areSame(car1,car2){
        return car1.vin===car2.vin;
    }
}
Car.nextVin=0;

const car1=new Car("Tesla","5");
const car2=new Car("Mazda","3");
const car3=new Car("Mazda","3");

car1.vin; //0
car2.vin; //1
car3.vin; //2

Car.areSimilar(car1,car2); //false
Car.areSimilar(car2,car3); //true
Car.areSame(car2,car3); //false
Car.areSame(car2,car2); //true

class Vehicle{
    constructor(){
        this.passengers=[];
        console.log("Vehicle created");
    }
    addPassenger(p){
        this.passengers.push(p);
    }
}

class Car extends Vehicle{
    constructor(){
        super();
        console.log("Car created");
    }
    deployAirbags(){
        console.log("BWOOSH!");
    }
}

const v=new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
v.passengers; //["Frank","Judy"]
const c=new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
c.passengers; //["Alice","Cameron"]
v.deployAirbags(); //error
c.deployAirbags(); 

class Motorcycle extends Vehicle{}
const c=new Car();
const m=new Motorcycle();
c instanceof Car; //true
c instanceof Vehicle; //true
m instanceof Car; //false
m instanceof Motorcycle; //true
m instanceof Vehicle; //true

class Super{
    constructor(){
        this.name='Super';
        this.isSuper=true;
    }
}

//유효하지만, 권장 X
Super.prototype.sneaky='not recommended!';
class Sub extends Super{
    constructor(){
        super();
        this.name='Sub';
        this.isSub=true;
    }
}

const obj=new Sub();
for(let p in obj){
    console.log(`${p}:${obj[p]}`+
    (obj.hasOwnProperty(p)?'':'(inherited)'));
}

class Car{
    toString(){
        return `${this.make}${this.model}:${this.vin}`;
    }
}

class InsurancePolicy{}
function makeInsurable(o){
    o.addInsurancePolicy=function(p){this.InsurancePolicy=p;}
    o.getInsurancePolicy=function(){return this.insurancePolicy;}
    o.isInsured=function(){return !!this.insurancePolicy;}
}

class UnsurancePolicy{}
const ADD_POLICY=Symbol();
const GET_POLUCY=Symbol();
const IS_INSURED=Symbol();
const _POLICY=Symbol();
function makeInsurable(o){
    o[ADD_POLICY]=function(p) {this[_POLICY]=p;}
    o[GET_POLICY]=function(p) {return this[_POLICY];}
    o[ADD_POLICY]=function(p) {return !!this[_POLICY];}
}