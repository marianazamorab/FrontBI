import React from 'react';
import { Link} from "react-router-dom";
import {useState} from "react";

const Elegibilidad = () => {

    const [diagnosticos, setDiagnosticos ]= useState([{diagnostico: ""}]);

    const agregarDiagnostico = () => {
        setDiagnosticos([...diagnosticos, {diagnostico: ""}])
        console.log("hola");
    }

    const eliminarDiagnostico = (index) => {
        const list = [...diagnosticos]
        list.splice(index, 1)
        setDiagnosticos(list)
    }

    return (
        <div className="elegibilidad">
            <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="medicare">Medicare</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" id="inicio"><Link to={'/'} style={{ color: '#FFF' }} > Inicio </Link></li>
                    </ul>
                </div>
            </div>
            </nav>
        <div className="container-fluid" id="contenedor">
        <div className = "row">
        <div className= "col-8">
            <h4> Diagnósticos </h4>
            <div className= "row" id="ladodiag">
                {diagnosticos.map((diagnostico, index) => (
                    <div className="card col-4" id="diag">
                     <div className="card-body">
                        <form autoComplete="off">
                            <div className="form-field">
                            <h5 className="label"> Diagnostico {index+1} </h5>
                            <div key={index}>
                                <div className="row justify-content-center">
                                    <input name="diagnostico" type="text" id="diagnostico" required />
                                    {diagnosticos.length > 1 &&(
                                        <button className="remove-btn" onClick= {() => eliminarDiagnostico(index)}> Eliminar </button>
                                    )}
                                    {diagnosticos.length -1 === index &&(
                                        <button className="add-btn" onClick={agregarDiagnostico}> + diagnóstico</button>
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
          <div className= "col-4">
              <h4 id="resultados"> Resultados </h4>
          </div>
          </div>
        </div>
        </div>
      );
    }

    export default Elegibilidad;