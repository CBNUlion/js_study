function f(o){
    o.message="f에서 수정함";
    o={
        message:"새로운 객체"
    };
    console.log(`f 내부:o.message="${o.message}" (할당 후)`);
}

let o={
    message:
    '초기값'
}

function f(x){
    return `in f:x=${x}`;
}
f(); //"in f:x=undefined"

function getSentence({subject,verb,object}){
    return `${subject} ${verb} ${object}`;
}

const o={
    subject:"I",
    verb:"love",
    object:"JavaScript",
};

getSentence(o); //"I love JavaScript"

function getSentence([subject,verb,object]){
    return `${subject} ${verb} ${object}`;
}

const o=[
    "I","love","JavaScript"
];
getSentence(o); //"I love JavaScript"

function addPre(prefox,...words){
    const prefixedWords=[];
    for(let i=0;i<words.length;i++){
        prefixedWords[i]=prefix+words[i];
    }
    return prefixedWords;
}

addPre("con","verse","vex"); //["converse", "convex"]

function f(a,b="default",c=3){
    return `${a}-${b}-${c}`;
}

f(5); //5-default-3
f(); //undefined-default-3

const o={
    name:'Wallance', //원시값 프로퍼티
    bark:function(){ return 'Woof!'; }, //함수 프로퍼티(메서드)
}


const o={
    name:'Wallance', //원시값 프로퍼티
    bark() { return 'Woof!'; }, //함수 프로퍼티(메서드)
}

const o={
    name:'Wallace',
    speak() {return `My name is ${this.name}`;},
}

o.speak() 호출시 this는 o에 묶임
o.speak(); //"My name is Wallce";

const o={
    name:'a',
    greetBackwards:function(){
        const self=this;
        function getReverseName(){
            let nameBackwards='';
            for(let i=self.name.length-1;i>=0;i--){
                nameBackwards+=self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
o.greetBackwards();


const g=function f(stop){
	if(stop) console.log('fstopped');
	f(true);
};
g(false);

const f1=function(){ return "Hello"; }
const f1=()=>"hello";
const f2=function(name){return `hello,${name}!`;}
const f2=name=>`Hello, ${name}!`;
const f3=function(a,b){return a+b;}
const f3=(amb)=>a+b;

const o={
    name:'Julie',
    greetBackwards:function(){
        const getReverseName=()=>{
            let nameBackwards='';
            for(let i=this.name.length-1;i>=0;i--){
                nameBackwards+=this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym,olleH`;
    },
};
o.greetBackwards();

const bruce={name:"bruce"};
const madeline={name:"madeline"};

function greet(){
    return `Hello, I'm $(this.name)!`;
}

greet(); //"hello,i'm undefined!" this는 X
greet.call(bruce); //"hello,i'm Bruce!" this는 bruce
greet.call(madeline); //"hello,i'm madeline" this는 madeline

function update(birth,occupation){
    this.birth=birth;
    this.occupation=occupation;
}
update.call(bruce,1949,'singer');
//bruce는 이제 { name: "bruce",birth:1949,occupation:"singer"}
update.call(madeline,1942,'actress');
//bruce는 이제 { name: "madeline",birth:1949,occupation:"actress"}

update.apply(bruce,[1955,"actor"]);
update.apply(madeline,[1918,"writer"]);

const arr=[2,3,-5,15,7];
Math.min.apply(null,arr);
Math.max.apply(null,arr);

const newBruce=[1940,"martial artist"];
update.call(bruce,...newBruce);
Math.min(...arr);
Math.max(...arr);

const updateBruce=pdate.bind(bruce);
updateBruce(1940,"actor");
updateBruce.call(madeline,1274,"king"); //madeline은 변하지 않음

