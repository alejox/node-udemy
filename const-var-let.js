const nombre = 'Wolverine';//Scope global


if(true) { //Scope
  const nombre = 'Magneto';
  console.log(nombre);
}

console.log(nombre);