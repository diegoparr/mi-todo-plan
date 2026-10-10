const weeks = [
  { title: "Complejidad, tablas hash y estructuras lineales", subtitle: "Algoritmos y estructuras de datos", tasks: [
    ["Complejidad y Notación Big-O", "Tiempo vs. espacio auxiliar, peor caso y costos comunes.", "TEORÍA", "1.5 h"],
    ["Arreglos vs. listas enlazadas", "Localidad de referencia y patrones de asignación de memoria.", "TEORÍA", "1 h"],
    ["Tabla hash manual", "Implementar encadenamiento separado y analizar colisiones.", "PRÁCTICA", "2 h"],
  ]},
  { title: "Árboles, heaps y grafos", subtitle: "Algoritmos y estructuras de datos", tasks: [
    ["BST, AVL y Red-Black Trees", "Propiedades de orden, degradación y balanceo.", "TEORÍA", "1.5 h"],
    ["Heaps y colas de prioridad", "Representación en arreglo, inserción y extracción en O(log n).", "TEORÍA", "1 h"],
    ["Recorridos BFS y DFS", "Resolver 6 ejercicios de Trees y 6 de Graphs en NeetCode.", "PRÁCTICA", "3 h"],
  ]},
  { title: "Almacenamiento, índices y B+ Trees", subtitle: "Bases de datos y motores por debajo", tasks: [
    ["Páginas de disco e I/O", "Entender por qué el acceso a disco cuesta más que la RAM.", "TEORÍA", "1 h"],
    ["Árboles B y B+ Trees", "Fan-out, nodos hoja enlazados y consultas de rango.", "TEORÍA", "1.5 h"],
    ["Laboratorio de EXPLAIN ANALYZE", "Insertar 500.000 filas y comparar consultas con índices.", "LABORATORIO", "3 h"],
  ]},
  { title: "Transacciones, concurrencia y ACID", subtitle: "Bases de datos y motores por debajo", tasks: [
    ["Atomicidad, durabilidad y WAL", "Comprender el registro de escritura anticipada.", "TEORÍA", "1 h"],
    ["Niveles de aislamiento", "Revisar las anomalías y los 4 niveles ANSI.", "TEORÍA", "1.5 h"],
    ["Carreras y deadlocks transaccionales", "Recrear una condición de carrera desde dos terminales.", "LABORATORIO", "3 h"],
  ]},
  { title: "Sistemas operativos y multihilo", subtitle: "Sistemas operativos, redes y concurrencia", tasks: [
    ["Procesos vs. hilos", "Memoria aislada, memoria compartida y context switch.", "TEORÍA", "1 h"],
    ["Memoria virtual y thrashing", "Tablas de páginas, page faults y swap.", "TEORÍA", "1 h"],
    ["Provocar y resolver un deadlock", "Dos hilos, dos recursos y ordenamiento global.", "LABORATORIO", "2.5 h"],
  ]},
  { title: "Redes y protocolos de transporte", subtitle: "Sistemas operativos, redes y concurrencia", tasks: [
    ["Modelo TCP/IP", "Responsabilidades de IP, enrutamiento y transporte.", "TEORÍA", "1 h"],
    ["TCP, UDP y HTTP", "Handshake, control de congestión y evolución de HTTP.", "TEORÍA", "1.5 h"],
    ["Inspeccionar tráfico de red", "Observar TCP y DNS con curl -v o Wireshark.", "LABORATORIO", "2 h"],
  ]},
  { title: "Diseño, SOLID y estrategia de pruebas", subtitle: "Arquitectura, calidad y sistemas distribuidos", tasks: [
    ["SOLID en la práctica", "LSP, ISP y DIP con inyección de dependencias.", "TEORÍA", "1.5 h"],
    ["Taxonomía de test doubles", "Dummies, stubs, mocks y fakes: cuándo usar cada uno.", "TEORÍA", "1 h"],
    ["Refactorizar y probar", "Desacoplar un módulo y escribir pruebas unitarias.", "PRÁCTICA", "3 h"],
  ]},
  { title: "Sistemas distribuidos y resiliencia", subtitle: "Arquitectura, calidad y sistemas distribuidos", tasks: [
    ["Teorema CAP", "Consistencia, disponibilidad y particiones de red.", "TEORÍA", "1 h"],
    ["Patrones de resiliencia", "Circuit breaker, retries, rate limiting e idempotencia.", "TEORÍA", "1.5 h"],
    ["Diseñar una arquitectura resiliente", "Diagrama de un sistema de alto tráfico.", "PRÁCTICA", "3 h"],
  ]},
];

