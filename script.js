function getStarted() {
  alert("Welcome to Construction Wala! Let's explore contractors and workers.");
  window.location.href = "contractors.html"; // later, this will open contractor page
}


// ===== Workers Page Script =====

const workers = [
    {
        name: "Sandesh M",
        skill: "Electrician",
        experience: "5 years",
        rate: "₹800 / day",
        contact: "sandeshp@gmail.com"
    },
    {
        name: "Rushikesh B",
        skill: "Plumber",
        experience: "7 years",
        rate: "₹750 / day",
        contact: "rushi.plumber@gmail.com"
    },
    {
        name: "Aniket K",
        skill: "Painter",
        experience: "6 years",
        rate: "₹700 / day",
        contact: "aniket.painter@gmail.com"
    },
    {
        name: "Ajay D",
        skill: "Welder",
        experience: "4 years",
        rate: "₹850 / day",
        contact: "ajay.welder@gmail.com"
    }
];

const workerContainer = document.getElementById('worker-list');
if (workerContainer) {
    workers.forEach(worker => {
        const card = document.createElement('div');
        card.classList.add('worker-card');

        card.innerHTML = `
            <h3>${worker.name}</h3>
            <p>🔧 Skill: ${worker.skill}</p>
            <p>🧱 Experience: ${worker.experience}</p>
            <p class="rate">💰 Rate: ${worker.rate}</p>
            <button class="hire-btn" onclick="hireWorker('${worker.contact}')">Hire</button>
        `;

        workerContainer.appendChild(card);
    });
}

function hireWorker(email) {
    alert(`📩 Contact this worker at: ${email}`);
}

// ===== Contact Page Form =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset();
        } else {
            alert('⚠️ Please fill all fields before submitting.');
        }
    });
}

