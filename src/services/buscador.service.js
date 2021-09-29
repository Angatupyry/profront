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
}

export default new BuscadorService();
