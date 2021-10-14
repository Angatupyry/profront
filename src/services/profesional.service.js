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

  postSolicitation = async (
    profesional_id,
    servicio_profesional_id,
    cliente_id,
    observacion,
    fecha,
    cant_horas,
    monto
  ) => {
    try {
      //console.log(profesional_id);
      const data = await http.post("/public/operacion/consulta", {
        profesional_id: profesional_id,
        servicio_profesional_id: servicio_profesional_id,
        cliente_id: cliente_id,
        observacion: observacion,
        fecha: fecha,
        cant_horas: cant_horas,
        monto: monto,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new ProfesionalService();
