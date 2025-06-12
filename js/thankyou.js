const packs = {
  m5tw91k8: '../downloads/colorings/2025/1.pdf',
  p3gjl03x: '../downloads/colorings/2025/2.pdf',
  b6q81nzf: '../downloads/colorings/2025/3.pdf'
};

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const downloadLink = document.getElementById('downloadLink');
  const supportMessage = document.querySelector('.support');

  if (id && packs[id]) {
    const pack = packs[id];
    // Met à jour le lien de téléchargement
    downloadLink.href = pack;
    downloadLink.textContent = '📥Télécharger mon pack de coloriages';
    downloadLink.style.display = 'inline-block';

    // Cache le message d'erreur
    supportMessage.style.display = 'none';
  } else {
    // Cache le lien de téléchargement
    downloadLink.style.display = 'none';

    // Affiche le message d'erreur (déjà dans le HTML)
    supportMessage.style.display = 'block';
  }
});
