export const menuItems = [
  {
    name: "mi-perfil",
    label: "Mi perfil",
  },
  {
    name: "solicitudes",
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
