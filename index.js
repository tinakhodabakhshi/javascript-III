class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    }
  }
}

const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luigi", "Verdi", 25, "Milano");

const comparisonResult = user1.compareAge(user2);
console.log(comparisonResult);
console.log("_____________________________");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  const li = document.createElement("li");
  li.textContent = `${newPet.petName} (${newPet.species} - ${newPet.breed}), proprietario: ${newPet.ownerName}`;
  petList.appendChild(li);

  // Reset form fields
  petForm.reset();
});
