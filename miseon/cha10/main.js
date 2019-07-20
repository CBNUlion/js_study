const u1 = {name:'cyn'};
const u2 = {name:'jac'};
const u3 = {name:'oliv'};
const u4 = {name:'jame'};

//맵 만들기
const uSerRoles = new Map();


//set()메서드를 써서 사용자 역할 할당하기
//1. 
uSerRoles.set(u1, 'User')
uSerRoles.set(u2, 'User')
uSerRoles.set(u3, 'admin')


//2. 체인으로 연결하기
uSerRoles
    .set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'admin')


//3. 배열의 배열을 넘기는 형태
const uSerRoles = new Map([
    [u1,'User'],
    [u2,'User'],
    [u3, 'admin']
]);



//get() 메서드로 u2 의 역할 알아보기

uSerRoles.get(u2);//User


//존재하지 않는 키에 get 호출

