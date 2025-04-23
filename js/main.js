function generateRandomColor() {
  const cores = [
    "#196F3D",
    "#2E4053",
    "#5B2C6F",
    "#922B21",
    "#1A5276",
    "#121212",
    "#b9770e",
    "#616a6b",
    "#008080",
  ];
  return cores[Math.floor(Math.random() * cores.length)];
}

// document.body.style.backgroundColor = generateRandomColor();

function age(dateOfBirth) {
  const today = new Date();
  const birth = new Date(dateOfBirth);
  const diffMs = today - birth;
  const msPerYear = 1000 * 60 * 60 * 24 * 365.2425;
  return diffMs / msPerYear;
}

function formatAge(age) {
  return `Fausto is ${age.toFixed(10)} years old!`;
}

const dateOfBirth = "1991-10-20";
const fieldAge = document.getElementById("age");

function updateAge() {
  const value = age(dateOfBirth);
  fieldAge.textContent = formatAge(value);
}

updateAge();
setInterval(updateAge, 100);
