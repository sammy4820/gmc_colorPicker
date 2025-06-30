document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("color-box");
  const button = document.getElementById("change-color-btn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  button.addEventListener("click", () => {
    box.style.backgroundColor = getRandomColor();
  });
});
