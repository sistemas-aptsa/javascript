const inpu = document.getElementById('ipu');
const boton1 = document.getElementById('boton');
const lista2=document.getElementById('lista9');

inpu.focus();


boton1.addEventListener('click', (e)=> {
  e.preventDefault()
  verValor()
});

const verValor = () => {
  const inpu2 = inpu.value;
  (inpu2.length) ?  mostrar(inpu2): alert('Ingresa un valor')
}

const mostrar=(tarea)=>{
  const mostro = `<li>${tarea}</li>`;
  //console.log(mostro)
  // lista2 += const lista=`<li>${mostro}</li>`
  lista2.innerHTML += mostro;
  inpu.value = "";
  inpu.focus()
}
let arreglo = Array.from(lista2.children);
console.log(arreglo);

    
    
    
    