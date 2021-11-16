import http from "./http-common";
import privateRoute from "./protected-routes";

class NotificacionService {
  getNotification = async (id) => {
    try {
      const data = await privateRoute.get(
        "public/notificacion?usuario__id=" + id
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new NotificacionService();
