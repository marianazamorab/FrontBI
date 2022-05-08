import React from 'react';
import { Link} from "react-router-dom";

export default class Elegibilidad extends React.Component {
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
          </div>
        );
      }
    }