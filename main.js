let arr = [1,2,true, 'true', 'false', false, 3.14159265,8, -1000,'JS'];
console.log(arr);

let b1={
    title:'The Witcher',
    pageCount: 800,
    genre: 'Fantasy'
};
let b2 = {
    title:'Hobbit',
    pageCount: 1000,
    genre:'Fantasy'
};
let b3={
    title:'Lord of the ring',
    pageCount: 1500,
    genre:'Fantasy'
};
console.log(b1,b2,b3);
b1.author=[{name:'Sapkovskiy',age:50}, {name:'Andriy',age:20}, {name:'Vasya',age:45}];
b2['author'] = [{name:'Tolkin', age:54}, {name:'Roman',age: 50}];
b3.author = [{name:'Grisha', age:22}, {name:'Oleg', age: 33}];
console.log(b1,b2,b3);
let Users = [{name:'Vasya',username:'Simple',password:'12345678'},{name:'Andriy',username:'@ndriy',password:'12Abc'},
    {name:'Anton',username:'4444',password:'nameDayMonthYear'}, {name:'Noname',username:'Unknown',password:'vvwvvwvvwvvw'},
    {name:'Anya',username:'poc',password:'888111555666'}, {name:'Lena',username:"/|",password:'123321123321123321'},
    {name:'random',username:'random',password:'random'}];
console.log('User\'s passwords:'+'\n')
for(i=0; i<Users.length; ++i){
    console.log(Users[i].password);
}