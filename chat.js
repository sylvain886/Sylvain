function envoyerMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  afficherMessage(message, "user");

  const reponse = genererReponse(message.toLowerCase());
  setTimeout(() => {
    afficherMessage(reponse.message, "bot", reponse.isHtml);
  }, 500);

  input.value = "";
}

function afficherMessage(message, type, isHtml = false) {
  const box = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = type + "-message";

  if (isHtml) {
    msg.innerHTML = message;  // Pour les boutons, liens, mise en forme
  } else {
    msg.textContent = message; // Pour du texte normal
  }

  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}


function genererReponse(message) {
  if (message.includes("bonjour") || message.includes("salut")) {
    return { message: "Bonjour 👋 et bienvenue chez Univers Canin ! Je suis GUIDEON l’assistant virtuel de SYLVAIN, prêt à vous guider dans l’univers des chiens 🐶 ! Que puis-je faire pour vous aujourd’hui ?", isHtml: false };
  }
  if (message.includes("alimentation") || message.includes("croquettes")) {
    return { message: "Pour bien nourrir votre chien, privilégiez des croquettes riches en protéines animales.", isHtml: false };
  }
  if (message.includes("race") || message.includes("races")) {
    return { message: "Il existe plusieurs races : berger allemand, labrador, husky, etc. Consultez notre page Races 🐕.", isHtml: false };
  }
  if (message.includes("humain") || message.includes("parler") || message.includes("personne")) {
    // Retourner un bouton WhatsApp en HTML
    const html = `
      Vous pouvez discuter avec un conseiller :
      <br>
      <a href="https://wa.me/243977895886" target="_blank">
        <button style="margin-top: 8px; background:#25D366; color:white; border:none; padding:10px 15px; border-radius:5px; cursor:pointer;">
          📱 Parler sur WhatsApp
        </button>
      </a>`;
    return { message: html, isHtml: true };
  }

  return { message: "Je ne suis pas sûr de comprendre... Tapez 'humain' si vous souhaitez parler à un conseiller 🧑‍💼", isHtml: false };
}
