let hunger = 5;
let happiness = 5;
let energy = 5;

function updateStatus() {
    let feelingStatus = document.getElementById("feelingStatus");
    let statStatus = document.getElementById("statStatus");
  
    let statusMessage = `HUNGER: ${hunger}, HAPPINESS: ${happiness}, ENERGY: ${energy}`;
    statusMessage = statusMessage.toUpperCase();
  
    if (hunger >= 8 || happiness <= 2 || energy <= 2) {
      feelingStatus.textContent = "FEELING: not happy :(";
    } else {
      feelingStatus.textContent = "FEELING: happy!";
    }
  
    statStatus.textContent = statusMessage;
  }

function feedPet() {
  hunger = Math.max(0, hunger - 2);
  energy = Math.min(10, energy + 1);
  updateStatus();
}

function playWithPet() {
  happiness = Math.min(10, happiness + 2);
  energy = Math.max(0, energy - 2);
  hunger = Math.min(10, hunger + 1);
  updateStatus();
}

function restPet() {
  energy = Math.min(10, energy + 3);
  hunger = Math.min(10, hunger + 1);
  updateStatus();
}

fetch("pet_tips.txt")
  .then(response => response.text())
  .then(data => {
    console.log("Pet Tips Loaded:", data);
  })
  .catch(error => console.error("Error loading tips:", error));