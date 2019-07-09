const x = 1;
console.log(x);
function f(){
    console.log(x);
    const x = 1;
}

f();