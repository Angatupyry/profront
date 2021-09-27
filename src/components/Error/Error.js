import React, { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="alert alert-danger m-3" role="alert">
      {error.message}
    </div>
  );
};

export default Error;
