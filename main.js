const readlineSync = require('readline-sync');

// * Lista de alumnos
let alumnos = [];

// * Función para agregar o modificar un alumno
function agregarOModificarAlumno() {
    let nombre = readlineSync.question("Ingrese el nombre del alumno: ");

    // * Verificar si el alumno ya existe
    let alumnoExistente = alumnos.find(alumno => alumno[0] === nombre);
    
    if (alumnoExistente) {
        console.log("El alumno ya existe. Ingrese otra materia o modifique una nota existente.");
        let materia = readlineSync.question("Ingrese el nombre de la materia: ");
        let nota = parseFloat(readlineSync.question("Ingrese la nota: "));
        
        // * Buscar la materia en la lista del alumno
        let materiaExistente = alumnoExistente[1].find(m => m[0] === materia);
        
        if (materiaExistente) {
            // * Modificar la nota de la materia existente
            materiaExistente[1] = nota;
        } else {
            // * Agregar nueva materia y nota
            alumnoExistente[1].push([materia, nota]);
        }
        return;
    }
    
    // * Si el alumno no existe, se agrega uno nuevo
    let materia = readlineSync.question("Ingrese el nombre de la materia: ");
    let nota = parseFloat(readlineSync.question("Ingrese la nota: "));
    
    alumnos.push([nombre, [[materia, nota]]]);
}

// * Función para mostrar los alumnos y sus materias en formato de matriz
function mostrarAlumnos() {
    console.log("\nLista de alumnos:");
    console.log(alumnos);
}

// * Bucle principal
while (true) {
    agregarOModificarAlumno();
    
    let continuar = readlineSync.question("¿Desea agregar/modificar otro alumno? (s/n): ").trim().toLowerCase();
    if (continuar !== 's') {
        break;
    }
}

mostrarAlumnos();
