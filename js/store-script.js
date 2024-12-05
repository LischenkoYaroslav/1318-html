/*

ЛОГІКА СТОРІНКИ З ПРОДУКТАМИ

При запуску сторінки за замовчуванням кількість відображуваних предметів - 8.
При зміні кількості відображуваних предметів буде запускатись функція, яка з масиву об'єктів буде генерувати розмітку і вставляти на сторінку.

Об'єкти складатимуться з: посилання на картинку, заголовку, та ціни.

--пізніше подумаю як реалізувати перемикання сторінок крамниці--

*/

//Масив даних для генерації карток//
let itemsArray = [
  {
    img: "store-img/adidas-black-trainers.jpg",
    title: "Adidas Black Trainers",
    price: "60,00",
  },
  {
    img: "store-img/adidas-campus.jpg",
    title: "Adidas Campus",
    price: "130,00",
  },
  {
    img: "store-img/adidas-cloudfoam-trainers.jpg",
    title: "Adidas Cloudfoam Trainers",
    price: "60,00",
  },
  {
    img: "store-img/adidas-compression-tee.jpg",
    title: "Adidas Compression Tee",
    price: "33,00",
  },
];

const count = document.getElementById("product-count");
const btn = document.getElementById("test-add");
const div = document.getElementById("test__store-item");

count.addEventListener("change", (event) => {
  let index = event.target.value;
  /* console.log(index); */
  div.innerHTML = "";
  for (let i = 0; i < index; i++) {
    addHtmlToDiv(i);
  }
});

function addHtmlToDiv(index) {
  div.innerHTML +=
    '<article class="store__item">' +
    '<img class="store__item-image" width="262" src="' +
    itemsArray[index].img +
    '" alt="' +
    itemsArray[index].title +
    '"/>' +
    '<h3 class="store__item-title"><a href="#" class="store__item-link">' +
    itemsArray[index].title +
    "</a></h3>" +
    '<p class="store__item-price">$' +
    itemsArray[index].price +
    "</p>" +
    '<button class="store__item-button">Buy</button></article>';
}

window.addEventListener('load', addHtmlToDiv(0))
/* '<article class="store__item">' + 
'<img class="store__item-image" width="262" src="' + itemsArray[0].img + '" alt="' + itemsArray[0].title + '"/>' + 
'<h3 class="store__item-title"><a href="#" class="store__item-link">' + itemsArray[0].title + '</a></h3>' + 
'<p class="store__item-price">$' + itemsArray[0].price + '</p>' + 
'<button class="store__item-button">Buy</button></article>' */