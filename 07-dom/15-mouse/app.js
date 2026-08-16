const box = document.querySelector("#box");

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "lightblue";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "red";
});

box.addEventListener("dblclick", () => {
  alert("Double clicked!");
});
