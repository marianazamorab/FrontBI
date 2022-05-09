import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css"

const Elegibilidad = () => {
  const [diagnosticos, setDiagnosticos] = useState([{ diagnostico: "" }]);
  const [resultados, setResultados]= useState([]);
  const results=[];

  const agregarDiagnostico = () => {
    setDiagnosticos([...diagnosticos, { diagnostico: "" }]);
  };

  const eliminarDiagnostico = (index) => {
    const list = [...diagnosticos];
    list.splice(index, 1);
    setDiagnosticos(list);
  };

  const getResultados = () => {
  
    diagnosticos.forEach((item, index)=>{

        const text = document.getElementById("input"+index).value;

        fetch("http://3.69.193.20/api/prediction", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([{"study_and_condition": text}])
        }).then(res => res.json())
        .then((result)=> {
            const llave1= "texto"+index;
            const llave2= "proba"+index;
            const res={};
            res[llave1]= result['response'][0];
            res[llave2]= result['response'][1];
            results.push(res);
            setResultados(results);
            console.log(resultados);}
        ).catch(error=> console.log(error.message))
    }) 
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
                            <input id= {"input"+index}
                              name="diagnostico"
                              type="text"
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
            {resultados.map((res, index) => (
                <div className="card card-resultados" >
                    <h5 id="rdiag"> Resultados diagnóstico {index + 1} </h5>
                    <p>Elegibilidad: {res["texto"+index]}</p>
                    <p> Probabilidad: {res["proba"+index]}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elegibilidad;
