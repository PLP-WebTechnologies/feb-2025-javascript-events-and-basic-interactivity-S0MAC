// Button Click
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffe4e1";
  document.getElementById("colorBtn").innerText = "Clicked!";
});

// Hover Effect
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseenter", () => hoverText.style.color = "green");
hoverText.addEventListener("mouseleave", () => hoverText.style.color = "black");

// Keypress Detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Secret Double-Click or Long Press
let pressTimer;
const secretBtn = document.getElementById("secretBtn");

secretBtn.addEventListener("dblclick", () => alert("🎉 Secret Double-Click Revealed!"));

secretBtn.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => alert("🕵️‍♂️ Long Press Activated!"), 1000);
});

secretBtn.addEventListener("mouseup", () => clearTimeout(pressTimer));

// Image Gallery
const images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3",
];
let currentImage = 0;
const galleryImage = document.getElementById("galleryImage");

document.getElementById("prev").addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImage.src = images[currentImage];
});

document.getElementById("next").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});

// Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabContents.forEach(tc => tc.style.display = "none");
    document.getElementById("tab" + button.dataset.tab).style.display = "block";
  });
});

// Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    feedback.innerText = "All fields are required!";
    feedback.style.color = "red";
    return;
  }

  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(email)) {
    feedback.innerText = "Invalid email format!";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 8) {
    feedback.innerText = "Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.innerText = "✅ Form submitted successfully!";
  feedback.style.color = "green";
});

// Real-time Password Feedback
document.getElementById("password").addEventListener("input", function() {
  if (this.value.length < 8) {
    feedback.innerText = "Password too short.";
    feedback.style.color = "orange";
  } else {
    feedback.innerText = "";
  }
});
