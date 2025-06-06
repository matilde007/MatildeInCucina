// Dizionario delle ricette con titoli e link
const ricette = {
  "carbonara": "carbonara.html",
  "lasagne": "lasagne.html",
  "arancini": "arancini.html",
  "impasto buffet": "Impasto.html",
  "risotto allo zafferano": "risotto.html",
  "amatriciana": "amatriciana.html",
  "crocchette": "crocchette.html",
  "Pollo alla Pizzaiola": "Pollo alla Pizzaiola.html",
  "scaloppine al limone": "scaloppine.html",
  "filetto al pepe": "filetto al pepe verde.html",
  "Pan di Spagna": "pan di spagna.html",
  "tiramisù": "tiramisù.html",
  // Aggiungi altre ricette qui
};

const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  suggestionsBox.innerHTML = '';

  if (query.length == 0) return;

Object.entries(ricette).forEach(([nomeRicetta, linkRicetta]) => {
  if (nomeRicetta.includes(query)) {
    const suggestion = document.createElement('div');
    suggestion.innerHTML = nomeRicetta;
    suggestion.classList.add('suggestion-item');
    suggestion.style.cursor = 'pointer';
    suggestion.onclick = () => {
      window.location.href = linkRicetta;
    };
    suggestionsBox.appendChild(suggestion);
  }
});
});
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const query = this.value.toLowerCase().trim();
    if (ricette[query]) {
      window.location.href = ricette[query];
    }
  }
});
