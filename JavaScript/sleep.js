const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve(true), milliseconds));
};

async function demo() {
  console.log("Taking a break...");
  await sleep(2000);
  console.log("Two seconds later, showing sleep in a loop...");

  // Sleep in loop
  for (let i = 0; i < 5; i++) {
    if (i === 3) await sleep(2000);
    console.log(i);
  }
}

demo();
