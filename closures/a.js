(function () {
  let p = 10;
  let button = document.querySelector("#butt-1");

  button.addEventListener("click", () => {
    p++;
    console.log(`work button 1: ${p}`);
  });
})();
