const hotelInfo = {
    'name': 'PGS Kiris Resort',
    'stars': 5,
    'address': 'Kiriş, Sahil Cd. No 9, 07980 Kemer/Antalya, Турция'
};

const dataHotelFeatures = [
    {
        'title': 'Пляж',
        'description': 'Наша гостиница имеет крутой пляж, где вы можете расслабиться',
        'img': 'images/feature_image_beach.jpg'
    },
    {
        'title': 'Отель',
        'description': 'В этом разделе вы сможете узнать нашу гостиницу лучше',
        'img': 'images/feature_image_hotel.jpg'
    },
    {
        'title': 'Питание в отеле',
        'description': 'Мы предоставляем трёхразовое питание за дополнительную плату',
        'img': 'images/feature_image_meals.jpg'
    },
    {
        'title': 'Развлечения',
        'description': 'Теннисный корт, три бассейна, приставка и даже больше',
        'img': 'images/feature_image_entertainments.jpg'
    }
];

function displayCardsHotelFeatures() {
    let hotelFeaturesList = document.getElementById('hotelFeaturesList');

    // Очистка предыдущего содержимого списка
    hotelFeaturesList.innerHTML = '';

    // Генерация элементов на основе данных
    dataHotelFeatures.forEach(feature => {
        const listItem = document.createElement('li');
        listItem.className = 'hotel-features__item';

        listItem.innerHTML = `
            <img src="${feature.img}" alt="${feature.title}" class="hotel-features__image">
            <h3 class="hotel-features__title">${feature.title}</h3>
            <p class="hotel-features__description">${feature.description}</p>
            <button class="hotel-features__button btn-more">Подробнее</button>
        `;

        hotelFeaturesList.appendChild(listItem);
    });
};

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

function scrollToFormSection() {
    // Найти кнопку "Войти" в шапке сайта
    const loginButton = document.querySelector('.header__login');

    // Найти секцию с формой
    const loginFormSection = document.querySelector('.login-form');

    // Добавить обработчик события клика на кнопку
    loginButton.addEventListener('click', function (event) {
        // Отменить стандартное поведение ссылки
        event.preventDefault();

        // Выполнить плавный скролл к секции с формой
        loginFormSection.scrollIntoView({behavior: 'smooth'});
    });
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

    // Активация горизонтальной прокрутки для каруселей
    enableHorizontalScroll(document.querySelector('.interesting-for-you__carousel'));
    enableHorizontalScroll(document.querySelector('.similar-hotels__carousel'));

    displayCardsHotelFeatures();
    scrollToFormSection();
}

window.onload = initializeFeatures;