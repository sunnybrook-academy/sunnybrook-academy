const dialogueText = document.getElementById("dialogue-text");
const characterSprite = document.getElementById("character-sprite");
const choicesBox = document.getElementById("choices");

let scene = {
    text: "Oh! You're the new student, right?",
    sprite: "assets/images/characters/Nathan/Nathan-neutral.png",
    choices: [
        { text: "Yeah, that’s me!", next: "A" },
        { text: "Who are you?", next: "B" },
        { text: "...", next: "C" }
    ]
};

function showScene(data) {
    // show dialogue
    dialogueText.textContent = data.text;

    // update sprite
    characterSprite.src = data.sprite;

    // update choices
    choicesBox.innerHTML = "";

    data.choices.forEach(choice => {
        let btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice.text;

        btn.onclick = () => handleChoice(choice.next);

        choicesBox.appendChild(btn);
    });
}

function handleChoice(option) {
    if (option === "A") {
        showScene({
            text: "Haha—nice to meet you! I'm Nathan.",
            sprite: "assets/images/characters/Nathan/Nathan-happy.png",
            choices: []
        });
    }

    if (option === "B") {
        showScene({
            text: "Oh! Right—I'm Nathan. President of the welcoming committee.",
            sprite: "assets/images/characters/Nathan/Nathan-smile.png",
            choices: []
        });
    }

    if (option === "C") {
        showScene({
            text: "…Not much of a talker, huh?",
            sprite: "assets/images/characters/Nathan/Nathan-sad.png",
            choices: []
        });
    }
}

showScene(scene);
