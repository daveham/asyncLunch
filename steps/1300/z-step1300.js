export function testPromise(isOperationSuccessful) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOperationSuccessful) {
        console.log('resolving promise');
        resolve('it worked');
      } else {
        console.log('rejecting promise');
        reject(new Error('it failed'));
      }
    }, 2000);
  });
}
