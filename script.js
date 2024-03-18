

function changeLanguage(lang) {
  const elementsToTranslate = document.querySelectorAll('[data-lang]');
  elementsToTranslate.forEach(element => {
    const translationKey = element.getAttribute('data-lang');
    if (translationMap.hasOwnProperty(translationKey)) {
      const translation = translationMap[translationKey][lang];
      element.textContent = translation;
    }
  });
}


const languageLinks = document.querySelectorAll('.languages-link');
languageLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    languageLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang); 
  });
});
