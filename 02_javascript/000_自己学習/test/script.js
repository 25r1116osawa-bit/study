function execute(fn) {
  fn();
}

execute(() => {
  console.log("呼ばれた");
});