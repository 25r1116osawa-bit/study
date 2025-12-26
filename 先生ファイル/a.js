function makeFunc() {
  let name = 0;
  function displayName() {
    console.log(name++);
  }
  return displayName;
}

let myFunc = makeFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();
myFunc();

