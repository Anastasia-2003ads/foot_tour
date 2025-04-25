let listHotelFeaturesTitles = ['Пляж', 'Отель', 'Питание в отеле', 'Развлечения'];

/**
 * Центрирование элемента внутри прокручиваемого контейнера
 * 
 * @param {HTMLElement} container - Контейнер для прокрутки
 * @param {HTMLElement} item - Элемент, который нужно центрировать
 */
function centerItemInView(container, item) {
    if (container && item) {
        container.scrollLeft = item.offsetLeft
            - (container.offsetWidth / 2)
            + (item.offsetWidth / 2);
    }
}

/**
 * Активация горизонтальной прокрутки с использованием колесика мыши
 * 
 * @param {HTMLElement} container - Контейнер, для которого активируется прокрутка
 */
function enableHorizontalScroll(container) {
    if (container) {
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        });
    }
}

/**
 * Инициализация каруселей и их элементов, а также установка заголовков 
 * после полной загрузки окна
 */
function initializeFeatures() {
    centerItemInView(
        document.querySelector('.interesting-for-you__carousel'),
        document.querySelector('.interesting-for-you__list li:nth-child(3)')
    );
    centerItemInView(
        document.querySelector('.similar-hotels__carousel'),
        document.querySelector('.similar-hotels__list li:nth-child(1)')
    );

    const cardsHotelFeatures = document.querySelector('.hotel-features');
    if (cardsHotelFeatures) {
        const queryTitles = document.querySelectorAll('.hotel-features__title');
        queryTitles.forEach((node, i) => {
            node.textContent = listHotelFeaturesTitles[i];
        });
    }

    // Активация горизонтальной прокрутки для каруселей
    enableHorizontalScroll(document.querySelector('.interesting-for-you__carousel'));
    enableHorizontalScroll(document.querySelector('.similar-hotels__carousel'));
}

window.onload = initializeFeatures;