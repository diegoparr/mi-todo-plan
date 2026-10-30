# Plan Intensivo de Nivelación y Excelencia en Ciencias de la Computación (13 Semanas)

Este plan de estudio está diseñado para cubrir los fundamentos teóricos y prácticos de **Ciencias de la Computación e Ingeniería de Software** que marcan la diferencia entre un desarrollador que solo maneja librerías superficiales y un ingeniero con criterio técnico de alto nivel.

---

## Metodología Diaria Recomendada (Lunes a Viernes, ~4 horas/día)

* **Bloque 1 (1.5 h): Fundamentos Teóricos.** Lecturas guiadas o módulos conceptuales.
* **Bloque 2 (1.5 h): Ejercicios Prácticos y Algoritmos.** Resolución activa de problemas e implementación de estructuras de datos.
* **Bloque 3 (1.0 h): Laboratorio de Sistemas.** Pruebas de terminal, configuración de bases de datos, inspección de protocolos y análisis de concurrencia.

---

## Bloque I: Algoritmos y Estructuras de Datos (Semanas 1 y 2)

### Semana 1: Complejidad, Tablas Hash y Estructuras Lineales
* **Conceptos clave:**
  * **Notación Big-O ($\mathcal{O}$):** Tiempo vs. espacio auxiliar; peor caso vs. caso promedio. Costos comunes: $\mathcal{O}(1)$, $\mathcal{O}(\log n)$, $\mathcal{O}(n)$, $\mathcal{O}(n \log n)$, $\mathcal{O}(n^2)$.
  * **Arreglos vs. Listas enlazadas:** Localidad de referencia en caché de CPU y patrones de asignación de memoria.
  * **Tablas Hash a bajo nivel:** Funciones de hash, manejo de colisiones (encadenamiento separado vs. direccionamiento abierto), factor de carga y degradación a $\mathcal{O}(n)$.
  * **Pilas (Stacks) y Colas (Queues):** Casos de uso de buffers y evaluación de expresiones.
