fetch('data.json')
    .then(res => res.json())
    .then(data => {
        // Shared info
        const name = data.name;
        const title = data.title;
        const email = data.contact.email;
        const address = data.contact.address;

        // For index.html
        if (document.getElementById("profile-name")) {
            document.getElementById("profile-name").textContent = name;
            document.getElementById("profile-title").textContent = title;
            document.querySelector(".contact-list").innerHTML = `
        <li><i class="fas fa-map-marker-alt"></i> <span>${address}</span></li>
        <li><i class="fas fa-envelope"></i> <a href="mailto:${email}" class="link">${email}</a></li>
      `;

            // Skills
            const skillsContainer = document.getElementById("skills");
            data.skills.forEach(skill => {
                const span = document.createElement("span");
                span.className = "skill-tag";
                span.textContent = skill;
                skillsContainer.appendChild(span);
            });

            // Experience
            const experienceContainer = document.getElementById("experience");
            data.experience.forEach(job => {
                const card = document.createElement("div");
                card.className = "experience-card";
                card.innerHTML = `
          <div class="experience-header">
            <div>
              <h3>${job.company} - ${job.title}</h3>
              <p class="experience-subtitle">${job.subtitle}</p>
            </div>
            <p class="experience-date">${job.date}</p>
          </div>
          <ul class="experience-details">
            ${job.details.map(d => `<li>${d}</li>`).join("")}
          </ul>
        `;
                experienceContainer.appendChild(card);
            });

            // Education
            document.querySelector(".education-section h3").textContent = data.education.degree;
            document.querySelector(".education-university").textContent = data.education.university;
            document.querySelector(".education-details").textContent = data.education.details;

            // References
            document.querySelector(".references-card").innerHTML = `<p>${data.references}</p>`;
        }

        // For cv.html
        if (document.getElementById("cv-name")) {
            document.getElementById("cv-name").textContent = name;
            document.getElementById("cv-title").textContent = title;
            document.getElementById("cv-address").textContent = address;
            document.getElementById("cv-email").textContent = email;
            document.getElementById("cv-email").href = `mailto:${email}`;

            // Experience
            const cvExp = document.getElementById("cv-experience");
            data.experience.forEach(job => {
                const section = document.createElement("section");
                section.innerHTML = `
          <h3>${job.company} - ${job.title}</h3>
          <p>${job.date}</p>
          <ul>${job.details.map(d => `<li>${d}</li>`).join("")}</ul>
        `;
                cvExp.appendChild(section);
            });

            // Education
            document.getElementById("cv-education-degree").textContent = `${data.education.university} - ${data.education.degree}`;
            document.getElementById("cv-education-details").textContent = data.education.details;

            // Skills
            const cvSkills = document.getElementById("cv-skills");
            data.skills.forEach(skill => {
                const li = document.createElement("li");
                li.textContent = skill;
                cvSkills.appendChild(li);
            });

            document.getElementById("cv-references").textContent = data.references;
        }
    });