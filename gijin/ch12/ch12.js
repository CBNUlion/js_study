const book=[
    "a",
    "b",
    "c",
    "d",
    "e",
]

const it=book.values();

it.next(); //{value:"a",done:false}
it.next(); //{value:"b",done:false}
it.next(); //{value:"c",done:false}
it.next(); //{value:"d",done:false}
it.next(); //{value:"e",done:false}
it.next(); //{value:undefined,done:true}
it.next(); //{value:undefined,done:true}

const it=book.values();
let current=it.next();
while(!current.done){
    console.log(current.value);
    current=it.next();
}

const it1=book.values();
const it2=book.values();

//it1으로 두 페이지를 읽습니다.
it1.next(); //{value:"a",done:false}
it1.next(); //{value:"b",done:fasle}

it2.next(); //{value:"a",done:false}

it1.next(); //{value:"c",done:false}

class Log{
    constructor(){
        this.message=[];
    }
    add(message){
        this.messages.push({message,timestamp:Date.now()});
    }
}

class Log{
    constructor(){
        this.message=[];
    }
    add(message){
        this.messages.push({message,timestamp:Date.now()});
    }
    [Symbol.iterator](){
        return this.messages.values();
    }
}

const log=new Log();
log.add("first");
log.add("second");
log.add("third");

for(let entry of log){
    console.log(`${entry.message}@${entry.timestamp}`);
}

class Log{
    //..
    [Symbol.iterator](){
        let i=0;
        const messages=this.messages;
        return{
            next(){
                if(i>=messages.length)
                    return {value:undefined,done:true};
                return {value:messages[i++],done:false};
            }
        }
    }
}

class Fibo{
    [Symbol.iterator](){
        let a=0,b=1;
        return{
            next(){
                let rval={value;b,done:false};
                b+=a;
                a=rval.value;
                return rval;
            }
        };
    }
}

//무한 루프에 빠지지 않도록 10회 계산한 뒤 break문으로 빠져나온다.
const fib=new Fibo();
let i=0;
for(let n of lib){
    console.log(n);
    if(++i>9) break;
}

function* rainbow(){
    yield 'red';
    yield 'orange';
}

const it=rainbow();
it.next(); //{value:"red",done:false}
it.next(); //{value:"orange",done:false}
it.next(); //{value:undefined,done:true}

for(let color of rainbow()){
    console.log(color);
}

function* interrogate(){
    const name=yield "What is your name?";
    const color=yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}`;
}

const it=interrogate();
it.next(); //{value:"What is your name?",done:false}
it.next('Gijin'); //{value:"What is your favorite color?",done:false}
it.next('red'); //{value:"Gijin's favorite color is red",done:true}

function* abc(){
    yield 'a';
    yield 'b';
    return 'c';
}

const it=abc();
it.next(); //{value:'a',done:false}
it.next(); //{value:'b',done:false}
it.next(); //{value:'c',done:true}

for(let l of abc()){
	console.log(l);
}