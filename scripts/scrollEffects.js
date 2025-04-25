function centerItemInView(containerSelector, itemSelector) {
    const container = document.querySelector(containerSelector);
    const targetItem = document.querySelector(itemSelector);
    container.scrollLeft = targetItem.offsetLeft - (container.offsetWidth / 2) + (targetItem.offsetWidth / 2);
}

function enableHorizontalScroll(containerSelector) {
    const container = document.querySelector(containerSelector);
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    });
}

window.onload = function () {
    centerItemInView('.interesting-for-you__carousel', '.interesting-for-you__list li:nth-child(3)');
    centerItemInView('.similar-hotels__carousel', 'similar-hotels__list li:nth-child(1)');
};

enableHorizontalScroll('.interesting-for-you__carousel');
enableHorizontalScroll('.similar-hotels__carousel');