const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  // { name: "Carol", price: 70, occupation: "Programmer" },
  // { name: "Karen", price: 45, occupation: "Teacher" },
  // { name: "Geoff", price: 55, occupation: "Writer" },
  // { name: "Aaron", price: 60, occupation: "Programmer" },
  // { name: "Cory", price: 35, occupation: "Teacher" },
  // { name: "Reba", price: 65, occupation: "Driver" },
];

//body attributes
const body = document.querySelector("body");
body.style.border = "double";
body.style.color = "yellow";
body.style.backgroundColor = "black";

//header attributes
const header = document.getElementById("forum-header");
header.innerHTML = `<h1>Freelancer Forum</h1>`;
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.flexDirection = "column";
header.style.alignItems = "center";
header.style.textAlign = "center";

//calculate average price and return it
function averagePrice() {
  const sum = freelancers.reduce((acc, current) => acc + current.price, 0);
  return sum / freelancers.length;
}

//display attributes for render popup of each freelancer
const renderFreelancer = () => {
  const freelancerDisplay = document.getElementById("freelancer-display");
  freelancerDisplay.style.display = "flex";
  freelancerDisplay.style.flexWrap = "wrap";
  freelancerDisplay.style.justifyContent = "space-evenly";
  freelancerDisplay.style.alignContent = "center";
  freelancerDisplay.style.flexDirection = "column";
  freelancerDisplay.style.textAlign = "center";
  freelancerDisplay.style.gap = "35px";
  freelancerDisplay.style.marginBottom = "20px";
  freelancerDisplay.innerHTML = "";

  //loop through all the elements in the array, and execute the function to each element in the array
  freelancers.forEach((freelancer) => {
    const div = document.createElement("div");
    div.classList.add("freelancer");

    // const init = () => {
    // const section = document.createElement("section");
    // section.style.display = "flex";
    // section.style.justifyContent = "space-around";

    // for (let i = 0; i < freelancers.length; i++) {
    //   const element = freelancers[i];
    //   const div = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.innerText = freelancer.name;

    const occu = document.createElement("div");
    occu.innerText = `Occupation: ${freelancer.occupation}`;

    const price = document.createElement("div");
    price.innerText = `Price: $${freelancer.price}`;

    div.append(h3, occu, price);
    freelancerDisplay.append(div);
  });

  //attributes for available freelancer header
  const availableFL = document.getElementById("available-freelancers");
  availableFL.innerHTML = `<h1>Available Freelancers</h1>`;
  availableFL.style.display = "flex";
  availableFL.style.justifyContent = "center";
  availableFL.style.flexDirection = "column";
  availableFL.style.alignItems = "center";
  availableFL.style.textAlign = "center";

  //attributes for average price
  const avgPrice = document.getElementById("average-price");
  avgPrice.innerHTML = `<h3>The Average Starting Price is $${averagePrice()}.</h3>`;
  avgPrice.style.display = "flex";
  avgPrice.style.justifyContent = "center";
  avgPrice.style.flexDirection = "column";
  avgPrice.style.alignItems = "center";
  avgPrice.style.textAlign = "center";
};

//let variable be assigned to the number of elements inside the array
let freelancerCount = freelancers.length;

//creation of random freelancers
function getRandomFL() {
  //if statement to make sure the variable to does not constantly run (infinite loop)
  if (freelancerCount >= 10) {
    return;
  }
  const names = [
    "James",
    "Michael",
    "Britney",
    "Paige",
    "Bob",
    "Gayle",
    "Tony",
    "Sarah",
  ];
  const prices = [35, 64, 55, 71, 44, 38];
  const occupations = ["Writer", "Teacher", "Programmer", "Driver"];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];
  const randomOccu =
    occupations[Math.floor(Math.random() * occupations.length)];

  const newFreelancer = {
    name: randomName,
    price: randomPrice,
    occupation: randomOccu,
  };

  //push new freelancer into freelancer, increase the variable by 1, then update the array
  freelancers.push(newFreelancer);
  freelancerCount++;
  renderFreelancer();
}
renderFreelancer();

//setInterval(function, interval(in milliseconds)) repeatedly executes a provided function at a fixed interval
setInterval(getRandomFL, 3000);

// init();
// getRandomFL();
