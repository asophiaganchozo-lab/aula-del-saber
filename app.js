
const asignaturas = [
  {
    nombre: "Seguridad Informática",
    descripcion: "Aprende a proteger sistemas, redes y datos digitales.",
    icono: "🛡️"
  },
  {
    nombre: "Programación",
    descripcion: "Conoce la lógica y crea tus primeros programas.",
    icono: "💻"
  },
  {
    nombre: "Desarrollo Web",
    descripcion: "Aprende a diseñar y construir páginas web.",
    icono: "🌐"
  },
  {
    nombre: "Bases de Datos",
    descripcion: "Organiza, almacena y consulta información.",
    icono: "🗄️"
  },
  {
    nombre: "Redes y Conectividad",
    descripcion: "Descubre cómo se comunican los dispositivos.",
    icono: "🔗"
  },
  {
    nombre: "Ética y Ciudadanía Digital",
    descripcion: "Aprende a utilizar la tecnología responsablemente.",
    icono: "📚"
  }
];

const contenedor = document.getElementById("lista-asignaturas");

function mostrarAsignaturas() {
  if (!contenedor) return;

  contenedor.innerHTML = asignaturas.map((asignatura, indice) => `
    <article class="tarjeta">
      <div class="icono-asignatura" aria-hidden="true">
        ${asignatura.icono}
      </div>
      <h3>${asignatura.nombre}</h3>
      <p>${asignatura.descripcion}</p>
      <p><strong>5 módulos de aprendizaje</strong></p>
    </article>
  `).join("");
}

mostrarAsignaturas();
