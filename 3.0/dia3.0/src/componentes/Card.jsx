import React from "react";
import "../index.css";

function Content(props) {
  var nome = props.nome;
  var idade = props.idade;
  var time = props.time;
  var sobrenome = props.sobrenome;
  return (
    <div>
      <div class="CardName">
        <h1>
          {" "}
          <b>{nome}</b>{" "}
        </h1>
      </div>
      <div class="CardMain">
        <p>
          <b>Idade:</b> <b>{idade}</b>{" "}
        </p>
        <p>
          <b>Time:</b> <b>{time}</b>{" "}
        </p>
        <p>
          <b>Sobrenome:</b> <b>{sobrenome}</b>{" "}
        </p>
      </div>
    </div>
  );
}

export default Content;
