// Choose a random letter to replace
// Replace the chosen letter with a picture frame
// Revert back to the original letter every X seconds
// Repeat every X seconds

const letters = document.querySelectorAll(".letter");

setInterval(addFrame, 1500);

function addFrame() {

    const letterArray = Array.from(letters);
    const result = letterArray.slice(1).sort(() => 0.5 - Math.random()).slice(0, 5);

    const images = ['cone', 'driver', 'shoes', 'sign', 'outfit', 'motor', 'windshield', 'smoke', 'truck']
    
    result.forEach((r) => {
        const randomImage = Math.floor(Math.random() * images.length)
        
        r.classList.add("frame");
        let newElem = document.createElement("span");
        newElem.classList.add("image");
        newElem.style.backgroundImage = `url(assets/${images[randomImage]}.jpg)`;
        newElem.style.backgroundSize = `auto ${Math.random() * (500 - 100) + 100}%`        
        r.appendChild(newElem);

        setTimeout(() => {
            r.classList.remove("frame");
            r.removeChild(newElem);
            newElem.classList.remove("image");
        }, 1000);
    })
    

}

const giftButton = document.getElementById("button--gift");
const printCard = document.getElementById("print");
const framesCard = document.getElementById("frames");

function toggleCard(card, showClass, hideClass, randomTransform, resetTransform) {
    if (card.classList.contains(hideClass)) {
        card.classList.remove(hideClass);
        card.classList.add(showClass);
        card.style.transform = randomTransform();
    } else {
        card.classList.remove(showClass);
        card.classList.add(hideClass);
        card.style.transform = resetTransform;
    }
};

giftButton.addEventListener("click", () => {
    toggleCard(
        printCard,
        "show--print",
        "hide",
        () => `translateY(${Math.random() * -100}%) rotate(${Math.random() * 25}deg)`,
        "translate(-50%, -50%) rotate(0deg)"
    );

    toggleCard(
        framesCard,
        "show--frames",
        "hide",
        () => `translateY(${Math.random() * -100}%) rotate(${Math.random() * -25}deg)`,
        "translate(-50%, -50%) rotate(0deg)"
    );

    giftButton.innerHTML = 
        printCard.classList.contains("show--print") ? "Close Gift" : "Open Gift";
});
