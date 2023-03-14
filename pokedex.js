
// ACEDEMOS A LA API


const get = async (url) => {
  try {
    const respuesta = await fetch(url);
    const res = await respuesta.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

//MAPEAR 
const mapear = (personajes) =>{
   return personajes.map((personaje) =>({
    nombre:personaje.name,
    imagen:personaje.sprites.other.dream_world.front_default,
   // habilidad:personaje.abilities,
   //sprites.other.home
    tipos:personaje.type,
   }));
};

// VMOS A PINTAR

const pintados = (pintar)=> {
    const carta = `
 
    <div class ="carta">

    <div class = "nombrecarta">
          <h3>${pintar.nombre.toUpperCase()}</h3>
          </div>

    <div>
    <img src ="${pintar.imagen}" alt ="${pintar.nombre}">
    </div>

    </div>
    `;
    const ol$$=document.querySelector("#pokedex");
    ol$$.innerHTML += carta;

 
}


// CREAMOS LA FUNCION PADRE



const arrayPoke = [];

const init = async () => {
    for (let i = 1; i <= 151; i++){
        let generar = await get(`https://pokeapi.co/api/v2/pokemon/${i}`);
     
        arrayPoke.push(generar);
       //console.log(arrayPoke)

    }


const puestos = mapear(arrayPoke);

for (const iterator of puestos) {
    pintados(iterator);
    
}

cogerInput(puestos);
}



 init()


 
 const cogerInput = (personajes) => {
  //console.log(characters);
  const input$$ = document.querySelector("input");
  //console.log(input$$);

  //le damos evento de escuchar

  input$$.addEventListener("input", () => busqueda(input$$.value, personajes));
};
//le damos filtro

const busqueda = (filtro, personajes) => {
  //console.log(characters);
  let charactersFiltrados = personajes.filter((personaje) =>
    personaje.nombre.toLowerCase().includes(filtro)
  );
  // console.log(charactersFiltrados);


  ol$$ = document.querySelector("ol");
  ol$$.innerHTML = "";
  for (const characterrr of charactersFiltrados) {
    pintados(characterrr);
  }
};



