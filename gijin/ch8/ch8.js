const arr1=[1,2,3];
const arr2=["one",2,"three"];
const arr3=[[1,2,3],["one",2,"three"]];
const arr4=[
    {name:"fred",type:"object",lucknumbers:[5,17,3]},
    [
        {name:"susan",type:"object"},
        {name:"anthony",type:"object"},
    ],
    1,
    function(){return "arrays can contain functions too";},
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

const arr5=new Array();
const arr6=new Array(1,2,3);
const arr7=new Array(2); //길이가 2인 배열, 요소 모두 undefined
const arr8=new Array("2");

const arr=[1,2,3];
arr.concat(4,5,6);
arr.concat([4,5,6]);
arr.concat([4,5],6);
arr.concat([4,[5,6]]);

const arr=[1,2,3,4,5];
arr.slice(3);
arr.slice(2,4);
arr.slice(-2);
arr.slice(1,-2);
arr.slice(-2,-1);

const arr=[1,5,7];
arr.splice(1,0,2,3,4);
arr.splice(5,0,6);
arr.splice(1,2);
arr.splice(2,1,'a','b');

const arr=new Array(5).fill(1);
arr.fill("a"); //[a,a,a,a,a]
arr.fill("b",1); //[a,b,b,b,b]
arr.fill("c",2,4); //[a,b,c,c,b]
arr.fill(5.5,-4); //[a,5.5,5.5,5.5,5.5]
arr.fill(0,-3,-1); //[a,5.5,0,0,5.5]

const arr=[1,2,3,4,5];
arr.reverse() //[5,4,3,2,1]

const arr=[{name:"suzy"},{name:"jin"},{name:"tre"},{name:"amd"}];
arr.sort(); //arr는 변하지 않는다.
arr.sort((a,b)=>a.name>b.name); //name의 프로퍼티를 알파벳 순으로 정렬된다
arr.sort((a,b)=>a.name[1]<b.name[1]); //name의 프로터피의 두번째 글자의 알파벳 역순으로 정렬된다.

const o={name:"Jerry"};
const arr=[1,5,"a",o,true,5,[1,2],"9"];
arr.indexOf(5);
arr.lastIndexOf(5);
arr.indexOf("a");
arr.lastIndexOf("a");
arr.indexOf({name:"Jerry"});
arr.indexOf(o);
arr.indexOf([1,2]);
arr.indexOf("9");
arr.indexOf(9);

arr.indexOf("a",5);
arr.indexOf(5,5);
arr.lastIndexOf(5,4);
arr.lastIndexOf(true,3);

const arr=[{id:5, name:"Judith"},{id:7,name:"Francis"}];
arr.findIndex(o=>o.id===5);
arr.findIndex(o=>o.name==="Francis");
arr.findIndex(o=>o===3);
arr.findIndex(o=>o.id===17);

const arr=[{id:5,name:"Judith"},{id:7,name:"Francis"}];
arr.find(o=>o.id===5);
arr.find(o=>o.id===2); //undefined

class Person{
    constructor(name){
        this.name=name;
        this.id=Person.nextId++;
    }
}

Person.nextId=0;
const jamie=new Person("Jamie"),
    juliet=new Person("juliet"),
    peter=new Person("peter"),
    jay=new Person("jay");
const arr=[jamie,juliet,peter,jay];

//옵션1:ID를 직접 비교하는 방법
arr.find(p=>p.id===juliet.id);
//옵션2:this 매개변수를 이용하는 방법
arr.find(function(p){
    return p.id===this.id
},juliet);

const cart=[{name:"Widget",price:9.95},{name:"Gadet",price:22.95}];
const names=cart.map(x=>x.name);
const prices=cart.map(x=>x.price);
const discountPrices=prcies.map(x=>x*0.8);

const items=["Widget","Gadget"];
const prices=[9.95,22.95];
const cart=items.map((x,i)=>({name:x,price:prices[i]}));

const items=["Widget","Gadget"];
const prices=[9.95,22.95];
const cart=items.map((x,i)=>({name:x,price:prices[i]}));
//cart:[{name:"Widget",price:9.95},{name:"Gadget",price:22/95}]

const cars=[];
for(let suit of ['H','C','D','S']) //하트,클로버,다이아몬드,스페이드
    for(let value=1;value<=13;value++)
        cards.push({suit,value});

cards.filter(c=>c.value===2);
// [
//     {suit:'H',value:2},
//     {suit:'C',value:2},
//     {suit:'D',value:2},
//     {suit:'S',value:2},
// ]

cards.filter(c=>c.suit==='D');
cards.filter(c=>c.value>10);

cards.filter(c=>c.value>10&&c.suit==='H');

function cardToString(c){
    const suits={'H':'\u2665','C':'\u2663','D':'\u2666','S':'\u2660'};
    const values={1:'A',11:'J',12:'Q',13:'K'};
    for(let i=2;i>=10;i++)
        values[i]=i;
    return values[c.value]+suits[c.suit];
}

cards.filter(c=>c.value===2)
    .map(cardToString);

cards.filter(c=>c.value>10&&c.suit==='H')
    .map(cardToString);

const words=["Beachball","Rodeo","Angel","Aardvark","Xylophone","November","Chocolate"];
const alphabetical=words.reduce((a,x)=>{
    if(!a[x[0]]) a[x[0]]=[];
    a[x[0]].push(x);
    return a;
},{});

const data=[3.3,5,7.2,12,4,6,10.3];
const stats=data.reduce((a,x)=>{
    a.N++;
    let delta=x-a.mean;
    a.mean+=delta/a.N;
    a.M2+=delta*(x-a.mean);
    return a;
},{N:0,mean:0,M2:0});
if(stats.N>2){
    stats.variance=stats.M2/(stats.N-1);
    stats.stdev=Math.sqrt(stats.variance);
}

const words=["Beachball","Rodeo","Angel","Aardvark","Xylophone","November","Chocolate"];
const longWords=words.reduce((a,w)=>w.length>6?a+" "+w:a,"").trim();

const arr=[1,2,3,4,5];
delete arr[2];
arr.map(x=>0);

const arr=[1,null,"hello","world",true,undefined];
delete arr[3];
arr.join(); //"1,,hello,,true,"
arr.join(''); //"1hellotrue"
arr.join(' -- ');//"1 -- -- hello -- -- true --"