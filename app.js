const weeks = [
  { title: "Complejidad, tablas hash y estructuras lineales", subtitle: "Algoritmos y estructuras de datos", tasks: [
    ["Complejidad y Notación Big-O", "Tiempo vs. espacio auxiliar, peor caso y costos comunes.", "TEORÍA", "1.5 h", ["0-0"]],
    ["Arreglos vs. listas enlazadas", "Localidad de referencia y patrones de asignación de memoria.", "TEORÍA", "1 h", ["0-1"]],
    ["Tabla hash manual", "Implementar encadenamiento separado y analizar colisiones.", "PRÁCTICA", "2 h", ["0-2"]],
  ]},
  { title: "Árboles, heaps y grafos", subtitle: "Algoritmos y estructuras de datos", tasks: [
    ["BST, AVL y Red-Black Trees", "Propiedades de orden, degradación y balanceo.", "TEORÍA", "1.5 h", ["1-0"]],
    ["Heaps y colas de prioridad", "Representación en arreglo, inserción y extracción en O(log n).", "TEORÍA", "1 h", ["1-1"]],
    ["Recorridos BFS y DFS", "Resolver 6 ejercicios de Trees y 6 de Graphs en NeetCode.", "PRÁCTICA", "3 h", ["1-2"]],
  ]},
  { title: "Patrones lineales y búsqueda", subtitle: "Patrones de algoritmos para entrevistas", tasks: [
    ["Sliding Window y Two Pointers", "Identificar ventanas expandibles, contracción y recorridos con dos punteros.", "TEORÍA", "1.5 h"],
    ["Binary Search en respuestas", "Convertir problemas de optimización en una búsqueda binaria sobre el espacio de respuestas.", "TEORÍA", "1.5 h"],
    ["Práctica de patrones lineales", "Resolver 8 ejercicios de Sliding Window, Two Pointers y Binary Search en NeetCode.", "PRÁCTICA", "3 h"],
  ]},
  { title: "Backtracking y programación dinámica", subtitle: "Patrones de algoritmos para entrevistas", tasks: [
    ["Árboles de decisión y backtracking", "Modelar elecciones, restricciones, poda y estados visitados.", "TEORÍA", "1.5 h"],
    ["Memoización y tabulación", "Comparar memoización con tabulación 1D/2D y reconocer estados recurrentes.", "TEORÍA", "1.5 h"],
    ["DP y grafos en práctica", "Resolver 8 ejercicios de DP, Dijkstra y Topological Sort en NeetCode.", "PRÁCTICA", "3 h"],
  ]},
  { title: "Almacenamiento, índices y B+ Trees", subtitle: "Bases de datos y motores por debajo", tasks: [
    ["Páginas de disco e I/O", "Entender por qué el acceso a disco cuesta más que la RAM.", "TEORÍA", "1 h", ["2-0"]],
    ["Árboles B y B+ Trees", "Fan-out, nodos hoja enlazados y consultas de rango.", "TEORÍA", "1.5 h", ["2-1"]],
    ["Laboratorio de EXPLAIN ANALYZE", "Insertar 500.000 filas y comparar consultas con índices.", "LABORATORIO", "3 h", ["2-2"]],
  ]},
  { title: "Transacciones, concurrencia y ACID", subtitle: "Bases de datos y motores por debajo", tasks: [
    ["Atomicidad, durabilidad y WAL", "Comprender el registro de escritura anticipada.", "TEORÍA", "1 h", ["3-0"]],
    ["Niveles de aislamiento", "Revisar las anomalías y los 4 niveles ANSI.", "TEORÍA", "1.5 h", ["3-1"]],
    ["Carreras y deadlocks transaccionales", "Recrear una condición de carrera desde dos terminales.", "LABORATORIO", "3 h", ["3-2"]],
  ]},
  { title: "Sistemas operativos, concurrencia y runtime", subtitle: "Sistemas operativos, memoria y multihilo", tasks: [
    ["Procesos, hilos y sincronización", "Unificar memoria aislada, memoria compartida, context switch, mutex, semáforos y canales.", "TEORÍA", "2 h", ["4-0", "8-0"]],
    ["Memoria virtual, GC y fugas", "Relacionar page faults, swap, heap, fragmentación, referencias retenidas y file descriptors.", "TEORÍA", "2 h", ["4-1", "8-1"]],
    ["Laboratorio de carga concurrente", "Provocar un deadlock, implementar un pool de workers y resolver carreras bajo contención.", "LABORATORIO", "3 h", ["4-2", "8-2"]],
  ]},
  { title: "Redes y protocolos modernos", subtitle: "TCP/UDP, WebSockets, gRPC y HTTP/2–HTTP/3", tasks: [
    ["Modelo TCP/IP y transporte", "Integrar IP, enrutamiento, TCP, UDP, handshake, congestión y backpressure.", "TEORÍA", "2 h", ["5-0", "9-0"]],
    ["HTTP, multiplexación y comunicación", "Comparar HTTP, WebSockets, gRPC, HTTP/2 y HTTP/3 sobre QUIC; identificar head-of-line blocking.", "TEORÍA", "2 h", ["5-1", "9-1"]],
    ["Laboratorio de red degradada", "Inspeccionar TCP y DNS y emular latencia, pérdida y jitter con métricas.", "LABORATORIO", "3 h", ["5-2", "9-2"]],
  ]},
  { title: "Diseño, SOLID y estrategia de pruebas", subtitle: "Arquitectura y calidad", tasks: [
    ["SOLID en la práctica", "LSP, ISP y DIP con inyección de dependencias.", "TEORÍA", "1.5 h", ["6-0"]],
    ["Taxonomía de test doubles", "Dummies, stubs, mocks y fakes: cuándo usar cada uno.", "TEORÍA", "1 h", ["6-1"]],
    ["Refactorizar y probar", "Desacoplar un módulo y escribir pruebas unitarias.", "PRÁCTICA", "3 h", ["6-2"]],
  ]},
  { title: "Sistemas distribuidos, almacenamiento y resiliencia", subtitle: "Arquitectura de datos y sistemas distribuidos", tasks: [
    ["CAP, consistencia y particionamiento", "Unificar CAP, consistencia eventual, B+ Trees, LSM y distribución por particiones.", "TEORÍA", "2 h", ["7-0", "10-0"]],
    ["Resiliencia, Saga e idempotencia", "Diseñar circuit breakers, retries, rate limiting, transacciones Saga y claves idempotentes.", "TEORÍA", "2 h", ["7-1", "10-1"]],
    ["Arquitectura distribuida resiliente", "Construir un flujo con colas y backoff; diagramar un sistema de alto tráfico.", "LABORATORIO", "3 h", ["7-2", "10-2"]],
  ]},
  { title: "Rendimiento y operación de sistemas", subtitle: "Diagnóstico y confiabilidad en producción", tasks: [
    ["Heap dumps y flame graphs", "Leer volcados de memoria, gráficos de llamadas y perfiles de CPU.", "TEORÍA", "2 h", ["11-0"]],
    ["Profiling y file descriptors", "Localizar fugas, bloqueos y agotamiento de recursos en Linux.", "PRÁCTICA", "2 h"],
    ["Incidente de rendimiento", "Reproducir una latencia de 3 segundos y confirmar la causa con trazas y perfiles.", "LABORATORIO", "3 h"],
  ]},
  { title: "Observabilidad y diagnóstico", subtitle: "Telemetría para sistemas en producción", tasks: [
    ["Trazabilidad y telemetría", "Instrumentar una petición con OpenTelemetry, métricas Prometheus y logs estructurados correlacionados.", "PRÁCTICA", "2 h", ["11-1"]],
    ["Runbooks y señales operativas", "Definir métricas de salud, alertas accionables y procedimientos de respuesta.", "TEORÍA", "2 h"],
    ["Laboratorio de diagnóstico", "Usar trazas y perfiles para aislar una regresión de rendimiento.", "LABORATORIO", "3 h", ["11-2"]],
  ]},
  { title: "Fundamentos de ML, Embeddings y Evaluación", subtitle: "Machine Learning aplicado a sistemas inteligentes", tasks: [
    ["Regresión, clasificación y descenso de gradiente", "Estudiar los fundamentos de regresión, clasificación y optimización por descenso de gradiente.", "TEORÍA", "2 h"],
    ["Espacios vectoriales y RAG", "Practicar similitud coseno y chunking para recuperar contexto en sistemas RAG.", "PRÁCTICA", "2 h"],
    ["Laboratorio de evaluación", "Calcular Precision, Recall, F1 y matriz de confusión sobre un dataset real.", "LABORATORIO", "3 h"],
  ]},
  { title: "Auditoría de seguridad y dirección de agentes", subtitle: "Seguridad ofensiva, MCP y evaluaciones", tasks: [
    ["Auditoría de código generado", "Detectar prompt injection indirecta, timing attacks, fugas de contexto, CORS/tokens y escalada de privilegios.", "PRÁCTICA", "2 h", ["12-0"]],
    ["MCP y tool calling seguro", "Exponer una API o script local con permisos mínimos, validación de entradas, límites y trazabilidad.", "LABORATORIO", "3 h", ["12-1"]],
    ["Evals y benchmarks de agentes", "Diseñar pruebas automatizadas para errores lógicos, alucinaciones, regresiones y degradación de rendimiento.", "PRÁCTICA", "2.5 h", ["12-2"]],
  ]},
  { title: "Matemáticas discretas y razonamiento", subtitle: "Fundamentos matemáticos para ingeniería", tasks: [
    ["Lógica, conjuntos y relaciones", "Repasar proposiciones, cuantificadores, funciones y relaciones de equivalencia.", "TEORÍA", "2 h", ["13-0"]],
    ["Inducción, combinatoria y probabilidad", "Resolver recurrencias, conteos, invariantes y probabilidades útiles para analizar algoritmos.", "PRÁCTICA", "2 h", ["13-1"]],
    ["Demostraciones de algoritmos", "Justificar corrección y complejidad de tres algoritmos usando invariantes y casos límite.", "LABORATORIO", "2.5 h", ["13-2"]],
  ]},
  { title: "Ingeniería de software y entrega continua", subtitle: "Diseño, calidad y mantenimiento", tasks: [
    ["Git y colaboración avanzada", "Practicar ramas, rebase, resolución de conflictos, revisión de código y commits mantenibles.", "PRÁCTICA", "2 h", ["14-0"]],
    ["Testing y CI/CD", "Diseñar una pirámide de pruebas y automatizar lint, tests y builds en integración continua.", "LABORATORIO", "3 h", ["14-1"]],
    ["Arquitectura limpia y ADRs", "Documentar decisiones, separar capas y evaluar trade-offs de mantenibilidad, coste y complejidad.", "PRÁCTICA", "2 h", ["14-2"]],
  ]},
  { title: "Seguridad aplicada e identidad", subtitle: "Protección de aplicaciones y datos", tasks: [
    ["Criptografía para desarrolladores", "Comprender hash, cifrado, firmas, TLS y errores comunes de implementación.", "TEORÍA", "2 h", ["15-0"]],
    ["OAuth2, OIDC y secretos", "Implementar autenticación, autorización, scopes, rotación de tokens y gestión segura de secretos.", "LABORATORIO", "3 h", ["15-1"]],
    ["Threat modeling y respuesta", "Construir un modelo STRIDE, priorizar riesgos y definir controles, alertas y recuperación.", "PRÁCTICA", "2 h", ["15-2"]],
  ]},
  { title: "Cloud, DevOps y operación", subtitle: "Despliegue y confiabilidad de plataformas", tasks: [
    ["Contenedores y Kubernetes", "Empaquetar una API con Docker y comprender servicios, deployments, health checks y configuración.", "LABORATORIO", "3 h", ["16-0"]],
    ["Infraestructura como código", "Definir infraestructura reproducible con Terraform y aplicar configuración segura.", "PRÁCTICA", "2 h", ["16-1"]],
    ["Backups y recuperación", "Diseñar RPO/RTO, backups probados, despliegues graduales y recuperación ante desastres.", "TEORÍA", "2 h", ["16-2"]],
  ]},
  { title: "Proyecto integrador y endurecimiento", subtitle: "Producción real, observabilidad y documentación", tasks: [
    ["Endurecer un sistema de producción", "Añadir observabilidad OpenTelemetry, métricas, logs correlacionados y alertas a un sistema real existente.", "PRÁCTICA", "3 h", ["17-0"]],
    ["Suite de evals automatizados para agentes", "Construir evals reproducibles para calidad, seguridad, regresiones y rendimiento de los agentes existentes.", "LABORATORIO", "4 h", ["17-1"]],
    ["Documentar con ADRs y runbook", "Registrar decisiones de arquitectura, límites, riesgos, operación y trade-offs del sistema endurecido.", "PRÁCTICA", "2.5 h", ["17-2"]],
  ]},
];

