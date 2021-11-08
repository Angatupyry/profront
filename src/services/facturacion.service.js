import http from "./http-common";

class FacturacionService {
  getTransactionList = async () => {
    try {
      const data = await http.get("/facturacion/pago");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new FacturacionService();
