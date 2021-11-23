import http from "./http-common";

class ProfesionalService {
  getProfile = async (id) => {
    try {
      const data = await http.get("/public/usuario/profesional/perfil/" + id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getProfesionalServices = async (id) => {
    try {
      const data = await http.get(
        "/public/servicio_profesional?usuario__id=" + id
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getJobExperiences = async (id) => {
    try {
      const data = await http.get(
        "/public/experiencia_laboral?usuario__id=" + id
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getStudies = async (id) => {
    try {
      const data = await http.get(
        "/public/estudio_academico?profesional__id=" + id
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  postProfesionalService = async (
    servicio_id,
    profesional_id,
    monto_hora,
    servicio_tipo_id,
    servicio_modalidad_id
  ) => {
    try {
      const data = await http.post("/public/servicio_profesional", {
        servicio_id: servicio_id,
        profesional_id: profesional_id,
        monto_hora: monto_hora,
        servicio_tipo_id: servicio_tipo_id,
        servicio_modalidad_id: servicio_modalidad_id,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  deleteProfesionalService = async (id) => {
    try {
      const data = await http.delete("/public/servicio_profesional/" + id, {});
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateProfesionalService = async (
    id,
    servicio_id,
    profesional_id,
    monto_hora,
    servicio_tipo_id,
    servicio_modalidad_id
  ) => {
    try {
      const data = await http.put("/public/servicio_profesional/" + id, {
        servicio_id: servicio_id,
        profesional_id: profesional_id,
        monto_hora: monto_hora,
        servicio_tipo_id: servicio_tipo_id,
        servicio_modalidad_id: servicio_modalidad_id,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new ProfesionalService();
