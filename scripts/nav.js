function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
}
