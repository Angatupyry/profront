import http from "./http-common";
import protectedRoutes from "./protected-routes";
import { getUserTypeId, constants } from "../utils";

class AuthService {
  login = async (email, password) => {
    try {
      const data = await http.post("/login", {
        username: email,
        password: password,
      });
      return data;
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
    esProfesional,
    documento_tipo_id,
    documento_numero,
    telefono_numero,
    telefono_pais_id,
    telefono_tipo_id,
    esCelular,
    direccion_calle,
    direccion_numero,
    direccion_ciudad_id,
    direccion_barrio_id
  ) => {
    try {
      let clientUserTypeId = getUserTypeId(constants.CLIENT_TYPE.CLIENTE);
      let professionalUserTypeId = getUserTypeId(
        constants.CLIENT_TYPE.PROFESIONAL
      );
      const data = await http.post("/public/usuario/registro", {
        persona: {
          nombre: nombre,
          apellido: apellido,
          fecha_nacimiento: fechaNac,
          sexo: sexo,
        },
        persona_documento: {
          documento_tipo_id: documento_tipo_id,
          numero: documento_numero,
        },
        persona_telefono: {
          numero: telefono_numero,
          pais_id: telefono_pais_id,
          telefono_tipo_id: telefono_tipo_id,
          celular: esCelular,
        },
        persona_direccion: {
          direccion: direccion_calle,
          numero: direccion_numero,
          ciudad_id: direccion_ciudad_id,
          barrio_id: direccion_barrio_id,
        },
        username: email,
        password: password,
        usuario_tipo_id: esProfesional
          ? professionalUserTypeId
          : clientUserTypeId,
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  getDocumentTypes = async () => {
    try {
      const data = await http.get("/public/documento_tipo");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getNeighborhoods = async (id) => {
    try {
      const data = await http.get("/public/barrio?ciudad__id=" + id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new AuthService();
