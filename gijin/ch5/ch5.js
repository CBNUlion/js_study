//148pg
let n=0;
while (true){
    n+=0.1;
    if (n===0.3) break;
}
console.log(`Stopped at ${n}`);

let n=0;
while(true){
    n+=0.1;
    if(Math.abs(n-0.3)<Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);

//153pg
const a=true;
let x=0;
const result=a||x++;
// x++을 안해서 증가 X

const a=false;
let x=0;
const result=a||x++;
// x++을 해서 증가 O

//154pg
const options=suppliedOptions||{name:"Default"}

//160pg
let v,v0;
v=v0=0.9;
//v0 부터 값이 할당, 그 후 v값이 할당

const nums=[3,,15,7,5];
let n,i=0;
while((n=nums[i]<10) && i++<nums.length){
    console.log(`Number less than 10:${n}.`);
}
console.log(`Number greater than 10 found:${n}.`);
console.log(`${nums.length-i-1} numbers remain`);

//161pg
const obj={b:2, c:3, d:4};
const {a,b,c}=obj;
a; //undefined
d; //ReferenceError d가 정의 X

//161pg
const obj={b:2,c:3,d:4};
let a,b,c;
{a,b,c}=obj; //오류 남
({a,b,c}=obj);

const arr=[1,2,3];
let [x,y]=arr;
x;
y;
z; //미정의

const arr=[1,2,3,4,5];
let [x,y,...rest]=arr;
x;
y;
rest;

let a=5,b=10;
[a,b]=[b,a];
a;b;

const roomTempC=21.5;
let currentTempC=19.5;
const message=`current temp is`+`${currentTempC-roomTempC}\u00b0c different than room temperature.`;
const fahrenheit=`the current temp is ${currentTempC*9/5+32}\u00b0F`;