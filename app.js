
/* ===========================================================
   app.js — Dashboard Status Equipos PT Paletizado (SAL)
   Parte 1: Core, datos, filtros, KPIs, Mapa
   =========================================================== */

// ============================================================
// 1. INVENTARIO COMPLETO DE EQUIPOS (45)
// ============================================================
var EQUIPOS = [
  // 20 Paletizadoras
  {id:"Pal 1",nombre:"Paletizadora 1",tipo:"Paletizadoras",brand:"Ritz",proyecto:"Arthur",linea:"A",x:75.5,y:12.5},
  {id:"Pal 2",nombre:"Paletizadora 2",tipo:"Paletizadoras",brand:"CA!",proyecto:"Arthur",linea:"A",x:69.2,y:12.5},
  {id:"Pal 3",nombre:"Paletizadora 3 Oreo",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"A",x:62.8,y:12.5},
  {id:"Pal 4",nombre:"Paletizadora 4",tipo:"Paletizadoras",brand:"Ritz",proyecto:"Arthur",linea:"A",x:56.5,y:12.5},
  {id:"Pal 5",nombre:"Paletizadora 5",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Arthur",linea:"A",x:50.1,y:12.5},
  {id:"Pal 6A",nombre:"Paletizadora 6A",tipo:"Paletizadoras",brand:"Chips Ahoy",proyecto:"Arthur",linea:"B",x:75.5,y:35.0},
  {id:"Pal 6B",nombre:"Paletizadora 6B",tipo:"Paletizadoras",brand:"Gamesa",proyecto:"Arthur",linea:"B",x:69.2,y:35.0},
  {id:"Pal 7A",nombre:"Paletizadora 7A",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Arthur",linea:"B",x:62.8,y:35.0},
  {id:"Pal 7B",nombre:"Paletizadora 7B",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Arthur",linea:"B",x:56.5,y:35.0},
  {id:"Pal 8",nombre:"Paletizadora 8",tipo:"Paletizadoras",brand:"Barcel",proyecto:"Sunrise",linea:"B",x:50.1,y:35.0},
  {id:"Pal 9",nombre:"Paletizadora 9",tipo:"Paletizadoras",brand:"Barcel",proyecto:"Sunrise",linea:"A",x:43.8,y:12.5},
  {id:"Pal 10",nombre:"Paletizadora 10",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:75.5,y:60.0},
  {id:"Pal 11 OT",nombre:"Paletizadora 11 OT",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:69.2,y:60.0},
  {id:"Pal 11 CK",nombre:"Paletizadora 11 CK",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:62.8,y:60.0},
  {id:"Pal 12",nombre:"Paletizadora 12",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:56.5,y:60.0},
  {id:"Pal 13",nombre:"Paletizadora 13",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:75.5,y:82.0},
  {id:"Pal 14",nombre:"Paletizadora 14",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:69.2,y:82.0},
  {id:"Pal 15",nombre:"Paletizadora 15",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:62.8,y:82.0},
  {id:"Pal 16",nombre:"Paletizadora 16",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:56.5,y:82.0},
  {id:"Pal 5A",nombre:"Paletizadora 5A",tipo:"Paletizadoras",brand:"Oreo",proyecto:"Arthur",linea:"A",x:43.8,y:20.0},

  // 7 Wrappers
  {id:"W1",nombre:"Wrapper 1",tipo:"Wrappers",brand:"Ritz / Oreo / CA!",proyecto:"Arthur",linea:"A",x:85.0,y:15.0},
  {id:"W2",nombre:"Wrapper 2",tipo:"Wrappers",brand:"Ritz / Oreo / CA!",proyecto:"Arthur",linea:"A",x:85.0,y:22.0},
  {id:"W3",nombre:"Wrapper 3",tipo:"Wrappers",brand:"Ritz / Oreo / CA!",proyecto:"Arthur",linea:"A",x:85.0,y:29.0},
  {id:"W5",nombre:"Wrapper 5",tipo:"Wrappers",brand:"Barcel",proyecto:"Sunrise",linea:"B",x:85.0,y:38.0},
  {id:"W6",nombre:"Wrapper 6",tipo:"Wrappers",brand:"Oreo",proyecto:"Sunrise",linea:"B",x:85.0,y:45.0},
  {id:"W7",nombre:"Wrapper 7",tipo:"Wrappers",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:85.0,y:63.0},
  {id:"W8",nombre:"Wrapper 8",tipo:"Wrappers",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:85.0,y:85.0},

  // 18 Espirales
  {id:"SP-1 y 2",nombre:"Espiral 1 y 2",tipo:"Espirales",brand:"Ritz",proyecto:"Arthur",linea:"A",x:64.14,y:20.83},
  {id:"SP-3",nombre:"Espiral 3",tipo:"Espirales",brand:"CA!",proyecto:"Arthur",linea:"A",x:85.53,y:8.5},
  {id:"SP-4 y 6A",nombre:"Espiral 4 y 6A",tipo:"Espirales",brand:"Chips Ahoy",proyecto:"Arthur",linea:"B",x:48.07,y:38.0},
  {id:"SP-5 y 9A",nombre:"Espiral 5 y 9A",tipo:"Espirales",brand:"Barcel",proyecto:"Sunrise",linea:"B",x:40.62,y:38.0},
  {id:"SP-6B",nombre:"Espiral 6B",tipo:"Espirales",brand:"Gamesa",proyecto:"Arthur",linea:"B",x:27.05,y:35.0},
  {id:"SP-7A y 7B",nombre:"Espiral 7A y 7B",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"B",x:55.96,y:42.0},
  {id:"SP-8",nombre:"Espiral 8",tipo:"Espirales",brand:"Barcel",proyecto:"Sunrise",linea:"B",x:37.96,y:42.0},
  {id:"SP-9B",nombre:"Espiral 9B",tipo:"Espirales",brand:"Barcel",proyecto:"Sunrise",linea:"A",x:23.88,y:15.0},
  {id:"SP-10",nombre:"Espiral 10",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:18.7,y:63.0},
  {id:"SP-10 FZ",nombre:"Espiral 10 FZ",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:2.73,y:63.0},
  {id:"SP-11 OT",nombre:"Espiral 11 OT",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:18.7,y:55.0},
  {id:"SP-11 CK",nombre:"Espiral 11 CK",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:10.0,y:55.0},
  {id:"SP-12",nombre:"Espiral 12",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"C",x:18.7,y:70.0},
  {id:"SP-13",nombre:"Espiral 13",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:18.7,y:85.0},
  {id:"SP-14",nombre:"Espiral 14",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:10.0,y:85.0},
  {id:"SP-15",nombre:"Espiral 15",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:18.7,y:78.0},
  {id:"SP-16",nombre:"Espiral 16",tipo:"Espirales",brand:"Oreo",proyecto:"Sunrise",linea:"D",x:10.0,y:78.0},
  {id:"SP-5A",nombre:"Espiral 5A",tipo:"Espirales",brand:"Oreo",proyecto:"Arthur",linea:"A",x:30.0,y:20.0}
];

// Lines configuration
var LINEAS = {
  "A": {nombre:"Línea A", equipos:[]},
  "B": {nombre:"Línea B", equipos:[]},
  "C": {nombre:"Línea C", equipos:[]},
  "D": {nombre:"Línea D", equipos:[]}
};
EQUIPOS.forEach(function(e){ if(LINEAS[e.linea]) LINEAS[e.linea].equipos.push(e.id); });

// ============================================================
// 2. GLOBAL STATE
// ============================================================
var STATE = {
  tarjetas: [],
  filtered: [],
  equipStatus: {},
  selectedEquip: null,
  mapZoom: 1,
  sortCol: null,
  sortAsc: true,
  // Chart instances (for destroy/recreate)
  charts: {}
};

// ============================================================
// 3. UTILITY FUNCTIONS
// ============================================================

/** Normalize date strings to YYYY-MM-DD */
function normD(s) {
  if (!s || typeof s !== "string") return "";
  var clean = s.trim();
  var spaceIdx = clean.indexOf(" ");
  if (spaceIdx > 0) clean = clean.substring(0, spaceIdx);
  if (/^\d{4}-\d{2}-\d{2}/.test(clean)) return clean.substring(0, 10);
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(clean)) {
    var p = clean.split("/");
    var a = parseInt(p[0], 10);
    var b = parseInt(p[1], 10);
    var y = p[2];
    if (a > 12) return y + "-" + (b < 10 ? "0" + b : "" + b) + "-" + (a < 10 ? "0" + a : "" + a);
    return y + "-" + (b < 10 ? "0" + b : "" + b) + "-" + (a < 10 ? "0" + a : "" + a);
  }
  return clean;
}

/** Format YYYY-MM-DD to DD/MM/YYYY for display */
function fmtDate(iso) {
  if (!iso || iso.length < 10) return "—";
  var parts = iso.split("-");
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}

/** Get tag color prefix from categoria */
function getColor(cat) {
  if (!cat) return "";
  var prefix = cat.substring(0, 2).toUpperCase();
  if (prefix === "BT") return "BT";
  if (prefix === "RT") return "RT";
  if (prefix === "YT") return "YT";
  return "";
}

/** Days between date string and today */
function diasDesde(isoDate) {
  if (!isoDate) return 0;
  var d = new Date(isoDate);
  var hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  var diff = Math.floor((hoy - d) / 86400000);
  return diff > 0 ? diff : 0;
}

/** Get ISO week number */
function getWeek(d) {
  var date = new Date(d);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  var week1 = new Date(date.getFullYear(), 0, 4);
  return 1 + Math.round(((date - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

/** Get month name in Spanish */
var MESES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
function getMes(isoDate) {
  if (!isoDate || isoDate.length < 7) return "";
  var m = parseInt(isoDate.substring(5, 7), 10);
  return MESES[m - 1] || "";
}

// ============================================================
// 4. DATA LOADING
// ============================================================
function loadData() {
  fetch("data/tarjetas.json")
    .then(function(r) { return r.json(); })
    .then(function(data) {
      STATE.tarjetas = (data.tarjetas || []).map(function(t) {
        t._fechaInc = normD(t.fechaInclusion);
        t._fechaRes = normD(t.fechaResolucion);
        t._color = getColor(t.categoria);
        return t;
      });
      if (data.resumen && data.resumen.generado) {
        document.getElementById("headerDate").textContent = data.resumen.generado;
      }
      setDefaultDates();
      loadEquipStatus();
      applyFilters();
    })
    .catch(function(err) {
      console.error("Error loading tarjetas.json:", err);
    });
}

function setDefaultDates() {
  var desde = document.getElementById("filtroDesde");
  var hasta = document.getElementById("filtroHasta");
  var hoy = new Date();
  var year = hoy.getFullYear();
  var mm = ("0" + (hoy.getMonth() + 1)).slice(-2);
  var dd = ("0" + hoy.getDate()).slice(-2);
  desde.value = year + "-01-01";
  hasta.value = year + "-" + mm + "-" + dd;
}

// ============================================================
// 5. EQUIPMENT STATUS (localStorage)
// ============================================================
var LS_KEY = "sal_equip_status";

function loadEquipStatus() {
  try {
    var saved = localStorage.getItem(LS_KEY);
    if (saved) STATE.equipStatus = JSON.parse(saved);
  } catch(e) {}
  EQUIPOS.forEach(function(eq) {
    if (!STATE.equipStatus[eq.id]) {
      STATE.equipStatus[eq.id] = { status: "operativo", motivo: "", desde: "" };
    }
  });
}

function saveEquipStatus() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(STATE.equipStatus)); } catch(e) {}
}

function getEquipStatus(id) {
  return (STATE.equipStatus[id] && STATE.equipStatus[id].status) || "operativo";
}

function changeEquipStatus(id, newStatus, motivo) {
  var hoy = new Date();
  var iso = hoy.getFullYear() + "-" + ("0"+(hoy.getMonth()+1)).slice(-2) + "-" + ("0"+hoy.getDate()).slice(-2);
  STATE.equipStatus[id] = { status: newStatus, motivo: motivo || "", desde: iso };
  saveEquipStatus();
}

// ============================================================
// 6. FILTERS & KPIs
// ============================================================
function applyFilters() {
  var desde = document.getElementById("filtroDesde").value;
  var hasta = document.getElementById("filtroHasta").value;

  STATE.filtered = STATE.tarjetas.filter(function(t) {
    if (!t._fechaInc) return false;
    if (desde && t._fechaInc < desde) return false;
    if (hasta && t._fechaInc > hasta) return false;
    return true;
  });

  updateKPIs();
  renderMapa();

  if (document.getElementById("tab-tarjetas").classList.contains("active")) {
    applyTarjetasFilters();
  }
  if (document.getElementById("tab-operatividad").classList.contains("active")) {
    renderOperatividad();
  }
}

function updateKPIs() {
  var data = STATE.filtered;
  var abiertas = 0, cerradas = 0, bt = 0, rt = 0, yt = 0, sumAntig = 0, countAntig = 0;

  data.forEach(function(t) {
    var isOpen = t.estado && t.estado.toLowerCase() !== "resuelta";
    if (isOpen) {
      abiertas++;
      if (t.antiguedadDias > 0) { sumAntig += t.antiguedadDias; countAntig++; }
    } else {
      cerradas++;
    }
    if (t._color === "BT") bt++;
    else if (t._color === "RT") rt++;
    else if (t._color === "YT") yt++;
  });

  var antigProm = countAntig > 0 ? Math.round(sumAntig / countAntig) : 0;

  document.getElementById("kpiAbiertas").textContent = abiertas.toLocaleString();
  document.getElementById("kpiCerradas").textContent = cerradas.toLocaleString();
  document.getElementById("kpiAntig").textContent = antigProm + "d";
  document.getElementById("kpiBT").textContent = bt.toLocaleString();
  document.getElementById("kpiRT").textContent = rt.toLocaleString();
  document.getElementById("kpiYT").textContent = yt.toLocaleString();

  var ops = 0, deg = 0, fs = 0;
  EQUIPOS.forEach(function(eq) {
    var s = getEquipStatus(eq.id);
    if (s === "operativo") ops++;
    else if (s === "degradado") deg++;
    else fs++;
  });
  document.getElementById("kpiOperativos").textContent = ops;
  document.getElementById("kpiDegradados").textContent = deg;
  document.getElementById("kpiFuera").textContent = fs;
}

// ============================================================
// 7. TAB NAVIGATION
// ============================================================
function initTabs() {
  var btns = document.querySelectorAll(".tab-btn");
  btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var target = btn.getAttribute("data-tab");
      btns.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      document.querySelectorAll(".tab-content").forEach(function(tc) { tc.classList.remove("active"); });
      document.getElementById("tab-" + target).classList.add("active");
      if (target === "tarjetas") applyTarjetasFilters();
      if (target === "operatividad") renderOperatividad();
      if (target === "mapa") renderMapa();
    });
  });
}

