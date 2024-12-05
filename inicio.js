// Datos simulados con categorías
const results = [
  { title: "Cómo practicar yoga", description: "Guía básica para principiantes", img: "https://via.placeholder.com/300x150", category: "health" },
  { title: "Últimas noticias del día", description: "Resumen de las noticias más importantes", img: "https://via.placeholder.com/300x150", category: "news" },
  { title: "Galería de paisajes", description: "Disfruta de imágenes de la naturaleza", img: "https://via.placeholder.com/300x150", category: "images" },
  { title: "Videos de animales divertidos", description: "Ríe con estos momentos graciosos", img: "https://via.placeholder.com/300x150", category: "videos" },
  { title: "Ofertas de tecnología", description: "Compra dispositivos al mejor precio", img: "https://via.placeholder.com/300x150", category: "shopping" },
  { title: "Reporte del clima", description: "Pronóstico del tiempo para la semana", img: "https://via.placeholder.com/300x150", category: "weather" },
  { title: "Economía global", description: "Análisis financiero del mercado actual", img: "https://via.placeholder.com/300x150", category: "economy" },
  { title: "Tutoriales de Photoshop", description: "Aprende a editar imágenes como un profesional", img: "https://via.placeholder.com/300x150", category: "images" },
  { title: "Videos de recetas fáciles", description: "Cocina rápido y fácil con estas ideas", img: "https://via.placeholder.com/300x150", category: "videos" },
  { title: "Noticias deportivas", description: "Entérate de los resultados del día", img: "https://via.placeholder.com/300x150", category: "news" }
];

// Elementos del DOM
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results-container');
const categoryButtons = document.querySelectorAll('.category');

// Estado actual
let currentCategory = "all";

// Filtrar resultados por categoría y búsqueda
function searchMatches(query, category) {
  const lowerCaseQuery = query.toLowerCase();
  return results.filter(result =>
      (category === "all" || result.category === category) &&
      (result.title.toLowerCase().includes(lowerCaseQuery) || result.description.toLowerCase().includes(lowerCaseQuery))
  );
}

// Crear un resultado dinámico
function createResult(result) {
  const item = document.createElement('div');
  item.classList.add('result-item');

  const img = document.createElement('img');
  img.src = result.img;
  img.alt = result.title;

  const title = document.createElement('h3');
  title.textContent = result.title;

  const description = document.createElement('p');
  description.textContent = result.description;

  item.appendChild(img);
  item.appendChild(title);
  item.appendChild(description);

  return item;
}

// Actualizar los resultados
function updateResults() {
  const query = searchInput.value.trim();
  resultsContainer.innerHTML = '';

  const filteredResults = searchMatches(query, currentCategory);

  if (filteredResults.length > 0) {
      filteredResults.forEach(result => {
          const resultElement = createResult(result);
          resultsContainer.appendChild(resultElement);
      });
  } else {
      resultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
  }
}

// Manejar cambios en la categoría
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
      currentCategory = button.getAttribute('data-category');
      updateResults();
  });
});

// Escuchar cambios en el input
searchInput.addEventListener('input', updateResults);
