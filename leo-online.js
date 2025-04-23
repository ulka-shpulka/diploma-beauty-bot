document.addEventListener("DOMContentLoaded", function () {
  const selectedService = localStorage.getItem("selectedService");
  const selectedEmployee = localStorage.getItem("selectedEmployee");
  const selectedDatetime = localStorage.getItem("selectedDatetime");

  if (selectedService) {
    document.getElementById("chosen-service").textContent = selectedService;
  }

  if (selectedEmployee) {
    document.getElementById("chosen-staff").textContent = selectedEmployee;
  }

  if (selectedDatetime) {
    document.getElementById("chosen-time").textContent = selectedDatetime;
  }

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = !(selectedService && selectedEmployee && selectedDatetime);
});

function goTo(page) {
  if (page === 'services') {
    const selectedService = localStorage.getItem("selectedService");
    if (selectedService) {
      localStorage.removeItem("selectedEmployee");
      document.getElementById("chosen-staff").textContent = "Не выбрано";
    }
  }

  window.location.href = `${page}.html`;
}

function submitVisit() {
  const service = localStorage.getItem("selectedService");
  const staff = localStorage.getItem("selectedEmployee");
  const datetime = localStorage.getItem("selectedDatetime");

  if (!service || !staff || !datetime) {
    alert("Пожалуйста, выберите все поля перед оформлением записи.");
    return;
  }

  const confirmed = confirm("🛎 Чтобы подтвердить запись, подпишитесь на нашего Telegram-бота.\n\nНажмите OK, чтобы перейти.");

  if (confirmed) {
    // Формируем query-параметры для Telegram
    const query = new URLSearchParams({ service, staff, datetime }).toString();

    // Замените 'RarlourBot' на имя вашего бота
    const telegramBotLink = `https://t.me/RarlourBot?start=${encodeURIComponent(query)}`;

    // Открываем Telegram-бота в новой вкладке
    window.open(telegramBotLink, '_blank');

    // Можно очистить localStorage
    localStorage.clear();
  }
}
