// Simple progressive enhancement for the contact form
// - Auto-fills current year in footer
// - Client-side validation and friendly success message

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Basic validation feedback using the browser's constraint API
  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const name = formData.get("name");

  statusEl.textContent = `Thanks, ${name || "friend"} — your message has been recorded locally (demo).`;
  form.reset();

  // Visually confirm
  statusEl.style.transition = "opacity .2s ease";
  statusEl.style.opacity = "1";
  setTimeout(() => (statusEl.style.opacity = "0.85"), 1500);
});