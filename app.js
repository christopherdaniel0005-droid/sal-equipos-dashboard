
/* ===========================================================
   app.js — v2
   Dashboard de Status de Equipos — PT Paletizado SAL
   B2-P1: Inventario maestro (67 equipos) + utilidades
   =========================================================== */
"use strict";

// ============================================================
// 1. INVENTARIO MAESTRO — 67 equipos
// ============================================================
var EQUIPOS = [
  // ── Paletizadoras (20) ──
  {id:"Pal 1",       tipo:"pal", solvace:"10322569", nombre:"Paletizadora Ritz 1",        brand:"Ritz",      proyecto:"arthur",  linea:1},
  {id:"Pal 2",       tipo:"pal", solvace:"10322929", nombre:"Paletizadora Chips Ahoy! 2", brand:"CA!",       proyecto:"arthur",  linea:2},
  {id:"Pal 3",       tipo:"pal", solvace:"10322975", nombre:"Paletizadora Oreo 3",        brand:"Oreo",      proyecto:"sunrise", linea:3},
  {id:"Pal 4",       tipo:"pal", solvace:"10323196", nombre:"Paletizadora Ritz 4",        brand:"Ritz",      proyecto:"arthur",  linea:4},
  {id:"Pal 5",       tipo:"pal", solvace:"10323244", nombre:"Paletizadora Belvita 5",     brand:"Belvita",   proyecto:"arthur",  linea:5},
  {id:"Pal 6A",      tipo:"pal", solvace:"10323324", nombre:"Paletizadora Oreo 6A",       brand:"Oreo",      proyecto:"arthur",  linea:6},
  {id:"Pal 6B",      tipo:"pal", solvace:"10323323", nombre:"Paletizadora Oreo 6B",       brand:"Oreo",      proyecto:"arthur",  linea:6},
  {id:"Pal 7A",      tipo:"pal", solvace:"10323392", nombre:"Paletizadora Mini Oreo 7A",  brand:"Mini Oreo", proyecto:"arthur",  linea:7},
  {id:"Pal 7B",      tipo:"pal", solvace:"10323393", nombre:"Paletizadora Mini Oreo 7B",  brand:"Mini Oreo", proyecto:"arthur",  linea:7},
  {id:"Pal 8",       tipo:"pal", solvace:"10324423", nombre:"Paletizadora Ritz 8",        brand:"Ritz",      proyecto:"sunrise", linea:8},
  {id:"Pal 9A",      tipo:"pal", solvace:"10324914", nombre:"Paletizadora Oreo 9A",       brand:"Oreo",      proyecto:"arthur",  linea:9},
  {id:"Pal 9B",      tipo:"pal", solvace:"10324913", nombre:"Paletizadora Oreo 9B",       brand:"Oreo",      proyecto:"arthur",  linea:9},
  {id:"Pal 10",      tipo:"pal", solvace:"10325123", nombre:"Paletizadora Ritz 10",       brand:"Ritz",      proyecto:"sunrise", linea:10},
  {id:"Pal 11 GenZ", tipo:"pal", solvace:"10325178", nombre:"Paletizadora Oreo 11 GenZ",  brand:"Oreo",      proyecto:"sunrise", linea:11},
  {id:"Pal 11 PPL",  tipo:"pal", solvace:"10325176", nombre:"Paletizadora Oreo 11 PPL",   brand:"Oreo",      proyecto:"sunrise", linea:11},
  {id:"Pal 11 PPU",  tipo:"pal", solvace:"10325177", nombre:"Paletizadora Oreo 11 PPU",   brand:"Oreo",      proyecto:"sunrise", linea:11},
  {id:"Pal 11 OT",   tipo:"pal", solvace:"10325175", nombre:"Paletizadora Oreo 11 OT",    brand:"Oreo",      proyecto:"sunrise", linea:11},
  {id:"Pal 12",      tipo:"pal", solvace:"10336334", nombre:"Paletizadora Graham 12",     brand:"Graham",    proyecto:"sunrise", linea:12},
  {id:"Pal 13",      tipo:"pal", solvace:"10336335", nombre:"Paletizadora Oreo 13",       brand:"Oreo",      proyecto:"sunrise", linea:13},
  {id:"Pal 14",      tipo:"pal", solvace:"10336336", nombre:"Paletizadora Oreo 14",       brand:"Oreo",      proyecto:"sunrise", linea:14},

  // ── Wrappers (7) ──
  {id:"Wrapper 1", tipo:"wrapper", solvace:"10121166", nombre:"Wrapper 1", brand:"-", proyecto:"arthur",  linea:null},
  {id:"Wrapper 2", tipo:"wrapper", solvace:"10121167", nombre:"Wrapper 2", brand:"-", proyecto:"arthur",  linea:null},
  {id:"Wrapper 3", tipo:"wrapper", solvace:"10121168", nombre:"Wrapper 3", brand:"-", proyecto:"arthur",  linea:null},
  {id:"Wrapper 5", tipo:"wrapper", solvace:"10190640", nombre:"Wrapper 5", brand:"-", proyecto:"sunrise", linea:null},
  {id:"Wrapper 6", tipo:"wrapper", solvace:"10190641", nombre:"Wrapper 6", brand:"-", proyecto:"sunrise", linea:null},
  {id:"Wrapper 7", tipo:"wrapper", solvace:"10190642", nombre:"Wrapper 7", brand:"-", proyecto:"sunrise", linea:null},
  {id:"Wrapper 8", tipo:"wrapper", solvace:"10320527", nombre:"Wrapper 8", brand:"-", proyecto:"sunrise", linea:null},

  // ── Espirales (18) ──
  {id:"SP-1 y 2",   tipo:"espiral", solvace:"-", nombre:"Espiral 1 y 2",    brand:"-", proyecto:"arthur",  linea:1},
  {id:"SP-3",       tipo:"espiral", solvace:"-", nombre:"Espiral 3",        brand:"-", proyecto:"sunrise", linea:3},
  {id:"SP-4 y 6A",  tipo:"espiral", solvace:"-", nombre:"Espiral 4 y 6A",   brand:"-", proyecto:"arthur",  linea:4},
  {id:"SP-5 y 9A",  tipo:"espiral", solvace:"-", nombre:"Espiral 5 y 9A",   brand:"-", proyecto:"arthur",  linea:5},
  {id:"SP-6B",      tipo:"espiral", solvace:"-", nombre:"Espiral 6B",       brand:"-", proyecto:"arthur",  linea:6},
  {id:"SP-7A y 7B", tipo:"espiral", solvace:"-", nombre:"Espiral 7A y 7B",  brand:"-", proyecto:"arthur",  linea:7},
  {id:"SP-8",       tipo:"espiral", solvace:"-", nombre:"Espiral 8",        brand:"-", proyecto:"sunrise", linea:8},
  {id:"SP-9B",      tipo:"espiral", solvace:"-", nombre:"Espiral 9B",       brand:"-", proyecto:"arthur",  linea:9},
  {id:"SP-10",      tipo:"espiral", solvace:"-", nombre:"Espiral 10",       brand:"-", proyecto:"sunrise", linea:10},
  {id:"SP-10 FZ",   tipo:"espiral", solvace:"-", nombre:"Espiral 10 FZ",    brand:"-", proyecto:"arthur",  linea:10},
  {id:"SP-11 OT",   tipo:"espiral", solvace:"-", nombre:"Espiral 11 OT",    brand:"-", proyecto:"sunrise", linea:11},
  {id:"SP-11 PPL",  tipo:"espiral", solvace:"-", nombre:"Espiral 11 PPL",   brand:"-", proyecto:"sunrise", linea:11},
  {id:"SP-11 PPU",  tipo:"espiral", solvace:"-", nombre:"Espiral 11 PPU",   brand:"-", proyecto:"sunrise", linea:11},
  {id:"SP-GENZ",    tipo:"espiral", solvace:"-", nombre:"Espiral GenZ",     brand:"-", proyecto:"sunrise", linea:11},
  {id:"SP-12",      tipo:"espiral", solvace:"-", nombre:"Espiral 12",       brand:"-", proyecto:"sunrise", linea:12},
  {id:"SP-13",      tipo:"espiral", solvace:"-", nombre:"Espiral 13",       brand:"-", proyecto:"sunrise", linea:13},
  {id:"SP-14",      tipo:"espiral", solvace:"-", nombre:"Espiral 14",       brand:"-", proyecto:"sunrise", linea:14},
  {id:"SP-14 FZ",   tipo:"espiral", solvace:"-", nombre:"Espiral 14 FZ",    brand:"-", proyecto:"arthur",  linea:14},

  // ── Case Conveyors (20) ──
  {id:"CC-1",       tipo:"cc", solvace:"10322568", nombre:"Case Conveyor Ritz 1",          brand:"Ritz",      proyecto:"arthur",  linea:1,  asociado:"Pal 1"},
  {id:"CC-2",       tipo:"cc", solvace:"10322928", nombre:"Case Conveyor Chips Ahoy 2",    brand:"Chips Ahoy",proyecto:"arthur",  linea:2,  asociado:"Pal 2"},
  {id:"CC-3",       tipo:"cc", solvace:"10322974", nombre:"Case Conveyor Oreo 3",          brand:"Oreo",      proyecto:"sunrise", linea:3,  asociado:"Pal 3"},
  {id:"CC-4",       tipo:"cc", solvace:"10323195", nombre:"Case Conveyor Ritz 4",          brand:"Ritz",      proyecto:"arthur",  linea:4,  asociado:"Pal 4"},
  {id:"CC-5",       tipo:"cc", solvace:"10323243", nombre:"Case Conveyor Belvita 5",       brand:"Belvita",   proyecto:"arthur",  linea:5,  asociado:"Pal 5"},
  {id:"CC-6A",      tipo:"cc", solvace:"10323322", nombre:"Case Conveyor Oreo 6A",         brand:"Oreo",      proyecto:"arthur",  linea:6,  asociado:"Pal 6A"},
  {id:"CC-6B",      tipo:"cc", solvace:"10323321", nombre:"Case Conveyor Oreo 6B",         brand:"Oreo",      proyecto:"arthur",  linea:6,  asociado:"Pal 6B"},
  {id:"CC-7A",      tipo:"cc", solvace:"10323390", nombre:"Case Conveyor Mini Oreo A",     brand:"Mini Oreo", proyecto:"arthur",  linea:7,  asociado:"Pal 7A"},
  {id:"CC-7B",      tipo:"cc", solvace:"10323391", nombre:"Case Conveyor Mini Oreo B",     brand:"Mini Oreo", proyecto:"arthur",  linea:7,  asociado:"Pal 7B"},
  {id:"CC-8",       tipo:"cc", solvace:"10324422", nombre:"Case Conveyor Ritz 8",          brand:"Ritz",      proyecto:"sunrise", linea:8,  asociado:"Pal 8"},
  {id:"CC-9A",      tipo:"cc", solvace:"10324912", nombre:"Case Conveyor Oreo 9A",         brand:"Oreo",      proyecto:"arthur",  linea:9,  asociado:"Pal 9A"},
  {id:"CC-9B",      tipo:"cc", solvace:"10324911", nombre:"Case Conveyor Oreo 9B",         brand:"Oreo",      proyecto:"arthur",  linea:9,  asociado:"Pal 9B"},
  {id:"CC-10",      tipo:"cc", solvace:"10324462", nombre:"Case Conveyor Ritz 10",         brand:"Ritz",      proyecto:"sunrise", linea:10, asociado:"Pal 10"},
  {id:"CC-11 GenZ", tipo:"cc", solvace:"10325174", nombre:"Case Conveyor Oreo 11 GenZ",    brand:"Oreo",      proyecto:"sunrise", linea:11, asociado:"Pal 11 GenZ"},
  {id:"CC-11 PPL",  tipo:"cc", solvace:"10325172", nombre:"Case Conveyor Oreo 11 PPL",     brand:"Oreo",      proyecto:"sunrise", linea:11, asociado:"Pal 11 PPL"},
  {id:"CC-11 PPU",  tipo:"cc", solvace:"10325173", nombre:"Case Conveyor Oreo 11 PPU",     brand:"Oreo",      proyecto:"sunrise", linea:11, asociado:"Pal 11 PPU"},
  {id:"CC-11 OT",   tipo:"cc", solvace:"10325171", nombre:"Case Conveyor Oreo 11 OT",      brand:"Oreo",      proyecto:"sunrise", linea:11, asociado:"Pal 11 OT"},
  {id:"CC-12",      tipo:"cc", solvace:"10334032", nombre:"Case Conveyor Graham 12",       brand:"Graham",    proyecto:"sunrise", linea:12, asociado:"Pal 12"},
  {id:"CC-13",      tipo:"cc", solvace:"10328680", nombre:"Case Conveyor OT 13",           brand:"Oreo",      proyecto:"sunrise", linea:13, asociado:"Pal 13"},
  {id:"CC-14",      tipo:"cc", solvace:"10336033", nombre:"Case Conveyor Oreo 14",         brand:"Oreo",      proyecto:"sunrise", linea:14, asociado:"Pal 14"},

  // ── Pallet Conveyors (2) ──
  {id:"PC-Arthur",  tipo:"pc", solvace:"10331366", nombre:"Pallet Conveyor Arthur",  brand:"-", proyecto:"arthur",  linea:null, asociado:"Proyecto Arthur"},
  {id:"PC-Sunrise", tipo:"pc", solvace:"10331367", nombre:"Pallet Conveyor Sunrise", brand:"-", proyecto:"sunrise", linea:null, asociado:"Proyecto Sunrise"}
];

