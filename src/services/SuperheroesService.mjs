import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
  return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroe() {
  return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroePorAtributo(atributo, valor) {
  return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await SuperHeroRepository.obtenerMayoresDe30();
}

export async function crearSuperhero(data) {
  return await SuperHeroRepository.crearSuperhero(data);
}

export async function updateHero(id, data) {
  return await SuperHeroRepository.updateHero(id, data);
}

export async function deleteId(id) {
  return await SuperHeroRepository.deleteId(id);
}


export async function deleteName(name) {
  return await SuperHeroRepository.deleteName(name);
}