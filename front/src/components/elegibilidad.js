import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css"

const Elegibilidad = () => {
  const [diagnosticos, setDiagnosticos] = useState([{ diagnostico: "" }]);
  const [resultados, setResultados] = useState([]);

  const agregarDiagnostico = () => {
    setDiagnosticos([...diagnosticos, { diagnostico: "" }]);
  };

  const eliminarDiagnostico = (index) => {
    const list = [...diagnosticos];
    list.splice(index, 1);
    setDiagnosticos(list);
  };

  const getResultados = () => {
    setResultados([...resultados, { resultado: "" }]);
  }

  return (
    <div className="elegibilidad">
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="medicare">
            Medicare
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" id="inicio">
                <Link to={"/"} style={{ color: "#FFF" }}>
                  {" "}
                  Inicio{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid" id="contenedor">
        <div className="row">
          <div className="col-7">
            <h4 id="diagnosticos"> Diagnósticos </h4>
            <div className="row" id="ladodiag">
              {diagnosticos.map((diagnostico, index) => (
                <div className="card col-4" id="diag">
                  <div className="card-body">
                    <form autoComplete="off">
                      <div className="form-field">
                        <h5 className="label"> Diagnostico {index + 1} </h5>
                        <div key={index}>
                          <div className="row justify-content-center">
                            <input
                              name="diagnostico"
                              type="text"
                              id="diagnostico"
                              required
                            />
                            {diagnosticos.length > 1 && (
                              <button
                                className="remove-btn"
                                onClick={() => eliminarDiagnostico(index)}
                              >
                                {" "}
                                Eliminar{" "}
                              </button>
                            )}
                            {diagnosticos.length - 1 === index && (
                              <button
                                className="add-btn"
                                onClick={agregarDiagnostico}
                              >
                                {" "}
                                + diagnóstico
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className= "col-2">
            <div className="button" onClick={getResultados} id="get"> Click aquí para ver resultados </div>
          </div>
          <div className="col-3">
            <h4 id="resultados"> Resultados </h4>
            {resultados.map((diagnostico, index) => (
                <div className="card card-resultados" >
                    <h5 id="rdiag"> Resultados diagnóstico {index + 1} </h5>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elegibilidad;
