
    //Define a function checkProperty() that will use the following object passed as
    // an argument to print the output in the console:

    let property = {
      owner: {
        firstName: "John",
        lastName: "Doe",
        age: 44
      },
      isForSale: false,
      sqrm: 120,
      address: {
        street: "Happy St",
        number: 123,
        city: "Miami",
        state: "FL",
        country: "US"
      },
      amenities: ["pool", "tennis court", "private parking", "yard"]
    };
    
   function checkProperty(){
       if (property.isForSale === true){
           console.log(`The owner, ${property.owner.firstName} ${property.owner.lastName} put the home for sale! The property has ${property.amenities.length} amenities.`);
       } else {
           console.log(`The home in ${property.address.street} ${property.address.number} is not for sale.`);
       }
    }
   
   
   checkProperty(property);

   /* The output: if the property isForSale equals to true, the expected output 
   to the console should be: 
   The owner, John Doe put the home for sale! The property has 4 amenities. 
   In the other case, we should see the following: 
   The home in Happy St no. 123 is not for sale.   
    Hint: To get the number of amenities, use length property of the array. */