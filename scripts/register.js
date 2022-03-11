//create the constructor
function Pet(name, age, gender, breed, service, ownerName, contactPhone){
    this.petName=name
    this.petAge=age
    this.petGener=gender
    // this.petNBreed=breed
    // this.petService=service
    // this.petownerName=ownerName
    // this.petcontactPhone=contactPhone

}
//create some pets
let Scooby=new Pet("Scooby", 90, "Male");
let Cujo=new Pet("Cujo", 45, "Female");
let Tiny=new Pet("Tiny", 21, "Female");
petSalon.pets.push(Scooby, Cujo, Tiny);


//get the info from the inputs
let inputPetName=document.getElementById("txtPetName");
let inputPetAge=document.getElementById("txtPetAge");
let inputPetGender=document.getElementById("txtPetGender");
 let inputPetBreed=document.getElementById("txtPetBreed");
// let inputPetService=document.getElementById("txtPetService");
// let inputPetOwnerName=document.getElementById("txtPetOwerName");
// let inputPetOwnerPhone=document.getElementById("txtPetOwnerPhone");

function register(){
    console.log(inputPetName.value, inputPetAge.value, inputPetGender.value);
    //create the objects
    let thePet = new Pet (inputPetName.value, inputPetAge.value, inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwnerName.value,inputPetOwnerPhone.value,);
    console.log(thePet);
    //push the objects
    petSalon.pets.push(thePet);
    //display the objects in the console
}