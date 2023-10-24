#!/usr/bin/env node

const args = process.argv
const command = args[2]


const fs = require('fs')
let data
try {
	const data0 = fs.readFileSync('./data.json', 'utf8')
	data = data0
} catch (err) {
	console.log('Se ha producido un error al leer')
}
const tasks = JSON.parse(data)["tasks"]

function main() {
	switch (command) {
		case '--help':
			showHelp()
			break

		case '--version':
		case '-v':
			showVersion()
			break

		case 'list':
			getTasks()
			break

		case 'show':
			let idRequired = args[3]
			getTaskById(idRequired)
		break
		// AQUÍ TU CÓDIGO PARA PROCESAR OTROS COMANDOS

		default:
			console.log(args)
			console.error('comando no definido')
	}
}

main()

function showHelp() {
	console.log('Uso: task <comando>')
	console.log('')
	console.log('Comandos disponibles:')
	console.log('  new <task>: Crear una nueva tarea')
	console.log('  list: Listar todas las tareas')
	console.log('  show <taskId>: Obtener una tarea por su ID')
	console.log('  update <taskId> <taskBody>: Actualizar una tarea')
	console.log('  delete <taskId>: Eliminar una tarea')
	console.log('  clear: Eliminar todas las tareas')
}

function showVersion() {
	console.log('task v1.0.0')
}

function getTasks() {
	tasks.forEach((item)=>{
	let date = new Date(item["id"]).toUTCString()
	let fecha = date.slice(5,11).toUpperCase()
	let hora = date.slice(17,22)
	let descripcion = item["body"]
	let task = fecha +' '+hora + ": "+descripcion
	console.log(task)
	})
}

function getTaskById(id) {
	tasks.forEach((item)=>{
		if(id === item["id"].toString()){
			let date = new Date(item["id"]).toUTCString()
			let fecha = date.slice(5,11).toUpperCase()
			let hora = date.slice(17,22)
			let descripcion = item["body"]
			let task = fecha +' '+hora + ": "+descripcion
			console.log(task)
		}
	})
}

function saveData(newData) {
	
}

function createTask(body) {
	// AQUÍ TU CÓDIGO
}

function updateTask(id, body) {
	// AQUI TU CÓDIGO
}

function deleteTask(id) {
	//AQUÍ TU CÓDIGO
}

function clearTasks() {
	//AQUÍ TU CÓDIGO
}
