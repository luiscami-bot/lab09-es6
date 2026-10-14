import { curso, estudiantes } from "./datos.js";
import reporte from "./calculos.js";

const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

document.querySelector("#curso").textContent = `Curso: ${curso}`;

const lista = document.querySelector("#reportes");

todos.forEach(estudiante => {
  const resultado = reporte(estudiante);
  console.log(resultado);
  lista.innerHTML += `<li>${resultado}</li>`;
});