// ============================================================
// 8. MAPA TAB
// ============================================================
function renderMapa() {
  var canvas = document.getElementById("mapaCanvas");
  var old = canvas.querySelectorAll(".marker");
  old.forEach(function(m) { m.remove(); });

  var ticketCount = {};
  STATE.filtered.forEach(function(t) {
    if (t.estado && t.estado.toLowerCase() !== "resuelta" && t.equipoMapa) {
      ticketCount[t.equipoMapa] = (ticketCount[t.equipoMapa] || 0) + 1;
    }
  });

  var showLabels = document.getElementById("toggleLabels").checked;

  EQUIPOS.forEach(function(eq) {
    var status = getEquipStatus(eq.id);
    var count = ticketCount[eq.id] || 0;

    var marker = document.createElement("div");
    marker.className = "marker";
    marker.style.left = eq.x + "%";
    marker.style.top = eq.y + "%";
    marker.setAttribute("data-equip", eq.id);

    var statusClass = "status-" + (status === "operativo" ? "operativo" : status === "degradado" ? "degradado" : "fuera");
    var shape;
    if (eq.tipo === "Paletizadoras") {
      shape = document.createElement("div");
      shape.className = "marker-square " + statusClass;
    } else if (eq.tipo === "Espirales") {
      shape = document.createElement("div");
      shape.className = "marker-circle " + statusClass;
    } else {
      shape = document.createElement("div");
      shape.className = "marker-diamond " + statusClass;
      var inner = document.createElement("div");
      inner.className = "marker-diamond-inner";
      shape.appendChild(inner);
    }
    marker.appendChild(shape);

    if (count > 0) {
      var badge = document.createElement("div");
      badge.className = "marker-badge";
      badge.textContent = count;
      marker.appendChild(badge);
    }

    var label = document.createElement("div");
    label.className = "marker-label" + (showLabels ? "" : " hide");
    label.textContent = eq.id;
    marker.appendChild(label);

    marker.addEventListener("click", function() { selectEquipOnMap(eq.id); });
    canvas.appendChild(marker);
  });

  if (STATE.selectedEquip) highlightMarker(STATE.selectedEquip);
}

