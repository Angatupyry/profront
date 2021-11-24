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

  postJobExperiences = async (
    profesional_id,
    lugar,
    fecha_desde,
    fecha_hasta,
    descripcion
  ) => {
    try {
      const data = await http.post("/public/experiencia_laboral", {
        profesional_id: profesional_id,
        lugar: lugar,
        fecha_desde: fecha_desde,
        fecha_hasta: fecha_hasta,
        descripcion: descripcion,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  postStudies = async (
    descripcion,
    carrera_universitaria_id,
    profesional_id,
    certificado_imagen,
    fecha_desde,
    fecha_hasta
  ) => {
    try {
      const data = await http.post("/public/estudio_academico", {
        descripcion: descripcion,
        carrera_universitaria_id: carrera_universitaria_id,
        profesional_id: profesional_id,
        certificado_imagen: certificado_imagen,
        fecha_desde: fecha_desde,
        fecha_hasta: fecha_hasta,
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

  deleteJobExperience = async (id) => {
    try {
      const data = await http.delete("/public/experiencia_laboral/" + id, {});
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  deleteStudy = async (id) => {
    try {
      const data = await http.delete("/public/estudio_academico/" + id, {});
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

  updateJobExperience = async (
    id,
    profesional_id,
    lugar,
    fecha_desde,
    fecha_hasta,
    descripcion
  ) => {
    try {
      const data = await http.put("/public/experiencia_laboral/" + id, {
        profesional_id: profesional_id,
        lugar: lugar,
        fecha_desde: fecha_desde,
        fecha_hasta: fecha_hasta,
        descripcion: descripcion,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateStudy = async (
    id,
    descripcion,
    carrera_universitaria_id,
    profesional_id,
    certificado_imagen,
    fecha_desde,
    fecha_hasta
  ) => {
    try {
      const data = await http.put("/public/estudio_academico/" + id, {
        descripcion: descripcion,
        carrera_universitaria_id: carrera_universitaria_id,
        profesional_id: profesional_id,
        certificado_imagen: certificado_imagen,
        fecha_desde: fecha_desde,
        fecha_hasta: fecha_hasta,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new ProfesionalService();
