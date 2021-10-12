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

  getSolicitation = async (id) => {
    try {
      const data = await http.get(
        "/public/usuario/profesional/solicitud/" + id
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  postSolicitation = async (data) => {
    console.log("data es");
    console.log(data);
    try {
      if (data.servicio_profesional_id) {
        const data = await http.post("/public/operacion/consulta", {
          profesional_id: data.profesional_id,
          servicio_profesional_id: data.servicio_profesional_id,
          cliente_id: data.cliente_id,
          observacion: data.observacion,
          fecha: data.fecha,
          cant_horas: data.cant_horas,
          monto: data.monto,
        });
        return data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new ProfesionalService();
