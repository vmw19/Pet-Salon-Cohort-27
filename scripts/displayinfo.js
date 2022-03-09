//Create an object literal for the pet salon with the pet salon information
const petSalon={
    name:"Happy Pets Luxury Salon",
    address: {
        street:"Happy Pets Lane",
        number:"123", 
        zip:"32256",
        city: "McKinney",
        state:"Texas",
},
    workingHours:{
        open:"7:00 am",
        close:"7:00 pm",
    },//Create pets array in the object
    pets:[
        {//first pet
            name:"Scooby",
            age: 90,
            gender:"Male",
            breed:"Dane",
            service: "Grooming",
            ownerName:"Shaggy",
            contactPhone:"111-222-3333"
        },
        {//second pet
            name:"Cujo",
            age: 45,
            gender:"Female",
            breed:"Pit",
            service: "Nails Trim",
            ownerName:"Kaleb",
            contactPhone:"222-222-3333"
        },
        {//third pet
            name:"Tiny",
            age: 21,
            gender:"Female",
            breed:"Poodle",
            service: "Grooming",
            ownerName:"Joshua",
            contactPhone:"222-333-3333"
},
    ]
}
// console.log(petSalon.address.zip);
// console.log(petSalon.pets.length);
// //display the service in the console.
// console.log(petSalon.pets[0].service); //Grooming

   

//display the pet salon info in the footer section of the html (name, address, working hours, etc.)
document.getElementById("footer-info").innerHTML=<p>`Welcome to ${petSalon.name} in ${petSalon.address.city} ${petSalon.address.state}`. We are located at ${petSalon.address.number} {petSalon.address.street}</p>;

displaySalonInfo();
function displayPetNames(){


}