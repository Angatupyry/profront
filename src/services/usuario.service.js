import http from "./http-common";

class UsuarioService {
  getUser = async (id) => {
    try {
      const data = await protectedRoutes.get("/public/usuario/" + id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getUserType = async () => {
    try {
      const data = await http.get("/public/usuario_tipo");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getProfilePersonalData = async (id) => {
    try {
      const data = await http.get("/public/usuario/menu/" + id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updatePerson = async (
    id,
    nombre,
    apellido,
    nacionalidad_id,
    fecha_nacimiento,
    fecha_alta,
    sexo_masculino
  ) => {
    try {
      const data = await http.put("/public/persona/" + id, {
        id: id,
        nombre: nombre,
        apellido: apellido,
        nacionalidad_id: nacionalidad_id,
        fecha_nacimiento: fecha_nacimiento,
        fecha_alta: fecha_alta,
        sexo_masculino: sexo_masculino,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updatePersonDocument = async (id, numero, documento_tipo_id) => {
    try {
      const data = await http.put("/public/persona_documento/" + id, {
        id: id,
        numero: numero,
        documento_tipo_id: documento_tipo_id,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updatePersonAddress = async (
    id,
    direccion,
    numero,
    ciudad_id,
    barrio_id,
    departamento_id
  ) => {
    try {
      const data = await http.put("/public/persona_direccion/" + id, {
        direccion: direccion,
        numero: numero,
        ciudad_id: ciudad_id,
        barrio_id: barrio_id,
        departamento_id: departamento_id,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updatePersonPhone = async (id, numero, celular) => {
    try {
      const data = await http.put("/public/persona_telefono/" + id, {
        numero: numero,
        celular: celular,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new UsuarioService();
