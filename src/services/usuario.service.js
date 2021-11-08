import http from "./http-common";

class UsuarioService {
  getUser = async (id) => {
    try {
      const data = await protectedRoutes.get("/public/usuario/" + id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getUserType = async () => {
    try {
      const data = await http.get("/public/usuario_tipo");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new UsuarioService();
