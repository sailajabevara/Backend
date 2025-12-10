// // const fun1 = () => {
// //   return("This is function1");
// //   fun1();
// // }
// // const fun2 = () => {
// // return("This is function2");
// // console.log(fun2);


// // }
// // console.log (fun1())
// // console.log(fun2());

// // The add() function is 
// // called with arguments a, b
// // and callback, callback 
// // will be executed just
// // after ending of add() function
// function add(a, b, callback) {
//     console.log(`The sum of ${a} 
//     and ${b} is ${a + b}`);
//     callback();
// }

// // The disp() function is called just
// // after the ending of add() function
// function disp() {
//     console.log(`This must be printed
//      after addition`);
// }

// // Calling add() function
// add(5, 6, disp)

function userDetials(id, callback) {
  console.log("Getting user details", id);
  callback({ userId: "18" });
}

function usersId(userData, callback) {
  console.log("Getting user id", userData);
  callback({ subId: "en-1" });
}

function userSub(subData) {
  console.log("Getting subject id", subData);
}

userDetials("18", function (userData) {
  usersId(userData, function (subData) {
    userSub(subData);
  });
});