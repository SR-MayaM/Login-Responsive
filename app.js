
const boton = document.querySelector('.log');
const emailInput = document.querySelector('.Email');

boton.addEventListener('click', (event) => {
 
  event.preventDefault();
  
  // Añadimos la clase que activa la animación
  emailInput.classList.add('hidden');

  
  setTimeout(() => {
    emailInput.style.display = "none"; 
  }, 500);

  if(emailInput.style.display == "none"){
    setTimeout(() => {
        emailInput.classList.add('visible');
        emailInput.style.display = "flex"; 
      }, 500);
  }
});