// ============================================================
// 2. MAPA DE LÍNEAS — qué líneas existen y a qué proyecto
// ============================================================
var LINEAS = {
  1:  {proyecto:"arthur"},
  2:  {proyecto:"arthur"},
  3:  {proyecto:"sunrise"},
  4:  {proyecto:"arthur"},
  5:  {proyecto:"arthur"},
  6:  {proyecto:"arthur"},
  7:  {proyecto:"arthur"},
  8:  {proyecto:"sunrise"},
  9:  {proyecto:"arthur"},
  10: {proyecto:"sunrise"},
  11: {proyecto:"sunrise"},
  12: {proyecto:"sunrise"},
  13: {proyecto:"sunrise"},
  14: {proyecto:"sunrise"}
};

// ============================================================
// 3. COORDENADAS DEL MAPA — posiciones x%, y%
//    (placeholder — se recalcularán con Christopher)
// ============================================================
var MAPA_COORDS = {
  // Paletizadoras
  "Pal 1":       {x:10, y:18},
  "Pal 2":       {x:17, y:18},
  "Pal 3":       {x:24, y:18},
  "Pal 4":       {x:31, y:18},
  "Pal 5":       {x:38, y:18},
  "Pal 6A":      {x:10, y:35},
  "Pal 6B":      {x:17, y:35},
  "Pal 7A":      {x:24, y:35},
  "Pal 7B":      {x:31, y:35},
  "Pal 8":       {x:38, y:35},
  "Pal 9A":      {x:45, y:35},
  "Pal 9B":      {x:52, y:35},
  "Pal 10":      {x:10, y:62},
  "Pal 11 GenZ": {x:17, y:62},
  "Pal 11 PPL":  {x:24, y:62},
  "Pal 11 PPU":  {x:31, y:62},
  "Pal 11 OT":   {x:38, y:62},
  "Pal 12":      {x:10, y:78},
  "Pal 13":      {x:17, y:78},
  "Pal 14":      {x:24, y:78},
  // Wrappers
  "Wrapper 1":   {x:57, y:18},
  "Wrapper 2":   {x:63, y:18},
  "Wrapper 3":   {x:69, y:18},
  "Wrapper 5":   {x:57, y:62},
  "Wrapper 6":   {x:63, y:62},
  "Wrapper 7":   {x:69, y:62},
  "Wrapper 8":   {x:75, y:62},
  // Espirales
  "SP-1 y 2":    {x:10, y:8},
  "SP-3":        {x:24, y:8},
  "SP-4 y 6A":   {x:31, y:8},
  "SP-5 y 9A":   {x:38, y:8},
  "SP-6B":       {x:17, y:45},
  "SP-7A y 7B":  {x:24, y:45},
  "SP-8":        {x:38, y:45},
  "SP-9B":       {x:52, y:45},
  "SP-10":       {x:10, y:52},
  "SP-10 FZ":    {x:17, y:52},
  "SP-11 OT":    {x:38, y:52},
  "SP-11 PPL":   {x:24, y:52},
  "SP-11 PPU":   {x:31, y:52},
  "SP-GENZ":     {x:17, y:72},
  "SP-12":       {x:10, y:88},
  "SP-13":       {x:17, y:88},
  "SP-14":       {x:24, y:88},
  "SP-14 FZ":    {x:31, y:88}
  // Case Conveyors y Pallet Conveyors no se muestran en el mapa
};

// ============================================================
// 4. UTILIDADES GLOBALES
// ============================================================
var tarjetasData = [];         // se carga desde tarjetas.json
var equipStatus = {};          // estado operativo por equipo (localStorage)
var equipStatusHistory = [];   // historial de cambios de estado (localStorage)

// Lookup rápido de equipo por id
var EQUIPO_MAP = {};
EQUIPOS.forEach(function(e){ EQUIPO_MAP[e.id] = e; });

// Obtener equipo por id
function getEquipo(id){ return EQUIPO_MAP[id] || null; }

// Equipos que se muestran en el mapa (no CC ni PC)
var EQUIPOS_MAPA = EQUIPOS.filter(function(e){
  return e.tipo === "pal" || e.tipo === "wrapper" || e.tipo === "espiral";
});

// Equipos de conveyors (para panel lateral)
var EQUIPOS_CONVEYORS = EQUIPOS.filter(function(e){
  return e.tipo === "cc" || e.tipo === "pc";
});

// Agrupar equipos por proyecto
function equiposPorProyecto(proy){
  return EQUIPOS.filter(function(e){ return e.proyecto === proy; });
}

// Agrupar equipos por línea
function equiposPorLinea(num){
  return EQUIPOS.filter(function(e){ return e.linea === num; });
}

// Calcular días desde una fecha hasta hoy
function diasDesde(fechaStr){
  if(!fechaStr) return 0;
  var parts, d;
  if(fechaStr.indexOf("/") > -1){
    parts = fechaStr.split("/");
    // formato DD/MM/YYYY
    d = new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]));
  } else {
    d = new Date(fechaStr);
  }
  if(isNaN(d.getTime())) return 0;
  var hoy = new Date();
  hoy.setHours(0,0,0,0);
  d.setHours(0,0,0,0);
  return Math.max(0, Math.floor((hoy - d) / 86400000));
}