function selectEquipOnMap(equipId) {
  STATE.selectedEquip = equipId;
  highlightMarker(equipId);
  openSidePanel(equipId);
}

function highlightMarker(equipId) {
  document.querySelectorAll(".marker").forEach(function(m) {
    m.classList.toggle("selected", m.getAttribute("data-equip") === equipId);
  });
}

function openSidePanel(equipId) {
  var eq = EQUIPOS.find(function(e) { return e.id === equipId; });
  if (!eq) return;

  var status = getEquipStatus(equipId);
  var statusLabel = status === "operativo" ? "Operativo" : status === "degradado" ? "Degradado" : "Fuera de Servicio";
  var statusColor = status === "operativo" ? "#287819" : status === "degradado" ? "#E18719" : "#A52323";

  document.getElementById("panelTitle").textContent = eq.id + " — " + (eq.brand || "");
  var statusEl = document.getElementById("panelStatus");
  statusEl.textContent = statusLabel;
  statusEl.style.background = statusColor;

  var tickets = STATE.filtered.filter(function(t) {
    return t.equipoMapa === equipId && t.estado && t.estado.toLowerCase() !== "resuelta";
  });

  document.getElementById("panelCount").textContent = "Tarjetas Abiertas: " + tickets.length;

  var container = document.getElementById("panelTickets");
  container.innerHTML = "";

  tickets.forEach(function(t) {
    var item = document.createElement("div");
    item.className = "ticket-item";
    var colorClass = t._color === "BT" ? "tag-bt" : t._color === "RT" ? "tag-rt" : t._color === "YT" ? "tag-yt" : "";
    var age = t.antiguedadDias > 0 ? t.antiguedadDias + "d" : "hoy";
    item.innerHTML =
      '<div class="ticket-top">' +
        '<span class="ticket-folio">' + (t.folio || "") + '</span>' +
        '<span class="ticket-color-tag ' + colorClass + '">' + (t._color || "—") + '</span>' +
        '<span class="ticket-age">' + age + '</span>' +
      '</div>' +
      '<div class="ticket-desc">' + (t.descripcion || t.defecto || "Sin descripción") + '</div>';
    container.appendChild(item);
  });

  document.getElementById("panelUpdate").textContent = "Última actualización: hoy " +
    ("0" + new Date().getHours()).slice(-2) + ":" + ("0" + new Date().getMinutes()).slice(-2);

  document.getElementById("sidePanel").classList.add("open");
}

function closeSidePanel() {
  document.getElementById("sidePanel").classList.remove("open");
  STATE.selectedEquip = null;
  document.querySelectorAll(".marker").forEach(function(m) { m.classList.remove("selected"); });
}

function verTodasTarjetas() {
  if (!STATE.selectedEquip) return;
  document.querySelectorAll(".tab-btn").forEach(function(b) { b.classList.remove("active"); });
  document.querySelector('[data-tab="tarjetas"]').classList.add("active");
  document.querySelectorAll(".tab-content").forEach(function(tc) { tc.classList.remove("active"); });
  document.getElementById("tab-tarjetas").classList.add("active");
  document.getElementById("filterBuscar").value = STATE.selectedEquip;
  applyTarjetasFilters();
}

// ============================================================
// 9. ZOOM CONTROLS
// ============================================================
function initZoom() {
  var canvas = document.getElementById("mapaCanvas");
  document.getElementById("btnZoomIn").addEventListener("click", function() {
    STATE.mapZoom = Math.min(STATE.mapZoom + 0.2, 3);
    canvas.style.transform = "scale(" + STATE.mapZoom + ")";
  });
  document.getElementById("btnZoomOut").addEventListener("click", function() {
    STATE.mapZoom = Math.max(STATE.mapZoom - 0.2, 0.5);
    canvas.style.transform = "scale(" + STATE.mapZoom + ")";
  });
  document.getElementById("btnZoomFit").addEventListener("click", function() {
    STATE.mapZoom = 1;
    canvas.style.transform = "scale(1)";
  });
}

// ============================================================
// 10. TOGGLE LABELS
// ============================================================
function initLabelToggle() {
  document.getElementById("toggleLabels").addEventListener("change", function() {
    var show = this.checked;
    document.querySelectorAll(".marker-label").forEach(function(l) {
      l.classList.toggle("hide", !show);
    });
  });
}

// ============================================================
// 11. EVENT LISTENERS & INIT
// ============================================================
document.addEventListener("DOMContentLoaded", function() {
  initTabs();
  initZoom();
  initLabelToggle();
  initTarjetasFilters();

  document.getElementById("filtroDesde").addEventListener("change", applyFilters);
  document.getElementById("filtroHasta").addEventListener("change", applyFilters);
  document.getElementById("panelClose").addEventListener("click", closeSidePanel);
  document.getElementById("panelVerTodas").addEventListener("click", verTodasTarjetas);

  loadData();
});


