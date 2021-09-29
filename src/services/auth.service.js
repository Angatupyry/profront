import http from "./http-common";

class AuthService {
  login = async (email, password) => {
    try {
      await http.post("/login", {
        username: email,
        password: password,
      });
    } catch (error) {
      throw error;
    }
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
    try {
      await http.post("/public/usuario/registro", {
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
    } catch (error) {
      throw error;
    }
  };
}

export default new AuthService();
