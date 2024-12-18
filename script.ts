document.getElementById("toggle-skill")!.addEventListener("click", () => {
  const skillList = document.getElementById("skill-list");
  if (skillList!.style.display == "none") {
    skillList!.style.display = "block";
  } else {
    skillList!.style.display = "none";
  }
});