/* ===========================================================
   Parte 2: Pestaña Tarjetas — Filtros, Gráficas, Tabla, Excel
   =========================================================== */

// ============================================================
// 12. TARJETAS FILTERS
// ============================================================
function initTarjetasFilters() {
  document.getElementById("filterGrupo").addEventListener("change", applyTarjetasFilters);
  document.getElementById("filterColor").addEventListener("change", applyTarjetasFilters);
  document.getElementById("filterEstado").addEventListener("change", applyTarjetasFilters);
  document.getElementById("filterBuscar").addEventListener("input", applyTarjetasFilters);
  document.getElementById("btnDownload").addEventListener("click", downloadExcel);

  // Table header sort
  document.querySelectorAll("#tablaTarjetas thead th[data-col]").forEach(function(th) {
    th.addEventListener("click", function() {
      var col = th.getAttribute("data-col");
      if (STATE.sortCol === col) {
        STATE.sortAsc = !STATE.sortAsc;
      } else {
        STATE.sortCol = col;
        STATE.sortAsc = true;
      }
      applyTarjetasFilters();
    });
  });
}

function applyTarjetasFilters() {
  var grupo = document.getElementById("filterGrupo").value;
  var color = document.getElementById("filterColor").value;
  var estado = document.getElementById("filterEstado").value;
  var buscar = document.getElementById("filterBuscar").value.toLowerCase().trim();

  // Start from date-filtered set
  var result = STATE.filtered.slice();

  // Apply tarjetas-specific filters
  if (grupo !== "todos") {
    result = result.filter(function(t) { return t.proyecto === grupo; });
  }
  if (color !== "todos") {
    result = result.filter(function(t) { return t._color === color; });
  }
  if (estado !== "todos") {
    if (estado === "Abierta") {
      result = result.filter(function(t) {
        return t.estado && t.estado.toLowerCase() !== "resuelta" && t.estado.toUpperCase() !== "CMMS";
      });
    } else if (estado === "CMMS") {
      result = result.filter(function(t) { return t.estado && t.estado.toUpperCase() === "CMMS"; });
    } else {
      result = result.filter(function(t) { return t.estado && t.estado.toLowerCase() === estado.toLowerCase(); });
    }
  }
  if (buscar) {
    result = result.filter(function(t) {
      return (t.folio && t.folio.toLowerCase().indexOf(buscar) >= 0) ||
             (t.equipoMapa && t.equipoMapa.toLowerCase().indexOf(buscar) >= 0) ||
             (t.nombre && t.nombre.toLowerCase().indexOf(buscar) >= 0) ||
             (t.descripcion && t.descripcion.toLowerCase().indexOf(buscar) >= 0) ||
             (t.defecto && t.defecto.toLowerCase().indexOf(buscar) >= 0);
    });
  }

  // Sort
  if (STATE.sortCol) {
    var col = STATE.sortCol;
    var asc = STATE.sortAsc;
    result.sort(function(a, b) {
      var va = a[col], vb = b[col];
      if (col === "antiguedadDias") {
        va = Number(va) || 0;
        vb = Number(vb) || 0;
      } else if (col === "fechaInclusion") {
        va = a._fechaInc || "";
        vb = b._fechaInc || "";
      } else {
        va = (va || "").toString().toLowerCase();
        vb = (vb || "").toString().toLowerCase();
      }
      if (va < vb) return asc ? -1 : 1;
      if (va > vb) return asc ? 1 : -1;
      return 0;
    });
  }

  renderTarjetasCharts(result);
  renderComparison();
  renderTarjetasTable(result);
  updateSortIndicators();
}

// ============================================================
// 13. SORT INDICATORS
// ============================================================
function updateSortIndicators() {
  document.querySelectorAll("#tablaTarjetas thead th[data-col]").forEach(function(th) {
    var col = th.getAttribute("data-col");
    var icon = th.querySelector(".sort-icon i");
    th.classList.remove("sorted");
    if (icon) icon.className = "fa-solid fa-sort";
    if (STATE.sortCol === col) {
      th.classList.add("sorted");
      if (icon) icon.className = STATE.sortAsc ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down";
    }
  });
}

// ============================================================
// 14. CHART COLORS (MDLZ palette — no BT/RT/YT colors outside
//     tag classification)
// ============================================================
var C = {
  purple: "#4F2170",
  purpleLight: "#7B4F9A",
  purplePale: "#C5A3D9",
  orange: "#E18719",
  green: "#287819",
  brown: "#623E23",
  gray: "#9CA3AF",
  // Only for tag classification charts
  bt: "#2D6EAA",
  rt: "#A52323",
  yt: "#D4A017"
};

// ============================================================
// 15. RENDER ALL TARJETAS CHARTS
// ============================================================
function renderTarjetasCharts(data) {
  renderChartDona(data);
  renderChartTendencia(data);
  renderChartTop10(data);
  renderChartAntiguedad(data);
  renderChartCierre(data);
}

// Destroy a chart if it already exists
function destroyChart(key) {
  if (STATE.charts[key]) {
    STATE.charts[key].destroy();
    STATE.charts[key] = null;
  }
}

// ============================================================
// G1: DONA — Tarjetas por Color (BT/RT/YT)
// ============================================================
function renderChartDona(data) {
  destroyChart("dona");

  // Count OPEN tickets by color
  var btCount = 0, rtCount = 0, ytCount = 0;
  data.forEach(function(t) {
    if (t.estado && t.estado.toLowerCase() !== "resuelta") {
      if (t._color === "BT") btCount++;
      else if (t._color === "RT") rtCount++;
      else if (t._color === "YT") ytCount++;
    }
  });

  var ctx = document.getElementById("chartDona").getContext("2d");
  STATE.charts.dona = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["BT (Azul)", "RT (Rojo)", "YT (Amarillo)"],
      datasets: [{
        data: [btCount, rtCount, ytCount],
        backgroundColor: [C.bt, C.rt, C.yt],
        borderWidth: 2,
        borderColor: "#fff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: {
          position: "bottom",
          labels: { font: { family: "Calibri, Arial, sans-serif", size: 12 }, padding: 14, usePointStyle: true }
        },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ctx.label + ": " + ctx.parsed + " tarjetas"; }
          }
        }
      }
    },
    plugins: [{
      id: "donutCenter",
      beforeDraw: function(chart) {
        var total = btCount + rtCount + ytCount;
        var ctx2 = chart.ctx;
        var cx = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
        var cy = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
        ctx2.save();
        ctx2.font = "bold 22px Calibri, Arial, sans-serif";
        ctx2.fillStyle = "#3D3D3D";
        ctx2.textAlign = "center";
        ctx2.textBaseline = "middle";
        ctx2.fillText(total, cx, cy - 8);
        ctx2.font = "12px Calibri, Arial, sans-serif";
        ctx2.fillStyle = "#9CA3AF";
        ctx2.fillText("Abiertas", cx, cy + 12);
        ctx2.restore();
      }
    }]
  });
}

