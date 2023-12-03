(function () {
  p = 60;
  let button = document.querySelector("#butt-2");

  button.addEventListener("click", () => {
    p = p + 10;
    console.log(`work button 2: ${p}`);
  });
})();
