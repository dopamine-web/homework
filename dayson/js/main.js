// Бурег

document.querySelector('.header__burger').addEventListener('click', function () {
    document.body.classList.toggle('body--opened-menu');
});

document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('body--opened-menu');
    });
});



// плюс минус

var mixer = mixitup('.special-offers__products');


let btnUp = document.querySelectorAll(".up"),
    btnDown = document.querySelectorAll(".down"),
    input = document.querySelectorAll("input");


btnDown.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        if (item.parentNode.querySelector("input").value > "0") {
            item.nextElementSibling.stepDown();
        };

    });
});

btnUp.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        item.previousElementSibling.stepUp();

    });
})

// аккордеон

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const currentlyActive = document.querySelector(".accordion-item-header.active");


        if (currentlyActive && currentlyActive !== accordionItemHeader) {
            currentlyActive.classList.remove("active");
            currentlyActive.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


const cartCountElement = document.querySelector(".cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Показываем кружок, если он был скрыт
        if (cartCountElement.classList.contains("show")) {
            cartCountElement.classList.remove("show");
        }
    });
});