// ============================================================
// G2: TENDENCIA — Apertura vs Cierre por semana
// ============================================================
function renderChartTendencia(data) {
  destroyChart("tendencia");

  var weekOpen = {};
  var weekClose = {};

  data.forEach(function(t) {
    if (!t._fechaInc) return;
    var w = getWeek(t._fechaInc);
    if (t.estado && t.estado.toLowerCase() !== "resuelta") {
      weekOpen[w] = (weekOpen[w] || 0) + 1;
    } else {
      weekClose[w] = (weekClose[w] || 0) + 1;
    }
  });

  // Build sorted weeks
  var allWeeks = {};
  Object.keys(weekOpen).forEach(function(w) { allWeeks[w] = true; });
  Object.keys(weekClose).forEach(function(w) { allWeeks[w] = true; });
  var weeks = Object.keys(allWeeks).map(Number).sort(function(a, b) { return a - b; });

  var labels = weeks.map(function(w) { return "Sem " + w; });
  var openData = weeks.map(function(w) { return weekOpen[w] || 0; });
  var closeData = weeks.map(function(w) { return weekClose[w] || 0; });

  var ctx = document.getElementById("chartTendencia").getContext("2d");
  STATE.charts.tendencia = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Abiertas",
          data: openData,
          borderColor: C.purple,
          backgroundColor: C.purple + "20",
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 2,
          fill: false
        },
        {
          label: "Cerradas",
          data: closeData,
          borderColor: C.green,
          backgroundColor: C.green + "20",
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          position: "top",
          labels: { font: { family: "Calibri, Arial, sans-serif", size: 11 }, usePointStyle: true, padding: 12 }
        }
      },
      scales: {
        x: {
          ticks: { font: { size: 10 }, maxRotation: 45, autoSkip: true, maxTicksLimit: 20 },
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: { font: { size: 11 } },
          grid: { color: "#F3F4F6" }
        }
      }
    }
  });
}

// ============================================================
// G3: TOP 10 — Equipos Problemáticos (barras horizontales)
// ============================================================
function renderChartTop10(data) {
  destroyChart("top10");

  // Count open tickets per equipment
  var equipCount = {};
  data.forEach(function(t) {
    if (t.estado && t.estado.toLowerCase() !== "resuelta" && t.equipoMapa) {
      equipCount[t.equipoMapa] = (equipCount[t.equipoMapa] || 0) + 1;
    }
  });

  // Sort descending and take top 10
  var sorted = Object.keys(equipCount).map(function(k) {
    return { name: k, count: equipCount[k] };
  }).sort(function(a, b) { return b.count - a.count; }).slice(0, 10);

  // Reverse for horizontal bar (bottom = highest)
  sorted.reverse();

  var labels = sorted.map(function(s) { return s.name; });
  var values = sorted.map(function(s) { return s.count; });

  var ctx = document.getElementById("chartTop10").getContext("2d");
  STATE.charts.top10 = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Tarjetas abiertas",
        data: values,
        backgroundColor: C.purple,
        borderRadius: 4,
        barThickness: 16
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { font: { size: 11 } },
          grid: { color: "#F3F4F6" }
        },
        y: {
          ticks: { font: { family: "Calibri, Arial, sans-serif", size: 11 } },
          grid: { display: false }
        }
      }
    }
  });
}

// ============================================================
// G4: ANTIGÜEDAD — Distribución (histograma)
//     Uses PURPLE tones only (no BT/RT/YT colors)
// ============================================================
function renderChartAntiguedad(data) {
  destroyChart("antiguedad");

  var buckets = { "0-7d": 0, "8-15d": 0, "16-30d": 0, "30+d": 0 };

  data.forEach(function(t) {
    if (t.estado && t.estado.toLowerCase() !== "resuelta") {
      var d = t.antiguedadDias || 0;
      if (d <= 7) buckets["0-7d"]++;
      else if (d <= 15) buckets["8-15d"]++;
      else if (d <= 30) buckets["16-30d"]++;
      else buckets["30+d"]++;
    }
  });

  // Purple gradient from light to dark (more days = darker = more urgent)
  var barColors = [C.purplePale, C.purpleLight, C.purple, "#3A1854"];

  var ctx = document.getElementById("chartAntiguedad").getContext("2d");
  STATE.charts.antiguedad = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["0-7 días", "8-15 días", "16-30 días", "30+ días"],
      datasets: [{
        label: "Tarjetas abiertas",
        data: [buckets["0-7d"], buckets["8-15d"], buckets["16-30d"], buckets["30+d"]],
        backgroundColor: barColors,
        borderRadius: 4,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ctx.parsed.y + " tarjetas"; }
          }
        }
      },
      scales: {
        x: {
          ticks: { font: { family: "Calibri, Arial, sans-serif", size: 12 } },
          grid: { display: false }
        },
        y: {
          beginAtZero: true,
          ticks: { font: { size: 11 } },
          grid: { color: "#F3F4F6" }
        }
      }
    }
  });
}

// ============================================================
// G5: TASA DE CIERRE MENSUAL — Barras + Línea %
// ============================================================
function renderChartCierre(data) {
  destroyChart("cierre");

  var monthOpen = {};
  var monthClose = {};

  data.forEach(function(t) {
    if (!t._fechaInc) return;
    var mes = t._fechaInc.substring(0, 7); // "YYYY-MM"
    if (t.estado && t.estado.toLowerCase() === "resuelta") {
      monthClose[mes] = (monthClose[mes] || 0) + 1;
    } else {
      monthOpen[mes] = (monthOpen[mes] || 0) + 1;
    }
  });

  // Combine and sort months
  var allMonths = {};
  Object.keys(monthOpen).forEach(function(m) { allMonths[m] = true; });
  Object.keys(monthClose).forEach(function(m) { allMonths[m] = true; });
  var months = Object.keys(allMonths).sort();

  var labels = months.map(function(m) { return getMes(m + "-01"); });
  var closedData = months.map(function(m) { return monthClose[m] || 0; });
  var rateData = months.map(function(m) {
    var total = (monthOpen[m] || 0) + (monthClose[m] || 0);
    if (total === 0) return 0;
    return Math.round(((monthClose[m] || 0) / total) * 1000) / 10;
  });

  var ctx = document.getElementById("chartCierre").getContext("2d");
  STATE.charts.cierre = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Cerradas",
          data: closedData,
          backgroundColor: C.purple,
          borderRadius: 4,
          barThickness: 24,
          yAxisID: "y",
          order: 2
        },
        {
          label: "Tasa cierre %",
          data: rateData,
          type: "line",
          borderColor: C.orange,
          backgroundColor: C.orange,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: C.orange,
          tension: 0.3,
          yAxisID: "y1",
          order: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          position: "top",
          labels: { font: { family: "Calibri, Arial, sans-serif", size: 11 }, usePointStyle: true, padding: 12 }
        },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              if (ctx.dataset.yAxisID === "y1") return ctx.parsed.y + "%";
              return ctx.parsed.y + " tarjetas";
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { font: { family: "Calibri, Arial, sans-serif", size: 11 } },
          grid: { display: false }
        },
        y: {
          position: "left",
          beginAtZero: true,
          title: { display: true, text: "Tarjetas cerradas", font: { size: 11 } },
          ticks: { font: { size: 10 } },
          grid: { color: "#F3F4F6" }
        },
        y1: {
          position: "right",
          min: 0,
          max: 100,
          title: { display: true, text: "% Cierre", font: { size: 11 } },
          ticks: { font: { size: 10 }, callback: function(v) { return v + "%"; } },
          grid: { display: false }
        }
      }
    }
  });
}

