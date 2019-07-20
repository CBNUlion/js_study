const err=new Error('invalid email');
function validateEmail(email){
    return email.match(/@/)?
        email:
        new Error(`invalid email:${email}`);
}

const email="jane@doe.com";
const validatedEmail=validateEmail(email);
if(validateEmail instanceof Error){
    console.error(`Error:${validatedEmail.message}`);
}else{
    console.log(`Valid email:${validatedEmail}`);
}

const email=null;
try{
    const validatedEmail=validateEmail(email);
    if(validatedEmail instanceof Error){
        console.error(`Error:${validateEmail.message}`);
    }
    else{
        console.log(`Valid email:${validatedEmail}`);
    }
}catch(err){
    console.error(`Error:${err.message}`);
}

function billPay(amount,payee,account){
    if(amount>account.balance)
        throw new Error("insufficient funds");
    account.transfer(payee,amount);
}

function a(){
    console.log('a:calling b');
    b();
    console.log('a:done');
}
function b(){
    console.log('b:calling c');
    c();
    console.log('b:done');
}
function c(){
    console.log('c:throwing error');
    throw new Error('c error');
    console.log('c:done');
}
function d(){
    console.log('d:calling c');
    c();
    console.log('d:done');
}

try{
    a();
}catch(err){
    console.log(err.stack);
}

try{
    d();
}catch(err){
    console.log(err.stack);
}

try{
    console.log("this line is executed...");
    throw new Error("whoops");
    console.log("this line is not...");
}catch(err){
    console.log("there was an error");
}finally{
    console.log("...always executed");
    console.log("perform cleanup here");
}