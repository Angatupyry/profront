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
}

export default new ProfesionalService();
