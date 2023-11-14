// const { promisify } = require("util");
const { readFile, writeFile, chmod } = require("fs/promises");

// const readFileAsync = promisify(readFile);
// const writeFileAsync = promisify(writeFile);
// const chmodAsync = promisify(chmod);

// const readFileAsync = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   });
// };

// const writeFileAsync = (path, data) => {
//   return new Promise((resolve, reject) => {
//     writeFile(path, data, (err) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve();
//     });
//   });
// };

// const chmodAsync = (path, mode) => {
//   return new Promise((resolve, reject) => {
//     chmod(backupfile, mode, (err) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve();
//     });
//   });
// };

const backupFile = `${__filename}-${Date.now()}`;

readFile(__filename)
  .then((data) => {
    return writeFile(backupFile, data);
  })
  .then(() => {
    return chmod(backupFile, 0o400);
  })
  .catch((err) => {
    console.log(err);
  });

// const promiseX = (x) => {
//   return new Promise((resolve, reject) => {
//     if (typeof x === "number") {
//       resolve(x);
//     } else {
//       reject(new Error("return error"));
//     }
//   });
// };

// const logAndDouble = (num) => {
//   console.log(num);
//   return num * 2;
// };

// const data = 1;
// promiseX(data)
//   .then((data) => logAndDouble(data))
//   .then((data) => logAndDouble(data))
//   .catch(console.log(data));

// const promiseA = new Promise((resolve, reject) => {
//   resolve("return data");
// });

// promiseA.then((data) => console.log(data));

// const promiseB = new Promise((resolve, reject) => {
//   reject(new Error("return error"));
// });

// promiseB.catch((err) => console.error(err));

// console.log("done");
