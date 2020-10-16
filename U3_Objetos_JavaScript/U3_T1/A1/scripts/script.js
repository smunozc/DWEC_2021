let fechaHoy = new Date();
let fechaFinCurso = new Date(2021,5,24);
let contador = fechaFinCurso.getTime() - fechaHoy.getTime();
let diasRestantes = (Math.round(contador/(1000*60*60*24)));

alert("Días restantes hasta el fin de curso: " + diasRestantes);