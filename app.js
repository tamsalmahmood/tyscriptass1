// 1. Calculate total price of each item and all items
const itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 },
  ];
  
  let totalPriceAll = 0;
  
  itemsArray.forEach(item => {
    const totalPrice = item.price * item.quantity;
    totalPriceAll += totalPrice;
    console.log(`${item.name} Total Price: ${totalPrice}`);
  });
  
  console.log(`Total Price of All Items: ${totalPriceAll}`);
  
  // 2. Check if certain properties exist
  const user = {
    name: "Ali",
    email: "ali@example.com",
    password: "1234",
    age: 25,
    gender: "male",
    city: "Karachi",
    country: "Pakistan",
  };
  
  console.log("age" in user); // true
  console.log("country" in user); // true
  console.log("firstName" in user); // false
  console.log("lastName" in user); // false
  
  // 3. Create constructor function for multiple records
  function Person1(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  const person1 = new Person("Ali", 25, "male");
  const person2 = new Person("Ayesha", 22, "female");
  
  console.log(person1, person2);
  
  // 4. Population constructor
  function Population(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  
  // Example Records
  const record1 = new Population("Ali", "male", "Karachi", "Bachelors", "Engineer");
  const record2 = new Population("Ayesha", "female", "Lahore", "Masters", "Teacher");
  
  console.log(record1, record2);
  
  //  Save records in localStorage
  localStorage.setItem("populationRecords", JSON.stringify([record1, record2]));
  console.log(JSON.parse(localStorage.getItem("populationRecords")));
  