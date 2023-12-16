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
   
    if (respuestaAPI.ok) {

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

export const ComprobarUsuario = async (datosUsuario) => {
  try {

    console.log(datosUsuario);
    const respuestaAPI = await fetch(
      "https://w4sbwwxb-3000.use.devtunnels.ms/logIn",
      {
        body: JSON.stringify(datosUsuario),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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

export const CerrarUsuario = async () => {
  try {
    const respuestaAPI = await fetch(
      "https://w4sbwwxb-3000.use.devtunnels.ms/logOut",
      {
        method: "POST",
      }
    );
    if (respuestaAPI.ok) {
      const resultado = await respuestaAPI.json();
      console.log("LogOut:", resultado);
      return resultado;
    } else {
      console.error("Error al LogOut usuario:", respuestaAPI.status);
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud API:", error.message);
    return null;
  }
};