const u1={name:'Cynthia'};
const u2={name:'Jackson'};
const u3={name:'Olive'};
const u4={name:'James'};

const userRoles=new Map();

userRoles.set(u1,'User');
userRoles.set(u2,'User');
userRoles.set(u3,'Admin');

userRoles
    .set(u1,'User')
    .set(u2,'User')
    .set(u3,'Admin');
    
const userRoles=new Map([
    [u1,'User'],
    [u2,'User'],
    [u3,'Admin'],
]);

userRoles.get(u2);

userRoles.has(u1); //true
userRoles.get(u1); //User
userRoles.has(u4); //false
userRoles.get(u4); //undefined

userRoles.get(u1); //User
userRoles.set(u1,'Admin');
userRoles.get(u1); //Admin

userRoles.size; //3

for(let u of userRoles.keys())
    console.log(u.name);

    
for(let r of userRoles.values())
    console.log(r);
    
for(let ur of userRoles.entries())
    console.log(`${ur[0].name}:${ur[1]}`);

//맵도 분해할 수 있다.
for(let [u,r] of userRoles.entries())
    console.log(`${u.name}:${r}`);

for(let [u,r] of userRoles)
    console.log(`${u.name}:${r}`);

[...userRoles.values()]; //["User","User","Admin"]

userRoles.delete(u2);
userRoles.size; //2

userRoles.clear();
userRoles.size; //0

const SecretHolder=(function(){
    const secrets=new WeakMap();
    return class{
        setSecret(secret){
            secrets.set(this,secret);
        }
        getSecret(){
            return secrets.get(this);
        }
    }
})();

const a=new SecretHolder();
const b=new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

a.getSecret(); //secret A
b.getSecret(); //secret B

const roles=new Set();
roles.add("User"); //Set ["User"]
roles.add("Admin"); //Set ["User","Admin"]
roles.size; //2
roles.add("User"); //Set ["User","Admin"]
roles.size; //2
roles.delete("Admin"); //true
roles; //Set["User"]
roles.delete("Admin");

const naughty=new WeakSet();
const children=[
    {name:"Suzy"},
    {name:"Derek"},
];
naughty.add(children[1]);
for(let child of children){
    if(naughty.has(child))
        console.log(`Coal for ${child.name}!`);
    else
        console.log(`Presetns for ${child.name}!`);
}