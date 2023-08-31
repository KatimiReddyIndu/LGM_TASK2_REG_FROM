document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const userData = document.getElementById('userData');
  
    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const imageLink = document.getElementById('imageLink').value;
      const website = document.getElementById('website').value;
      const gender = document.getElementById('gender').value;
      const skills = document.getElementById('skills').value;
  
      const userDataHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Image Link: <a href="${imageLink}" target="_blank">${imageLink}</a></p>
        <p>Website: <a href="${website}" target="_blank">${website}</a></p>
        <p>Gender: ${gender}</p>
        <p>Skills: ${skills}</p>
      `;
  
      userData.innerHTML = userDataHTML;
      userData.classList.remove('hidden');
    });
  });
  