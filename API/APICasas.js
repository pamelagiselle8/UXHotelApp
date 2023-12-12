export async function getHospedajes() {
  const hospedajes = [
    {
      hospedaje: {
        id: 1,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Hotel Elegante",
        ubicacion: "Tegucigalpa, Honduras",
        estrellas: 4.5,
        reviews: 120,
        precio: 150,
        reservado: true,
      },
    },
    {
      hospedaje: {
        id: 2,
        imgUrl:
          "https://forbes.es/wp-content/uploads/2023/05/Airbnb-Negocio_01.jpg?format=webp&width=831&height=467",
        nombre: "Resort de Lujo",
        ubicacion: "Cancún, México",
        estrellas: 5.0,
        reviews: 300,
        precio: 300,
        reservado: false,
      },
    },
    {
      hospedaje: {
        id: 3,
        imgUrl:
          "https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/16%3A9/w_2560%252Cc_limit/airbnb%252520luxe.jpg?format=webp&width=831&height=467",
        nombre: "Hostal Encantador",
        ubicacion: "Barcelona, España",
        estrellas: 3.5,
        reviews: 80,
        precio: 70,
        reservado: true,
      },
    },
    {
      hospedaje: {
        id: 4,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Cabañas Serenas",
        ubicacion: "Buenos Aires, Argentina",
        estrellas: 4.0,
        reviews: 150,
        precio: 120,
        reservado: false,
      },
    },
    {
      hospedaje: {
        id: 5,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Apartamentos Modernos",
        ubicacion: "Roma, Italia",
        estrellas: 4.2,
        reviews: 200,
        precio: 200,
        reservado: true,
      },
    },
    {
      hospedaje: {
        id: 6,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Posada Rústica",
        ubicacion: "Kioto, Japón",
        estrellas: 3.8,
        reviews: 100,
        precio: 90,
        reservado: false,
      },
    },
    {
      hospedaje: {
        id: 7,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Hotel Privado",
        ubicacion: "Los Ángeles, Estados Unidos",
        estrellas: 3.0,
        reviews: 70,
        precio: 50,
        reservado: true,
      },
    },
    {
      hospedaje: {
        id: 8,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Residencial Tranquilo",
        ubicacion: "París, Francia",
        estrellas: 4.8,
        reviews: 250,
        precio: 180,
        reservado: false,
      },
    },
    {
      hospedaje: {
        id: 9,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Albergue Amistoso",
        ubicacion: "Toronto, Canadá",
        estrellas: 3.5,
        reviews: 120,
        precio: 60,
        reservado: true,
      },
    },
    {
      hospedaje: {
        id: 10,
        imgUrl:
          "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
        nombre: "Pensión Acogedora",
        ubicacion: "Seúl, Corea del Sur",
        estrellas: 4.0,
        reviews: 180,
        precio: 100,
        reservado: false,
      },
    },
  ];
  return hospedajes;
}
// export default APICasas;