// Formatear fecha a DD/MM/YYYY
function fmtFecha(fechaStr){
  if(!fechaStr) return "-";
  var d;
  if(fechaStr.indexOf("/") > -1){
    return fechaStr; // ya está en formato
  }
  d = new Date(fechaStr);
  if(isNaN(d.getTime())) return fechaStr;
  var dd = String(d.getDate()).padStart(2,"0");
  var mm = String(d.getMonth()+1).padStart(2,"0");
  var yy = d.getFullYear();
  return dd + "/" + mm + "/" + yy;
}

// Formatear número con separador de miles
function fmtNum(n){
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Extraer grupo de la columna Equipo del JSON (ej: "PLTZ-C" → "C")
function extraerGrupo(equipoStr){
  if(!equipoStr) return "";
  var match = equipoStr.match(/PLTZ[- ]?([A-D])/i);
  return match ? match[1].toUpperCase() : "";
}

// Obtener color del tag: BT/RT/YT
function getTagColor(cat){
  if(!cat) return "";
  var c = cat.toUpperCase();
  if(c.indexOf("BT") > -1) return "BT";
  if(c.indexOf("RT") > -1) return "RT";
  if(c.indexOf("YT") > -1) return "YT";
  return "";
}

// ============================================================
// 5. LOCALSTORAGE — Estado operativo de equipos
// ============================================================
function cargarEstados(){
  try {
    var saved = localStorage.getItem("sal_equip_status");
    if(saved){
      equipStatus = JSON.parse(saved);
    }
  } catch(e){ /* silenciar */ }
  // Asegurar que todos los equipos tengan estado
  EQUIPOS.forEach(function(eq){
    if(!equipStatus[eq.id]){
      equipStatus[eq.id] = "operativo";
    }
  });
}

function guardarEstados(){
  try {
    localStorage.setItem("sal_equip_status", JSON.stringify(equipStatus));
  } catch(e){ /* silenciar */ }
}

function cargarHistorial(){
  try {
    var saved = localStorage.getItem("sal_equip_history");
    if(saved){
      equipStatusHistory = JSON.parse(saved);
    }
  } catch(e){ /* silenciar */ }
}

function guardarHistorial(){
  try {
    localStorage.setItem("sal_equip_history", JSON.stringify(equipStatusHistory));
  } catch(e){ /* silenciar */ }
}

function registrarCambioEstado(equipId, deEstado, aEstado, motivo){
  var registro = {
    equipo: equipId,
    de: deEstado,
    a: aEstado,
    motivo: motivo || "",
    fecha: new Date().toISOString()
  };
  equipStatusHistory.push(registro);
  guardarHistorial();
}

// Contar estados
function contarEstados(){
  var ops = 0, deg = 0, fs = 0;
  EQUIPOS.forEach(function(eq){
    var st = equipStatus[eq.id] || "operativo";
    if(st === "operativo") ops++;
    else if(st === "degradado") deg++;
    else if(st === "fuera") fs++;
  });
  return {operativos: ops, degradados: deg, fuera: fs, total: EQUIPOS.length};
}

// ============================================================
// 6. CARGA DE DATOS — tarjetas.json
// ============================================================

// ============================================================
// 6. CARGA DE DATOS — tarjetas.json (CORREGIDO)
// ============================================================
function cargarTarjetas(callback){
  fetch("data/tarjetas.json")
    .then(function(r){ return r.json(); })
    .then(function(data){
      // El JSON tiene estructura { resumen: {...}, tarjetas: [...] }
      var raw = [];
      if(data && Array.isArray(data.tarjetas)){
        raw = data.tarjetas;
      } else if(Array.isArray(data)){
        raw = data;
      }

      // Guardar resumen si existe
      if(data && data.resumen){
        window._jsonResumen = data.resumen;
      }

      // Enriquecer cada tarjeta con campos normalizados
      tarjetasData = raw.map(function(t){
        // Normalizar fecha (puede venir como "15/10/2026 00:09:00" o "2026-10-15")
        var fechaRaw = t.fechaInclusion || t["Fecha Inclusión"] || t["Fecha Inclusion"] || t.fecha || "";
        // Quitar parte de hora si viene "DD/MM/YYYY HH:MM:SS"
        var fechaLimpia = fechaRaw.split(" ")[0];

        // Extraer grupo de ubicacion (ej: "PALETIZADO - LINEA 11 OREO" → no aplica)
        // o de equipoMapa si tiene patron de grupo
        var grupo = extraerGrupo(t.ubicacion || t.equipoMapa || "");

        // Color del tag desde categoria
        var color = getTagColor(t.categoria || "");

        // Estado normalizado
        var estado = t.estado || "";

        // Antigüedad: usar el campo pre-calculado si existe, sino calcular
        var dias = (typeof t.antiguedadDias === "number") ? t.antiguedadDias : diasDesde(fechaLimpia);

        return {
          // Campos originales (preservar todo)
          _raw: t,

          // Campos normalizados para el dashboard
          _folio:        t.folio || "",
          _equipo:       t.equipoMapa || "",
          _equipoFull:   t.equipoSolvace || "",
          _categoria:    t.categoria || "",
          _color:        color,
          _defecto:      t.tipoDefecto || t.defecto || "",
          _prioridad:    t.prioridad || "",
          _estado:       estado,
          _fechaInc:     fechaLimpia,
          _fechaRes:     t.fechaResolucion || "",
          _dias:         dias,
          _descripcion:  t.descripcion || t.defecto || "",
          _ubicacion:    t.ubicacion || "",
          _proyecto:     (t.proyecto || "").toLowerCase(),
          _brand:        t.brand || "",
          _tipoEquipo:   t.tipoEquipo || "",
          _encontrado:   t.encontradoPor || "",
          _resuelto:     t.resueltoPor || "",
          _tiempoRes:    t.tiempoResolucionMin || 0,
          _grupo:        grupo,
          _fuente:       t.fuente || ""
        };
      });

      console.log("✅ Tarjetas cargadas:", tarjetasData.length, "registros");
      if(window._jsonResumen){
        console.log("📊 Resumen JSON:", window._jsonResumen);
      }

      if(callback) callback();
    })
    .catch(function(err){
      console.error("❌ Error cargando tarjetas.json:", err);
      tarjetasData = [];
      if(callback) callback();
    });
}



// Inicializar estados y luego cargar data
function inicializarApp(){
  cargarEstados();
  cargarHistorial();
  cargarTarjetas(function(){
    // Aquí se llamarán las funciones de render de cada tab
    // (se definen en B2-P2, B2-P3 y Bloque 3)
    if(typeof renderKPIs === "function") renderKPIs();
    if(typeof initMapa === "function") initMapa();
    if(typeof initTarjetas === "function") initTarjetas();
    if(typeof initOperatividad === "function") initOperatividad();
    if(typeof initTabs === "function") initTabs();
  });
}

// Arrancar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", inicializarApp);

// ── Fin B2-P1 ──


// ── B2-P2: KPIs dinámicos + Mapa ──

// ============================================================
// 7. KPIs DINÁMICOS
// ============================================================
function renderKPIs(){
  var abiertas = 0, cerradas = 0, sumDias = 0, countDias = 0;
  var bt = 0, rt = 0, yt = 0;

  var desde = document.getElementById("filtDesde").value;
  var hasta = document.getElementById("filtHasta").value;

  tarjetasData.forEach(function(t){
    // Filtro por rango de fecha si está definido
    if(desde || hasta){
      var fi = t._fechaInc;
      if(fi){
        var fechaISO = fi;
        if(fi.indexOf("/") > -1){
          var pp = fi.split("/");
          fechaISO = pp[2] + "-" + pp[1] + "-" + pp[0];
        }
        if(desde && fechaISO < desde) return;
        if(hasta && fechaISO > hasta) return;
      }
    }

    var estado = (t._estado || "").toLowerCase();
    if(estado === "abierta" || estado === "abierto" || estado === "open"){
      abiertas++;
      if(t._dias > 0){
        sumDias += t._dias;
        countDias++;
      }
    } else {
      cerradas++;
    }

    // Color del tag (solo abiertas)
    if(estado === "abierta" || estado === "abierto" || estado === "open"){
      var c = t._color;
      if(c === "BT") bt++;
      else if(c === "RT") rt++;
      else if(c === "YT") yt++;
    }
  });

  var antigProm = countDias > 0 ? Math.round(sumDias / countDias) : 0;

  document.getElementById("kpiAbiertas").textContent = fmtNum(abiertas);
  document.getElementById("kpiCerradas").textContent = fmtNum(cerradas);
  document.getElementById("kpiAntig").textContent = antigProm + "d";
  document.getElementById("kpiBT").textContent = fmtNum(bt);
  document.getElementById("kpiRT").textContent = fmtNum(rt);
  document.getElementById("kpiYT").textContent = fmtNum(yt);

  // Estados operativos
  var estados = contarEstados();
  document.getElementById("kpiOps").textContent = estados.operativos;
  document.getElementById("kpiDeg").textContent = estados.degradados;
  document.getElementById("kpiFS").textContent = estados.fuera;

  // Fecha header
  var ahora = new Date();
  var dd = String(ahora.getDate()).padStart(2,"0");
  var mm = String(ahora.getMonth()+1).padStart(2,"0");
  var yy = ahora.getFullYear();
  var hh = String(ahora.getHours()).padStart(2,"0");
  var mi = String(ahora.getMinutes()).padStart(2,"0");
  document.getElementById("headerDate").textContent = dd+"/"+mm+"/"+yy+" "+hh+":"+mi;

  // Defaults de fecha si no están seteados
  if(!document.getElementById("filtDesde").value){
    document.getElementById("filtDesde").value = yy + "-01-01";
  }
  if(!document.getElementById("filtHasta").value){
    document.getElementById("filtHasta").value = yy + "-" + mm + "-" + dd;
  }
}

// Listener para filtros de fecha
document.addEventListener("DOMContentLoaded", function(){
  var fd = document.getElementById("filtDesde");
  var fh = document.getElementById("filtHasta");
  if(fd) fd.addEventListener("change", function(){ renderKPIs(); if(typeof renderTarjetas === "function") renderTarjetas(); });
  if(fh) fh.addEventListener("change", function(){ renderKPIs(); if(typeof renderTarjetas === "function") renderTarjetas(); });
});

// ============================================================
// 8. MAPA — Renderizado de marcadores
// ============================================================
var mapaSeleccionado = null;

function initMapa(){
  renderMarcadores();
  initMapaLabels();
}

function renderMarcadores(){
  var container = document.getElementById("mapaContainer");
  // Limpiar marcadores existentes
  var existentes = container.querySelectorAll(".marker");
  existentes.forEach(function(m){ m.remove(); });

  EQUIPOS_MAPA.forEach(function(eq){
    var coord = MAPA_COORDS[eq.id];
    if(!coord) return;

    var st = equipStatus[eq.id] || "operativo";
    var stClass = "status-" + st;

    // Contar tarjetas abiertas para este equipo
    var tarjAbiertas = contarTarjetasEquipo(eq.id);

    // Crear marcador
    var marker = document.createElement("div");
    marker.className = "marker " + eq.tipo + " " + stClass;
    marker.style.left = coord.x + "%";
    marker.style.top = coord.y + "%";
    marker.setAttribute("data-equipo", eq.id);
    marker.title = eq.id + " — " + eq.nombre;

    // Contenido del marcador
    var label = eq.id.replace("Pal ","P").replace("Wrapper ","W").replace("SP-","S");
    if(eq.tipo === "espiral"){
      marker.innerHTML = '<span>' + label + '</span>';
    } else {
      marker.textContent = label;
    }

    // Badge con número de tarjetas
    if(tarjAbiertas > 0){
      var badge = document.createElement("div");
      badge.className = "marker-badge";
      badge.textContent = tarjAbiertas;
      marker.appendChild(badge);
    }

    // Etiqueta inferior
    var lblEl = document.createElement("div");
    lblEl.className = "marker-label";
    lblEl.textContent = eq.id;
    marker.appendChild(lblEl);

    // Click handler
    marker.addEventListener("click", function(){
      seleccionarEquipoMapa(eq.id);
    });

    container.appendChild(marker);
  });
}

function contarTarjetasEquipo(equipId){
  var count = 0;
  tarjetasData.forEach(function(t){
    var est = (t._estado || "").toLowerCase();
    if(est !== "abierta" && est !== "abierto" && est !== "open") return;
    var te = (t._equipo || "").toLowerCase();
    var eid = equipId.toLowerCase();
    // Matching flexible: buscar si el equipo del JSON contiene el id
    if(te.indexOf(eid) > -1 || eid.indexOf(te) > -1 || matchEquipoTarjeta(te, eid)){
      count++;
    }
  });
  return count;
}

function matchEquipoTarjeta(tarjetaEquipo, inventarioId){
  // Normalizar para matching
  var te = tarjetaEquipo.replace(/\s+/g,"").toLowerCase();
  var ie = inventarioId.replace(/\s+/g,"").toLowerCase();
  // Intentar match parcial
  if(te.indexOf(ie) > -1 || ie.indexOf(te) > -1) return true;
  // Match por número de paletizadora
  var mTe = te.match(/(\d+)/);
  var mIe = ie.match(/pal(\d+)/);
  if(mTe && mIe && mTe[1] === mIe[1]) return true;
  return false;
}

// ============================================================
// 9. MAPA — Panel lateral derecho
// ============================================================
function seleccionarEquipoMapa(equipId){
  mapaSeleccionado = equipId;
  var eq = getEquipo(equipId);
  if(!eq) return;

  // Resaltar marcador activo
  var markers = document.querySelectorAll(".marker");
  markers.forEach(function(m){
    m.style.outline = m.getAttribute("data-equipo") === equipId ? "3px solid #4F2170" : "none";
  });

  var st = equipStatus[equipId] || "operativo";

  // Header
  document.getElementById("mpTitle").textContent = eq.id;
  var metaText = eq.nombre;
  if(eq.brand && eq.brand !== "-") metaText += " — " + eq.brand;
  metaText += " | " + eq.proyecto.charAt(0).toUpperCase() + eq.proyecto.slice(1);
  if(eq.linea) metaText += " | Línea " + eq.linea;
  document.getElementById("mpMeta").textContent = metaText;

  var statusEl = document.getElementById("mpStatus");
  statusEl.style.display = "inline-block";
  statusEl.textContent = st === "operativo" ? "Operativo" : st === "degradado" ? "Degradado" : "Fuera de Servicio";
  statusEl.style.background = st === "operativo" ? "#287819" : st === "degradado" ? "#E18719" : "#A52323";

  // Body — tarjetas abiertas de este equipo
  var body = document.getElementById("mpBody");
  body.innerHTML = "";

  var tarjetas = obtenerTarjetasEquipo(equipId);

  if(tarjetas.length === 0){
    body.innerHTML = '<p class="text-muted text-center" style="margin-top:20px">Sin tarjetas abiertas</p>';
  } else {
    var h4 = document.createElement("h4");
    h4.textContent = "Tarjetas Abiertas (" + tarjetas.length + ")";
    body.appendChild(h4);

    tarjetas.forEach(function(t){
      var item = document.createElement("div");
      item.className = "ticket-item";

      var dotClass = "bt";
      if(t._color === "RT") dotClass = "rt";
      else if(t._color === "YT") dotClass = "yt";

      item.innerHTML = '<div class="ticket-dot ' + dotClass + '"></div>' +
        '<div class="ticket-info">' +
          '<div class="ti-id">' + t._folio + '</div>' +
          '<div class="ti-desc">' + (t._descripcion || t._defecto || "Sin descripción") + '</div>' +
        '</div>';
      body.appendChild(item);
    });
  }

  // Footer
  document.getElementById("mpVerTodas").style.display = tarjetas.length > 0 ? "inline" : "none";
  document.getElementById("mpUpdated").textContent = "Última actualización: hoy " +
    String(new Date().getHours()).padStart(2,"0") + ":" + String(new Date().getMinutes()).padStart(2,"0");
}

function obtenerTarjetasEquipo(equipId){
  var resultado = [];
  tarjetasData.forEach(function(t){
    var est = (t._estado || "").toLowerCase();
    if(est !== "abierta" && est !== "abierto" && est !== "open") return;
    var te = (t._equipo || "").toLowerCase();
    var eid = equipId.toLowerCase();
    if(te.indexOf(eid) > -1 || eid.indexOf(te) > -1 || matchEquipoTarjeta(te, eid)){
      resultado.push(t);
    }
  });
  // Ordenar por antigüedad desc
  resultado.sort(function(a,b){ return b._dias - a._dias; });
  return resultado;
}

// ============================================================
// 10. MAPA — Toggle etiquetas
// ============================================================
function initMapaLabels(){
  var chk = document.getElementById("chkLabels");
  if(!chk) return;
  chk.addEventListener("change", function(){
    var labels = document.querySelectorAll(".marker-label");
    labels.forEach(function(l){
      l.style.display = chk.checked ? "block" : "none";
    });
  });
}

// ============================================================
// 11. TABS — Navegación entre pestañas
// ============================================================
function initTabs(){
  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".tab-content");

  tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
      var target = tab.getAttribute("data-tab");

      tabs.forEach(function(t){ t.classList.remove("active"); });
      tab.classList.add("active");

      contents.forEach(function(c){ c.classList.remove("active"); });

      if(target === "mapa") document.getElementById("tabMapa").classList.add("active");
      else if(target === "tarjetas") document.getElementById("tabTarjetas").classList.add("active");
      else if(target === "operatividad") document.getElementById("tabOperatividad").classList.add("active");
    });
  });

  // Link "Ver todas" → ir a tab Tarjetas
  var verTodas = document.getElementById("mpVerTodas");
  if(verTodas){
    verTodas.addEventListener("click", function(e){
      e.preventDefault();
      // Activar tab Tarjetas
      tabs.forEach(function(t){ t.classList.remove("active"); });
      document.querySelector('.tab[data-tab="tarjetas"]').classList.add("active");
      contents.forEach(function(c){ c.classList.remove("active"); });
      document.getElementById("tabTarjetas").classList.add("active");
    });
  }
}

