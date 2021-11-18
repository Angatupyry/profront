import http from "./http-common";
import privateRoute from "./protected-routes";
import { constants, getNotificationStateId } from "../utils";

class NotificacionService {
  getNotification = async (id) => {
    try {
      const data = await privateRoute.get(
        "public/notificacion?usuario__id=" +
          id +
          "&notificacion_estado__id=" +
          getNotificationStateId(constants.NOTIFICATION_STATE.NO_LEIDO)
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  updateNotification = async (id) => {
    try {
      const data = await http.put("/public/notificacion/" + id, {
        notificacion_estado_id: getNotificationStateId(
          constants.NOTIFICATION_STATE.LEIDO
        ),
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getNotificationStates = async () => {
    try {
      const data = await http.get("/public/notificacion_estado");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new NotificacionService();
