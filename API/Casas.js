export async function GetCasas() {
  const listaDeObjetos = [
    {
      id: 1,
      nombre: "Objeto 1",
      descripcion: "Descripción del objeto 1",
    },
    {
      id: 2,
      nombre: "Objeto 2",
      descripcion: "Descripción del objeto 2",
    },
    {
      id: 3,
      nombre: "Objeto 3",
      descripcion: "Descripción del objeto 3",
    },
  ];

  console.log(listaDeObjetos);

  return listaDeObjetos;
}
