// Vanilla JS
// Vanilla JavaScript
// recuperamos el botón
const btn = document.querySelector('button');
//a1 hacer click en eI botón, tenemos que ejecutar una función
btn.addEventListener('click', () => {
  // recuperar la id del atributo del HTML
  const id = btn.getAttribute('data—id');
  // llamar a un servicio para actualizar si me gusta
  // toggIeLike(id)
  if (btn.classList.contains('liked')) {
    btn.classList.remove('liked');
    btn.innerText = 'Me gusta';
  } else {
    btn.classList.add('liked');
    btn.innerText = 'Quitar me gusta';
  }
});
