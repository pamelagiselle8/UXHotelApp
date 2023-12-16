export const registrarUsuario = async (datosUsuario) => {
  try {
    console.log("comienza a registrar ususssssss");
    console.log(datosUsuario);
    const respuestaAPI = await fetch(
      "https://w4sbwwxb-3000.use.devtunnels.ms/createUser",
      {
        body: JSON.stringify(datosUsuario),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("se llama al back end");
    if (respuestaAPI.ok) {
      console.log("entra si se crea");
      const resultado = await respuestaAPI.json();
      console.log("Usuario registrado exitosamente:", resultado);
      return resultado;
    } else {
      console.error("Error al registrar usuario:", respuestaAPI.status);
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud API:", error.message);
    return null;
  }
};
