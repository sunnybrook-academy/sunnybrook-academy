const character = document.getElementById("character-sprite");
const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const choices = document.getElementById("choices");
const background = document.getElementById("background");

function setFont(f) { text.className = f; }
function setSprite(name, emotion) { character.src = `assets/images/characters/${name}/${emotion}.png`; }
function setBackground(img) { background.src = img; }

function scene1() {
    speaker.textContent = "Nathan";
    setFont("font-friendly");
    setSprite("Nathan","Nathan-smile");
    text.textContent = `Sooo… ${window.playerName}, how does it feel being here?`;

    choices.innerHTML=`
        <div class='choice-btn' onclick='scene2()'>Excited!</div>
        <div class='choice-btn' onclick='scene3()'>Nervous…</div>
        <div class='choice-btn' onclick='scene4()'>I already hate it here.</div>
    `;
}

function scene2(){ text.textContent="That's awesome! I love your energy."; choices.innerHTML=`<div class='choice-btn' onclick='scene5()'>Continue</div>`; }
function scene3(){ setSprite("Nathan","Nathan-neutral"); text.textContent="You’ll be fine. I promise."; choices.innerHTML=`<div class='choice-btn' onclick='scene5()'>Continue</div>`; }
function scene4(){ setSprite("Nathan","Nathan-sad"); text.textContent="O-oh… I hope you'll warm up to it."; choices.innerHTML=`<div class='choice-btn' onclick='scene5()'>Continue</div>`; }
function scene5(){ speaker.textContent="???"; setFont("font-glitch"); text.textContent="Do you remember why you're really here?"; choices.innerHTML=`<div class='choice-btn' onclick='scene6()'>What?</div>`; }
function scene6(){ speaker.textContent="Narrator"; setFont("font-narrative"); text.textContent="A strange silence fills the hallway."; choices.innerHTML=""; }

scene1();                        
