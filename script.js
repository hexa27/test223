function updateGreeting() {
  const name = document.getElementById("username").value;
  document.getElementById("greeting").innerText = `Hai, ${name || "Guest"}`;
}

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Mohon Isi Semua Kolom.");
        return;
      }

      const result = `
        <h3>Pesan Terkirim</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `;

      document.getElementById("formResult").innerHTML = result;
    });
  }
});