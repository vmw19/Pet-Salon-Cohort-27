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
    pets:[]
}
// console.log(petSalon.address.zip);
// console.log(petSalon.pets.length);
// //display the service in the console.
// console.log(petSalon.pets[0].service); //Grooming

   

//display the pet salon info in the footer section of the html (name, address, working hours, etc.)
//document.getElementById("footer-info").innerHTML=`<p>Welcome to ${petSalon.name} in ${petSalon.address.city} ${petSalon.address.state} ${petSalon.address.zip}.We are located at ${petSalon.address.number} ${petSalon.address.street}. Our hours of operation are ${petSalon.workingHours.open} ${petSalon.workingHours.close}</p>`;


function displayPetNames(){
    for (let x=0; x <petSalon.pets.length;x++){
        document.write( `<div>${petSalon.pets[x].name} ${petSalon.pets[x].age} ${petSalon.pets[x].gender} ${petSalon.pets[x].breed} ${petSalon.pets[x].service} ${petSalon.pets[x].ownerName} ${petSalon.pets[x].contactPhone}</div>`)
    }
   
}
//displayPetNames();