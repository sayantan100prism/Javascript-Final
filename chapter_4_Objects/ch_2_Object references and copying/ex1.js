const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection
    setTimeout(() => {
      if (success) {
        resolve("Task completed successfully!");
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
  
  // Handling the promise
  myPromise
    .then(result => console.log(result))  // Runs if promise is resolved
    .catch(error => console.log(error))   // Runs if promise is rejected
    .finally(() => console.log("Promise handling completed.")); // Runs always