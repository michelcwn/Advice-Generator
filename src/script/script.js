"use strict";

console.log("by michelcwn");
console.log("https://github.com/michelcwn");

// DOM Elements

const adviceNumber = document.querySelector(".main__advice-number");
const advice = document.querySelector(".main__advice");
const btn = document.querySelector(".button");

//API

const fetchRandomAdvice = async function () {
  try {
    const apiUrl = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`la requête a échoué`);
    const data = await response.json();
    adviceNumber.textContent = `Advice #${data.slip.id}`;
    advice.textContent = data.slip.advice;
  } catch (err) {
    console.log("Erreur lors de la récupération du conseil:", err);
  }
};

fetchRandomAdvice();

btn.addEventListener("click", fetchRandomAdvice);
