export const menuItems = [
  {
    name: "mi-perfil",
    label: "Mi perfil",
  },
  {
    name: "transactions-list",
    label: "Solicitudes",
  },
  {
    name: "pagos",
    label: "Pagos",
    isExternal: true,
    items: [
      {
        name: "metodos-pago",
        label: "Administrar métodos de pago",
      },
    ],
  },
];
