import http from "./http-common";

class AuthService {
  login = async (email, password) => {
    return http.post("/login", {
      username: email,
      password: password,
    });
  };

  register = async (
    nombre,
    apellido,
    email,
    fechaNac,
    sexo,
    password,
    esProfesional
  ) => {
    return http.post("/public/usuario/registro", {
      persona: {
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento: fechaNac,
        sexo: sexo,
      },
      username: email,
      password: password,
      usuario_tipo_id: esProfesional ? 2 : 1,
    });
  };
}

export default new AuthService();
