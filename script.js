// script.js

// Получаем все кнопки "Купить"
const buyButtons = document.querySelectorAll('.cookie-card button');

// Добавляем обработчик события на каждую кнопку
buyButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log(`Кнопка ${index + 1} нажата!`);
    button.textContent = 'OK'; // Изменяем текст кнопки на "OK"
  });
});
