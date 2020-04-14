

async function simple(data) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) resolve(data);
      else reject(new Error('bad data'));
    }, 2000);
  });
}

async function consumer(testData) {
  console.log('before');

  try {
    const data = await simple(testData);
    console.log('I have', data);
  } catch(err) {
    console.log('bad things happened');
  }

  console.log('after');
}

consumer('good data');
// consumer();
