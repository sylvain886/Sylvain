const conseils = [
    "Ne donnez pas de chocolat à votre chien, c'est toxique.",
    "Privilégiez les croquettes de qualité adaptées à son âge.",
    "Ne donnez pas trop de friandises.",
    "L’eau fraîche doit toujours être disponible.",
    "Évitez les restes de table riches en graisses ou épices.",
    "Ne donnez jamais d'avocat à votre chien, c'est toxique.",
    "Les restes de repas humains peuvent causer des troubles digestifs.",
    "Le sucre n’a rien à faire dans la gamelle d’un chien.",
    "Une gamelle propre est aussi importante que ce qu’elle contient.",
    "Les aliments industriels pour humains ne sont pas faits pour lui.",
    "Une ration ménagère doit être équilibrée et validée par un vétérinaire.",
    "Le chien ne doit pas grignoter entre les repas.",
    "Pas de pâte crue ni de levure, cela gonfle dans l'estomac.",
    "Un peu de courgette cuite peut aider à la satiété sans surpoids.",
    "Les aliments épicés irritent l’estomac du chien.",
    "Pas de café, ni thé, ni boisson énergisante : c’est toxique !",
    "Le foie en excès peut causer des troubles osseux chez le chien.",
    "Ne jamais donner de bonbons ou de chewing-gums sucrés au xylitol.",
    "Les croquettes doivent être conservées dans un endroit sec et frais.",
    "Ne donnez pas d’aliments trop froids ou sortis du frigo brusquement.",
    "Le chien a besoin de protéines animales, pas d’alimentation 100% végétale.",
    "Surveillez son poids régulièrement pour ajuster les quantités.",
    "Évitez de nourrir votre chien directement à table pour éviter les mauvaises habitudes.",
    "Si votre chien boude sa gamelle, ne le forcez pas, vérifiez d’abord sa santé.",
    "Un chien actif a besoin de plus d’énergie, adaptez les portions !"
];

function afficherConseil() {
    const index = Math.floor(Math.random() * conseils.length);
    document.getElementById("conseil").textContent = conseils[index];
}

setTimeout(() => {
  const bot = document.createElement("div");
  bot.className = "message";
  bot.textContent = "Assistant : Merci pour votre message, nous vous répondrons bientôt.";
  document.getElementById("messages").appendChild(bot);
}, 1000);
