// Sélectionner le conteneur du portfolio
var portfolio = document.querySelector(".portfolio");
// Sélectionner tous les projets dans le portfolio
var projects = portfolio.querySelectorAll(".project");
// Sélectionner le bouton "Afficher tous les projets"
var showAllButton = document.querySelector(".show-all-btn");

// Fonction pour basculer entre les projets
function toggleProject(project) {
  // Supprimer la classe "active" de tous les projets
  projects.forEach(function (proj) {
    proj.classList.remove("active");
  });

  // Ajouter la classe "active" au projet sélectionné
  project.classList.add("active");

  // Masquer tous les projets sauf le projet sélectionné
  projects.forEach(function (proj) {
    if (proj !== project) {
      proj.style.display = "none";
    }
  });

  // Vérifier la visibilité du bouton "Afficher tous les projets"
  checkShowAllButtonVisibility();
}

// Fonction pour afficher tous les projets
function showAllProjects() {
  // Supprimer la classe "active" de tous les projets
  projects.forEach(function (proj) {
    proj.classList.remove("active");
  });

  // Afficher tous les projets
  projects.forEach(function (proj) {
    proj.style.display = "block";
  });

  showAllButton.addEventListener("click", location.reload(), false);
  // Masquer le bouton "Afficher tous les projets"

  hideShowAllButton();
}

// Fonction pour vérifier la visibilité du bouton "Afficher tous les projets"

function checkShowAllButtonVisibility() {
  // Sélectionner les projets visibles (qui n'ont pas la classe "active")
  var visibleProjects = portfolio.querySelectorAll(".project:not(.active)");

  // Vérifier s'il n'y a aucun projet visible
  if (visibleProjects.length === 0) {
    // Masquer le bouton "Afficher tous les projets"
    hideShowAllButton();
  } else {
    // Afficher le bouton "Afficher tous les projets"
    showShowAllButton();
  }
}

// Fonction pour masquer le bouton "Afficher tous les projets"
function hideShowAllButton() {
  showAllButton.style.display = "none";
}

// Fonction pour afficher le bouton "Afficher tous les projets"
function showShowAllButton() {
  showAllButton.style.display = "block";
}
