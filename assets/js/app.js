


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameUser = document.querySelector('.name');//Cambio de nombre a variables a nombres mas intuitivos.
const blog = document.querySelector('.blog');//Cambio de # a . para entrar a los atributos
const userLocation = document.querySelector('.location');

const displayUser = async (username) => {//Como tiene una promesa le agregue Async
  try { //Se agrego try para utilizar las promesas
    nameUser.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    nameUser.textContent = `${data.name}`;
    blog.textContent = `${data.blog}`;
    userLocation.textContent = `${data.location}`;
  } 
  catch (error) { //Se agrego catch y se elimino la funcion para reducir lineas de codigo
    console.log('OH NO!');
    console.log(error);
    nameUser.textContent = `Algo salió mal: ${error}`
  }

}
  displayUser('stolinski');

