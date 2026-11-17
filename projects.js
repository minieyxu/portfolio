const aboutSections = ['#about', '#resume', '#contact'];
function openOldAboutLink() {
  if (aboutSections.includes(location.hash)) location.replace('about.html' + location.hash);
}
openOldAboutLink();
window.addEventListener('hashchange', openOldAboutLink);
