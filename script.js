const nameKey = document.getElementById("name-key");
const ageKey = document.getElementById("age-key");
const emailKey = document.getElementById("email-key");
const mobKey = document.getElementById("mob-key");

const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const mob = document.getElementById("mob");

const actionBtn = document.getElementById("submitBtn");
const infoBtn = document.querySelector(".infoBtn");
const infoPage = document.querySelector(".infoPage");

const formField = document.querySelector(".formField");

const greetings = document.querySelector(".greetings");

function getInputs(e) {
  e.preventDefault();
  const nameKeyValue = nameKey.value;
  const nameValue = name.value;

  const ageKeyValue = ageKey.value;
  const ageValue = age.value;

  const emailKeyValue = emailKey.value;
  const emailValue = email.value;

  const mobKeyValue = mobKey.value;
  const mobValue = mob.value;

  if (
    (nameKeyValue && nameValue) ||
    (ageKeyValue && ageValue) ||
    (emailKeyValue && emailValue) ||
    (mobKeyValue && mobValue)
  ) {
    localStorage.setItem(nameKeyValue, nameValue);
    localStorage.setItem(ageKeyValue, ageValue);
    localStorage.setItem(emailKeyValue, emailValue);
    localStorage.setItem(mobKeyValue, mobValue);

    formField.style.display = "none";
    greetings.style.display = "block";
    infoBtn.style.display = "block";
  } else {
    alert(`Please! Fill the form first.`);
  }
}

function getOutputs() {
  let output = `<div class="info"><p><b>Name: </b>${localStorage.getItem(
    "name"
  )}</p>  <br>
    <p><b>Age: </b> ${localStorage.getItem("age")}</p> <br>
    <p><b> Email: </b>${localStorage.getItem("email")}</p><br>
    <p><b>Mob: </b>${localStorage.getItem("mob")}
    </div>
    `;
  formField.style.display = "none";
  greetings.style.display = "none";
  infoPage.style.display = "block";

  infoPage.innerHTML = output;
}

actionBtn.addEventListener("click", getInputs);
infoBtn.addEventListener("click", getOutputs);
