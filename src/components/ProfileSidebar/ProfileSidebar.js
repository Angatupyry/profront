import React from "react";
import Link from "next/link";

import imgP from "../../assets/image/l2/jpg/gallery-img19.jpg";
import imgF from "../../assets/image/svg/icon-fire-rounded.svg";

const Sidebar = (props) => {
  const [data, setData] = React.useState(props.data);
  const id = data.id;
  // console.log("props es: " + props.data);
  //console.log(data);
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
                  <Link href="/#">
                    <a className="text-gray font-size-4">
                      {" "}
                      {data.servicio_profesional[0].servicio.descripcion}
                    </a>
                  </Link>
                </p>
                <div className="col-md-12 text-center pt-2 pt-md-5 px-0 pb-5">
                  <div className="media justify-content-md-center">
                    <p className="font-weight-bold font-size-4 text-hit-gray mb-0">
                      <span className="text-black-2">{data.promedio}</span>{" "}
                    </p>
                    <div className="image mr-5 ml-2">
                      <img src={imgF} alt="" />
                    </div>
                  </div>
                </div>
                <div className="button-block mt-5">
                  <Link href={`/solicitation?id=${id}`}>
                    <button className="btn btn-primary line-height-reset btn-submit text-uppercase">
                      Contratar
                    </button>
                  </Link>
                </div>
                {/* <div className="icon-link d-flex align-items-center justify-content-center flex-wrap">
                  <Link href="/#">
                    <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </Link>
                  <Link href="/#">
                    <a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green">
                      <i className="fab fa-behance"></i>
                    </a>
                  </Link>
                </div> */}
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
                {/* <!-- Single List --> */}
                <div className="mb-7">
                  <p className="font-size-4 mb-0">Enseñanza de guaraní</p>
                  <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                    25.000 Gs./hora
                  </h5>
                </div>
                {/* <!-- Single List --> */}

                {/* <!-- Single List --> */}
                <div className="mb-7">
                  <p className="font-size-4 mb-0">Enseñanza de francés</p>
                  <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                    50.000 Gs./hora
                  </h5>
                </div>
                {/* <!-- Single List --> */}

                <h5 className="text-black-2 mb-8 font-size-5">Cobertura</h5>
                {/* <!-- Single List --> */}
                <div className="mb-7">
                  {data.zona_profesional.map((zonas) => {
                    return (
                      <span class="badge badge-success font-size-3 font-weight-semibold m-1">
                        {zonas.ciudad.nombre}
                      </span>
                    );
                  })}
                </div>

                <h5 className="text-black-2 mb-8 font-size-5">Imágenes</h5>
                {/* <!-- Single List --> */}
                <div className="mb-7">
                  <img src={imgP} alt="..." class="profile img-thumbnail m-1" />
                  <img src={imgP} alt="..." class="profile img-thumbnail m-1" />
                  <img src={imgP} alt="..." class="profile img-thumbnail m-1" />
                </div>
                {/* <!-- Single List --> */}

                {/* <div className="mb-7">
                  <p className="font-size-4 mb-0">Website Linked</p>
                  <h5 className="font-size-4 font-weight-semibold mb-0">
                    <Link href="/#">
                      <a className="text-break">www.nameac.com</a>
                    </Link>
                  </h5>
                </div> */}
                {/* <!-- Single List --> */}
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
