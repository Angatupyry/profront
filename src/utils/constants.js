export const constants = {
  CLIENT_TYPE: {
    CLIENTE: "CLIENTE",
    PROFESIONAL: "PROFESIONAL",
    ADMINISTRADOR: "ADMINISTRADOR",
  },
  TRANSACTION_STATE: {
    APROBADO: "APROBADO",
    RECHAZADO: "RECHAZADO",
    PENDIENTE_APROBACION: "PENDIENTE APROBACIÓN",
    PENDIENTE_PAGO: "PENDIENTE PAGO",
    PENDIENTE_VERIFICACION: "PENDIENTE VERIFICACIÓN",
    PENDIENTE_VALORACION: "PENDIENTE VALORACIÓN",
  },
  PAYMENT_STATE: {
    PAGADO: "PAGADO",
    PENDIENTE: "PENDIENTE",
  },
  INVOICE_STATE: {
    FACTURADO: "FACTURADO",
    PENDIENTE: "PENDIENTE",
  },
  NOTIFICATION_STATE: {
    LEIDO: "LEÍDO",
    NO_LEIDO: "NO LEÍDO",
  },
  TRANSACTION_TYPE: {
    CONSULTA: "CONSULTA",
    PAGO: "PAGO",
  },
};
