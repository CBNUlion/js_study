
// function sayHello(){ // 함수 변수 선언 -> undefined
//     console.log("Hello world");
//     console.log("Hallo wereld!");
// }


// sayHello(); // 표현식 작성 후 호출 ->  sayHello 선언 후 값을 할당하지 않았음으로 undefined 타입으로 할당됨

// const x = sayHello();

function getGreeting(){ // 함수 변수 선언 -> undefined
    return "Hello World"; // 함수 호출 = 값 할당 , 함수 즉시 종료 및 반환, 
}

// console.log(getGreeting()); // 


// 호출과 참조 
// js에서는 함수도 객체 , 다른 객체로 넘기거나 할당이 가능함
// 호출 <-> 참조 
// 호출 =  getGreeting (); /-> 괄호 입력으로 호출, 함수 바디 실행  / 바디 -> 실행값
// 참조 =  getGreetion; 함수 실행 X 

// 참조 - 호출하지 않고 다른 값과 마찬가지로 참조만 하는 특징 

// 변수 할당 
// const f = getGreeting; // 함수를 변수에 할당이 가능해짐
// f(); // 'Hello world'  // 다른이름으로 함수를 호출할 수 있음 

// 객체 프로퍼티 할당
// const o = {};
// o.f = getGreeting;
// console.log(o.f());
// console.log(o);

// const arr = [1,2,3,];
// arr[1] = getGreeting;
// cosole.log(arr[1]); // js에서는 "값이 되는 표현식" 뒤에 괄호를 붙이면 함수로 간주하고, 호출 


// // 매개변수 
// // 함수에 선언되는 매개변수 = 정해진 매개변수
// //                                |  
// //       함수가 호출       =  실제 매개변수  => 함수 바디 안에서만 존재, 변수 자체가 아닌 그 값만을 전달 받음   
// function avg(a,b){ 
//     return (a+b)/2; 
// }


// 스코프 맛보기 
// function f(x){
//     console.log(`f내부 : x=${x}`);
//     x = 5;
//     console.log(`f내부 : x=${x} (할당 후)`);
// }

// let x = 3;
// console.log(`f를 호출하기 전:x=${x}`);
// f(x);
// console.log(`f를 호출하기 다음:x=${x}(할당 후)`);


// function f(o){ //원시값을 담은 변수는 수정할 수 있지만 
//     o.message = `f 안에서 수정함 (이전 값: "${o.message}" )`;

// }
// let o = { // 원시값은 불변임으로 수정할 수 없음
//   message : "초기 값"  
// };

// console.log(`f를 호출하기 전 (이전 값: "${o.message}" )`)   //원시 값과 객체의 핵심적인 차이 
// f(o);
// console.log(`f를 호출하기 다음 (이전 값: "${o.message}" )`)

// p 172 - 함수내 매개변수 와 바깥의 매개변수 
function f(o){
    o.message = "2-1 f에서 new";
    o = {
        message: "2-2 새로운 pbj"
    };
   
    console.log(`2 f 내부: o.message = "${o.message}"(할당 후)`)  
}

let o = {
    message: 'init'
};

console.log(`1 f를 호출하기 전: o.message= "${o.message}"`)
f(o);
console.log(`3 f를 호출하기 다음: o.message= "${o.message}"`)


const x = 3;
function f(){
    console.log(x);
    console.log(y);
}
const y = 3;
{
    const y = 5;
    f();
    console.log(f());
}



const o = {
    name ='w',
    greetBackwards: function(){
        const self = this;
        function getReverseName(){
            let nameBackwards = '';
            for(let i= self.name.length-1; i>=)
        }
    }
}