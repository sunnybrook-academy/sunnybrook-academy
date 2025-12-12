const character = document.getElementById("character-sprite");
const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const choicesBox = document.getElementById("choices");

/* Helper: create choices */
function showChoices(options) {
    choicesBox.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("div");
        btn.classList.add("choice-btn");
        btn.textContent = opt.label;
        btn.onclick = opt.action;
        choicesBox.appendChild(btn);
    });
}

/* Start of intro survey */
function startSurvey() {
    speaker.textContent = "Nathan";
    text.textContent = "Hey there! Before we start, I need a little info from you.";

    showChoices([
        { label: "Sure, ask away.", action: question1 },
        { label: "Do I have to?", action: reluctant }
    ]);
}

function reluctant() {
    text.textContent = "Sadly… yeah. I promise it won’t take long.";
    showChoices([
        { label: "Alright, fine.", action: question1 }
    ]);
}

function question1() {
    text.textContent = "First off — what's your name?";
    showChoices([
        { label: "Enter name", action: askPlayerName }
    ]);
}

function askPlayerName() {
    const name = prompt("Enter your name:");
    window.playerName = name ?? "Player";

    text.textContent = `Nice to meet you, ${window.playerName}.`;
    showChoices([{ label: "Next", action: question2 }]);
}

function question2() {
    text.textContent = "What year level are you in?";
    showChoices([
        { label: "Grade 7", action: endSurvey },
        { label: "Grade 8", action: endSurvey },
        { label: "Grade 9", action: endSurvey },
        { label: "Grade 10", action: endSurvey }
    ]);
}

function endSurvey() {
    text.textContent = "Great. Welcome to the school — your story starts now.";
    showChoices([
        { label: "Begin", action: () => {
            window.location.href = "game.html"; // sends player into the actual game
        }}
    ]);
}

/* Load Nathan's default sprite */
character.src = "assets/images/characters/Nathan/Nathan-neutral.png";

/* Start */
startSurvey();