// ── Fin B2-P2 ──


// ── B2-P3: Tab Tarjetas ──

// ============================================================
// 12. TARJETAS — Variables de estado
// ============================================================
var chartDonut = null, chartTrend = null, chartTop10 = null;
var chartAntig = null, chartCierre = null, chartGrupos = null;
var tarjetasFiltradas = [];
var tableSortCol = null, tableSortAsc = true;
var colFilters = {}; // filtros tipo Excel por columna

// ============================================================
// 13. TARJETAS — Inicialización
// ============================================================
function initTarjetas(){
  poblarFiltroGrupos();
  bindFiltrosTarjetas();
  bindTablaControls();
  renderTarjetas();
}

function poblarFiltroGrupos(){
  var sel = document.getElementById("filtGrupo");
  if(!sel) return;
  var grupos = {};
  tarjetasData.forEach(function(t){
    if(t._grupo) grupos[t._grupo] = true;
  });
  var keys = Object.keys(grupos).sort();
  keys.forEach(function(g){
    var opt = document.createElement("option");
    opt.value = g;
    opt.textContent = "Grupo " + g;
    sel.appendChild(opt);
  });
}

function bindFiltrosTarjetas(){
  ["filtProyecto","filtGrupo","filtColor","filtEstado"].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.addEventListener("change", renderTarjetas);
  });
}

