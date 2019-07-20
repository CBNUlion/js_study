//예외 처리는 에러를 컨트롤하은 매커니즘, 예상치 못한 상황에 대처하는 방식
//기준 
//예상한 에러
const err = new Error('invaild email');

function validateEmail(email){
    return email.match(/@/)?
        email :
        new Error(`invalid email: ${email}`);
}

const email = "jane@doe.com";
const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error){
    console.error(`Error: ${validatedEmail.message}`);
}else{
    console.log(`Valid email: ${validatedEmail}`);
}




