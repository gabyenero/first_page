let materias = {
     fisica: ["Perez","pedro","pepito","cofla","maria"],
     programacion: ["Dalto","pedro","juan","pepito"],
     logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
     quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}


const inscribir = (alumno,materia) =>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
    } else {
        personas.push(alumno);
       if (materia == "fisica") {
           materias = {
               fisica: personas,
               programacion: materias['programacion'],
               logica: materias['logica'],
               quimica: materias['quimica']
           }
         } else if (materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        } else if (materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materia['programacion'],
                logica: personas,
                quimica: materias['quimica']
            } 
        } else if (materia == "quimica") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: materia['programacion'],
                    logica: materias['logica'],
                    quimica: personas
                }


       }
       document.write(`¡felicidades ${alumno}! te has inscrito a ${materia} correctamente. <br><br>`);
    }
}
document.write(materias["fisica"]);


inscribir("pedrito","fisica")
inscribir("jorge","fisica")
inscribir("ranses","fisica")
inscribir("juan","fisica")
inscribir("juana","fisica")
inscribir("gaby","fisica")
inscribir("pablo","fisica")
inscribir("paula","fisica")
inscribir("sol","fisica")
inscribir("luna","fisica")
inscribir("alex","fisica")
inscribir("katy","fisica")
inscribir("robertico","fisica")
inscribir("katya","fisica")
inscribir("cande","fisica")
inscribir("cielo","fisica")
inscribir("flor","fisica")
inscribir("vanessa","fisica")
inscribir("pepito","fisica")
inscribir("loreta","fisica")
inscribir("lenovo","fisica")
inscribir("venecia","fisica")
inscribir("beba","fisica")
inscribir("bambi","fisica")






document.write("<br>" + materias['fisica'])