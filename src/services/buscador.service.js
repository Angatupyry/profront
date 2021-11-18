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

  getCities = async (id) => {
    try {
      if (id) {
        const data = await http.get(
          "/public/ciudad?departamento__id=" + id,
          {}
        );
        return data;
      } else {
        const data = await http.get("/public/ciudad", {});
        return data;
      }
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

  getDepartments = async () => {
    try {
      const data = await http.get("/public/departamento", {});
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new BuscadorService();
