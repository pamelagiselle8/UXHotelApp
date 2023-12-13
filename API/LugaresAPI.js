export async function getLugares() {
  const lugares = [
    // Plantilla
    // {
    //   id: 1,
    //   img: "",
    //   nombre: "",
    //   ubicacion: "",
    //   estrellas: 1,
    //   reviews: 1,
    //   costo: 1,
    //   categoria: "",
    //   reservacion: {
    //     fechaEntrada: "",
    //     fechaSalida: "",
    //     idUsuario: 1,
    //   },
    //   servicios: [1, 2, 3],
    // },
    {
      id: 2,
      img: "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
      nombre: "Royal Palm Heritage",
      ubicacion: "Purwokerto, Jateng",
      estrellas: 4.3,
      reviews: 4368,
      costo: 245,
      categoria: "Hotel",
      reservacion: {
        fechaEntrada: "",
        fechaSalida: "",
        idUsuario: 1,
      },
      servicios: [1, 2, 3],
    },
    {
      id: 1,
      img: "https://forbes.es/wp-content/uploads/2023/05/Airbnb-Negocio_01.jpg?format=webp&width=831&height=467",
      nombre: "Royal Palm Heritage",
      ubicacion: "Purwokerto, Jateng",
      estrellas: 4.5,
      reviews: 4368,
      costo: 245,
      categoria: "Hotel",
      reservacion: {
        fechaEntrada: "",
        fechaSalida: "",
        idUsuario: 1,
      },
      servicios: [4, 5, 6],
    },
    {
      id: 1,
      img: "https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/16%3A9/w_2560%252Cc_limit/airbnb%252520luxe.jpg?format=webp&width=831&height=467",
      nombre: "Royal Palm Heritage",
      ubicacion: "Purwokerto, Jateng",
      estrellas: 4.5,
      reviews: 4368,
      costo: 245,
      categoria: "Hotel",
      reservacion: {
        fechaEntrada: "",
        fechaSalida: "",
        idUsuario: 1,
      },
      servicios: [4, 5, 6],
    },
  ];
  return lugares;
}
