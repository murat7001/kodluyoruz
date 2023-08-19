// setTimeout(() => {
//     console.log("merhaba");
// },2000);

// setInterval(() => {
//     console.log("merhaba");
// },1000);

// const sayHello = (cb) => {
//     cb();
// }

// sayHello(() => {
//     console.log("Hello");

// });

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(users => {
//     console.log("users geldi",users);
    
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(data => data.json())
//     .then(posts => console.log("posts",posts));
// });



// async function getData () {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data => data.json())

//     const post1 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(post1 => post1.json())

//     const post2 = await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then(post2 => post2.json())


//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// }

// getData();



const getComments = (number) => {
    return new Promise( (resolve, reject) => {
        if(number == 1){
        resolve('murat');
        }else{
            reject('err');
        }
    });
};

getComments(2).then( (data) => console.log(data))
.catch((data) => console.log(data));