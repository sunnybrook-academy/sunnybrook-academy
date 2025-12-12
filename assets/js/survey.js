const character = document.getElementById("character-sprite");
const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const choicesBox = document.getElementById("choices");

function setFont(fontClass) { text.className = fontClass; }
function setSprite(name, emotion) { character.src = `assets/images/characters/${name}/${emotion}.png`; }

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

/* Survey sequence */
function startSurvey() {
    speaker.textContent = "Nathan";
    setFont("font-friendly");
    setSprite("Nathan", "Nathan-happy");
    text.textContent = "Oh! Hey there! You must be the new student, right?";

    showChoices([
        { label: "Yeah, that’s me!", action: q1 },
        { label: "Who are you?", action: askWho },
        { label: "…", action: quiet }
    ]);
}

function askWho() { setSprite("Nathan","Nathan-neutral"); text.textContent="I'm Nathan, Student Ambassador."; showChoices([{label:"Alright.", action:q1}]); }
function quiet() { setSprite("Nathan","Nathan-neutral"); text.textContent="Shy? That's okay! I can talk for both of us."; showChoices([{label:"Okay…", action:q1}]); }
function q1() { setSprite("Nathan","Nathan-smile"); text.textContent="First things first… what’s your name?"; showChoices([{label:"Enter name", action:getName}]); }
function getName() { window.playerName = prompt("Enter your name:")||"Player"; text.textContent=`Nice to meet you, ${window.playerName}!`; showChoices([{label:"Next", action:q2}]); }
function q2() { setSprite("Nathan","Nathan-neutral"); text.textContent="What year level are you in?"; showChoices([{label:"7",action:endSurvey},{label:"8",action:endSurvey},{label:"9",action:endSurvey},{label:"10",action:endSurvey}]); }
function endSurvey() { setSprite("Nathan","Nathan-happy"); text.textContent="Alright! You're all set. Let’s get you inside."; showChoices([{label:"Begin", action:()=>window.location.href="game.html"}]); }

startSurvey();
