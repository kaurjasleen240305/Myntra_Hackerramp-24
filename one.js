console.log('Task A');
// Task B can start before Task A is done
setTimeout(() => console.log('Task B'), 1000);  // Simulating an asynchronous operation
console.log('Task C');
