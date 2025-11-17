const msg = document.getElementById("msg");

// Make it glow on and off
setInterval(() => {
  msg.classList.toggle("glow");
}, 1000);

// Funny shake animation when clicked
msg.addEventListener("click", () => {
  msg.style.animation = "shake 0.5s";

  setTimeout(() => {
    msg.style.animation = "float 2.5s ease-in-out infinite";
  }, 500);
});

// Shake keyframes
const style = document.createElement("style");
style.innerHTML = `
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
      `;
document.head.appendChild(style);
