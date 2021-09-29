import http from "./http-common";

class ProfesionalService {
  getProfile = async (id) => {
    try {
      const data = await http.get("/public/usuario/profesional/perfil/1");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new ProfesionalService();
