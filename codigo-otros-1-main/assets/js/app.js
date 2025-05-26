const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Cambio de sintaxis, se agrega "." porque es "class"
const $b = document.querySelector('.blog'); //Cambio de sintaxis, se agrega "." porque es "class"
const $l = document.querySelector('.location');

async function displayUser(username) { // Hacer async la funcion
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Se añade response.json() para convertir la respuesta a objeto JSON
  console.log(data);
  $n.textContent = `${data.name}`; //Cambio de las comillas
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);