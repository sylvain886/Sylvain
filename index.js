function connexion(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const motdepasse = document.getElementById("motdepasse").value;

  const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

  if (!utilisateur) {
    alert("Aucun compte enregistré !");
    return;
  }

  if (email === utilisateur.email && motdepasse === utilisateur.motdepasse) {
    alert("Connexion réussie !");
    window.location.href = "bienvenue.html"; // Redirection vers la page de bienvenue
  } else {
    alert("Identifiants incorrects !");
  }
}
