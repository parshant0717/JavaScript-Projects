let form = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let src = input[0].value;
  let nameUser = input[1].value;
  let occup = input[2].value;
  let email = input[3].value;
  let abt = input[4].value;
  const cardBody = document.querySelector("#cardBody");

  let card = document.createElement("div");
  card.setAttribute("id", "card");
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "deleteBtn");
  deleteBtn.textContent = "✕";

  let profile = document.createElement("div");
  profile.setAttribute("id", "profile");

  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("height", "60px");
  img.setAttribute("width", "60px");
  img.setAttribute("alt", "profileImage");

  let nameEL = document.createElement("p");
  nameEL.setAttribute("id", "name");
  nameEL.textContent = nameUser;

  let occH = document.createElement("h6");
  occH.setAttribute("id", "occupation");
  occH.textContent = occup;

  let emaillEl = document.createElement("p");
  emaillEl.setAttribute("id", "email");
  emaillEl.textContent = email;

  let aboutEl = document.createElement("p");
  aboutEl.setAttribute("id", "text");
  aboutEl.textContent = abt;

  profile.appendChild(img);

  card.appendChild(deleteBtn);
  card.appendChild(profile);
  card.appendChild(nameEL);
  card.appendChild(occH);
  card.appendChild(emaillEl);
  card.appendChild(aboutEl);

  cardBody.appendChild(card);
  input.forEach((elem) => {
    if (elem.type !== "submit") {
      elem.value = "";
    }
  });

  deleteBtn.addEventListener("click", (e) => {
    card.remove();
  });
});
