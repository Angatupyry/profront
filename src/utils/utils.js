import Cookies from "js-cookie";
import React, { useContext } from "react";
import UsuarioService from "../services/usuario.service";
import TransactionService from "../services/transaccion.service";
import FacturacionService from "../services/facturacion.service";
import NotificationService from "../services/notificacion.service";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function isEmpty(value) {
  return (
    Boolean(value && typeof value === "object") && !Object.keys(value).length
  );
}

export const numberFormat = (value) =>
  new Intl.NumberFormat("es-PY", {
    style: "decimal",
    currency: "PYG",
  }).format(value);

export const showErrorAlert = (text) => {
  scrollToTop();
  return (
    <div className="row no-gutters">
      <div className="col-md-12">
        <div className="alert alert-danger" role="alert">
          {text}
        </div>
      </div>
    </div>
  );
};

export const showSuccessAlert = (text) => {
  scrollToTop();
  return (
    <div className="row no-gutters">
      <div className="col-md-12">
        <div className="alert alert-success" role="alert">
          {text}
        </div>
      </div>
    </div>
  );
};

export async function getUserType() {
  try {
    const response = await UsuarioService.getUserType();
    Cookies.set("userTypes", JSON.stringify(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function getUserTypeId(user) {
  try {
    let userTypes = JSON.parse(Cookies.get("userTypes"));
    const res = userTypes.find(
      (element) => element.nombre.toLowerCase() == user.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getTransactionStates() {
  try {
    const response = await TransactionService.getTransactionStates();
    Cookies.set("transactionStates", JSON.stringify(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function getTransactionStateId(transaction) {
  try {
    let transactionStates = JSON.parse(Cookies.get("transactionStates"));
    const res = transactionStates.find(
      (element) => element.nombre.toLowerCase() == transaction.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getPaymentStates() {
  try {
    const response = await FacturacionService.getPaymentStates();
    Cookies.set("paymentStates", JSON.stringify(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function getPaymentStateId(payment) {
  try {
    let paymentStates = JSON.parse(Cookies.get("paymentStates"));
    const res = paymentStates.find(
      (element) => element.nombre.toLowerCase() == payment.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getInvoiceStates() {
  try {
    const response = await FacturacionService.getInvoiceStates();
    Cookies.set("invoiceStates", JSON.stringify(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function getInvoiceStateId(invoice) {
  try {
    let invoiceStates = JSON.parse(Cookies.get("invoiceStates"));
    const res = invoiceStates.find(
      (element) => element.nombre.toLowerCase() == invoice.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getNotificationStates() {
  try {
    const response = await NotificationService.getNotificationStates();
    Cookies.set("notificationStates", JSON.stringify(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function getNotificationStateId(notification) {
  try {
    let notificationStates = JSON.parse(Cookies.get("notificationStates"));
    const res = notificationStates.find(
      (element) => element.nombre.toLowerCase() == notification.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getTransactionTypes() {
  try {
    const response = await TransactionService.getTransactionTypes();
    Cookies.set("transactionTypes", JSON.stringify(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function getTransactionTypeId(transaction) {
  try {
    let transactionTypes = JSON.parse(Cookies.get("transactionTypes"));
    const res = transactionTypes.find(
      (element) => element.nombre.toLowerCase() == transaction.toLowerCase()
    ).id;
    return res;
  } catch (error) {
    console.log(error);
  }
}
