import React from 'react';
import { Link} from "react-router-dom";
import "./styles.css"
import logo1 from "./media/info.png";
import logo2 from "./media/diagnostico.png";

export default class Inicio extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="medicare">Medicare</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                     <li className="nav-item" id="inicio"><Link to={'/'} style={{ color: '#FFF' }}  > Inicio </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="row justify-content-center">
            <div className="card col-5" id="info">
                <div className="card-body">
                    <h1 className="grande">Información del modelo</h1>
                    <div className="d-flex justify-content-center"><img className="img-fluid d-none d-xl-block" alt="Responsive image" src={logo1} id="infoimg"></img></div>
                </div>
                <div className="option-button"><Link to={'/info'} style={{ color: '#FFF', textDecoration: 'none' }}  > Click aqui </Link></div>
            </div>
            <div className="card col-5" id="elegibilidad">
                <div className="card-body">
                    <h1 className="grande">Determinar elegibilidad</h1>
                    <div className="d-flex justify-content-center"><img className="img-fluid d-none d-xl-block" alt="Responsive image" src={logo2} id="diagnosticoimg"></img></div>
                </div>
                <div className="option-button"><Link to={'/elegibilidad'} style={{ color: '#FFF', textDecoration: 'none'}}  > Click aqui </Link></div>
            </div>
         </div>
      </div>
    );
  }
}