// Code goes here!
const names: Array<string> = ['Max', 'Manuel'];

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});
