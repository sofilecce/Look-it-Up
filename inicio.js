document.querySelector('.search-button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar').value;
    alert(`Buscando: ${query}`);
  });
