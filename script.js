const typedText = document.getElementById('typed-text');
const text = "through innovation and a passion for problem-solving.";

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } 
}

typeWriter();

function navigateToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}