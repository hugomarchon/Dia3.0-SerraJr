import React from "react";
import reactDOM from "react-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Card from "./componentes/Card";

reactDOM.render(
  <div>
    <Cabecalho></Cabecalho>
    <div class="Card">
      <Card nome="Diogo" idade="20" time="Vasco" sobrenome="Cardinot"></Card>
      <Card
        nome="Guilherme"
        idade="19"
        time="Vasco"
        sobrenome="Pensabem"
      ></Card>
      <Card nome="Hugo" idade="20" time="Botafogo" sobrenome="Marchon"></Card>
      <Card
        nome="Sergio"
        idade="25"
        time="Botafogo"
        sobrenome="Pedretti"
      ></Card>
    </div>
    <Rodape></Rodape>
  </div>,

  document.getElementById("root")
);
