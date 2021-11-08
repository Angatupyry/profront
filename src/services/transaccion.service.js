import http from "./http-common";
import privateRoute from "./protected-routes";
import Cookies from "js-cookie";

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

  postTransaction = async (id, payment_method) => {
    try {
      const data = await http.post("/public/operacion/pago/" + id, {});
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getTransactionList = async (id, clientUserTypeId) => {
    try {
      if (JSON.parse(Cookies.get("user")).usuario_tipo_id == clientUserTypeId) {
        const data = await http.get("/public/transaccion?cliente__id=" + id);
        return data;
      } else {
        const data = await http.get(
          "/public/transaccion?profesional__id=" + id
        );
        return data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getTransactionDetail = async (id, usuario_tipo) => {
    let tipo = usuario_tipo && usuario_tipo == 1 ? 0 : 1;
    try {
      const data = await http.get(
        "/public/transaccion/solicitud/" + id + "/" + tipo
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateTransaction = async (id) => {
    try {
      const data = await http.put("/public/transaccion/" + id, {
        transaccion_estado_id: 3,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getTransactionStates = async () => {
    try {
      const data = await http.get("/public/transaccion_estado");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getTransactionListByState = async (id) => {
    try {
      const data = await http.get(
        "/public/transaccion?transaccion_estado__id=" + id
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new TransaccionService();
