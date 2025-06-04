// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}





// Alterna entre o tema claro e escuro
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Alterna entre os idiomas Português e Inglês
let currentLang = 'en'; // Idioma padrão

function toggleLang() {
  currentLang = currentLang === 'en' ? 'pt' : 'en';

  const langElements = document.querySelectorAll(".lang");
  langElements.forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) {
      el.textContent = text;
    }
  });
}