// ============================================================
// 16. ARTHUR VS SUNRISE COMPARISON
// ============================================================
function renderComparison() {
  var data = STATE.filtered;
  var groups = { Arthur: { open: 0, closed: 0, bt: 0, rt: 0, yt: 0, sumAntig: 0, countAntig: 0 },
                 Sunrise: { open: 0, closed: 0, bt: 0, rt: 0, yt: 0, sumAntig: 0, countAntig: 0 } };

  data.forEach(function(t) {
    var g = groups[t.proyecto];
    if (!g) return;
    var isOpen = t.estado && t.estado.toLowerCase() !== "resuelta";
    if (isOpen) {
      g.open++;
      if (t.antiguedadDias > 0) { g.sumAntig += t.antiguedadDias; g.countAntig++; }
    } else {
      g.closed++;
    }
    if (t._color === "BT") g.bt++;
    else if (t._color === "RT") g.rt++;
    else if (t._color === "YT") g.yt++;
  });

  function rate(g) {
    var total = g.open + g.closed;
    return total > 0 ? (g.closed / total * 100).toFixed(1) + "%" : "—";
  }
  function antig(g) {
    return g.countAntig > 0 ? Math.round(g.sumAntig / g.countAntig) + "d" : "0d";
  }

  var a = groups.Arthur;
  var s = groups.Sunrise;

  var rows = [
    { label: "Abiertas",       arthur: a.open,   sunrise: s.open },
    { label: "Cerradas",       arthur: a.closed,  sunrise: s.closed },
    { label: "Tasa cierre",    arthur: rate(a),   sunrise: rate(s) },
    { label: "Antig. prom",    arthur: antig(a),  sunrise: antig(s) },
    { label: "BT",             arthur: a.bt,      sunrise: s.bt },
    { label: "RT",             arthur: a.rt,      sunrise: s.rt },
    { label: "YT",             arthur: a.yt,      sunrise: s.yt }
  ];

  var tbody = document.getElementById("comparisonBody");
  tbody.innerHTML = "";
  rows.forEach(function(r) {
    var tr = document.createElement("tr");
    tr.innerHTML = '<td>' + r.label + '</td><td>' + r.arthur + '</td><td>' + r.sunrise + '</td>';
    tbody.appendChild(tr);
  });
}

// ============================================================
// 17. DATA TABLE
// ============================================================
function renderTarjetasTable(data) {
  var tbody = document.getElementById("tablaTarjetasBody");
  tbody.innerHTML = "";

  data.forEach(function(t) {
    var tr = document.createElement("tr");

    // Status pill class
    var estadoLower = (t.estado || "").toLowerCase();
    var pillClass = "pill-abierta";
    var estadoLabel = t.estado || "Abierta";
    if (estadoLower === "resuelta") { pillClass = "pill-resuelta"; estadoLabel = "Resuelta"; }
    else if (estadoLower === "cmms" || t.estado === "CMMS") { pillClass = "pill-cmms"; estadoLabel = "CMMS"; }

    // Priority class
    var prioText = t.prioridad || "";
    var prioClass = "priority-media";
    if (prioText.indexOf("rítica") >= 0 || prioText.indexOf("ritica") >= 0) prioClass = "priority-critica";
    else if (prioText.indexOf("Alta") >= 0) prioClass = "priority-alta";
    else if (prioText.indexOf("Baja") >= 0) prioClass = "priority-baja";

    // Category color tag
    var catColor = t._color;
    var catTagClass = catColor === "BT" ? "tag-bt" : catColor === "RT" ? "tag-rt" : catColor === "YT" ? "tag-yt" : "";
    var catHtml = catTagClass
      ? '<span class="ticket-color-tag ' + catTagClass + '">' + catColor + '</span> ' + (t.categoria || "")
      : (t.categoria || "");

    // Equipo name — use standardized name
    var equipName = t.equipoMapa || "Desconocido";
    var equipRef = EQUIPOS.find(function(e) { return e.id === equipName; });
    var equipDisplay = equipRef ? equipRef.nombre : equipName;

    tr.innerHTML =
      '<td>' + (t.folio || "") + '</td>' +
      '<td>' + equipDisplay + '</td>' +
      '<td>' + catHtml + '</td>' +
      '<td>' + (t.tipoDefecto || "") + '</td>' +
      '<td><span class="priority-pill ' + prioClass + '">' + prioText + '</span></td>' +
      '<td><span class="status-pill ' + pillClass + '">' + estadoLabel + '</span></td>' +
      '<td>' + fmtDate(t._fechaInc) + '</td>' +
      '<td>' + (t.antiguedadDias > 0 ? t.antiguedadDias + "d" : "—") + '</td>' +
      '<td class="desc-col" title="' + ((t.descripcion || "").replace(/"/g, "&quot;")) + '">' + (t.descripcion || "—") + '</td>';

    tbody.appendChild(tr);
  });
}

// ============================================================
// 18. DOWNLOAD EXCEL
// ============================================================
function downloadExcel() {
  // Get currently displayed data from the table
  var table = document.getElementById("tablaTarjetas");
  var rows = table.querySelectorAll("tbody tr");

  if (rows.length === 0) {
    alert("No hay datos para descargar.");
    return;
  }

  // Build data array
  var headers = ["Folio", "Equipo", "Categoría", "Defecto", "Prioridad", "Estado", "Fecha Inclusión", "Antigüedad", "Descripción"];
  var wsData = [headers];

  // Use the filtered data directly for cleaner export
  var grupo = document.getElementById("filterGrupo").value;
  var color = document.getElementById("filterColor").value;
  var estado = document.getElementById("filterEstado").value;
  var buscar = document.getElementById("filterBuscar").value.toLowerCase().trim();

  var exportData = STATE.filtered.slice();

  if (grupo !== "todos") exportData = exportData.filter(function(t) { return t.proyecto === grupo; });
  if (color !== "todos") exportData = exportData.filter(function(t) { return t._color === color; });
  if (estado !== "todos") {
    if (estado === "Abierta") {
      exportData = exportData.filter(function(t) { return t.estado && t.estado.toLowerCase() !== "resuelta" && t.estado.toUpperCase() !== "CMMS"; });
    } else if (estado === "CMMS") {
      exportData = exportData.filter(function(t) { return t.estado && t.estado.toUpperCase() === "CMMS"; });
    } else {
      exportData = exportData.filter(function(t) { return t.estado && t.estado.toLowerCase() === estado.toLowerCase(); });
    }
  }
  if (buscar) {
    exportData = exportData.filter(function(t) {
      return (t.folio && t.folio.toLowerCase().indexOf(buscar) >= 0) ||
             (t.equipoMapa && t.equipoMapa.toLowerCase().indexOf(buscar) >= 0) ||
             (t.descripcion && t.descripcion.toLowerCase().indexOf(buscar) >= 0);
    });
  }

  exportData.forEach(function(t) {
    var equipRef = EQUIPOS.find(function(e) { return e.id === t.equipoMapa; });
    var equipName = equipRef ? equipRef.nombre : (t.equipoMapa || "");
    wsData.push([
      t.folio || "",
      equipName,
      t.categoria || "",
      t.tipoDefecto || "",
      t.prioridad || "",
      t.estado || "",
      fmtDate(t._fechaInc),
      t.antiguedadDias > 0 ? t.antiguedadDias + "d" : "—",
      t.descripcion || ""
    ]);
  });

  // Create workbook with SheetJS
  var wb = XLSX.utils.book_new();
  var ws = XLSX.utils.aoa_to_sheet(wsData);

  // Column widths
  ws["!cols"] = [
    { wch: 14 }, { wch: 24 }, { wch: 16 }, { wch: 28 }, { wch: 18 },
    { wch: 12 }, { wch: 14 }, { wch: 12 }, { wch: 40 }
  ];

  XLSX.utils.book_append_sheet(wb, ws, "Tarjetas");

  // Generate filename with date
  var hoy = new Date();
  var fname = "tarjetas_paletizado_" + hoy.getFullYear() +
    ("0" + (hoy.getMonth()+1)).slice(-2) + ("0" + hoy.getDate()).slice(-2) + ".xlsx";

  XLSX.writeFile(wb, fname);
}



/* ===========================================================
   Parte 3: Pestaña Operatividad — Dona, Acordeón, Tabla
   tiempo fuera de servicio, Impacto por línea, Modal
   =========================================================== */

// ============================================================
// 19. RENDER OPERATIVIDAD (main entry point)
// ============================================================
function renderOperatividad() {
  renderOperDonut();
  renderAccordion();
  renderTimeTable();
  renderImpactChart();
  renderLineSummary();
}

// ============================================================
// 20. DONUT — Operatividad de Equipos
// ============================================================
function renderOperDonut() {
  destroyChart("operDonut");

  var ops = 0, deg = 0, fs = 0;
  EQUIPOS.forEach(function(eq) {
    var s = getEquipStatus(eq.id);
    if (s === "operativo") ops++;
    else if (s === "degradado") deg++;
    else fs++;
  });

  // Render legend
  var legend = document.getElementById("operDonutLegend");
  legend.innerHTML =
    '<div class="oper-legend-item">' +
      '<div class="oper-legend-dot" style="background:#287819"></div>' +
      '<span>Operativos</span>' +
      '<span class="oper-legend-count" style="color:#287819">' + ops + '</span>' +
    '</div>' +
    '<div class="oper-legend-item">' +
      '<div class="oper-legend-dot" style="background:#E18719"></div>' +
      '<span>Degradados</span>' +
      '<span class="oper-legend-count" style="color:#E18719">' + deg + '</span>' +
    '</div>' +
    '<div class="oper-legend-item">' +
      '<div class="oper-legend-dot" style="background:#A52323"></div>' +
      '<span>Fuera de Servicio</span>' +
      '<span class="oper-legend-count" style="color:#A52323">' + fs + '</span>' +
    '</div>';

  var ctx = document.getElementById("chartOperDonut").getContext("2d");
  STATE.charts.operDonut = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Operativos", "Degradados", "Fuera de Servicio"],
      datasets: [{
        data: [ops, deg, fs],
        backgroundColor: ["#287819", "#E18719", "#A52323"],
        borderWidth: 3,
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
            label: function(ctx) {
              var total = ops + deg + fs;
              var pct = total > 0 ? Math.round(ctx.parsed / total * 100) : 0;
              return ctx.label + ": " + ctx.parsed + " (" + pct + "%)";
            }
          }
        }
      }
    },
    plugins: [{
      id: "operDonutCenter",
      beforeDraw: function(chart) {
        var total = ops + deg + fs;
        var c = chart.ctx;
        var cx = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
        var cy = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
        c.save();
        c.font = "bold 28px Calibri, Arial, sans-serif";
        c.fillStyle = "#3D3D3D";
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText(total, cx, cy - 8);
        c.font = "12px Calibri, Arial, sans-serif";
        c.fillStyle = "#9CA3AF";
        c.fillText("Total", cx, cy + 14);
        c.restore();
      }
    }]
  });
}

