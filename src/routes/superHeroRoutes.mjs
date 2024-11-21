import express from "express";

import {
  obtenerSuperheroePorIdController,
  crearSuperheroController,
  heroUpdateController,
  deleteIdController,
  deleteNameController,
  buscarSuperheroePorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  obtenerTodosLosSuperheroeController,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroeController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get(
  "/heroes/buscar/:atributo/:valor",
  buscarSuperheroePorAtributoController
);
router.get("/heroes/mayores/30", obtenerSuperheroesMayoresDe30Controller);

router.post("/heroe", crearSuperheroController);
router.put("/heroe/update/:id", heroUpdateController);
router.delete("/heroe/delete/:id", deleteIdController);
router.delete("/heroe/delete/name/:name", deleteNameController);

export default router;
