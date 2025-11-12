// Sample contractor data
const contractors = [
  { name: "PoojariAnnA Builders", rateWithMaterial: 1600, rateWithoutMaterial: 950, experience: "10 years", contact: "poojarianna@gmail.com" },
  { name: "Ballal Constructions", rateWithMaterial: 1800, rateWithoutMaterial: 1100, experience: "8 years", contact: "rushibhai@gmail.com" },
  { name: "Katke Patil Developers", rateWithMaterial: 1500, rateWithoutMaterial: 900, experience: "12 years", contact: "aniketdada@gmail.com" },
  { name: "Deva M Constructions", rateWithMaterial: 1700, rateWithoutMaterial: 1050, experience: "7 years", contact: "devabuilders@gmail.com" }
];

// Function to display contractors
function showContractors() {
  const container = document.getElementById("contractorList");
  container.innerHTML = "";

  contractors.forEach(contractor => {
    const card = document.createElement("div");
    card.classList.add("contractor-card");
    card.innerHTML = `
      <h3>${contractor.name}</h3>
      <p><b>Rate (With Material):</b> ₹${contractor.rateWithMaterial}/sq.ft</p>
      <p><b>Rate (Without Material):</b> ₹${contractor.rateWithoutMaterial}/sq.ft</p>
      <p><b>Experience:</b> ${contractor.experience}</p>
      <p><b>Contact:</b> ${contractor.contact}</p>
      <button onclick="book('${contractor.name}')">Book Now</button>
    `;
    container.appendChild(card);
  });
}

// Booking button alert
function book(name) {
  alert(`You have selected ${name}. Our team will contact you soon!`);
}

// Load data when page opens
window.onload = showContractors;
