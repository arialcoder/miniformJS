const error = document.getElementById('error');
const errorUsuario = document.getElementById('errorUsuario');
error.style.color = 'red';
errorUsuario.style.color = 'red';
const form = document.getElementById('formulario'); 

form.addEventListener('submit',(e) => {
  // Evita que se recargue la pagina
  e.preventDefault();
  //llamo a la funcion para validar los inputs
  validar();
});

function validar(){
  
 const usuario = document.getElementById('usuario').value;
 const password = document.getElementById('password').value;

  errorUsuario.innerHTML =""
  error.innerHTML =""

  if(usuario.length === 0 || password.length === 0){
      errorUsuario.innerHTML =""
      error.innerHTML = 'Ingrese todos los campos'
      return false;
  }
  else if (usuario.length > 20 || password.length > 10){
      error.innerHTML = 'Los datos ingresados son muy largos'
      return false;
  }
  else if(!usuario.includes('@') ){
      error.innerHTML =""
      errorUsuario.innerHTML = "El Usuario debe tener un @"
        setTimeout (function(){
          errorUsuario.innerHTML ="";
        },3000);

    return false;
  }
  else 
    errorUsuario.innerHTML =""
    error.innerHTML =""
    alert("Enviando Formulario")
    document.getElementById("formulario").reset();
   return true;
}
