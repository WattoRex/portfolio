const skillElements = document.querySelectorAll(".skill");

skillElements.forEach((skillElement) => {
  const skillPercentElement = skillElement.querySelector(".skill-percent");
  const skillPercentNumberElement = skillElement.querySelector(
    ".skill-percent-number"
  );

  skillElement.addEventListener("mouseenter", () => {
    skillPercentNumberElement.style.display = "block";
  });

  skillElement.addEventListener("mouseleave", () => {
    skillPercentNumberElement.style.display = "none";
  });
});

const checkbox1 = document.getElementById("show-percentages");
const checkbox2 = document.getElementById("show-percentages2");
const skills = document.querySelectorAll(".skill-percent-number");
const skills2 = document.querySelectorAll(".skill-percent-number2");
const skillLevels = document.querySelectorAll(".skill-level");

// Faire une classe différente pour les skill percent number pour la seconde ! // Separer pour le No hover

checkbox1.addEventListener("change", function () {
  if (checkbox1.checked) {
    skills.forEach((skill) => {
      skill.style.display = "block";
    });
    skillLevels.forEach((level) => {
      level.classList.add("no-hover");
    });
  } else {
    skills.forEach((skill) => {
      skill.style.display = "none";
    });
    skillLevels.forEach((level) => {
      level.classList.remove("no-hover");
    });
  }
});

checkbox2.addEventListener("change", function () {
  if (checkbox2.checked) {
    skills2.forEach((skill2) => {
      skill2.style.display = "block";
    });
    skillLevels.forEach((level) => {
      level.classList.add("no-hover");
    });
  } else {
    skills2.forEach((skill2) => {
      skill2.style.display = "none";
    });
    skillLevels.forEach((level) => {
      level.classList.remove("no-hover");
    });
  }
});
