const message = document.querySelector(".visit-msg");
let lastVisit = JSON.parse(localStorage.getItem("visited")) || 0;
const todaysDate = Date.now();
const daysBetweenVisits = Math.floor((todaysDate - lastVisit) / 86400000);

let msg = "Welcome! Let us know if you have any questions.";
if (lastVisit !== 0) {
  if (daysBetweenVisits === 0) {
    msg = "Back so soon? Awesome!";
  } else {
    msg = `You last visited ${daysBetweenVisits} day(s) ago.`;
  }
}

message.textContent = msg;
localStorage.setItem("visited", todaysDate);

fetch('./data/raleigh.json')
  .then(response => response.json())
  .then(raleighData => {
    const container = document.querySelector('#raleighCards');
    
    raleighData.forEach(item => {
      const card = document.createElement('article');
      card.classList.add('raleigh-card');
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="./images/${item.image}" 
               alt="${item.name}" 
               width="300" 
               height="200" 
               loading="lazy">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching Raleigh JSON:', error));
