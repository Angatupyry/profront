import http from "./protected-routes";
import { constants, getPaymentStateId } from "../utils";

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

  updateTransaction = async (id) => {
    try {
      const data = await http.put("/facturacion/pago/" + id, {
        pago_estado_id: getPaymentStateId(constants.PAYMENT_STATE.PAGADO),
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getPaymentStates = async () => {
    try {
      const data = await http.get("/facturacion/pago_estado");
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default new FacturacionService();
