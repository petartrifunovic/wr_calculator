let form,
  deposit,
  bonus,
  wagering,
  selectDD,
  contribution,
  result,
  wrBtn,
  infoBtn;

init();

wrBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkInputs();
  calc();
});

// Info
infoBtn.addEventListener("click", function wrInfo() {
  document
    .querySelector(".wr-form__info")
    .classList.toggle("wr-form__info-active");
});

// Check Input Fields
function checkInputs() {
  const depositValue = deposit.value.trim();
  const bonusValue = bonus.value.trim();
  const wageringValue = wagering.value.trim();
  const contributionValue = contribution.value.trim();

  let selectDDCalc = selectDD.value;

  if (depositValue === "" && selectDDCalc !== "bon") {
    deposit.classList.add("wr-input__error");
  } else {
    deposit.classList.remove("wr-input__error");
  }

  if (bonusValue === "") {
    bonus.classList.add("wr-input__error");
  } else {
    bonus.classList.remove("wr-input__error");
  }

  if (wageringValue === "") {
    wagering.classList.add("wr-input__error");
  } else {
    wagering.classList.remove("wr-input__error");
  }

  if (contributionValue === "") {
    contribution.classList.add("wr-input__error");
  } else if (contributionValue > 100) {
    contribution.classList.add("wr-input__error");
    document.querySelector(".wr-form__small").style.opacity = "1";
    calculate.textContent = "";
  } else {
    contribution.classList.remove("wr-input__error");
    document.querySelector(".wr-form__small").style.opacity = "0";
  }
}

// Calculate
function calc() {
  const depositCalc = parseInt(deposit.value);
  const bonusCalc = parseInt(bonus.value);
  const wageringCalc = parseInt(wagering.value);
  const contributionCalc = parseInt(contribution.value);
  const selectDDCalc = selectDD.value;

  let calculate;

  if (selectDDCalc == "bon") {
    calculate = ((bonusCalc * wageringCalc) / contributionCalc) * 100;
  } else if (selectDDCalc == "bondep") {
    calculate =
      (((depositCalc + bonusCalc) * wageringCalc) / contributionCalc) * 100;
  }

  if (checkInputs && calculate) {
    document.querySelector("#wr-result").innerHTML = calculate.toFixed(0);
  }
}

// State variables
function init() {
  form = document.querySelector("#wr-form");
  deposit = document.querySelector("#wr-deposit");
  bonus = document.querySelector("#wr-bonus");
  wagering = document.querySelector("#wr-wagering");
  selectDD = document.querySelector("#wr-select");
  contribution = document.querySelector("#wr-contribution");
  result = document.querySelector("#wr-result");
  wrBtn = document.querySelector("#wr-btn");
  infoBtn = document.querySelector(".wr-form__info-icon");

  result.textContent = "";
}
