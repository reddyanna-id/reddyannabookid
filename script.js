document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Thank you for your interest in Reddy Anna Book ID.");
    });
  });
});
