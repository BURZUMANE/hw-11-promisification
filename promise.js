'use strict'

const cleanRoom = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('Cleaned the room');
    });
};

const removeGarbage = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(' removed garbage');
    })
}
const winIceCream = ()=> {
    return new Promise((resolve, reject)=>{
        resolve(' won icecream');
    })
}
let messsage = ''
cleanRoom().then((data)=>{
    messsage += data;
    return removeGarbage();
    // console.log(data);
}).then((fuckiez)=>{
    messsage += fuckiez;
    return winIceCream();
    console.log(fuckiez);
}).then((salo)=>{
    messsage += salo;
    console.log(messsage);
});

// let promiseToCleanRoom = new Promise((resolve, reject)=>{
//     // cleaning the room

//     let isCLean = Math.random() > 0.5;

//     if(isCLean){
//         resolve('clean');
//     }else{
//         reject('dirty');
//     }
// });

// function success(data){
//     console.log(data)
// }

// function failure(data){
//     console.log(data);
// }

// promiseToCleanRoom.then(success).catch(failure);


