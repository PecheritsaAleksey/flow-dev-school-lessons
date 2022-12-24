console.log("Message 1");

// console.log("Message 2");
// setTimeout(() => {
//   console.log("Message 2");
// }, 0);

console.log("Message 3");

console.log("------calbacks-----");

let f1 = function (calback) {
  return setTimeout(() => {
    console.log("f1 is here");
    calback();
  }, 2000);
};

let f2 = function () {
  return setTimeout(() => {
    console.log("f2");
  }, 1000);
};

// f1(() => f2());

// f1(() => {
//   f2(() => {
//     f3(() => {
//       f4(() => {
//         f5();
//       });
//     });
//   });
// });

console.log("-----Promise------");

function promiseF1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("promiseF1");
      resolve();
    }, 2000);
  });
}

function promiseF2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("promiseF2");
      resolve();
    }, 1000);
  });
}

// promiseF1()
//   .then(() => {
//     promiseF2();
//   })
//   .catch();

// promiseF1()
//   .then(() => {
//     promiseF2();
//   })
//   .then(() => {
//     promiseF3();
//   })
//   .then(() => {
//     promiseF4();
//   })
//   .then(() => {
//     promiseF5();
//   });

console.log("----------Async/Await-----------");

async function myAsyncFunc() {
  await promiseF1();
  await promiseF2();
}

myAsyncFunc();
