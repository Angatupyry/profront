import http from "./http-common";

class BuscadorService {
  search = async (ciudad, servicio) => {
    try {
      const data = await http.post("/public/buscador", {
        ciudad_id: ciudad,
        servicio_id: servicio,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getCities = async () => {
    try {
      const data = await http.get("/public/ciudad", {});
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getServices = async () => {
    try {
      const data = await http.get("/public/servicio", {});
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new BuscadorService();
