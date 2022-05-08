import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './inicio';
import Informacion from './informacion';
import Elegibilidad from './elegibilidad';

export default class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="main">
        <Routes>
          <Route exact path="" element={<Inicio />}>  
          </Route>
          <Route exact path="/info" element={<Informacion />}>  
          </Route>
          <Route exact path="/elegibilidad" element={<Elegibilidad />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    );
  }
}