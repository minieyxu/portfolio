const dialog = document.querySelector('.welcome-dialog');
let visited = false;
try {
  visited = sessionStorage.getItem('minie-welcome') === 'seen';
} catch {}
if (!visited) dialog.showModal();
dialog.addEventListener('close', () => {
  try { sessionStorage.setItem('minie-welcome', 'seen'); } catch {}
});
