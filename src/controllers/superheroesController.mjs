import { validationResult } from "express-validator";
import {
  obtenerSuperheroePorId,
  crearSuperhero,
  deleteId,
  deleteName,
  obtenerSuperheroesMayoresDe30,
  obtenerTodosLosSuperheroe,
  buscarSuperheroePorAtributo,
  updateHero,
} from "../services/SuperheroesService.mjs";

import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";
import { title } from "process";

export async function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroes = await obtenerSuperheroePorId(id);
  if (superheroes) {
    res.send(renderizarSuperheroe(superheroes));
  } else {
    res.status(404).send({ mensaje: "Superheroe no encontrado" });
  }
}

export async function obtenerTodosLosSuperheroeController(req, res) {
  const superheroes = await obtenerTodosLosSuperheroe();
  const title = "Inicio SuperHeroes ";
  res.render("dashboard", { superheroes, title });
}

export async function buscarSuperheroePorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = await buscarSuperheroePorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res
      .status(404)
      .send({ mensaje: "No se encontraron superheroes con ese atributo " });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = await obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(superheroes));
}

export async function crearSuperheroController(req, res) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const {
    nombreSuperHeroe,
    nombreReal,
    edad,
    planetaOrigen,
    debilidad,
    poderes,
    aliados,
    enemigos,
    creador,
  } = req.body;
  const nuevoHeroe = await crearSuperhero({
    nombreSuperHeroe,
    nombreReal,
    edad,
    planetaOrigen,
    debilidad,
    poderes,
    aliados,
    enemigos,
    creador,
  });
  res.send(renderizarListaSuperheroes([nuevoHeroe]));
}

export async function heroUpdateController(req, res) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { id } = req.params;
  const data = req.body;
  const heroeActualizado = await updateHero(id, data);
  res.send(renderizarListaSuperheroes([heroeActualizado]));
}

export async function deleteIdController(req, res) {
  const { id } = req.params;
  const borrarHeroe = await deleteId(id);
  res.send(renderizarListaSuperheroes([borrarHeroe]));
}

export async function deleteNameController(req, res) {
  const { name } = req.params;
  const borrarHeroe = await deleteName(name);
  res.send(renderizarListaSuperheroes([borrarHeroe]));
}

export async function obtenerVistaFormularioHeroe(req, res) {
  res.render("addSuperheroe", { title: "Añadir SuperHeroe" });
}

export async function obtenerVistaFormularioHeroeEditar(req, res) {
  const { id } = req.params;
  const superheroe = await obtenerSuperheroePorId(id);
  res.render("editSuperheroe", { superheroe, title: "Editar SuperHeroe" });
}
