const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

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
