const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripción de la tarea por hacer'
}

const completado = {
	alias: 'c',
	default: true,
	desc: 'Marca como completado o pendiente la tarea'
}

const opt_crear = {
	descripcion
}

const opt_actualizar = {
	descripcion,
	completado
}

const opt_borrar = {
	descripcion
}

const argv = require('yargs')
	.command('actualizar', 'Actualiza el estado completado de una tarea', opt_actualizar)
	.command('crear', 'Crear un elemento por hacer', opt_crear)
	.command('borrar', 'Borra un elemento por hacer', opt_borrar)
	.help()
	.argv;

module.exports = {
	argv
}