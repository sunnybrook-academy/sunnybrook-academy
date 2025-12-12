// Simple dialogue example

let index = 0;

const script = [
    {
        text: "Oh, hey there! You're new, right? I'm Nathan.",
        choices: ["Yeah, first day!", "Who are you again?"]
    },
    {
        text: "Nice to meet you! Let me show you around.",
        choices: ["Let's go!", "No thanks."]
    }
];

const dialogueText = document.getElementById("dialogue-text");
const choicesBox = document.getElementById("choices");
const sprite = document.getElementById("nathan-sprite");

function loadScene() {
    let scene = script[index];

    dialogueText.textContent = scene.text;

    // Clear previous choices
    choicesBox.innerHTML = "";

    scene.choices.forEach((choice, i) => {
        let btn = document.createElement("button");
        btn.classList.add("choice");
        btn.textContent = choice;

        btn.addEventListener("click", () => {
            index++;
            if (index >= script.length) index = script.length - 1;
            loadScene();
        });

        choicesBox.appendChild(btn);
    });
}

loadScene();
