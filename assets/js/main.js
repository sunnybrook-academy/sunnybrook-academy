// assets/js/main.js
window.addEventListener("DOMContentLoaded", () => {
  // element refs
  const dialogueEl = document.getElementById("text");
  const speakerEl = document.getElementById("speaker");
  const spriteEl = document.getElementById("character-sprite");
  const choicesEl = document.getElementById("choices");
  const textboxEl = document.getElementById("textbox");

  console.log("main.js: DOM ready.");
  if(!dialogueEl) { console.error("main.js: #text element not found"); }
  if(!choicesEl) { console.error("main.js: #choices element not found"); }
  if(!spriteEl) { console.error("main.js: #character-sprite not found"); }

  // ensure textbox visible (defensive)
  textboxEl.style.display = "block";
  textboxEl.style.opacity = "1";
  textboxEl.style.visibility = "visible";

  // small helper: set sprite (case-sensitive path)
  function setSprite(name, filename) {
    const path = `assets/images/characters/${name}/${filename}`;
    spriteEl.src = path;
    console.log("setSprite ->", path);
  }

  // render a scene object
  function renderScene(scene) {
    try {
      speakerEl.textContent = scene.speaker || "Narrator";
      dialogueEl.textContent = scene.text || "";
      if(scene.sprite) setSprite(scene.spriteFolder || "Nathan", scene.sprite);
      renderChoices(scene.choices || []);
    } catch(err) {
      console.error("renderScene error:", err);
    }
  }

  // show choices array [{ label, onSelect }]
  function renderChoices(list) {
    choicesEl.innerHTML = "";
    list.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = c.label;
      btn.addEventListener("click", () => {
        console.log("choice clicked:", c.label);
        c.onSelect && c.onSelect();
      });
      choicesEl.appendChild(btn);
    });
  }

  // initial scene data (guaranteed to show)
  const startScene = {
    speaker: "Nathan",
    text: "Oh! You're the new student, right? (If you don't see this text, check the console.)",
    spriteFolder: "Nathan",
    sprite: "Nathan-neutral.png",
    choices: [
      { label: "Yeah, that's me!", onSelect: ()=> {
        renderScene({
          speaker: "Nathan",
          text: "Nice to meet you! I'm Nathan.",
          sprite: "Nathan-happy.png"
        });
      }},
      { label: "Who are you?", onSelect: ()=> {
        renderScene({
          speaker: "Nathan",
          text: "I'm Nathan — Student Ambassador.",
          sprite: "Nathan-smile.png"
        });
      }},
      { label: "…", onSelect: ()=> {
        renderScene({
          speaker: "Nathan",
          text: "That's okay. We can take it slow.",
          sprite: "Nathan-sad.png"
        });
      }}
    ]
  };

  // render the start scene
  renderScene(startScene);

  // Expose quick debug helpers in console for you
  window.__sb_debug = {
    setText: (s) => { dialogueEl.textContent = s; },
    setSpeaker: (s) => { speakerEl.textContent = s; },
    showScene: (sc) => { renderScene(sc); }
  };

  console.log("main.js: initialized. Try window.__sb_debug.setText('hi') in console.");
});
      
