import React from "react";
import { Link } from "react-router-dom";
import logo from "./media/matriz.png";

export default class Informacion extends React.Component {
  render() {
    return (
      <div>
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
        <div className="d-flex justify-content-center">
          <div className="card col-5" id="cardinfo">
            <div className="card-body">
              <h4 className="grande">Estadísticas</h4>
              <p id="SVM"> El modelo elegido fue Support Vector Machine por los resultados de sus estadísticas</p>
              <p>Fue el modelo más exacto y confiable</p>
              <p>Exactitud sobre datos de entrenamiento: 96%</p>
              <p>Exactitud sobre datos de prueba: 82%</p>
              <p>Matriz de confusión:</p>
              <img className="img-fluid d-none d-xl-block" alt="Responsive image" src={logo} id="matriz"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
