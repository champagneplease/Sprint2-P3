class IRepository {
  obtenerPorId() {
    throw new Error("Metodo 'obtenerPorId()' no implementado ");
  }
  obtenerTodos() {
    throw new Error("Metodo 'obtenerTodos()' no implementado ");
  }

  buscarPorAtributo(atributo, valor) {
    throw new Error("Metodo 'buscarPorAtributo()' no implementado ");
  }

  obtenerMayoresDe30() {
    throw new Error("Metodo 'obtenerMayoresDe30()' no implementado ");
  }

  crearSuperhero() {
    throw new Error("Metodo 'crearSuperhero()' no implementado ");
  }

  heroUpdate() {
    throw new Error("Metodo 'heroUpdate()' no implementado ");
  }

  deleteId() {
    throw new Error("Metodo 'deleteId()' no implementado ");
  }

  deleteName() {
    throw new Error("Metodo 'deleteName()' no implementado ");
  }
}

export default IRepository;
