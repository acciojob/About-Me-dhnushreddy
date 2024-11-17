// Your code here.
// Dynamic Profile Page

// Define some skills
const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"];

// Populate skills dynamically
const skillsList = document.getElementByClassName("skills");

skills.forEach(skill => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);