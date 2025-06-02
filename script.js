document.addEventListener("DOMContentLoaded", function () {
  const contactSelect = document.getElementById("contact-method");

  const emailBox = document.getElementById("email-box");
  const phoneBox = document.getElementById("phone-box");

  contactSelect.addEventListener("change", function () {
    const value = this.value;

    emailBox.classList.add("hidden");
    phoneBox.classList.add("hidden");

    if (value === "email") {
      emailBox.classList.remove("hidden");
    } else if (value === "phone") {
      phoneBox.classList.remove("hidden");
    }
  });
});
