function getDataJsonAndDisplay() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Вызов функций с данными
            displayHotelInfo(data.hotelInfo);
            displayCardsHotelFeatures(data.dataHotelFeatures);
        })
        .catch(error => console.error('Fetch error:', error));
};

function displayHotelInfo(hotelInfo) {
    const hotelName = document.querySelector('.main-hotel__name');
    if (hotelName) {
        hotelName.textContent = hotelInfo.name;
    }

    const hotelStars = document.querySelector('.main-hotel__stars');
    if (hotelStars) {
        hotelStars.innerHTML = '★ '.repeat(hotelInfo.stars).trim();
    }

    const hotelAddress = document.querySelector('.main-hotel__address');
    if (hotelAddress) {
        hotelAddress.textContent = hotelInfo.address;
    }
}

function displayCardsHotelFeatures(dataHotelFeatures) {
    let hotelFeaturesList = document.getElementById('hotelFeaturesList');

    if (hotelFeaturesList) {
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
    } else {
        console.log('Error: hotelFeaturesList not Found')
    };
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

function preloaderPage() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            // Показываем контент
            content.style.display = 'block';

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }
};

/**
 * Инициализация каруселей и их элементов, а также установка заголовков 
 * после полной загрузки окна
 */
function initializeFeatures() {
    preloaderPage();
    
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

    getDataJsonAndDisplay();
    scrollToFormSection();
}

window.onload = initializeFeatures;