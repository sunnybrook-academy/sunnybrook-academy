// Dialogue text element
const dialogueText = document.getElementById("dialogue-text");

// Nathan sprite
const sprite = document.getElementById("nathan-sprite");

// Map emotions to sprite file names
const emotions = {
    neutral: "img/nathan_neutral.png",
    happy: "img/nathan_happy.png",
    smile: "img/nathan_smile.png",
    sad: "img/nathan_sad.png"
};

// Add event listeners to ALL buttons
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {

        // Change dialogue text
        dialogueText.textContent = button.dataset.dialogue;

        // Change sprite image
        const emotion = button.dataset.emotion;
        sprite.src = emotions[emotion];
    });
});
