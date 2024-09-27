// Fetch multiple random meals to create an array of items
const fetchData = async (count) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const mealData = await response.json();
    data.push(mealData.meals[0]); // Add the meal object to the items array
  }
  return data;
};

const itemsPerPage = 4;
let currentPage = 1;
let items = [];
let totalPages = 0;

// Render items for the current page
function renderItems(items, page) {
  // Get the container and clear its content
  const container = document.getElementById("container");
  container.innerHTML = ""; // Clear existing content

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  // Create and display cards for the paginated items
  paginatedItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const mealTitle = document.createElement("h2");
    mealTitle.classList.add("title");
    mealTitle.textContent = item.strMeal;

    const mealImg = document.createElement("img");
    mealImg.classList.add("mealImg");
    mealImg.src = item.strMealThumb;
    mealImg.alt = item.strMeal;

    const details = document.createElement("p");
    details.classList.add("details");
    details.textContent = item.strTags
      ? item.strTags
      : `${item.strCategory} from the ${item.strArea} Region`;

    // Append elements to the card and the container
    card.append(mealTitle, mealImg, details);
    container.appendChild(card);
  });
}

// Enable or disable navigation buttons
function updateButtons() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pageNum = document.querySelector(".pageNum");

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  prevButton.classList.toggle("disabled", currentPage === 1);
  nextButton.classList.toggle("disabled", currentPage === totalPages);

  pageNum.textContent = currentPage;
}

// Handle pagination
function handlePagination() {
  renderItems(items, currentPage);
  updateButtons();
}

// Fetch data and initialize pagination
fetchData(20) // Fetch 12 meals to populate the pagination
  .then((data) => {
    items = data;
    totalPages = Math.ceil(items.length / itemsPerPage);
    handlePagination();
  })
  .catch((error) => console.error("Error fetching data:", error));

// Next/Previous button functionality
document.getElementById("next").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    handlePagination();
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    handlePagination();
  }
});