// ============================================================
// 14. TARJETAS — Filtrado maestro
// ============================================================

// ============================================================
// 14. TARJETAS — Filtrado maestro (CORREGIDO)
// ============================================================
function filtrarTarjetas(){
  var proy   = document.getElementById("filtProyecto").value.toLowerCase();
  var grupo  = document.getElementById("filtGrupo").value;
  var color  = document.getElementById("filtColor").value;
  var estado = document.getElementById("filtEstado").value.toLowerCase();
  var desde  = document.getElementById("filtDesde").value;
  var hasta  = document.getElementById("filtHasta").value;
  var search = (document.getElementById("tblSearch").value || "").toLowerCase();

  tarjetasFiltradas = tarjetasData.filter(function(t){
    // Filtro fecha
    if(desde || hasta){
      var fi = t._fechaInc;
      if(fi){
        var fechaISO = fi;
        if(fi.indexOf("/") > -1){
          var pp = fi.split("/");
          fechaISO = pp[2] + "-" + pp[1] + "-" + pp[0];
        }
        if(desde && fechaISO < desde) return false;
        if(hasta && fechaISO > hasta) return false;
      }
    }
    // Filtro proyecto — ahora viene directo del JSON
    if(proy && t._proyecto !== proy) return false;
    // Filtro grupo
    if(grupo && t._grupo !== grupo) return false;
    // Filtro color
    if(color && t._color !== color) return false;
    // Filtro estado
    if(estado){
      var estNorm = (t._estado || "").toLowerCase();
      if(estNorm !== estado) return false;
    }
    // Búsqueda global
    if(search){
      var haystack = [t._folio, t._equipo, t._descripcion, t._defecto, t._prioridad, t._estado, t._brand, t._ubicacion].join(" ").toLowerCase();
      if(haystack.indexOf(search) === -1) return false;
    }
    // Filtros de columna tipo Excel
    for(var col in colFilters){
      if(colFilters[col] && colFilters[col].length > 0){
        var val = getColValue(t, col);
        if(colFilters[col].indexOf(val) === -1) return false;
      }
    }
    return true;
  });

  return tarjetasFiltradas;
}



function buscarEquipoPorNombreTarjeta(nombreTarjeta){
  if(!nombreTarjeta) return null;
  var nl = nombreTarjeta.toLowerCase().replace(/\s+/g,"");
  for(var i = 0; i < EQUIPOS.length; i++){
    var eid = EQUIPOS[i].id.toLowerCase().replace(/\s+/g,"");
    if(nl.indexOf(eid) > -1 || eid.indexOf(nl) > -1) return EQUIPOS[i];
  }
  return null;
}

function getColValue(t, col){
  switch(col){
    case "folio":      return t._folio || "";
    case "equipo":     return t._equipo || "";
    case "color":      return t._color || "";
    case "defecto":    return t._defecto || "";
    case "prioridad":  return t._prioridad || "";
    case "estado":     return t._estado || "";
    case "antiguedad": return String(t._dias);
    default: return "";
  }
}

// ============================================================
// 15. TARJETAS — Render maestro
// ============================================================
function renderTarjetas(){
  filtrarTarjetas();
  renderChartDonut();
  renderChartTrend();
  renderChartTop10();
  renderChartAntig();
  renderChartCierre();
  renderChartGrupos();
  renderTablaTarjetas();
}

// ============================================================
// 16. GRÁFICA 1 — Dona: Tarjetas por Color
// ============================================================
function renderChartDonut(){
  var bt=0, rt=0, yt=0;
  tarjetasFiltradas.forEach(function(t){
    var est = (t._estado||"").toLowerCase();
    if(est==="abierta"||est==="abierto"||est==="open"){
      if(t._color==="BT") bt++;
      else if(t._color==="RT") rt++;
      else if(t._color==="YT") yt++;
    }
  });
  var ctx = document.getElementById("chartDonut");
  if(!ctx) return;
  if(chartDonut) chartDonut.destroy();
  chartDonut = new Chart(ctx, {
    type:"doughnut",
    data:{
      labels:["BT (Azul)","RT (Rojo)","YT (Amarillo)"],
      datasets:[{
        data:[bt, rt, yt],
        backgroundColor:["#2D6EAA","#A52323","#E18719"],
        borderWidth:2,
        borderColor:"#fff"
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{
        legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11},padding:12}},
        tooltip:{callbacks:{label:function(c){return c.label+": "+c.raw;}}}
      },
      cutout:"60%"
    }
  });
}

// ============================================================
// 17. GRÁFICA 2 — Tendencia Apertura vs Cierre
// ============================================================
function renderChartTrend(){
  // Agrupar por mes
  var meses = {};
  tarjetasFiltradas.forEach(function(t){
    var fi = t._fechaInc;
    if(!fi) return;
    var mesKey;
    if(fi.indexOf("/") > -1){
      var pp = fi.split("/");
      mesKey = pp[2]+"-"+pp[1];
    } else {
      mesKey = fi.substring(0,7);
    }
    if(!meses[mesKey]) meses[mesKey] = {abiertas:0, cerradas:0};
    var est = (t._estado||"").toLowerCase();
    if(est==="abierta"||est==="abierto"||est==="open") meses[mesKey].abiertas++;
    else meses[mesKey].cerradas++;
  });

  var keys = Object.keys(meses).sort();
  var labels = keys.map(function(k){
    var pp = k.split("-");
    var mNames = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    return mNames[parseInt(pp[1])-1] + " " + pp[0].substring(2);
  });
  var dataAb = keys.map(function(k){ return meses[k].abiertas; });
  var dataCe = keys.map(function(k){ return meses[k].cerradas; });

  var ctx = document.getElementById("chartTrend");
  if(!ctx) return;
  if(chartTrend) chartTrend.destroy();
  chartTrend = new Chart(ctx, {
    type:"line",
    data:{
      labels:labels,
      datasets:[
        {label:"Abiertas", data:dataAb, borderColor:"#A52323", backgroundColor:"rgba(165,35,35,.1)", fill:true, tension:.3, pointRadius:3},
        {label:"Cerradas", data:dataCe, borderColor:"#287819", backgroundColor:"rgba(40,120,25,.1)", fill:true, tension:.3, pointRadius:3}
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11}}}},
      scales:{
        x:{ticks:{font:{size:10}},grid:{display:false}},
        y:{beginAtZero:true,ticks:{font:{size:10}}}
      }
    }
  });
}

