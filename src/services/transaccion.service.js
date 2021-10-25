import http from "./http-common";
import privateRoute from "./protected-routes";

class TransaccionService {
  getSolicitation = async (id) => {
    try {
      const data = await privateRoute.get(
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

  getTransaction = async (id) => {
    try {
      const data = await http.get("/public/transaccion/" + id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  postTransaction = async (id) => {
    try {
      const data = await http.post("/public/operacion/pago/" + id, {});
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new TransaccionService();
