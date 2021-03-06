import React, { useContext } from "react";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import Cookies from "js-cookie";

import imgP from "../../assets/image/l2/jpg/gallery-img22.jpg";
import imgF from "../../assets/image/svg/icon-fire-rounded.svg";
import { numberFormat } from "../../utils";

const Sidebar = (props) => {
  const gContext = useContext(GlobalContext);
  const [data, setData] = React.useState(props.data);
  const id = data.id;

  const isLoggedIn = () => {
    try {
      let user = Cookies.get("user");
      let token = Cookies.get("token");
      console.log(user);
      if (user && token) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logged = isLoggedIn();

  if (data !== null && data !== undefined) {
    return (
      <>
        <div {...props}>
          <div className="pl-lg-5">
            {/* <!-- Top Start --> */}
            <div className="bg-white shadow-9 rounded-4">
              <div className="px-5 py-11 text-center border-bottom border-mercury">
                <Link href="/#">
                  <a className="mb-4">
                    <img className="circle-54" src={imgP} alt="" />
                  </a>
                </Link>
                <h4 className="mb-0">
                  <Link href="/#">
                    <a className="text-black-2 font-size-6 font-weight-semibold">
                      {data.persona.nombre} {data.persona.apellido}
                    </a>
                  </Link>
                </h4>
                <p className="mb-1">
                  {data.servicio_profesional.map((servicio, index) => {
                    if (
                      index == data.servicio_profesional.length - 1 ||
                      index == 0
                    ) {
                      return (
                        <span className="text-gray font-size-4">
                          {servicio.servicio.descripcion}
                        </span>
                      );
                    } else {
                      return (
                        <span className="text-gray font-size-4">
                          {" | " + servicio.servicio.descripcion + " | "}
                        </span>
                      );
                    }
                  })}
                </p>
                <div className="col-md-12 text-center pt-2 pt-md-5 px-0 pb-5">
                  <div className="media justify-content-md-center">
                    <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
                      <span className="text-black-2">
                        {data.promedio != null ? data.promedio.toFixed(2) : 0}
                      </span>{" "}
                    </p>
                    <div className="image mr-5 ml-2">
                      <img src={imgF} alt="" />
                    </div>
                  </div>
                </div>
                <div className="button-block mt-5">
                  {logged && (
                    <Link href={`/solicitation?id=${id}`}>
                      <button className="btn btn-primary line-height-reset btn-submit text-uppercase">
                        Contratar
                      </button>
                    </Link>
                  )}

                  {!logged && (
                    <Link href="#">
                      <button
                        className="btn btn-primary line-height-reset btn-submit text-uppercase"
                        onClick={(e) => {
                          e.preventDefault();
                          gContext.toggleSignInModal();
                        }}
                      >
                        Contratar
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              {/* <!-- Top End --> */}
              {/* <!-- Bottom Start --> */}
              <div className="px-9 pt-lg-5 pt-9 pt-xl-9 pb-5">
                <h5 className="text-black-2 mb-8 font-size-5">Detalles</h5>
                {/* <!-- Single List --> */}
                <div className="mb-7">
                  <p className="font-size-4 mb-0">Disponibilidad</p>
                  <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                    Lunes a Viernes de 08:00 a 16:00 hs
                  </h5>
                </div>
                {/* <!-- Single List --> */}

                <h5 className="text-black-2 mb-8 font-size-5">
                  Servicios y tarifas
                </h5>
                {data.servicio_profesional.map((servicio, index) => {
                  return (
                    <div className="mb-7">
                      <p className="font-size-4 mb-0">
                        {servicio.servicio.descripcion}
                      </p>
                      <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                        {servicio.monto_hora} / hora
                      </h5>
                    </div>
                  );
                })}

                <h5 className="text-black-2 mb-8 font-size-5">Cobertura</h5>
                {/* <!-- Single List --> */}
                <div className="mb-7">
                  {data.zona_profesional.map((zonas) => {
                    return (
                      <span className="badge badge-success font-size-3 font-weight-semibold m-1">
                        {zonas.ciudad.nombre}
                      </span>
                    );
                  })}
                </div>

                <h5 className="text-black-2 mb-8 font-size-5">Im??genes</h5>
                {/* <!-- Single List --> */}
                <div className="mb-7">
                  <img
                    src={imgP}
                    alt="..."
                    className="profile img-thumbnail m-1"
                  />
                  <img
                    src={imgP}
                    alt="..."
                    className="profile img-thumbnail m-1"
                  />
                  <img
                    src={imgP}
                    alt="..."
                    className="profile img-thumbnail m-1"
                  />
                </div>
              </div>
              {/* <!-- Bottom End --> */}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Sidebar;
