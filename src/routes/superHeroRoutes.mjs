import express from "express";
import { body } from "express-validator";
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

router.post(
  "/heroe",
  [
    body("nombreSuperHeroe").isLength({ min: 3, max: 60 }).trim(),
    body("nombreReal").isLength({ min: 3, max: 60 }).trim(),
    body("edad").isNumeric({ min: 0 }).trim(),
    body("poderes").isArray({ min: 1 }),
    body("poderes.*").isString().isLength({ min: 3, max: 60 }),
  ],
  crearSuperheroController
);
router.put(
  "/heroe/update/:id",
  [
    body("nombreSuperHeroe").isLength({ min: 3, max: 60 }).trim(),
    body("nombreReal").isLength({ min: 3, max: 60 }).trim(),
    body("edad").isNumeric({ min: 0 }).trim(),
    body("poderes").isArray({ min: 1 }),
    body("poderes.*").isString().isLength({ min: 3, max: 60 }),
  ],
  heroUpdateController
);
router.delete("/heroe/delete/:id", deleteIdController);
router.delete("/heroe/delete/name/:name", deleteNameController);

export default router;