// ============================================================
// 21. ACCORDION — Operativos / Degradados / Fuera de Servicio
// ============================================================
function renderAccordion() {
  var operativos = [];
  var degradados = [];
  var fuera = [];

  EQUIPOS.forEach(function(eq) {
    var s = getEquipStatus(eq.id);
    if (s === "operativo") operativos.push(eq);
    else if (s === "degradado") degradados.push(eq);
    else fuera.push(eq);
  });

  // Update titles
  document.getElementById("accTitleOperativos").textContent = "Operativos (" + operativos.length + ")";
  document.getElementById("accTitleDegradados").textContent = "Degradados (" + degradados.length + ")";
  document.getElementById("accTitleFuera").textContent = "Fuera de Servicio (" + fuera.length + ")";

  // Render chips
  renderChips("chipsOperativos", operativos, "chip-operativo");
  renderChips("chipsDegradados", degradados, "chip-degradado");
  renderChips("chipsFuera", fuera, "chip-fuera");

  // Init accordion toggle (only once)
  if (!STATE._accordionInit) {
    STATE._accordionInit = true;
    document.querySelectorAll(".accordion-header").forEach(function(header) {
      header.addEventListener("click", function() {
        var section = header.getAttribute("data-section");
        var bodyId = section === "operativos" ? "accBodyOperativos" :
                     section === "degradados" ? "accBodyDegradados" : "accBodyFuera";
        var body = document.getElementById(bodyId);
        var isOpen = header.classList.contains("open");
        if (isOpen) {
          header.classList.remove("open");
          body.classList.remove("open");
        } else {
          header.classList.add("open");
          body.classList.add("open");
        }
      });
    });
  }
}

function renderChips(containerId, equipList, chipClass) {
  var container = document.getElementById(containerId);
  container.innerHTML = "";

  equipList.forEach(function(eq) {
    var chip = document.createElement("div");
    chip.className = "equip-chip " + chipClass;
    chip.innerHTML = '<span>' + eq.id + '</span><span class="chip-action"><i class="fa-solid fa-arrow-right-arrow-left"></i></span>';
    chip.title = eq.nombre + " — Clic para cambiar estado";
    chip.addEventListener("click", function() {
      openStatusModal(eq.id);
    });
    container.appendChild(chip);
  });
}

