// Progressive enhancement: footer year + friendly success message
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("admission-form");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  // Use browser validation first
  if (!form.reportValidity()) return;

  e.preventDefault();
  const data = new FormData(form);
  const first = data.get("firstName") || "Applicant";
  status.textContent = `Thanks, ${first}! Your application was recorded locally for this demo.`;
  form.reset();

  // Keep message visible for a bit
  status.style.opacity = "1";
  setTimeout(() => (status.style.opacity = "0.9"), 1500);
});