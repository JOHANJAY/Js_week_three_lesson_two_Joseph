//so i made this fetch call for a random dog image generator for 9 images and as you can see it is very long
const dog = document.getElementsByTagName("img");
const generate = document.querySelector("button");

async function generateDogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[0].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[1].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[2].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[3].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[4].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[5].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[6].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[7].src = data.message;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dog[8].src = data.message;
    });
}

generateDogs();

//this is a more optimized way i got from chatgpt
/* const dogImages = document.getElementsByTagName("img");

async function generateDogs() {
  for (let i = 0; i < dogImages.length; i++) {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      dogImages[i].src = data.message;
    } catch (error) {
      console.log("Error fetching dog image:", error);
    }
  }
}

generateDogs() */
