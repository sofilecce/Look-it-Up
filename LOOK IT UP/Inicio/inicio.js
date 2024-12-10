// Datos simulados con categorías
const results = [
  { title: "Cómo practicar yoga", description: "Guía básica para principiantes", img: "https://c.stocksy.com/a/ivPH00/z9/4151254.jpg", category: "health", url: "yoga.html" },
  { title: "Últimas noticias del día", description: "Resumen de las noticias más importantes", img: "https://www.clarin.com/img/2024/12/03/Buqd9Yjc8_720x0__1.jpg", category: "news", url: "noticia.html" },
  { title: "Galería de paisajes", description: "Disfruta de imágenes de la naturaleza", img: "https://wallpapers.com/images/hd/aesthetic-nature-tumblr-yx09mp7zrksyvs1e.jpg", category: "images", url: "galeria.html" },
  { title: "Videos de animales divertidos", description: "Ríe con estos momentos graciosos", img: "https://i.pinimg.com/736x/14/23/02/14230237bd91350b6e74a6673b8dde28.jpg", category: "videos", url: "videos.html" },
  { title: "Ofertas de tecnología", description: "Compra dispositivos al mejor precio", img: "https://i.pinimg.com/236x/b9/8a/c7/b98ac7158e4490754b4d1b8763b83191.jpg", category: "shopping", url: "compras.html" },
  { title: "Reporte del clima", description: "Pronóstico del tiempo para la semana", img: "https://play-lh.googleusercontent.com/znc7FD1BqyFR92b8n6hyROZrAR3FsTyV_ThO79hyuQG-Nb45z2qHFDTnf1HXH50DYg", category: "weather", url: "clima.html" },
  { title: "Economía global", description: "Análisis financiero del mercado actual", img: "https://comprometidosconasturias.com/wp-content/uploads/2022/02/Situacion-Actual-y-Previsiones-de-la-Economia-Mundial-para-2022.jpg", category: "economy", url: "economia.html" },
  { title: "Tutoriales de Photoshop", description: "Aprende a editar imágenes como un profesional", img: "https://i.ytimg.com/vi/kUInHwkfNUU/maxresdefault.jpg", category: "images", url: "photoshop.html" },
  { title: "Videos de recetas fáciles", description: "Cocina rápido y fácil con estas ideas", img: "https://i.pinimg.com/564x/dc/2a/36/dc2a365215de1600127dc8d8bc58782a.jpg", category: "videos", url: "recetas.html" },
  { title: "Noticias deportivas", description: "Entérate de los resultados del día", img: "https://www.amalgamcollection.com/cdn/shop/products/afb6a9c3-9cd0-4960-baf9-7eb0c1019273_grande.jpg?v=1705941011", category: "news", url: "deportes.html" }
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
  const link = document.createElement('a');
  link.href = result.url || "#"; // Si no tiene URL, usa "#"
  

  const item = document.createElement('div');
  item.classList.add('results-item', 'col-md-4', 'mb-4'); // Clases de Bootstrap

  const img = document.createElement('img');
  img.src = result.img;
  img.alt = result.title;
  img.classList.add('img-fluid', 'rounded'); // Clases para imágenes responsivas

  const title = document.createElement('h3');
  title.textContent = result.title;
  title.classList.add('mt-3');

  const description = document.createElement('p');
  description.textContent = result.description;

  // Agregar elementos al contenedor
  item.appendChild(img);
  item.appendChild(title);
  item.appendChild(description);

  // Agregar el contenedor al enlace
  link.appendChild(item);

  return link;
}

// Actualizar los resultados
function updateResults() {
  const query = searchInput.value.trim();
  resultsContainer.innerHTML = ''; // Limpiar contenedor

  const filteredResults = searchMatches(query, currentCategory);

  if (filteredResults.length > 0) {
    filteredResults.forEach(result => {
      const resultElement = createResult(result);
      resultsContainer.appendChild(resultElement);
    });
  } else {
    resultsContainer.innerHTML = '<p class="text-center text-muted">No se encontraron resultados.</p>';
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

// Leer el parámetro "search" de la URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('search');

if (query) {
  searchInput.value = query; // Mostrar la búsqueda en el input
  updateResults();           // Actualizar los resultados según el query
}