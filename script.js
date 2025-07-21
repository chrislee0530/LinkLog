document.addEventListener("DOMContentLoaded", () => {
    const dashboard = document.querySelector(".dashboard");

    const contacts = [
        {
            name: "Jane Doe",
            title: "Product Manager",
            company: "Google",
            date: "May 10, 2025",
            notes: "Talked about PM interviews, growth at Google.",
            email: "jane.doe@gmail.com",
            linkedin: "https://linkedin.com/in/janedoe"
        },
        {
            name: "Alex Kim",
            title: "Software Engineer",
            company: "Microsoft",
            date: "June 2, 2025",
            notes: "Discussed team structure and internships.",
            email: "alex.kim@microsoft.com",
            linkedin: "https://linkedin.com/in/alexkim"
        },
        {
            name: "King Bob",
            title: "Product Manager",
            company: "Google",
            date: "July 19, 2025",
            notes: "Talked about Google APM structure.",
            email: "king.bob@google.com",
            linkedin: "https://linkedin.com/in/kingbob"
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
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>LinkedIn:</strong> <a href="${contact.linkedin}" target="_blank">${contact.linkedin}</a></p>
          </div>
        </div>
      `;

        card.addEventListener("click", () => {
            const inner = card.querySelector(".card-inner");
            if (inner) {
                inner.classList.toggle("flipped");
            }
        });

        dashboard.appendChild(card);
    });

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const newContact = {
                name: document.getElementById("name").value.trim(),
                title: document.getElementById("title").value.trim(),
                company: document.getElementById("company").value.trim(),
                date: document.getElementById("date").value,
                notes: document.getElementById("notes").value.trim(),
                email: document.getElementById("email").value.trim(),
                linkedin: document.getElementById("linkedin").value.trim(),
            };

            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div class="card-inner">
                  <div class="card-front">
                    <h2>${newContact.name}</h2>
                    <p>${newContact.title}</p>
                    <p>${newContact.company}</p>
                  </div>
                  <div class="card-back">
                    <p><strong>Met on:</strong> ${newContact.date}</p>
                    <p><strong>Notes:</strong> ${newContact.notes}</p>
                    <p><strong>Email:</strong> ${newContact.email}</p>
                    <p><strong>LinkedIn:</strong> <a href="${newContact.linkedin}" target="_blank">${newContact.linkedin}</a></p>
                  </div>
                </div>
            `;

            card.addEventListener("click", () => {
                const inner = card.querySelector(".card-inner");
                if (inner) {
                    inner.classList.toggle("flipped");
                }
            });

            dashboard.appendChild(card);
            form.reset();
        });
    }
});