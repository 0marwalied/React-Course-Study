console.log("Start....");

let promise = new Promise((resolve, reject) => {
  console.log("Promise is pending...");
  let ok: boolean = true;
  setTimeout(() => {
    ok = true;
    resolve("Promise is resolved successfully!");
  }, 2000);
  if (!ok) reject(new Error("Immediate rejection!"));
});
console.log("end....");

promise
  .then((value) => {
    console.log("In then: ", value);
    return value;
  })
  .catch((error) => {
    console.log("In catch: ", error.message);
  })
  .finally(() => {
    console.log(
      "In finally: Promise is settled (either resolved or rejected)."
    );
  });