* **Práctica semanal:**
  * Implementar una tabla hash manual con encadenamiento separado en el lenguaje preferido.
  * Resolver los ejercicios de *Arrays & Hashing* en [NeetCode.io](https://neetcode.io/roadmap).

### Semana 2: Árboles, Heaps y Grafos
* **Conceptos clave:**
  * **Árboles Binarios de Búsqueda (BST):** Propiedades de orden, degradación a listas y árboles balanceados (AVL / Red-Black Trees).
  * **Heaps Binarios y Colas de Prioridad:** Representación en arreglo, inserción y extracción en $\mathcal{O}(\log n)$.
  * **Representación de Grafos:** Lista de adyacencia vs. matriz de adyacencia (consumo de memoria y velocidad de consulta).
  * **Algoritmos de Recorrido:**
    * **BFS (Breadth-First Search):** Implementación con cola; óptimo para caminos mínimos en grafos **no ponderados**.
    * **DFS (Depth-First Search):** Implementación con recursión/pila; detección de ciclos y ordenamiento topológico.
    * **Dijkstra vs. Bellman-Ford:** Cuándo usar pesos positivos vs. detección de ciclos de pesos negativos.
* **Práctica semanal:**
  * Resolver 6 ejercicios de *Trees* y 6 ejercicios de *Graphs (BFS/DFS)* en NeetCode.

---

## Bloque II: Bases de Datos y Motores por Debajo (Semanas 3 y 4)

### Semana 3: Almacenamiento en Disco, Índices y B+ Trees
* **Conceptos clave:**
  * **Páginas de disco e I/O:** Por qué el acceso a disco es órdenes de magnitud más costoso que la RAM.
  * **Árboles B y B+ Trees:** Por qué los motores relacionales (PostgreSQL, MySQL InnoDB) prefieren B+ Trees: alto factor de ramificación (*fan-out*), nodos hoja enlazados para consultas de rango.
  * **Estrategias de Índices:** Clustered (índice primario) vs. Non-clustered (secundario); índices compuestos y selectividad.
  * **Mecanismos de Consulta:** Escaneo secuencial (*Seq Scan*) vs. escaneo de índice (*Index Scan*) vs. *Index-Only Scan*.
* **Laboratorio semanal:**
  * Instalar PostgreSQL localmente.
  * Insertar 500.000 filas de prueba y analizar con `EXPLAIN ANALYZE` consultas con y sin índices compuestos.

### Semana 4: Transacciones, Concurrencia y ACID
* **Conceptos clave:**
  * **Atomicidad y Durabilidad:** Registro de escritura anticipada (**WAL - Write-Ahead Logging**).
  * **Aislamiento y Anomalías:**
    * Lecturas sucias (*Dirty Reads*).
    * Lecturas no repetibles (*Non-repeatable Reads*).
    * Lecturas fantasma (*Phantom Reads*).
  * **Los 4 niveles de aislamiento ANSI:**
    1. *Read Uncommitted*
    2. *Read Committed*
    3. *Repeatable Read*
    4. *Serializable*
  * **Manejo de Bloqueos (Locks):** Bloqueos compartidos (S) vs. exclusivos (X); bloqueos optimistas vs. pesimistas; interbloqueos (*deadlocks*) en transacciones.
* **Laboratorio semanal:**
  * Abrir dos terminales paralelas conectadas a la misma base de datos, configurar distintos niveles de aislamiento y recrear intencionalmente una condición de carrera y un deadlock transaccional.

---

## Bloque III: Sistemas Operativos, Redes y Concurrencia (Semanas 5 y 6)

### Semana 5: Sistemas Operativos y Multihilo
* **Conceptos clave:**
  * **Procesos vs. Hilos:** Espacios de memoria aislados (PCB) vs. memoria compartida (hilos); costo de cambio de contexto (*context switch*).
  * **Memoria Virtual y Paginación:** Tablas de páginas, fallos de página (*page faults*) e intercambio con disco (*swap*).
  * **Hiperpaginación (Thrashing):** Causas y cómo el sistema colapsa al agotar la memoria física.
  * **Primitivas de Concurrencia:** Mutex (con noción de hilo propietario) vs. Semáforos de conteo (señalización).
  * **Las 4 Condiciones de Coffman para Deadlocks:**
    1. Exclusión mutua.
    2. Retención y espera (*Hold and wait*).
    3. No apropiación (*No preemption*).
    4. Espera circular.
* **Laboratorio semanal:**
  * Escribir un script con dos hilos que compitan por dos recursos compartidos para provocar un deadlock y luego aplicar ordenamiento global de recursos para solucionarlo.

### Semana 6: Redes y Protocolos de Transporte
* **Conceptos clave:**
  * **El Modelo TCP/IP:** Responsabilidades de Capa 3 (IP, enrutamiento) y Capa 4 (Transporte).
  * **TCP a fondo:** Negociación de tres vías (*3-Way Handshake*: SYN, SYN-ACK, ACK), números de secuencia y acuse de recibo, control de flujo y control de congestión.
  * **UDP vs. TCP:** Comparativa de sobrecarga; por qué protocolos como DNS (puerto 53 UDP) o streaming priorizan UDP.
  * **HTTP y Evolución:** HTTP/1.1 (conexiones persistentes y bloqueo de cabecera) vs. HTTP/2 (multiplexación de streams en una única conexión TCP) vs. HTTP/3 (sobre QUIC/UDP).
  * **Seguridad en Tránsito:** Handshake TLS básico y certificados.
* **Laboratorio semanal:**
  * Inspeccionar peticiones web y consultas DNS usando `curl -v` o Wireshark para observar el handshake TCP y la resolución sobre el puerto 53.

---

## Bloque IV: Arquitectura, Calidad y Sistemas Distribuidos (Semanas 7 y 8)

### Semana 7: Principios de Diseño, SOLID y Estrategia de Pruebas
* **Conceptos clave:**
  * **Principios SOLID en la práctica:**
    * **Liskov Substitution Principle (LSP):** Clases derivadas que pueden reemplazar a la clase base sin romper el comportamiento esperado.
    * **Interface Segregation Principle (ISP):** Interfaces pequeñas y cohesivas.
    * **Dependency Inversion Principle (DIP):** Depender de abstracciones mediante Inyección de Dependencias (DI).
  * **Taxonomía de Dobles de Prueba (Test Doubles):**
    * *Dummy:* Solo llena parámetros.
    * *Stub:* Devuelve datos predefinidos sin validar interacciones.
    * *Mock:* Verifica el comportamiento y la cantidad de llamadas realizadas.
    * *Fake:* Implementación ligera funcional en memoria (ej. base de datos en RAM).
* **Laboratorio semanal:**
  * Refactorizar un módulo de código acoplado aplicando inyección de dependencias y escribir pruebas unitarias utilizando Stubs y Mocks deliberadamente.

### Semana 8: Fundamentos de Sistemas Distribuidos y Resiliencia
* **Conceptos clave:**
  * **Teorema CAP:** Consistencia vs. Disponibilidad frente a Particiones de red inevitables.
  * **Patrones de Resiliencia:**
    * **Circuit Breaker:** Estados cerrado, abierto y semiabierto para evitar cascadas de fallos hacia servicios colapsados.
    * **Retries con Exponential Backoff y Jitter:** Evitar sobrecargar sistemas con reintentos sincronizados.
    * **Rate Limiting:** Algoritmos básicos (Token Bucket, Leaky Bucket).
  * **Estrategias de Caché:** Cache-Aside, Write-Through y políticas de desalojo (LRU - Least Recently Used).
  * **Idempotencia:** Manejo seguro de reintentos en APIs transaccionales (ej. pasarelas de pago).
* **Laboratorio semanal:**
  * Diseñar el diagrama de arquitectura para un sistema de alto tráfico (ej. acortador de enlaces o reserva de boletos) justificando balanceador, caché, base de datos y colas asíncronas.

---

## Bloque V: Concurrencia real, redes y sistemas distribuidos (Semanas 9 a 11)

### Semana 9: Concurrencia real, memoria y sistemas operativos
* **Conceptos clave:**
  * Condiciones de carrera, exclusión mutua, deadlocks y contención; comparar mutex, semáforos y canales.
  * Recolector de basura, fugas de memoria, fragmentación del heap y consumo de *file descriptors* en Linux.
* **Laboratorio semanal:**
  * Implementar un pool de workers bajo carga, medir la contención y resolver una carrera usando herramientas de profiling.

### Semana 10: Redes bajo latencia y protocolos modernos
* **Conceptos clave:**
  * TCP/UDP, buffers, backpressure, control de congestión y degradación de paquetes con latencia, pérdida y jitter.
  * WebSockets, gRPC, multiplexación de HTTP/2 y HTTP/3 sobre QUIC; identificar *head-of-line blocking*.
* **Laboratorio semanal:**
  * Emular una red degradada y comparar throughput, retransmisiones y colas con `tc`, Wireshark o herramientas equivalentes.

### Semana 11: Almacenamiento distribuido y consistencia
* **Conceptos clave:**
  * B+ Trees en bases relacionales, árboles LSM y *compaction* en almacenamiento columnar, además de particionamiento.
  * Teorema CAP, consistencia eventual, transacciones Saga e idempotencia estricta para operaciones de pago.
  * Kafka, RabbitMQ y Redis Streams; backoff exponencial, *circuit breakers* y *rate limiting*.
* **Laboratorio semanal:**
  * Construir un flujo de mensajes con reintentos seguros, deduplicación y aislamiento ante la caída de un consumidor.

## Bloque VI: Observabilidad, seguridad y dirección de agentes (Semanas 12 y 13)

### Semana 12: Observabilidad, forense y profiling
* **Conceptos clave:**
  * Heap dumps, flame graphs y perfiles de CPU para localizar fugas, bloqueos y el hilo que degrada el rendimiento.
  * OpenTelemetry, métricas Prometheus y logs estructurados para seguir una petición entre servicios.
* **Laboratorio semanal:**
  * Reproducir una latencia de 3 segundos, formular hipótesis y confirmar la causa con trazas distribuidas y perfiles.

### Semana 13: Auditoría de seguridad y dirección de agentes
* **Conceptos clave:**
  * Prompt injection indirecta, ataques de tiempo, fugas de contexto, CORS/tokens y escalada de privilegios.
  * Criterio de auditor para detectar validaciones de límites ausentes y fallos explotables en código generado.
  * Model Context Protocol (MCP), *tool calling* con permisos mínimos y evaluaciones automatizadas de agentes.
* **Laboratorio semanal:**
  * Exponer un script local mediante una herramienta segura y crear un benchmark que mida errores lógicos, alucinaciones y regresiones de rendimiento.

---

## Recursos Clave Recomendados

1. **Algoritmos y Estructuras:**
   * *NeetCode.io Roadmap* (ejercicios y explicaciones visuales gratuitas).
   * Libro: *Grokking Algorithms* (Aditya Bhargava).
2. **Bases de Datos:**
   * Sitio web: *Use The Index, Luke!* ([use-the-index-luke.com](https://use-the-index-luke.com/)).
   * Documentación oficial de PostgreSQL (Capítulo de *Transaction Isolation*).
3. **Sistemas Operativos y Redes:**
   * Libro: *Operating Systems: Three Easy Pieces* (OSTEP - gratuito en `ostep.org`).
   * Canal educativo: *ByteByteGo* en YouTube (animaciones sobre redes y arquitectura).
4. **Arquitectura y Diseño:**
   * Sitio web: *Refactoring.Guru* (Patrones de diseño y principios SOLID).
   * Artículo: *Mocks Aren't Stubs* de Martin Fowler.
5. **Observabilidad y agentes:**
   * Documentación de [OpenTelemetry](https://opentelemetry.io/docs/).
   * Documentación de [Model Context Protocol](https://modelcontextprotocol.io/).
   * Guía de [OWASP Top 10](https://owasp.org/www-project-top-ten/).