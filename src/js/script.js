// TODO
// Trouver l'élément d'ID "a-mettre-en-rouge"
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");

// Changer la couleur du texte de cet élément
aMettreEnRouge.style.color = "red";

// Trouver l'élément d'ID "en-rouge-suite-a-click"
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");

// Écouter les clicks sur lui pour alors le mettre en rouge
enRougeSuiteAClick.addEventListener("click", (evt) => {
  enRougeSuiteAClick.style.color = "red";
});

// Trouver tous les éléments <h2>
const collH2 = document.querySelectorAll("h2");

// Pour chacun, suite à un click, mettre la cible de l'événement en rouge
collH2.forEach((elm) => {
  elm.addEventListener("click", (evt) => {
    evt.target.style.color = "red";
  });
});
