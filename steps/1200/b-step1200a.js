

function recurse(label, counter = 2) {
  console.log(`${label}: recurse ${counter}`);

  if (counter > 0) {
    recurse(label, counter - 1);
  }
}

function logALot() {
  recurse('one');

  setTimeout(() => {
    recurse('timeout 1');
  }, 0);

  recurse('two');
  recurse('three');

  setTimeout(() => {
    recurse('timeout 2');
  }, 0);

  recurse('four');
}

logALot();
