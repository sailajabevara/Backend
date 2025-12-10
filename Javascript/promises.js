// const fun = new Promise((resolve,reject) => {
//     if(true){
//         resolve("This is prom1")
//     }
//     else{
//         reject("This is prom2")
//     }

// });
// fun.then((res)=>{
//   console.log(res);
  
// }).catch((err)=>{
//     console.log(err);
    
// })
let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });