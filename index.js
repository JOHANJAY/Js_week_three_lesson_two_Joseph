const result = document.getElementById("result");

const getData = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    console.log(data);
    result.textContent = "Successful AJAX request";
  } catch (error) {
    console.log(error, "error");
    result.textContent = "Request failed, check internet connectivity";
  }
};

getData()