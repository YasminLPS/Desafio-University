const express = require("express");
const path = require("path");

const logger = require("morgan");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const alunosDataRouter = require("./routes/alunos_data");
const professoresDataRouter = require("./routes/professores_data");
const cursosDataRouter = require("./routes/cursos_data");
const diciplinasDataRouter = require("./routes/diciplinas_data");
const semestreDataRouter = require("./routes/semestre_data");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// view engine setup
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/alunos_data", alunosDataRouter);
app.use("/professores_data", professoresDataRouter);
app.use("/cursos_data", cursosDataRouter);
app.use("/diciplinas_data", diciplinasDataRouter);
app.use("/semestre_data", semestreDataRouter);



module.exports = app;