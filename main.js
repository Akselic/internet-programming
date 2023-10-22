const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContainer = document.getElementById("modalContainer");
const modal = document.getElementById("myModal");
const feedbackForm = document.getElementById("feedbackForm");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

// Открытие модального окна при клике на кнопку
openModalBtn.addEventListener("click", function() {
    modalContainer.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
        modalContainer.classList.add("show");
    }, 50);
});

// Закрытие модального окна при клике на "X" или за пределами модального окна
closeModalBtn.addEventListener("click", closeModal);
modalContainer.addEventListener("click", function(event) {
    if (event.target === modalContainer) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove("show");
    modalContainer.classList.remove("show");
    setTimeout(() => {
        modalContainer.style.display = "none";
    }, 300);
}

// Валидация телефона и email при отправке формы (через регулярные выражения)
feedbackForm.addEventListener("submit", function(event) {
    let valid = true;

    // Валидация телефона
    if (!phoneInput.value.match(/\+7\d{3}\d{3}\d{2}\d{2}$/)) {
        phoneError.textContent = "Введите номер телефона в формате: +7 XXX XXX XX XX";
        valid = false;
    } else {
        phoneError.textContent = "";
    }


    // Валидация почты
    if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
        emailError.textContent = "Введите корректный email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // Отменить отправку формы, если есть ошибки
    }
});