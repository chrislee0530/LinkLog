document.addEventListener("DOMContentLoaded", () => {
    const dashboard = document.querySelector(".dashboard");
  
    const contacts = [
      {
        name: "Jane Doe",
        title: "Product Manager",
        company: "Google",
        date: "May 10, 2025",
        notes: "Talked about PM interviews, growth at Google."
      },
      {
        name: "Alex Kim",
        title: "Software Engineer",
        company: "Microsoft",
        date: "June 2, 2025",
        notes: "Discussed team structure and internships."
      }
    ];
  
    contacts.forEach(contact => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <h2>${contact.name}</h2>
            <p>${contact.title}</p>
            <p>${contact.company}</p>
          </div>
          <div class="card-back">
            <p><strong>Met on:</strong> ${contact.date}</p>
            <p><strong>Notes:</strong> ${contact.notes}</p>
          </div>
        </div>
      `;
  
      card.addEventListener("click", () => {
        card.querySelector(".card-inner").classList.toggle("flipped");
      });
  
      dashboard.appendChild(card);
    });
  });