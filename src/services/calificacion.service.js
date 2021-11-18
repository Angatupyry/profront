import http from "./http-common";
import privateRoute from "./protected-routes";

class CalificacionService {
  getCalification = async () => {
    try {
      const data = await privateRoute.get("/public/calificacion");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  postComment = async (descripcion, calificacion, id, transaccion_id) => {
    try {
      const data = await http.post("/public/comentario/profesional/" + id, {
        descripcion: descripcion,
        calificacion_id: calificacion,
        usuario_id: id,
        transaccion_id: transaccion_id,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new CalificacionService();