// ============================================================
// 18. GRÁFICA 3 — Top 10 Equipos Problemáticos
// ============================================================
function renderChartTop10(){
  var counts = {};
  tarjetasFiltradas.forEach(function(t){
    var est = (t._estado||"").toLowerCase();
    if(est!=="abierta"&&est!=="abierto"&&est!=="open") return;
    var eq = t._equipo || "Sin equipo";
    counts[eq] = (counts[eq]||0) + 1;
  });
  var sorted = Object.keys(counts).map(function(k){return{eq:k,n:counts[k]};});
  sorted.sort(function(a,b){return b.n - a.n;});
  var top = sorted.slice(0,10);

  var ctx = document.getElementById("chartTop10");
  if(!ctx) return;
  if(chartTop10) chartTop10.destroy();
  chartTop10 = new Chart(ctx, {
    type:"bar",
    data:{
      labels:top.map(function(t){return t.eq;}),
      datasets:[{
        data:top.map(function(t){return t.n;}),
        backgroundColor:"#4F2170",
        borderRadius:4
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      indexAxis:"y",
      plugins:{legend:{display:false}},
      scales:{
        x:{beginAtZero:true,ticks:{font:{size:10}},grid:{color:"#f3f3f3"}},
        y:{ticks:{font:{size:10,family:"Calibri,Arial,sans-serif"}}}
      }
    }
  });
}

// ============================================================
// 19. GRÁFICA 4 — Distribución de Antigüedad
// ============================================================
function renderChartAntig(){
  var buckets = {"0-7d":0,"8-15d":0,"16-30d":0,"30+d":0};
  tarjetasFiltradas.forEach(function(t){
    var est = (t._estado||"").toLowerCase();
    if(est!=="abierta"&&est!=="abierto"&&est!=="open") return;
    var d = t._dias;
    if(d <= 7) buckets["0-7d"]++;
    else if(d <= 15) buckets["8-15d"]++;
    else if(d <= 30) buckets["16-30d"]++;
    else buckets["30+d"]++;
  });

  var ctx = document.getElementById("chartAntig");
  if(!ctx) return;
  if(chartAntig) chartAntig.destroy();
  chartAntig = new Chart(ctx, {
    type:"bar",
    data:{
      labels:["0-7 días","8-15 días","16-30 días","30+ días"],
      datasets:[{
        data:[buckets["0-7d"],buckets["8-15d"],buckets["16-30d"],buckets["30+d"]],
        backgroundColor:["#287819","#E18719","#E18719","#A52323"],
        borderRadius:4
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{
        x:{ticks:{font:{size:10}},grid:{display:false}},
        y:{beginAtZero:true,ticks:{font:{size:10}}}
      }
    }
  });
}

// ============================================================
// 20. GRÁFICA 5 — Tasa de Cierre Mensual
// ============================================================
function renderChartCierre(){
  var meses = {};
  tarjetasFiltradas.forEach(function(t){
    var fi = t._fechaInc;
    if(!fi) return;
    var mesKey;
    if(fi.indexOf("/") > -1){
      var pp = fi.split("/");
      mesKey = pp[2]+"-"+pp[1];
    } else {
      mesKey = fi.substring(0,7);
    }
    if(!meses[mesKey]) meses[mesKey] = {total:0,cerradas:0};
    meses[mesKey].total++;
    var est = (t._estado||"").toLowerCase();
    if(est!=="abierta"&&est!=="abierto"&&est!=="open") meses[mesKey].cerradas++;
  });

  var keys = Object.keys(meses).sort();
  var labels = keys.map(function(k){
    var pp = k.split("-");
    var mNames = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    return mNames[parseInt(pp[1])-1];
  });
  var dataCerr = keys.map(function(k){ return meses[k].cerradas; });
  var dataPct  = keys.map(function(k){
    return meses[k].total > 0 ? Math.round((meses[k].cerradas / meses[k].total)*1000)/10 : 0;
  });

  var ctx = document.getElementById("chartCierre");
  if(!ctx) return;
  if(chartCierre) chartCierre.destroy();
  chartCierre = new Chart(ctx, {
    type:"bar",
    data:{
      labels:labels,
      datasets:[
        {
          label:"Cerradas",
          data:dataCerr,
          backgroundColor:"#4F2170",
          borderRadius:4,
          yAxisID:"y",
          order:2
        },
        {
          label:"% Cierre",
          data:dataPct,
          type:"line",
          borderColor:"#E18719",
          backgroundColor:"transparent",
          pointBackgroundColor:"#E18719",
          pointRadius:4,
          tension:.3,
          yAxisID:"y1",
          order:1
        }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11}}}},
      scales:{
        x:{ticks:{font:{size:10}},grid:{display:false}},
        y:{beginAtZero:true,position:"left",ticks:{font:{size:10}},title:{display:true,text:"Cerradas",font:{size:10}}},
        y1:{beginAtZero:true,max:100,position:"right",ticks:{font:{size:10},callback:function(v){return v+"%";}},title:{display:true,text:"% Cierre",font:{size:10}},grid:{display:false}}
      }
    }
  });
}

// ============================================================
// 21. GRÁFICA 6 — Tasa de Cierre por Grupo
// ============================================================
function renderChartGrupos(){
  var grupos = {};
  tarjetasFiltradas.forEach(function(t){
    var g = t._grupo || "Sin grupo";
    if(!grupos[g]) grupos[g] = {abiertas:0,cerradas:0,total:0};
    grupos[g].total++;
    var est = (t._estado||"").toLowerCase();
    if(est==="abierta"||est==="abierto"||est==="open") grupos[g].abiertas++;
    else grupos[g].cerradas++;
  });

  var keys = Object.keys(grupos).sort();
  var labels = keys.map(function(k){ return k === "Sin grupo" ? k : "Grupo "+k; });
  var dataAb = keys.map(function(k){ return grupos[k].abiertas; });
  var dataCe = keys.map(function(k){ return grupos[k].cerradas; });
  var dataPct = keys.map(function(k){
    return grupos[k].total > 0 ? Math.round((grupos[k].cerradas/grupos[k].total)*1000)/10 : 0;
  });

  var ctx = document.getElementById("chartGrupos");
  if(!ctx) return;
  if(chartGrupos) chartGrupos.destroy();
  chartGrupos = new Chart(ctx, {
    type:"bar",
    data:{
      labels:labels,
      datasets:[
        {label:"Abiertas",data:dataAb,backgroundColor:"#A52323",borderRadius:4,yAxisID:"y"},
        {label:"Cerradas",data:dataCe,backgroundColor:"#287819",borderRadius:4,yAxisID:"y"},
        {label:"% Cierre",data:dataPct,type:"line",borderColor:"#E18719",backgroundColor:"transparent",pointBackgroundColor:"#E18719",pointRadius:5,tension:.3,yAxisID:"y1",order:0}
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11}}}},
      scales:{
        x:{ticks:{font:{size:10}},grid:{display:false}},
        y:{beginAtZero:true,stacked:false,position:"left",ticks:{font:{size:10}}},
        y1:{beginAtZero:true,max:100,position:"right",ticks:{font:{size:10},callback:function(v){return v+"%";}},grid:{display:false}}
      }
    }
  });
}

// ============================================================
// 22. TABLA DE TARJETAS — Render con scroll
// ============================================================
function renderTablaTarjetas(){
  var tbody = document.getElementById("tarjetasTbody");
  if(!tbody) return;

  // Ordenar si hay columna de sort activa
  var datos = tarjetasFiltradas.slice();
  if(tableSortCol){
    datos.sort(function(a,b){
      var va = getColValue(a, tableSortCol);
      var vb = getColValue(b, tableSortCol);
      if(tableSortCol === "antiguedad"){
        va = parseInt(va)||0;
        vb = parseInt(vb)||0;
        return tableSortAsc ? va - vb : vb - va;
      }
      va = va.toLowerCase();
      vb = vb.toLowerCase();
      if(va < vb) return tableSortAsc ? -1 : 1;
      if(va > vb) return tableSortAsc ? 1 : -1;
      return 0;
    });
  }

  // Actualizar contador
  var countEl = document.getElementById("tblCount");
  if(countEl) countEl.textContent = "(" + datos.length + " registros)";

  // Render filas
  var html = "";
  datos.forEach(function(t){
    var pillClass = "pill-abierta";
    var estLow = (t._estado||"").toLowerCase();
    if(estLow === "resuelta" || estLow === "resolved") pillClass = "pill-resuelta";
    else if(estLow === "cmms") pillClass = "pill-cmms";
    else if(estLow === "en proceso" || estLow === "proceso") pillClass = "pill-proceso";

    html += "<tr>" +
      "<td><strong>" + (t._folio||"-") + "</strong></td>" +
      "<td>" + (t._equipo||"-") + "</td>" +
      "<td>" + renderColorTag(t._color) + "</td>" +
      "<td>" + (t._defecto||"-") + "</td>" +
      "<td>" + (t._prioridad||"-") + "</td>" +
      "<td><span class='status-pill "+pillClass+"'>" + (t._estado||"-") + "</span></td>" +
      "<td>" + fmtFecha(t._fechaInc) + "</td>" +
      "<td>" + t._dias + "d</td>" +
      "<td>" + (t._descripcion||"-") + "</td>" +
    "</tr>";
  });

  tbody.innerHTML = html;
}

function renderColorTag(color){
  if(color === "BT") return '<span style="color:#2D6EAA;font-weight:700">● BT</span>';
  if(color === "RT") return '<span style="color:#A52323;font-weight:700">● RT</span>';
  if(color === "YT") return '<span style="color:#E18719;font-weight:700">● YT</span>';
  return '<span style="color:#888">—</span>';
}

// ============================================================
// 23. TABLA — Sort por columna
// ============================================================
function bindTablaControls(){
  // Sort
  document.querySelectorAll(".col-sort").forEach(function(btn){
    btn.addEventListener("click", function(){
      var col = btn.getAttribute("data-col");
      if(tableSortCol === col){
        tableSortAsc = !tableSortAsc;
      } else {
        tableSortCol = col;
        tableSortAsc = true;
      }
      renderTablaTarjetas();
    });
  });

  // Filtros tipo Excel por columna
  document.querySelectorAll(".col-filter-btn").forEach(function(btn){
    btn.addEventListener("click", function(e){
      e.stopPropagation();
      var col = btn.getAttribute("data-col");
      toggleColFilter(col, btn);
    });
  });

  // Buscador global
  var searchInput = document.getElementById("tblSearch");
  if(searchInput){
    var debounce;
    searchInput.addEventListener("input", function(){
      clearTimeout(debounce);
      debounce = setTimeout(renderTarjetas, 300);
    });
  }

  // Export Excel
  var btnExp = document.getElementById("btnExport");
  if(btnExp) btnExp.addEventListener("click", exportarExcel);

  // Cerrar dropdowns al hacer click fuera
  document.addEventListener("click", function(){
    document.querySelectorAll(".col-filter-drop.show").forEach(function(d){
      d.classList.remove("show");
    });
  });
}

