export const numberFormat = (value) =>
  new Intl.NumberFormat("es-PY", {
    style: "decimal",
    currency: "PYG",
  }).format(value);
