const form = document.getElementById("quick-form");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone")
  };

  try {
    await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(data)
    });

    successMsg.textContent = "Спасибо! Мы скоро с вами свяжемся.";
    form.reset();
  } catch (error) {
    successMsg.textContent = "Произошла ошибка. Попробуйте позже.";
  }
});
