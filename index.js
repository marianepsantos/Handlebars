const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

var usuario = [
  {
  nome: "Mariane",
  endereco: "Rua Sinforiano Romero. n1597"
  },

  {
    nome:"Fulano",
    endereco: "Rua XXXXXXXXXX, n....."
  }
];

app.get("/", (req, res) => {
  res.render("home", {usuarios});
});

app.get("/novo", (req, res) => {
  res.render("formCadastro");
});

app.get("/usuario/:id", (req, res) => {
  let usuario = {
    nome: "Mariane",
    endereco: ""
  }

  res.render("usuario", usuario);
});

app.listen(8000, () => {
  console.log("Servidor rodando!");
});