// ============================================================
// 24. FILTROS TIPO EXCEL POR COLUMNA
// ============================================================
function toggleColFilter(col, btnEl){
  // Cerrar otros
  document.querySelectorAll(".col-filter-drop.show").forEach(function(d){
    if(d.getAttribute("data-col") !== col) d.classList.remove("show");
  });

  var drop = document.querySelector('.col-filter-drop[data-col="'+col+'"]');
  if(!drop) return;

  if(drop.classList.contains("show")){
    drop.classList.remove("show");
    return;
  }

  // Obtener valores únicos de la columna
  var unicos = {};
  tarjetasData.forEach(function(t){
    var v = getColValue(t, col);
    if(v) unicos[v] = true;
  });
  var vals = Object.keys(unicos).sort();
  var currentFilter = colFilters[col] || [];

  // Construir contenido del dropdown
  var html = '<input type="text" placeholder="Buscar..." class="cfd-search" data-col="'+col+'">';
  html += '<div class="cfd-options">';
  vals.forEach(function(v){
    var checked = currentFilter.length === 0 || currentFilter.indexOf(v) > -1;
    html += '<label><input type="checkbox" value="'+v+'" '+(checked?"checked":"")+'> '+v+'</label>';
  });
  html += '</div>';
  html += '<div class="cfd-actions">';
  html += '<button class="btn-clear" data-col="'+col+'">Limpiar</button>';
  html += '<button class="btn-apply" data-col="'+col+'">Aplicar</button>';
  html += '</div>';

  drop.innerHTML = html;
  drop.classList.add("show");

  // Búsqueda dentro del dropdown
  drop.querySelector(".cfd-search").addEventListener("input", function(e){
    var term = e.target.value.toLowerCase();
    drop.querySelectorAll(".cfd-options label").forEach(function(lbl){
      lbl.style.display = lbl.textContent.toLowerCase().indexOf(term) > -1 ? "flex" : "none";
    });
  });

  // Botón Limpiar
  drop.querySelector(".btn-clear").addEventListener("click", function(e){
    e.stopPropagation();
    delete colFilters[col];
    drop.classList.remove("show");
    btnEl.classList.remove("active");
    renderTarjetas();
  });

  // Botón Aplicar
  drop.querySelector(".btn-apply").addEventListener("click", function(e){
    e.stopPropagation();
    var checks = drop.querySelectorAll('.cfd-options input[type="checkbox"]');
    var selected = [];
    checks.forEach(function(ch){ if(ch.checked) selected.push(ch.value); });

    if(selected.length === vals.length || selected.length === 0){
      delete colFilters[col];
      btnEl.classList.remove("active");
    } else {
      colFilters[col] = selected;
      btnEl.classList.add("active");
    }
    drop.classList.remove("show");
    renderTarjetas();
  });

  // Prevenir cierre al hacer click dentro
  drop.addEventListener("click", function(e){ e.stopPropagation(); });
}

// ============================================================
// 25. EXPORTAR A CSV (compatible Excel)
// ============================================================
function exportarExcel(){
  var datos = tarjetasFiltradas.length > 0 ? tarjetasFiltradas : tarjetasData;
  var sep = ",";
  var lines = [];
  lines.push(["Folio","Equipo","Color","Defecto","Prioridad","Estado","Fecha","Antigüedad (días)","Descripción"].join(sep));

  datos.forEach(function(t){
    var row = [
      '"'+(t._folio||"")+'"',
      '"'+(t._equipo||"")+'"',
      '"'+(t._color||"")+'"',
      '"'+(t._defecto||"")+'"',
      '"'+(t._prioridad||"")+'"',
      '"'+(t._estado||"")+'"',
      '"'+fmtFecha(t._fechaInc)+'"',
      t._dias,
      '"'+((t._descripcion||"").replace(/"/g,'""'))+'"'
    ];
    lines.push(row.join(sep));
  });

  var csv = "\uFEFF" + lines.join("\n"); // BOM para Excel
  var blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "tarjetas_paletizado_" + new Date().toISOString().substring(0,10) + ".csv";
  link.click();
}

// ── Fin B2-P3 ──


// ── B2-P4: Inicialización final + Event listeners ──

// ============================================================
// 26. MODAL — Cambio de estado de equipos
// ============================================================
var modalEquipoActual = null;

function abrirModalCambioEstado(equipId){
  modalEquipoActual = equipId;
  var eq = getEquipo(equipId);
  if(!eq) return;

  var stActual = equipStatus[equipId] || "operativo";

  document.getElementById("modalTitle").textContent = "Cambiar Estado: " + equipId;
  document.getElementById("modalEquipName").textContent = eq.nombre + (eq.brand && eq.brand !== "-" ? " — " + eq.brand : "");

  // Estado actual
  var fromEl = document.getElementById("modalFromStatus");
  fromEl.textContent = stActual === "operativo" ? "Operativo" : stActual === "degradado" ? "Degradado" : "Fuera de Servicio";
  fromEl.className = "status-pill";
  if(stActual === "operativo") fromEl.classList.add("pill-resuelta");
  else if(stActual === "degradado") fromEl.classList.add("pill-proceso");
  else fromEl.classList.add("pill-abierta");

  // Opciones de nuevo estado (excluir el actual)
  var sel = document.getElementById("modalToStatus");
  sel.innerHTML = "";
  var opciones = [
    {value:"operativo", label:"Operativo"},
    {value:"degradado", label:"Degradado"},
    {value:"fuera", label:"Fuera de Servicio"}
  ];
  opciones.forEach(function(op){
    if(op.value !== stActual){
      var opt = document.createElement("option");
      opt.value = op.value;
      opt.textContent = op.label;
      sel.appendChild(opt);
    }
  });

  // Limpiar motivo
  document.getElementById("modalMotivo").value = "";

  // Mostrar modal
  document.getElementById("modalOverlay").classList.add("show");
}

function cerrarModal(){
  document.getElementById("modalOverlay").classList.remove("show");
  modalEquipoActual = null;
}

function confirmarCambioEstado(){
  if(!modalEquipoActual) return;

  var nuevoEstado = document.getElementById("modalToStatus").value;
  var motivo = document.getElementById("modalMotivo").value.trim();
  var estadoAnterior = equipStatus[modalEquipoActual] || "operativo";

  // Registrar cambio
  equipStatus[modalEquipoActual] = nuevoEstado;
  guardarEstados();
  registrarCambioEstado(modalEquipoActual, estadoAnterior, nuevoEstado, motivo);

  cerrarModal();

  // Refrescar todo
  renderKPIs();
  renderMarcadores();
  if(mapaSeleccionado === modalEquipoActual){
    seleccionarEquipoMapa(modalEquipoActual);
  }
  if(typeof renderOperatividad === "function") renderOperatividad();
}

// ============================================================
// 27. EVENT LISTENERS — Modal
// ============================================================
document.addEventListener("DOMContentLoaded", function(){
  var closeBtn = document.getElementById("modalClose");
  var cancelBtn = document.getElementById("modalCancelBtn");
  var confirmBtn = document.getElementById("modalConfirmBtn");
  var overlay = document.getElementById("modalOverlay");

  if(closeBtn) closeBtn.addEventListener("click", cerrarModal);
  if(cancelBtn) cancelBtn.addEventListener("click", cerrarModal);
  if(confirmBtn) confirmBtn.addEventListener("click", confirmarCambioEstado);
  if(overlay){
    overlay.addEventListener("click", function(e){
      if(e.target === overlay) cerrarModal();
    });
  }

  // Cerrar con Escape
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") cerrarModal();
  });
});

// ============================================================
// 28. ACORDEÓN — Toggle secciones (Operatividad)
// ============================================================
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll(".accordion-header").forEach(function(header){
    header.addEventListener("click", function(){
      header.classList.toggle("open");
      var body = header.nextElementSibling;
      if(body) body.classList.toggle("open");
    });
  });
});

// ============================================================
// 29. PLACEHOLDER — Funciones de Operatividad
//     (se reemplazan con Bloque 3)
// ============================================================
function initOperatividad(){
  // Placeholder — se implementa en Bloque 3
  if(typeof renderOperatividad === "function") renderOperatividad();
}

// ── Fin B2-P4 ──


// ── Bloque 3: Tab Operatividad ──

// ============================================================
// 30. OPERATIVIDAD — Variables
// ============================================================
var chartOperDonut = null;

// ============================================================
// 31. OPERATIVIDAD — Render maestro
// ============================================================
function renderOperatividad(){
  renderOperDonut();
  renderOperChips();
  renderOperTimeTable();
  renderHeatmap();
  renderScorecard();
}

// Sobreescribir el placeholder de B2-P4
initOperatividad = function(){
  renderOperatividad();
};

// ============================================================
// 32. DONA DE OPERATIVIDAD
// ============================================================
function renderOperDonut(){
  var estados = contarEstados();

  var ctx = document.getElementById("chartOperDonut");
  if(!ctx) return;
  if(chartOperDonut) chartOperDonut.destroy();

  chartOperDonut = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Operativos","Degradados","Fuera de Servicio"],
      datasets: [{
        data: [estados.operativos, estados.degradados, estados.fuera],
        backgroundColor: ["#287819","#E18719","#A52323"],
        borderWidth: 2,
        borderColor: "#fff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "65%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(c){
              var pct = Math.round((c.raw / estados.total) * 100);
              return c.label + ": " + c.raw + " (" + pct + "%)";
            }
          }
        }
      }
    },
    plugins: [{
      id: "centerText",
      beforeDraw: function(chart){
        var w = chart.width, h = chart.height, cCtx = chart.ctx;
        cCtx.restore();
        cCtx.font = "bold 28px Calibri,Arial,sans-serif";
        cCtx.textBaseline = "middle";
        cCtx.textAlign = "center";
        cCtx.fillStyle = "#4F2170";
        cCtx.fillText(estados.total, w/2, h/2 - 8);
        cCtx.font = "11px Calibri,Arial,sans-serif";
        cCtx.fillStyle = "#888";
        cCtx.fillText("equipos", w/2, h/2 + 14);
        cCtx.save();
      }
    }]
  });

  // Leyenda personalizada
  var legendEl = document.getElementById("operDonutLegend");
  if(legendEl){
    legendEl.innerHTML =
      '<div class="oper-legend-item"><div class="oper-legend-dot" style="background:#287819"></div> Operativos <span class="oper-legend-count" style="color:#287819">' + estados.operativos + '</span></div>' +
      '<div class="oper-legend-item"><div class="oper-legend-dot" style="background:#E18719"></div> Degradados <span class="oper-legend-count" style="color:#E18719">' + estados.degradados + '</span></div>' +
      '<div class="oper-legend-item"><div class="oper-legend-dot" style="background:#A52323"></div> Fuera de Servicio <span class="oper-legend-count" style="color:#A52323">' + estados.fuera + '</span></div>';
  }
}