// ============================================================
// 22. TIME OUT OF SERVICE TABLE
// ============================================================
function renderTimeTable() {
  var tbody = document.getElementById("operTimeTable");
  tbody.innerHTML = "";

  // Get all non-operative equipment
  var nonOp = [];
  EQUIPOS.forEach(function(eq) {
    var info = STATE.equipStatus[eq.id];
    if (info && (info.status === "degradado" || info.status === "fuera")) {
      var dias = info.desde ? diasDesde(info.desde) : 0;
      nonOp.push({
        id: eq.id,
        nombre: eq.nombre,
        status: info.status,
        desde: info.desde,
        dias: dias,
        motivo: info.motivo || "—"
      });
    }
  });

  // Sort by days descending (longest first)
  nonOp.sort(function(a, b) { return b.dias - a.dias; });

  if (nonOp.length === 0) {
    var tr = document.createElement("tr");
    tr.innerHTML = '<td colspan="5" style="text-align:center;color:#9CA3AF;padding:20px;">Todos los equipos están operativos</td>';
    tbody.appendChild(tr);
    return;
  }

  nonOp.forEach(function(item) {
    var tr = document.createElement("tr");
    var pillClass = item.status === "fuera" ? "pill-abierta" : "";
    var pillStyle = item.status === "degradado" ? 'style="background:#E18719"' : '';
    var statusLabel = item.status === "fuera" ? "Fuera Serv." : "Degradado";

    tr.innerHTML =
      '<td style="font-weight:700;">' + item.id + '</td>' +
      '<td><span class="status-pill ' + pillClass + '" ' + pillStyle + '>' + statusLabel + '</span></td>' +
      '<td>' + fmtDate(item.desde) + '</td>' +
      '<td style="font-weight:700;">' + item.dias + ' días</td>' +
      '<td>' + item.motivo + '</td>';

    tbody.appendChild(tr);
  });
}

// ============================================================
// 23. IMPACT BY LINE — Stacked Horizontal Bar Chart
// ============================================================
function renderImpactChart() {
  destroyChart("impacto");

  var lineData = {};
  ["A", "B", "C", "D"].forEach(function(l) {
    lineData[l] = { ops: 0, deg: 0, fs: 0 };
  });

  EQUIPOS.forEach(function(eq) {
    var s = getEquipStatus(eq.id);
    var ld = lineData[eq.linea];
    if (!ld) return;
    if (s === "operativo") ld.ops++;
    else if (s === "degradado") ld.deg++;
    else ld.fs++;
  });

  var labels = ["Línea A", "Línea B", "Línea C", "Línea D"];
  var opsData = [lineData.A.ops, lineData.B.ops, lineData.C.ops, lineData.D.ops];
  var degData = [lineData.A.deg, lineData.B.deg, lineData.C.deg, lineData.D.deg];
  var fsData  = [lineData.A.fs,  lineData.B.fs,  lineData.C.fs,  lineData.D.fs];

  var ctx = document.getElementById("chartImpacto").getContext("2d");
  STATE.charts.impacto = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Operativos",
          data: opsData,
          backgroundColor: "#287819",
          borderRadius: 4
        },
        {
          label: "Degradados",
          data: degData,
          backgroundColor: "#E18719",
          borderRadius: 4
        },
        {
          label: "Fuera Serv.",
          data: fsData,
          backgroundColor: "#A52323",
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { family: "Calibri, Arial, sans-serif", size: 11 },
            usePointStyle: true,
            padding: 14
          }
        },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ctx.dataset.label + ": " + ctx.parsed.x + " equipos"; }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: { font: { size: 11 }, stepSize: 2 },
          grid: { color: "#F3F4F6" },
          title: { display: true, text: "Equipos", font: { size: 11 } }
        },
        y: {
          stacked: true,
          ticks: { font: { family: "Calibri, Arial, sans-serif", size: 12, weight: "bold" } },
          grid: { display: false }
        }
      }
    }
  });
}

// ============================================================
// 24. LINE SUMMARY CARDS
// ============================================================
function renderLineSummary() {
  var container = document.getElementById("lineSummary");
  container.innerHTML = "";

  ["A", "B", "C", "D"].forEach(function(lineKey) {
    var linea = LINEAS[lineKey];
    var total = 0, ops = 0, deg = 0, fs = 0;

    linea.equipos.forEach(function(eqId) {
      total++;
      var s = getEquipStatus(eqId);
      if (s === "operativo") ops++;
      else if (s === "degradado") deg++;
      else fs++;
    });

    var pct = total > 0 ? (ops / total * 100).toFixed(1) : "0.0";

    // Border color based on worst status in line
    var borderColor = "#287819"; // all good
    if (fs > 0) borderColor = "#A52323";
    else if (deg > 0) borderColor = "#E18719";

    var card = document.createElement("div");
    card.className = "line-card";
    card.style.borderTopColor = borderColor;
    card.innerHTML =
      '<div class="line-name">' + linea.nombre + '</div>' +
      '<div class="line-equip">' + total + ' equipos</div>' +
      '<div class="line-pct" style="color:' + borderColor + '">' + pct + '%</div>' +
      '<div class="line-equip">operativo</div>';

    container.appendChild(card);
  });
}

// ============================================================
// 25. STATUS CHANGE MODAL
// ============================================================
function openStatusModal(equipId) {
  var eq = EQUIPOS.find(function(e) { return e.id === equipId; });
  if (!eq) return;

  var current = getEquipStatus(equipId);
  var currentLabel = current === "operativo" ? "Operativo" :
                     current === "degradado" ? "Degradado" : "Fuera de Servicio";
  var currentColor = current === "operativo" ? "#287819" :
                     current === "degradado" ? "#E18719" : "#A52323";

  // Set modal content
  document.getElementById("modalTitle").textContent = "Cambiar Estado";
  document.getElementById("modalEquipName").textContent = eq.id + " — " + eq.nombre;

  var fromPill = document.getElementById("modalFromStatus");
  fromPill.textContent = currentLabel;
  fromPill.style.background = currentColor;
  fromPill.className = "status-pill";

  // Set dropdown — exclude current status
  var select = document.getElementById("modalToStatus");
  select.innerHTML = "";
  var options = [
    { value: "operativo", label: "Operativo" },
    { value: "degradado", label: "Degradado" },
    { value: "fuera", label: "Fuera de Servicio" }
  ];
  options.forEach(function(opt) {
    if (opt.value !== current) {
      var o = document.createElement("option");
      o.value = opt.value;
      o.textContent = opt.label;
      select.appendChild(o);
    }
  });

  // Clear motivo
  document.getElementById("modalMotivo").value = "";

  // Store which equipment we're editing
  STATE._modalEquipId = equipId;

  // Show modal
  document.getElementById("modalOverlay").classList.add("show");
}

function closeStatusModal() {
  document.getElementById("modalOverlay").classList.remove("show");
  STATE._modalEquipId = null;
}

function confirmStatusChange() {
  var equipId = STATE._modalEquipId;
  if (!equipId) return;

  var newStatus = document.getElementById("modalToStatus").value;
  var motivo = document.getElementById("modalMotivo").value.trim();

  if (!motivo) {
    alert("Por favor escribe un motivo para el cambio de estado.");
    document.getElementById("modalMotivo").focus();
    return;
  }

  // Apply change
  changeEquipStatus(equipId, newStatus, motivo);

  // Close modal
  closeStatusModal();

  // Re-render everything
  updateKPIs();
  renderOperatividad();
  renderMapa();
}

// ============================================================
// 26. MODAL EVENT LISTENERS
// ============================================================
(function initModalListeners() {
  // Wait for DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindModal);
  } else {
    bindModal();
  }

  function bindModal() {
    document.getElementById("modalClose").addEventListener("click", closeStatusModal);
    document.getElementById("modalCancelBtn").addEventListener("click", closeStatusModal);
    document.getElementById("modalConfirmBtn").addEventListener("click", confirmStatusChange);

    // Close on overlay click
    document.getElementById("modalOverlay").addEventListener("click", function(e) {
      if (e.target === this) closeStatusModal();
    });

    // Close on Escape key
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") closeStatusModal();
    });
  }
})();