const storageKey = "ruta-cs-progress";
let state = JSON.parse(localStorage.getItem(storageKey) || "{}");
let filter = "all";
const allTasks = weeks.flatMap((week, wi) => week.tasks.map((task, ti) => ({ week, wi, ti, id: `${wi}-${ti}`, title: task[0], description: task[1], type: task[2], time: task[3] })));
const isDone = id => Boolean(state[id]);
const save = () => localStorage.setItem(storageKey, JSON.stringify(state));

function renderWeeks() {
  const list = document.querySelector("#weeksList");
  list.innerHTML = weeks.map((week, wi) => {
    const done = week.tasks.filter((_, ti) => isDone(`${wi}-${ti}`)).length;
    const visibleTasks = week.tasks.map((task, ti) => ({ task, ti })).filter(({ ti }) => filter === "all" || (filter === "done" ? isDone(`${wi}-${ti}`) : !isDone(`${wi}-${ti}`)));
    if (filter !== "all" && visibleTasks.length === 0) return "";
    return `<article class="week-card ${wi === 0 ? "open current" : ""}" data-week="${wi}">
      <div class="week-summary" role="button" tabindex="0" aria-expanded="${wi === 0}">
        <span class="week-number">0${wi + 1}</span><div class="week-info"><strong>Semana ${wi + 1} · ${week.title}</strong><span>${week.subtitle}</span></div>
        <div><div class="week-track"><i style="width:${done / week.tasks.length * 100}%"></i></div><div class="week-percent">${done}/${week.tasks.length} HECHAS</div></div><span class="chevron">⌄</span>
      </div>
      <div class="tasks">${visibleTasks.map(({ task, ti }) => `<label class="task ${isDone(`${wi}-${ti}`) ? "done" : ""}"><input type="checkbox" data-task="${wi}-${ti}" ${isDone(`${wi}-${ti}`) ? "checked" : ""}/><span class="task-body"><span class="task-title">${task[0]}</span><span class="task-desc">${task[1]}</span></span><span class="task-tag">${task[2]} · ${task[3]}</span></label>`).join("")}</div>
    </article>`;
  }).join("") || `<div class="empty-state">No hay tareas en esta vista.</div>`;
  list.querySelectorAll(".week-summary").forEach(summary => summary.addEventListener("click", () => summary.parentElement.classList.toggle("open")));
  list.querySelectorAll("input").forEach(input => input.addEventListener("change", () => { state[input.dataset.task] = input.checked; save(); render(); }));
}

function render() {
  const completed = allTasks.filter(task => isDone(task.id)).length;
  const percent = Math.round(completed / allTasks.length * 100);
  document.querySelector("#completedCount").textContent = completed;
  document.querySelector("#remainingCount").textContent = allTasks.length - completed;
  document.querySelector("#inProgressCount").textContent = completed === allTasks.length ? 0 : 1;
  document.querySelector("#heroCompleted").textContent = `${completed} de ${allTasks.length} tareas`;
  document.querySelector("#ringValue").textContent = `${percent}%`;
  document.querySelector("#progressRing").style.background = `conic-gradient(var(--green) ${percent * 3.6}deg, #dfe6de 0deg)`;
  const next = allTasks.find(task => !isDone(task.id));
  document.querySelector("#nextTitle").textContent = next ? next.title : "¡Ruta completada!";
  document.querySelector("#nextDescription").textContent = next ? next.description : "Has marcado todas las tareas del plan como hechas.";
  document.querySelector("#completeNext").disabled = !next;
  document.querySelector("#completeNext").onclick = () => { if (next) { state[next.id] = true; save(); render(); } };
  document.querySelector("#heroStatus").textContent = next ? `Siguiente: Semana ${next.wi + 1}` : "Excelente trabajo";
  document.querySelector("#currentWeekLabel").textContent = next ? `Semana ${next.wi + 1} · en progreso` : "Plan terminado";
  document.querySelector("#streakCount").textContent = completed ? "1 día" : "0 días";
  renderWeeks();
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active"); filter = button.dataset.filter; renderWeeks();
}));
document.querySelector("#resetProgress").addEventListener("click", () => {
  if (confirm("¿Quieres borrar todo tu progreso?")) { state = {}; save(); render(); }
});
render();
