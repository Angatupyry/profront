import http from "./http-common";

class MediosPagoService {
  getCards = async () => {
    try {
      const data = await http.get("/public/tipo_tarjeta");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  postCard = async (
    descripcion,
    tipo_tarjeta_id,
    usuario_id,
    numero_tarjeta,
    fecha_vencimiento_tarjeta,
    numero_cvc,
    secuencia
  ) => {
    try {
      const data = await http.post("/public/usuario_tarjeta", {
        descripcion: descripcion,
        tipo_tarjeta_id: tipo_tarjeta_id,
        usuario_id: usuario_id,
        numero_tarjeta: numero_tarjeta,
        fecha_vencimiento_tarjeta: fecha_vencimiento_tarjeta,
        numero_cvc: numero_cvc,
        secuencia: secuencia,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getUserCards = async (id) => {
    try {
      const data = await http.get("/public/usuario_tarjeta?usuario__id=" + id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new MediosPagoService();