// ============================================================
// 33. ACORDEÓN — Chips de equipos por estado
// ============================================================
function renderOperChips(){
  var operativos = [];
  var degradados = [];
  var fuera = [];

  EQUIPOS.forEach(function(eq){
    var st = equipStatus[eq.id] || "operativo";
    if(st === "operativo") operativos.push(eq);
    else if(st === "degradado") degradados.push(eq);
    else if(st === "fuera") fuera.push(eq);
  });

  // Actualizar títulos
  document.getElementById("accTitleOperativos").textContent = "Operativos (" + operativos.length + ")";
  document.getElementById("accTitleDegradados").textContent = "Degradados (" + degradados.length + ")";
  document.getElementById("accTitleFuera").textContent = "Fuera de Servicio (" + fuera.length + ")";

  // Render chips
  renderChipGroup("chipsOperativos", operativos, "chip-operativo");
  renderChipGroup("chipsDegradados", degradados, "chip-degradado");
  renderChipGroup("chipsFuera", fuera, "chip-fuera");
}

function renderChipGroup(containerId, equipos, chipClass){
  var container = document.getElementById(containerId);
  if(!container) return;

  container.innerHTML = "";
  equipos.forEach(function(eq){
    var chip = document.createElement("span");
    chip.className = "equip-chip " + chipClass;
    chip.title = eq.nombre + " | Clic para cambiar estado";
    chip.innerHTML = eq.id + ' <i class="fa-solid fa-pen chip-action"></i>';
    chip.addEventListener("click", function(){
      abrirModalCambioEstado(eq.id);
    });
    container.appendChild(chip);
  });

  if(equipos.length === 0){
    container.innerHTML = '<span class="text-muted" style="padding:8px">Ningún equipo en este estado</span>';
  }
}

// ============================================================
// 34. TABLA — Tiempo fuera de servicio
// ============================================================
function renderOperTimeTable(){
  var tbody = document.getElementById("operTimeTable");
  if(!tbody) return;

  // Obtener equipos NO operativos
  var noOps = [];
  EQUIPOS.forEach(function(eq){
    var st = equipStatus[eq.id] || "operativo";
    if(st !== "operativo"){
      // Buscar en historial cuándo cambió a este estado
      var desde = obtenerFechaCambio(eq.id, st);
      var dias = desde ? diasDesde(desde) : 0;
      var motivo = obtenerMotivoCambio(eq.id, st);
      noOps.push({
        equipo: eq.id,
        estado: st,
        desde: desde || "-",
        dias: dias,
        motivo: motivo || "-"
      });
    }
  });

  // Ordenar por días desc
  noOps.sort(function(a,b){ return b.dias - a.dias; });

  if(noOps.length === 0){
    tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted" style="padding:20px">Todos los equipos están operativos</td></tr>';
    return;
  }

  var html = "";
  noOps.forEach(function(item){
    var stLabel = item.estado === "degradado" ? "Degradado" : "Fuera Serv.";
    var stColor = item.estado === "degradado" ? "#E18719" : "#A52323";

    html += "<tr>" +
      "<td><strong>" + item.equipo + "</strong></td>" +
      "<td><span style='color:"+stColor+";font-weight:600'>" + stLabel + "</span></td>" +
      "<td>" + fmtFecha(item.desde) + "</td>" +
      "<td><strong>" + item.dias + " días</strong></td>" +
      "<td>" + item.motivo + "</td>" +
    "</tr>";
  });

  tbody.innerHTML = html;
}

function obtenerFechaCambio(equipId, estadoActual){
  // Buscar la última vez que cambió a este estado
  for(var i = equipStatusHistory.length - 1; i >= 0; i--){
    var reg = equipStatusHistory[i];
    if(reg.equipo === equipId && reg.a === estadoActual){
      return reg.fecha;
    }
  }
  return null;
}

function obtenerMotivoCambio(equipId, estadoActual){
  for(var i = equipStatusHistory.length - 1; i >= 0; i--){
    var reg = equipStatusHistory[i];
    if(reg.equipo === equipId && reg.a === estadoActual){
      return reg.motivo || "-";
    }
  }
  return "-";
}

// ============================================================
// 35. HEATMAP — Mapa de operatividad por 14 líneas
// ============================================================
function renderHeatmap(){
  var grid = document.getElementById("heatmapGrid");
  if(!grid) return;

  // Columnas del heatmap
  var columnas = [
    {key:"pal",     label:"Paletizadora"},
    {key:"cc",      label:"Case Conv."},
    {key:"espiral", label:"Espiral"},
    {key:"wrapper", label:"Wrapper"}
  ];

  var html = "";

  // Header row
  html += '<div class="hm-header">Línea</div>';
  columnas.forEach(function(col){
    html += '<div class="hm-header">' + col.label + '</div>';
  });

  // Data rows — 14 líneas
  for(var linea = 1; linea <= 14; linea++){
    html += '<div class="hm-line-label">L' + linea + '</div>';

    columnas.forEach(function(col){
      var equiposLinea = getEquiposLineaTipo(linea, col.key);

      if(equiposLinea.length === 0){
        html += '<div class="hm-cell na" title="Sin equipo">—</div>';
      } else {
        // Determinar peor estado de la línea para este tipo
        var peorEstado = getPeorEstado(equiposLinea);
        var stClass = peorEstado === "operativo" ? "op" : peorEstado === "degradado" ? "deg" : "fs";
        var stLabel = peorEstado === "operativo" ? "✓" : peorEstado === "degradado" ? "!" : "✕";
        var names = equiposLinea.map(function(e){ return e.id; }).join(", ");
        var title = names + " — " + (peorEstado === "operativo" ? "Operativo" : peorEstado === "degradado" ? "Degradado" : "Fuera de Servicio");

        html += '<div class="hm-cell ' + stClass + '" title="' + title + '">' + stLabel + '</div>';
      }
    });
  }

  grid.innerHTML = html;
}

function getEquiposLineaTipo(linea, tipo){
  if(tipo === "wrapper"){
    // Wrappers son compartidos por proyecto, no por línea
    var lineaProy = LINEAS[linea] ? LINEAS[linea].proyecto : "";
    return EQUIPOS.filter(function(e){
      return e.tipo === "wrapper" && e.proyecto === lineaProy;
    });
  }
  return EQUIPOS.filter(function(e){
    return e.linea === linea && e.tipo === tipo;
  });
}

function getPeorEstado(equipos){
  var tieneFuera = false;
  var tieneDeg = false;
  equipos.forEach(function(eq){
    var st = equipStatus[eq.id] || "operativo";
    if(st === "fuera") tieneFuera = true;
    else if(st === "degradado") tieneDeg = true;
  });
  if(tieneFuera) return "fuera";
  if(tieneDeg) return "degradado";
  return "operativo";
}

// ============================================================
// 36. SCORECARD — Arthur vs Sunrise
// ============================================================
function renderScorecard(){
  var arthur  = {ops:0, deg:0, fs:0, total:0};
  var sunrise = {ops:0, deg:0, fs:0, total:0};

  EQUIPOS.forEach(function(eq){
    var st = equipStatus[eq.id] || "operativo";
    var bucket = eq.proyecto === "arthur" ? arthur : sunrise;
    bucket.total++;
    if(st === "operativo") bucket.ops++;
    else if(st === "degradado") bucket.deg++;
    else if(st === "fuera") bucket.fs++;
  });

  // Arthur
  var arthurPct = arthur.total > 0 ? Math.round((arthur.ops / arthur.total) * 1000) / 10 : 0;
  document.getElementById("scArthurPct").textContent = arthurPct + "%";
  document.getElementById("scArthurPct").style.color = arthurPct >= 90 ? "#287819" : arthurPct >= 75 ? "#E18719" : "#A52323";
  document.getElementById("scArthurOps").textContent = arthur.ops;
  document.getElementById("scArthurDeg").textContent = arthur.deg;
  document.getElementById("scArthurFS").textContent = arthur.fs;

  // Sunrise
  var sunrisePct = sunrise.total > 0 ? Math.round((sunrise.ops / sunrise.total) * 1000) / 10 : 0;
  document.getElementById("scSunrisePct").textContent = sunrisePct + "%";
  document.getElementById("scSunrisePct").style.color = sunrisePct >= 90 ? "#287819" : sunrisePct >= 75 ? "#E18719" : "#A52323";
  document.getElementById("scSunriseOps").textContent = sunrise.ops;
  document.getElementById("scSunriseDeg").textContent = sunrise.deg;
  document.getElementById("scSunriseFS").textContent = sunrise.fs;
}

// ── Fin Bloque 3 ──

