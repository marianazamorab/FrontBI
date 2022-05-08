import React from 'react';
import { Link} from "react-router-dom";
import logo1 from "./media/diagnostico.png";

export default class Informacion extends React.Component {
  render() {
    return (
      <div>
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
        <div className="card col-5" id="cardinfo">
                <div className="card-body">
                    <h2 className="grande">Estadísticas</h2>
                    <h5> R2 </h5>
                    <h5> R2 </h5>
                </div>
            </div>
      </div>
    );
  }
}