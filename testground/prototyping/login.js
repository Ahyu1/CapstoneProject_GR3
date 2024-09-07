//#0953CD



document.addEventListener('DOMContentLoaded', () => {
      const register = document.getElementById("loginBtn");
      const registerURL = 'http://127.0.0.1:3000/prototyping/register.html';

      register.addEventListener('click', () => {
        window.location.href = registerURL;
    })
})



