// const arr = new Array(5).fill(1);
// arr.fill("A");
// arr.fill("A");
// arr.fill("A");
// arr.fill("A");
// arr.fill("A");



// arr5;

const arr = [{name : "Suzanne"}, {name : "Jin"}, {name : "Trenor"},{name:"Amanda"}];

arr.sort(); //arr 바뀌지 않음, 객체라서
arr2 = arr.sort((a,b)=> a.name>b.name); //arr는 name 프로퍼티의 알파벳 순으로 정렬됩니다.
arr3 = arr.sort((a,b)=> a.name[1]< b.name[1]);
dsfa
console.log(arr, arr2, arr3);