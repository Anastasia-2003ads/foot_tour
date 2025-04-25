/*
    **Алгоритм**

    1. **Начало.**
    2. Ждем события DOMContentLoaded, которое сигнализирует о том, что DOM полностью загружен и разобран.
    - Записываем "Hello world!" в консоль.
    3. Объявляем функцию centerItemInView, которая принимает два параметра: containerSelector и itemSelector.
    3.1. Выбираем элемент .container с помощью containerSelector.
    3.2. Выбираем элемент .targetItem с помощью itemSelector.
    3.3. Рассчитываем позицию scrollLeft, чтобы центрировать targetItem в container.
    4. Объявляем функцию enableHorizontalScroll, которая принимает один параметр: containerSelector.
    4.1. Выбираем container с помощью containerSelector.
    4.2. Добавляем обработчик события 'wheel' на container.
    4.3. Предотвращаем стандартное действие на событие wheel.
    4.4. Регулируем container.scrollLeft в зависимости от e.deltaY для активации горизонтальной прокрутки.
    5. Ждем события window.onload, которое сигнализирует о полной загрузке всех ресурсов.
    5.1. Вызываем centerItemInView на карусели "интересно вам" для её 3-го элемента.
    5.2. Вызываем centerItemInView на карусели "похожие отели" для её 1-го элемента.
    6. Вызываем enableHorizontalScroll для каруселей "интересно вам" и "похожие отели".
    7. **Конец.**

    Блок-схема: /images/block-schema.png
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log('Hello world!'); // Записываем простое сообщение в консоль после полной загрузки и парсинга DOM
});

/* Функция для центрирования элемента внутри прокручиваемого контейнера */
function centerItemInView(containerSelector, itemSelector) {
    const container = document.querySelector(containerSelector); // Выбираем контейнер по предоставленному селектору
    const targetItem = document.querySelector(itemSelector);     // Выбираем целевой элемент, который нужно центрировать в контейнере
    container.scrollLeft = targetItem.offsetLeft                 // Устанавливаем горизонтальную позицию прокрутки контейнера, чтобы элемент был по центру
        - (container.offsetWidth / 2)                            // Половина ширины контейнера для центрирования
        + (targetItem.offsetWidth / 2);                          // Учитываем половину ширины элемента
}

/* Функция для активации горизонтальной прокрутки с использованием колесика мыши внутри определенного контейнера */
function enableHorizontalScroll(containerSelector) {
    const container = document.querySelector(containerSelector); // Выбираем контейнер для применения горизонтальной прокрутки
    container.addEventListener('wheel', (e) => {                 // Добавляем обработчик события 'wheel' на контейнере
        e.preventDefault();                                      // Предотвращаем стандартное вертикальное поведение прокрутки
        container.scrollLeft += e.deltaY;                        // Регулируем горизонтальную позицию прокрутки в зависимости от движения колесика
    });
}

window.onload = function () {
    // Вызываем функцию centerItemInView для определенных каруселей и элементов после полной загрузки окна
    centerItemInView('.interesting-for-you__carousel', '.interesting-for-you__list li:nth-child(3)');
    centerItemInView('.similar-hotels__carousel', '.similar-hotels__list li:nth-child(1)');
};

// Активируем горизонтальную прокрутку для определенных каруселей
enableHorizontalScroll('.interesting-for-you__carousel');
enableHorizontalScroll('.similar-hotels__carousel');