import express from "express";
import {
  obtenerTodosLosSuperheroeController,
  obtenerVistaFormularioHeroe,
  obtenerVistaFormularioHeroeEditar,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

router.get("/", obtenerTodosLosSuperheroeController);
router.get("/heroe-crear", obtenerVistaFormularioHeroe);
router.get("/heroe-editar/:id", obtenerVistaFormularioHeroeEditar);

export default router;
