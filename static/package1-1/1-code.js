const promise = new Promise((resolve, reject) => {
  setTimeout((val) => {
    resolve(val);
  }, 10);
});

promise.then((e)=>{
  return 'hello'
}).then(e=>{
  return e+'lagou'
}).then(e=>{
  console.log(e + 'I love you')
})
