document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');

  searchButton.addEventListener('click', function () {
      const query = searchInput.value;

      // Limpia resultados anteriores
      resultsContainer.innerHTML = '';

      // Resultados simulados
      const sampleResults = [
          { title: 'Resultado 1', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 1.' },
          { title: 'Resultado 2', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 2.' },
          { title: 'Resultado 3', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 3.' },
          { title: 'Resultado 4', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 4.' },
          { title: 'Resultado 5', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 5.' },
          { title: 'Resultado 6', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 6.' },
          { title: 'Resultado 7', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 7.' },
          { title: 'Resultado 8', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 8.' },
          { title: 'Resultado 9', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 9.' },
          { title: 'Resultado 10', image: 'https://via.placeholder.com/150', description: 'Descripción del resultado 10.' },
      ];

      // Genera y muestra los resultados
      sampleResults.forEach(result => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('result-item');

          resultItem.innerHTML = `
              <img src="${result.image}" alt="${result.title}">
              <h3>${result.title}</h3>
              <p>${result.description}</p>
          `;

          resultsContainer.appendChild(resultItem);
      });
  });
});
