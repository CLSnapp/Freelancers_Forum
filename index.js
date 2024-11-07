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

const body = document.querySelector("body");
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.margin = "0";

let freelancerCount = freelancers.length;

//calculate average price
function averagePrice() {
  const sum = freelancers.reduce((acc, current) => acc + current.price, 0);
  return sum / freelancers.length;
}

const renderFreelancer = () => {
  const freelancerDisplay = document.getElementById("freelancer-display");
  freelancerDisplay.style.display = "flex";
  freelancerDisplay.style.flexWrap = "wrap";
  freelancerDisplay.style.justifyContent = "space-evenly";
  freelancerDisplay.style.alignContent = "center";
  freelancerDisplay.style.flexDirection = "column";
  freelancerDisplay.style.gap = "20px";
  freelancerDisplay.innerHTML = "";

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
    // div.append(occu);
    // div.append(price);
    freelancerDisplay.append(div);
  });

  const avgPrice = document.getElementById("average-price");
  avgPrice.innerHTML = `<h3>The Average Starting Price is $${averagePrice()}.</h3>`;
  avgPrice.style.display = "flex";
  avgPrice.style.justifyContent = "center";
  avgPrice.style.flexDirection = "column";
  avgPrice.style.alignItems = "center";
  avgPrice.style.textAlign = "center";
};

function getRandomFL() {
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

  freelancers.push(newFreelancer);
  freelancerCount++;
  renderFreelancer();
}
renderFreelancer();

//setInterval(function, interval(in milliseconds)) repeatedly executes a provided function at a fixed interval
setInterval(getRandomFL, 3000);

//   body.append(section);
// init();
// getRandomFL();
