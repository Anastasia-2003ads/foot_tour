let listHotelFeaturesTitles = ['Пляж', 'Отель', 'Питание в отеле', 'Развлечения'];

document.addEventListener("DOMContentLoaded", () => {
    const cardsHotelFeatures = document.querySelector('.hotel-features');
    
    if (cardsHotelFeatures) {
        const queryTitles = document.querySelectorAll('.hotel-features__title');

        queryTitles.forEach((node, i) => {
            node.textContent = listHotelFeaturesTitles[i];
        });
    }
});

/* Центрирование элемента внутри прокручиваемого контейнера */
function centerItemInView(containerSelector, itemSelector) {
    const container = document.querySelector(containerSelector);
    const targetItem = document.querySelector(itemSelector);
    container.scrollLeft = targetItem.offsetLeft
        - (container.offsetWidth / 2)
        + (targetItem.offsetWidth / 2);
}

/* Активация горизонтальной прокрутки с использованием колесика мыши внутри определенного контейнера */
function enableHorizontalScroll(containerSelector) {
    const container = document.querySelector(containerSelector);
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    });
}

window.onload = function () {
    const condition = true;

    if (condition) {
        // Вызыв для определенных каруселей и элементов после полной загрузки окна
        centerItemInView('.interesting-for-you__carousel', '.interesting-for-you__list li:nth-child(3)');
        centerItemInView('.similar-hotels__carousel', '.similar-hotels__list li:nth-child(1)');
    }
};

// Активация горизонтальной прокрутки для определенных каруселей
enableHorizontalScroll('.interesting-for-you__carousel');
enableHorizontalScroll('.similar-hotels__carousel');