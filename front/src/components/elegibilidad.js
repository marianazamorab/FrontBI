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
            <div className= "row d-flex justify-content-center">
                {diagnosticos.map((diagnostico, index) => (
                    <div className="card col-3" id="diag">
                     <div className="card-body">
                        <form autoComplete="off">
                            <div className="form-field">
                            <h5 className="label"> Diagnostico </h5>
                            <div key={index}>
                                <div className="row justify-content-center">
                                    <input name="diagnostico" type="text" id="diagnostico" required />
                                    {diagnosticos.length > 1 &&(
                                        <button className="remove-btn" onClick= {() => eliminarDiagnostico(index)}> Eliminar </button>
                                    )}
                                    {diagnosticos.length -1 === index &&(
                                        <button className="add-btn" onClick={agregarDiagnostico}> Agrega un diagnóstico</button>
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
        </div>
      );
    }

    export default Elegibilidad;