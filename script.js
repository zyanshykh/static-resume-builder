document.getElementById("toggle-skill").addEventListener("click", function () {
  var skillList = document.getElementById("skillList");
  if (skillList.style.display === "none") {
    skillList.style.display = "block";
  } else {
    skillList.style.display = "none";
  }
});
