document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const messageEl = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Останавливаем стандартную отправку

        // Очищаем старое сообщение
        messageEl.textContent = '';
        messageEl.className = 'message';

        // Получаем значения полей
        const email = form.email.value.trim();

        // Простая валидация email (должен содержать @ и точку после нее)
        if (!email.includes('@') || email.indexOf('.') < email.indexOf('@')) {
            messageEl.textContent = 'Пожалуйста, введите корректный email (должен содержать @ и домен).';
            messageEl.classList.add('error');
            return; // Останавливаем отправку
        }

        // Если валидация прошла
        messageEl.textContent = 'Спасибо! Сообщение отправлено (это демо, на сервер ничего не ушло).';
        messageEl.classList.add('success');

        // Для демо - очищаем форму через 3 секунды
        setTimeout(() => {
            form.reset();
            messageEl.textContent = '';
        }, 3000);
    });
});