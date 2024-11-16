// Your code here.
// Dynamic Profile Page

// Define some skills
const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"];

// Populate skills dynamically
const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);https://www.svgrepo.com/show/345221/three-dots.svg
});
