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
    nextSlide();
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 3000);
})

// Click secondo bottone 
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function () {
    prevSlide();
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 3000);
});

// AUTOPLAY

let autoplayInterval;

function nextSlide() {
    prevBtn.classList.remove("hidden");
    if (activeItemIndex < (itemsArray.length - 1)) {
        itemsArray[activeItemIndex].classList.remove("active");
        secondBonus[activeItemIndex].classList.remove("bonus-active");

        activeItemIndex++;

        itemsArray[activeItemIndex].classList.add("active");
        secondBonus[activeItemIndex].classList.add("bonus-active");
    } else {
        itemsArray[activeItemIndex].classList.remove("active");
        secondBonus[activeItemIndex].classList.remove("bonus-active");

        activeItemIndex = 0;

        itemsArray[activeItemIndex].classList.add("active");
        secondBonus[activeItemIndex].classList.add("bonus-active");
    }
}

function prevSlide() {
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
}


function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay();

// Bonus 2

itemsContainer.addEventListener("mouseover", function() {
    clearInterval(autoplayInterval)
});

itemsContainer.addEventListener("mouseout", function() {
    autoplayInterval = setInterval(nextSlide, 3000)
})