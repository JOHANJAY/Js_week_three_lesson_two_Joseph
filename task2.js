const body = document.querySelector("body");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("password");
const button = document.getElementById("submit");
const finalText = document.getElementById("para");

const getApi = async () => {
  const user = {
    username: userName.value,
    email: email.value,
    password: passWord.value,
  };

  try {
    const response = await fetch(
      "https://bolowys-social.onrender.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    console.log(user);
    finalText.textContent = `User ${user.username} successfully registerd`;
    body.style.backgroundColor = "green";
  } catch (error) {
    console.error("Error", error);
    finalText.textContent = "User registeration Failed try again";
    body.style.backgroundColor = "red";
  }
};

button.addEventListener("click", getApi);

