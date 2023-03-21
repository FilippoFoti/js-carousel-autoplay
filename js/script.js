// Inserisco le immagini dinamiche nell'array
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemsContainer = document.querySelector(".slider-items");
const itemsContainerBonus = document.querySelector(".slider-bonus");

for (let i = 0; i < imgArray.length; i++) {
    const currentImg = imgArray [i];

    const sliderItem = `<div class = "item"><img src="${currentImg}" alt=""></div>`;
    const sliderBonus =`<div class = "bonus"><img src="${currentImg}" alt=""></div>`;
        
    itemsContainer.innerHTML += sliderItem;
    itemsContainerBonus.innerHTML += sliderBonus;
}

// Imposto la prima immagine e nascondo le altre in css
const itemsArray = document.getElementsByClassName("item");
console.log(itemsArray);

let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");

const secondBonus = document.getElementsByClassName("bonus");
console.log(secondBonus);

secondBonus[activeItemIndex].classList.add("bonus-active");

// Click primo bottone
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function() {
    prevBtn.classList.remove("hidden");
    if (activeItemIndex < (itemsArray.length - 1)) {
        // Rimuovo active dall'img precedente
        itemsArray[activeItemIndex].classList.remove("active");
        secondBonus[activeItemIndex].classList.remove("bonus-active");

        // Incremento
        activeItemIndex++;

        // Aggiungo active alla nuova img
        itemsArray[activeItemIndex].classList.add("active");
        secondBonus[activeItemIndex].classList.add("bonus-active");

    } else {
        // Rimuovo active dall'img precedente
        itemsArray[activeItemIndex].classList.remove("active");
        secondBonus[activeItemIndex].classList.remove("bonus-active");

        activeItemIndex = 0;

        // Aggiungo active alla nuova img
        itemsArray[activeItemIndex].classList.add("active");
        secondBonus[activeItemIndex].classList.add("bonus-active");
    }
});

// Click secondo bottone 
const prevBtn = document.querySelector(".prev");

prevBtn.addEventListener("click", function () {
    if (activeItemIndex > 0) {
    // Rimuovo l'hidden dal bottone
    nextBtn.classList.remove("hidden");

    // Rimuovo active
    itemsArray[activeItemIndex].classList.remove("active");
    secondBonus[activeItemIndex].classList.remove("bonus-active");

    // Decremento
    activeItemIndex--;

    // aggiungo active alla nuova img
    itemsArray[activeItemIndex].classList.add("active");
    secondBonus[activeItemIndex].classList.add("bonus-active");

    } else {
        // Rimuovo active
        itemsArray[activeItemIndex].classList.remove("active");
        secondBonus[activeItemIndex].classList.remove("bonus-active");

        activeItemIndex = 4;

        // aggiungo active alla nuova img
        itemsArray[activeItemIndex].classList.add("active");
        secondBonus[activeItemIndex].classList.add("bonus-active");
    }
});