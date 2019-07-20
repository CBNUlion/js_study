function printLeapYearStatus(){
    if console.log('a');
    else console.log('b');
}

const getNextRainbowColor=(function(){
    const colors=['a','b','c'];
    let colorIndex=-1;
    return function(){
        if(++colorIndex>=colors.length) colorIndex=0;
        return colors[colorIndex];
    };
})();

setInterval(function(){
    document.querySelector('.rainbow')
        .style['background-color']=getNextRainbowColor();
},500);

function getRainbowIterator(){
    const colors=['red','orange','yellow','greeen'];
    let colorIndex=-1;
    return{
        next(){
            if(++colorIndex>=colors.length) colorIndex=0;
            return {value:colors[colorIndex],done:false};
        }
    }
}

setTimeout(function(){console.log("hello");},1500);

var i;
for(i=5;i>=0;i--){
    setTimeout(function(){
        console.log(i===0?"go!":i);
    },(5-i)*1000);
}

function loopBody(i){
    setTimeout(function(){
        console.log(i===0?"go":i);
    },(5-i)*1000);
}

var i;
for(i=5;i>=0;i--){
    loopBody(i);
}

var i;
for(i=5;i>=0;i--){
    (function(i){
        setTimeout(function(){
            console.log(i===0>"go":i);
        },(5-i)*1000);
    })(i);
}

for(let i=5;i>=0;i--){
    setTimeout(function(){
        console.log(i===0?"go!":i);
    },(5-i)*1000);
}

function a(b){
    return (b+1);
}

const a=a(2);
const f=a;
const answer=f(2);

const Money=require('math=money');
//require는 라이브러리를 불러오는 노드 함수이다.
const oneDollar=Money.Dollar(1);

//Money.Dollar가 길게 느껴지면
const Dollar=Money.Dollar;
const twoDollars=Dollar(2);
//oneDollar와 twoDollars는 같은 타입의 인스턴스이다.

const sin=Math.sin;
const cos=Math.cos;
const theta=Math.PI/4;
const zoom=2;
const offset=[1,-3];

const pipeline=[
    function rotate(p){
        return{
            x:p.x*cos(theta)-p.y*sin(theta),
            y:p.x*sin(theta)+p.y*cos(theta),
        };
    },
    function scale(p){
        return {x:p.x*zoom,y:p.y*zoom};
    },
    function translate(p){
        return {x:p.x+offset[0],y:p.y+offset[1]};
    },
];

const p={x:1,y:1};
let p2=p;
for(let i=0;i<pipeline.length;i++){
    p2=pipeline[i](p2);
}

function sum(arr,f){
    if(typeof f!='function')f=x=>x;
    return arr.reduce((a,x)=>a+=f(x),0);
}

sum([1,2,3]); //6
sum([1,2,3],x=>x*x); //14
sum([1,2,3],x=>Math.pow(x,3)); //36

function sumOfSquares(arr){
    return sum(arr,x=>x*x);
}

function newSummer(f){
    return arr=>sum(arr,f);
}
<<<<<<< HEAD

function fact(n){
    if(n===1) return 1;
    return n*fact(n-1);
}
=======
>>>>>>> 5f43d065428aad9474bc56cc09915a1e939b98c0