const storageKey = "ruta-cs-progress";
const activityKey = "ruta-cs-activity";
let state = JSON.parse(localStorage.getItem(storageKey) || "{}");
let filter = "all";
let activityHistory = JSON.parse(localStorage.getItem(activityKey) || "[]");
const allTasks = weeks.flatMap((week, wi) => week.tasks.map((task, ti) => ({ week, wi, ti, id: `${wi}-${ti}`, title: task[0], description: task[1], type: task[2], time: task[3], legacyIds: task[4] || [] })));
const isDone = id => Boolean(state[id]);
const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
const saveActivity = () => localStorage.setItem(activityKey, JSON.stringify([...new Set(activityHistory)].sort()));
const dateKey = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const recordActivity = () => {
  activityHistory.push(dateKey(new Date()));
  saveActivity();
};
const getStreakCount = () => {
  const dates = new Set(activityHistory);
  const today = new Date();
  const todayKey = dateKey(today);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const start = dates.has(todayKey) ? today : dates.has(dateKey(yesterday)) ? yesterday : null;
  if (!start) return 0;
  let streak = 0;
  const cursor = new Date(start);
  while (dates.has(dateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
};

const migrationChanged = allTasks.some(task => task.legacyIds.some(legacyId => {
  if (!state[legacyId]) return false;
  state[task.id] = true;
  return true;
}));
if (migrationChanged) save();

function renderWeeks() {
  const list = document.querySelector("#weeksList");
  list.innerHTML = weeks.map((week, wi) => {
    const done = week.tasks.filter((_, ti) => isDone(`${wi}-${ti}`)).length;
    const visibleTasks = week.tasks.map((task, ti) => ({ task, ti })).filter(({ ti }) => filter === "all" || (filter === "done" ? isDone(`${wi}-${ti}`) : !isDone(`${wi}-${ti}`)));
    if (filter !== "all" && visibleTasks.length === 0) return "";
    return `<article class="week-card ${wi === 0 ? "open current" : ""}" data-week="${wi}">
      <div class="week-summary" role="button" tabindex="0" aria-expanded="${wi === 0}">
        <span class="week-number">${String(wi + 1).padStart(2, "0")}</span><div class="week-info"><strong>Semana ${wi + 1} · ${week.title}</strong><span>${week.subtitle}</span></div>
        <div><div class="week-track"><i style="width:${done / week.tasks.length * 100}%"></i></div><div class="week-percent">${done}/${week.tasks.length} HECHAS</div></div><span class="chevron">⌄</span>
      </div>
      <div class="tasks">${visibleTasks.map(({ task, ti }) => `<label class="task ${isDone(`${wi}-${ti}`) ? "done" : ""}"><input type="checkbox" data-task="${wi}-${ti}" ${isDone(`${wi}-${ti}`) ? "checked" : ""}/><span class="task-body"><span class="task-title">${task[0]}</span><span class="task-desc">${task[1]}</span></span><span class="task-tag">${task[2]} · ${task[3]}</span></label>`).join("")}</div>
    </article>`;
  }).join("") || `<div class="empty-state">No hay tareas en esta vista.</div>`;
  list.querySelectorAll(".week-summary").forEach(summary => summary.addEventListener("click", () => summary.parentElement.classList.toggle("open")));
  list.querySelectorAll("input").forEach(input => input.addEventListener("change", () => {
    state[input.dataset.task] = input.checked;
    if (input.checked) recordActivity();
    save();
    render();
  }));
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
  document.querySelector("#completeNext").onclick = () => {
    if (next) {
      state[next.id] = true;
      recordActivity();
      save();
      render();
    }
  };
  document.querySelector("#heroStatus").textContent = next ? `Siguiente: Semana ${next.wi + 1}` : "Excelente trabajo";
  document.querySelector("#currentWeekLabel").textContent = next ? `Semana ${next.wi + 1} · en progreso` : "Plan terminado";
  const streak = getStreakCount();
  document.querySelector("#streakCount").textContent = `${streak} ${streak === 1 ? "día" : "días"}`;
  renderWeeks();
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active"); filter = button.dataset.filter; renderWeeks();
}));
document.querySelector("#resetProgress").addEventListener("click", () => {
  if (confirm("¿Quieres borrar todo tu progreso?")) {
    state = {};
    activityHistory = [];
    save();
    saveActivity();
    render();
  }
});
render();
