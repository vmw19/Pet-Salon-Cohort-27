//create the constructor
let x = 0;

function Pet(name, age, gender, breed, service, ownerName, contactPhone) {
    this.petName = name;
    this.petAge = age;
    this.petGender = gender;
    this.id = x++;
    this.petBreed = breed;
    this.petService = service
    this.petOwnerName = ownerName
    this.petOwnerPhone = contactPhone
}
//create some pets
let Scooby = new Pet("Scooby", 90, "Male", "Pit", "Nail Trim", "Victoria", 155535685);
let Cujo = new Pet("Cujo", 45, "Female", "Poodle", "Bath", "Kaleb", 12222224555);
let Tiny = new Pet("Tiny", 21, "Female", "Bulldog", "Nail Trim", "Joshua", 1235913166);
petSalon.pets.push(Scooby, Cujo, Tiny);


//get the info from the inputs
let inputPetName = document.getElementById("txtPetName");
let inputPetAge = document.getElementById("txtPetAge");
let inputPetGender = document.getElementById("txtPetGender");
let inputPetBreed = document.getElementById("txtPetBreed");
let inputPetService = document.getElementById("txtPetService");
let inputPetOwnerName = document.getElementById("txtPetOwnersName");
let inputPetOwnerPhone = document.getElementById("txtPetOwnersPhone");

function register() {
    console.log(inputPetName.value, inputPetAge.value, inputPetGender.value);
    //create the objects
    let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetOwnerPhone.value);
    console.log(thePet);
    //push the objects
    petSalon.pets.push(thePet);
    //display the objects in the console
    displayPetsTable();
}

function displayPets() {
    //travel the array
    let tmp = "";
    for (let i = 0; i < petSalon.pets.length; i++) {
        //create the template
        // let newP = document.createElement("p");
        // console.log(newP);
        // let newText = document.createTextNode(`$petSalon.pets[i].petName`);
        // console.log(newtext);
        // newP.appendChild(newText);
        tmp += `
        <div class="pet">
    <h4> Name: ${petSalon.pets[i].petName}</h4>
    <p> Age: ${petSalon.pets[i].petAge}<p>
    <p> Gender: ${petSalon.pets[i].petGender}<p>
    <p> Breed: ${petSalon.pets[i].petBreed}<p>
    <p> Service: ${petSalon.pets[i].petService}<p>
    <p> PetOwnerName: ${petSalon.pets[i].petOwnerName}<p>
    <p> PetOwnerPhone: ${petSalon.pets[i].petOwnerPhone}<p>
    </div>
    `;
        console.log(tmp);
    }
    document.getElementById("pets").innerHTML = tmp;
    //display the tmp on the html
}

function displayPetsTable() {
    //travel the array
    let row = "";
    for (let i = 0; i < petSalon.pets.length; i++) {
        //create the template
        row += `
        <tr id=${petSalon.pets}>
            <td> ${petSalon.pets[i].petName}</td>
            <td> ${petSalon.pets[i].petAge}</td>
            <td>${petSalon.pets[i].petGender}</td>
            <td>${petSalon.pets[i].petBreed}</td>
            <td> ${petSalon.pets[i].petService}</td>
             <td>${petSalon.pets[i].petOwnerName}</td>
             <td> ${petSalon.pets[i].petOwnerPhone}</td>
            <td><button onclick="deletePet($petSalon.pets[i].id});"> Delete</button></td>
        </tr>
        `;
    }
    document.getElementById("petTable").innerHTML += row;
    //display the tmp on the html
};

function deletePet(petId) {
    console.log("Delete pet", petId);
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        if (pet.id == petId) {
            deleteIndex = i;
            console.log("I found the pet...." + deleteIndex);
            //remove the pet from the array
            petSalon.pets.splice(deleteIndex, 1);
            // remove the pet from the html
            document.getElementById(petId).remove();
        }
    }
}

function searchPet() {
    let searchString = document.getElementById("txtSearch").value;
    console.log(searchString);
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        if (pet.petName.toLowerCase() == searchString.toLowerCase() || pet.petGender.toLowercase() == searchString.toLowerCase()) {
            console.log("I found it");
            document.getElementById(pet.id).classList.add('bg-color');
        } else {
            document.getElementById(pet.id).classList.remove('bg-color');
        }
    }
}

function init() {
    //create some pets
    // let scooby = new Pet("Scooby", 90, "Male");
    // let cujo = new Pet("Cujo", 45, "Female");
    // let tiny = new Pet("Tiny", 21, "Female");
    // petSalon.pets.push(Scooby, Cujo, Tiny)
    displayPets();
    displayPetsTable();
}
window.onload = init;