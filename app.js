
"use strict";
// ============================================================
// 1. INVENTARIO MAESTRO - 67 equipos
// ============================================================
var EQUIPOS = [
  {id:"Pal 1",tipo:"pal",solvace:"10322569",nombre:"Paletizadora Ritz 1",brand:"Ritz",proyecto:"arthur",linea:1},
  {id:"Pal 2",tipo:"pal",solvace:"10322929",nombre:"Paletizadora Chips Ahoy! 2",brand:"CA!",proyecto:"arthur",linea:2},
  {id:"Pal 3",tipo:"pal",solvace:"10322975",nombre:"Paletizadora Oreo 3",brand:"Oreo",proyecto:"sunrise",linea:3},
  {id:"Pal 4",tipo:"pal",solvace:"10323196",nombre:"Paletizadora Ritz 4",brand:"Ritz",proyecto:"arthur",linea:4},
  {id:"Pal 5",tipo:"pal",solvace:"10323244",nombre:"Paletizadora Belvita 5",brand:"Belvita",proyecto:"arthur",linea:5},
  {id:"Pal 6A",tipo:"pal",solvace:"10323324",nombre:"Paletizadora Oreo 6A",brand:"Oreo",proyecto:"arthur",linea:6},
  {id:"Pal 6B",tipo:"pal",solvace:"10323323",nombre:"Paletizadora Oreo 6B",brand:"Oreo",proyecto:"arthur",linea:6},
  {id:"Pal 7A",tipo:"pal",solvace:"10323392",nombre:"Paletizadora Mini Oreo 7A",brand:"Mini Oreo",proyecto:"arthur",linea:7},
  {id:"Pal 7B",tipo:"pal",solvace:"10323393",nombre:"Paletizadora Mini Oreo 7B",brand:"Mini Oreo",proyecto:"arthur",linea:7},
  {id:"Pal 8",tipo:"pal",solvace:"10324423",nombre:"Paletizadora Ritz 8",brand:"Ritz",proyecto:"sunrise",linea:8},
  {id:"Pal 9A",tipo:"pal",solvace:"10324914",nombre:"Paletizadora Oreo 9A",brand:"Oreo",proyecto:"arthur",linea:9},
  {id:"Pal 9B",tipo:"pal",solvace:"10324913",nombre:"Paletizadora Oreo 9B",brand:"Oreo",proyecto:"arthur",linea:9},
  {id:"Pal 10",tipo:"pal",solvace:"10325123",nombre:"Paletizadora Ritz 10",brand:"Ritz",proyecto:"sunrise",linea:10},
  {id:"Pal 11 GenZ",tipo:"pal",solvace:"10325178",nombre:"Paletizadora Oreo 11 GenZ",brand:"Oreo",proyecto:"sunrise",linea:11},
  {id:"Pal 11 PPL",tipo:"pal",solvace:"10325176",nombre:"Paletizadora Oreo 11 PPL",brand:"Oreo",proyecto:"sunrise",linea:11},
  {id:"Pal 11 PPU",tipo:"pal",solvace:"10325177",nombre:"Paletizadora Oreo 11 PPU",brand:"Oreo",proyecto:"sunrise",linea:11},
  {id:"Pal 11 OT",tipo:"pal",solvace:"10325175",nombre:"Paletizadora Oreo 11 OT",brand:"Oreo",proyecto:"sunrise",linea:11},
  {id:"Pal 12",tipo:"pal",solvace:"10336334",nombre:"Paletizadora Graham 12",brand:"Graham",proyecto:"sunrise",linea:12},
  {id:"Pal 13",tipo:"pal",solvace:"10336335",nombre:"Paletizadora Oreo 13",brand:"Oreo",proyecto:"sunrise",linea:13},
  {id:"Pal 14",tipo:"pal",solvace:"10336336",nombre:"Paletizadora Oreo 14",brand:"Oreo",proyecto:"sunrise",linea:14},
  {id:"Wrapper 1",tipo:"wrapper",solvace:"10121166",nombre:"Wrapper 1",brand:"-",proyecto:"arthur",linea:null},
  {id:"Wrapper 2",tipo:"wrapper",solvace:"10121167",nombre:"Wrapper 2",brand:"-",proyecto:"arthur",linea:null},
  {id:"Wrapper 3",tipo:"wrapper",solvace:"10121168",nombre:"Wrapper 3",brand:"-",proyecto:"arthur",linea:null},
  {id:"Wrapper 5",tipo:"wrapper",solvace:"10190640",nombre:"Wrapper 5",brand:"-",proyecto:"sunrise",linea:null},
  {id:"Wrapper 6",tipo:"wrapper",solvace:"10190641",nombre:"Wrapper 6",brand:"-",proyecto:"sunrise",linea:null},
  {id:"Wrapper 7",tipo:"wrapper",solvace:"10190642",nombre:"Wrapper 7",brand:"-",proyecto:"sunrise",linea:null},
  {id:"Wrapper 8",tipo:"wrapper",solvace:"10320527",nombre:"Wrapper 8",brand:"-",proyecto:"sunrise",linea:null},
  {id:"SP-1 y 2",tipo:"espiral",solvace:"-",nombre:"Espiral 1 y 2",brand:"-",proyecto:"arthur",linea:1},
  {id:"SP-3",tipo:"espiral",solvace:"-",nombre:"Espiral 3",brand:"-",proyecto:"sunrise",linea:3},
  {id:"SP-4 y 6A",tipo:"espiral",solvace:"-",nombre:"Espiral 4 y 6A",brand:"-",proyecto:"arthur",linea:4},
  {id:"SP-5 y 9A",tipo:"espiral",solvace:"-",nombre:"Espiral 5 y 9A",brand:"-",proyecto:"arthur",linea:5},
  {id:"SP-6B",tipo:"espiral",solvace:"-",nombre:"Espiral 6B",brand:"-",proyecto:"arthur",linea:6},
  {id:"SP-7A y 7B",tipo:"espiral",solvace:"-",nombre:"Espiral 7A y 7B",brand:"-",proyecto:"arthur",linea:7},
  {id:"SP-8",tipo:"espiral",solvace:"-",nombre:"Espiral 8",brand:"-",proyecto:"sunrise",linea:8},
  {id:"SP-9B",tipo:"espiral",solvace:"-",nombre:"Espiral 9B",brand:"-",proyecto:"arthur",linea:9},
  {id:"SP-10",tipo:"espiral",solvace:"-",nombre:"Espiral 10",brand:"-",proyecto:"sunrise",linea:10},
  {id:"SP-10 FZ",tipo:"espiral",solvace:"-",nombre:"Espiral 10 FZ",brand:"-",proyecto:"arthur",linea:10},
  {id:"SP-11 OT",tipo:"espiral",solvace:"-",nombre:"Espiral 11 OT",brand:"-",proyecto:"sunrise",linea:11},
  {id:"SP-11 PPL",tipo:"espiral",solvace:"-",nombre:"Espiral 11 PPL",brand:"-",proyecto:"sunrise",linea:11},
  {id:"SP-11 PPU",tipo:"espiral",solvace:"-",nombre:"Espiral 11 PPU",brand:"-",proyecto:"sunrise",linea:11},
  {id:"SP-GENZ",tipo:"espiral",solvace:"-",nombre:"Espiral GenZ",brand:"-",proyecto:"sunrise",linea:11},
  {id:"SP-12",tipo:"espiral",solvace:"-",nombre:"Espiral 12",brand:"-",proyecto:"sunrise",linea:12},
  {id:"SP-13",tipo:"espiral",solvace:"-",nombre:"Espiral 13",brand:"-",proyecto:"sunrise",linea:13},
  {id:"SP-14",tipo:"espiral",solvace:"-",nombre:"Espiral 14",brand:"-",proyecto:"sunrise",linea:14},
  {id:"SP-14 FZ",tipo:"espiral",solvace:"-",nombre:"Espiral 14 FZ",brand:"-",proyecto:"arthur",linea:14},
  {id:"CC-1",tipo:"cc",solvace:"10322568",nombre:"Case Conveyor Ritz 1",brand:"Ritz",proyecto:"arthur",linea:1,asociado:"Pal 1"},
  {id:"CC-2",tipo:"cc",solvace:"10322928",nombre:"Case Conveyor Chips Ahoy 2",brand:"Chips Ahoy",proyecto:"arthur",linea:2,asociado:"Pal 2"},
  {id:"CC-3",tipo:"cc",solvace:"10322974",nombre:"Case Conveyor Oreo 3",brand:"Oreo",proyecto:"sunrise",linea:3,asociado:"Pal 3"},
  {id:"CC-4",tipo:"cc",solvace:"10323195",nombre:"Case Conveyor Ritz 4",brand:"Ritz",proyecto:"arthur",linea:4,asociado:"Pal 4"},
  {id:"CC-5",tipo:"cc",solvace:"10323243",nombre:"Case Conveyor Belvita 5",brand:"Belvita",proyecto:"arthur",linea:5,asociado:"Pal 5"},
  {id:"CC-6A",tipo:"cc",solvace:"10323322",nombre:"Case Conveyor Oreo 6A",brand:"Oreo",proyecto:"arthur",linea:6,asociado:"Pal 6A"},
  {id:"CC-6B",tipo:"cc",solvace:"10323321",nombre:"Case Conveyor Oreo 6B",brand:"Oreo",proyecto:"arthur",linea:6,asociado:"Pal 6B"},
  {id:"CC-7A",tipo:"cc",solvace:"10323390",nombre:"Case Conveyor Mini Oreo A",brand:"Mini Oreo",proyecto:"arthur",linea:7,asociado:"Pal 7A"},
  {id:"CC-7B",tipo:"cc",solvace:"10323391",nombre:"Case Conveyor Mini Oreo B",brand:"Mini Oreo",proyecto:"arthur",linea:7,asociado:"Pal 7B"},
  {id:"CC-8",tipo:"cc",solvace:"10324422",nombre:"Case Conveyor Ritz 8",brand:"Ritz",proyecto:"sunrise",linea:8,asociado:"Pal 8"},
  {id:"CC-9A",tipo:"cc",solvace:"10324912",nombre:"Case Conveyor Oreo 9A",brand:"Oreo",proyecto:"arthur",linea:9,asociado:"Pal 9A"},
  {id:"CC-9B",tipo:"cc",solvace:"10324911",nombre:"Case Conveyor Oreo 9B",brand:"Oreo",proyecto:"arthur",linea:9,asociado:"Pal 9B"},
  {id:"CC-10",tipo:"cc",solvace:"10324462",nombre:"Case Conveyor Ritz 10",brand:"Ritz",proyecto:"sunrise",linea:10,asociado:"Pal 10"},
  {id:"CC-11 GenZ",tipo:"cc",solvace:"10325174",nombre:"Case Conveyor Oreo 11 GenZ",brand:"Oreo",proyecto:"sunrise",linea:11,asociado:"Pal 11 GenZ"},
  {id:"CC-11 PPL",tipo:"cc",solvace:"10325172",nombre:"Case Conveyor Oreo 11 PPL",brand:"Oreo",proyecto:"sunrise",linea:11,asociado:"Pal 11 PPL"},
  {id:"CC-11 PPU",tipo:"cc",solvace:"10325173",nombre:"Case Conveyor Oreo 11 PPU",brand:"Oreo",proyecto:"sunrise",linea:11,asociado:"Pal 11 PPU"},
  {id:"CC-11 OT",tipo:"cc",solvace:"10325171",nombre:"Case Conveyor Oreo 11 OT",brand:"Oreo",proyecto:"sunrise",linea:11,asociado:"Pal 11 OT"},
  {id:"CC-12",tipo:"cc",solvace:"10334032",nombre:"Case Conveyor Graham 12",brand:"Graham",proyecto:"sunrise",linea:12,asociado:"Pal 12"},
  {id:"CC-13",tipo:"cc",solvace:"10328680",nombre:"Case Conveyor OT 13",brand:"Oreo",proyecto:"sunrise",linea:13,asociado:"Pal 13"},
  {id:"CC-14",tipo:"cc",solvace:"10336033",nombre:"Case Conveyor Oreo 14",brand:"Oreo",proyecto:"sunrise",linea:14,asociado:"Pal 14"},
  {id:"PC-Arthur",tipo:"pc",solvace:"10331366",nombre:"Pallet Conveyor Arthur",brand:"-",proyecto:"arthur",linea:null,asociado:"Proyecto Arthur"},
  {id:"PC-Sunrise",tipo:"pc",solvace:"10331367",nombre:"Pallet Conveyor Sunrise",brand:"-",proyecto:"sunrise",linea:null,asociado:"Proyecto Sunrise"}
];

// ============================================================
// 2. MAPA DE LINEAS
// ============================================================
var LINEAS={1:{proyecto:"arthur"},2:{proyecto:"arthur"},3:{proyecto:"sunrise"},4:{proyecto:"arthur"},5:{proyecto:"arthur"},6:{proyecto:"arthur"},7:{proyecto:"arthur"},8:{proyecto:"sunrise"},9:{proyecto:"arthur"},10:{proyecto:"sunrise"},11:{proyecto:"sunrise"},12:{proyecto:"sunrise"},13:{proyecto:"sunrise"},14:{proyecto:"sunrise"}};

// ============================================================
// 3. COORDENADAS DEL MAPA (placeholder %)
// ============================================================
var MAPA_COORDS={
  "Pal 1":{x:10,y:18},"Pal 2":{x:17,y:18},"Pal 3":{x:24,y:18},"Pal 4":{x:31,y:18},"Pal 5":{x:38,y:18},
  "Pal 6A":{x:10,y:35},"Pal 6B":{x:17,y:35},"Pal 7A":{x:24,y:35},"Pal 7B":{x:31,y:35},"Pal 8":{x:38,y:35},
  "Pal 9A":{x:45,y:35},"Pal 9B":{x:52,y:35},"Pal 10":{x:10,y:62},"Pal 11 GenZ":{x:17,y:62},
  "Pal 11 PPL":{x:24,y:62},"Pal 11 PPU":{x:31,y:62},"Pal 11 OT":{x:38,y:62},
  "Pal 12":{x:10,y:78},"Pal 13":{x:17,y:78},"Pal 14":{x:24,y:78},
  "Wrapper 1":{x:57,y:18},"Wrapper 2":{x:63,y:18},"Wrapper 3":{x:69,y:18},
  "Wrapper 5":{x:57,y:62},"Wrapper 6":{x:63,y:62},"Wrapper 7":{x:69,y:62},"Wrapper 8":{x:75,y:62},
  "SP-1 y 2":{x:10,y:8},"SP-3":{x:24,y:8},"SP-4 y 6A":{x:31,y:8},"SP-5 y 9A":{x:38,y:8},
  "SP-6B":{x:17,y:45},"SP-7A y 7B":{x:24,y:45},"SP-8":{x:38,y:45},"SP-9B":{x:52,y:45},
  "SP-10":{x:10,y:52},"SP-10 FZ":{x:17,y:52},"SP-11 OT":{x:38,y:52},"SP-11 PPL":{x:24,y:52},
  "SP-11 PPU":{x:31,y:52},"SP-GENZ":{x:17,y:72},"SP-12":{x:10,y:88},"SP-13":{x:17,y:88},
  "SP-14":{x:24,y:88},"SP-14 FZ":{x:31,y:88}
};

// ============================================================
// 4. UTILIDADES GLOBALES
// ============================================================
var tarjetasData=[];
var equipStatus={};
var equipStatusHistory=[];
var EQUIPO_MAP={};
EQUIPOS.forEach(function(e){EQUIPO_MAP[e.id]=e;});
function getEquipo(id){return EQUIPO_MAP[id]||null;}
var EQUIPOS_MAPA=EQUIPOS.filter(function(e){return e.tipo==="pal"||e.tipo==="wrapper"||e.tipo==="espiral";});

function esAbierta(estado){
  if(!estado) return false;
  var e=estado.toLowerCase().trim();
  return e==="cmms"||e==="pendiente";
}
function esCerrada(estado){
  if(!estado) return false;
  var e=estado.toLowerCase().trim();
  return e==="resuelta";
}
function esCancelada(estado){
  if(!estado) return false;
  var e=estado.toLowerCase().trim();
  return e==="cancelada";
}
function diasDesde(fechaStr){
  if(!fechaStr) return 0;
  var parts,d;
  if(fechaStr.indexOf("/")>-1){parts=fechaStr.split("/");d=new Date(parseInt(parts[2]),parseInt(parts[1])-1,parseInt(parts[0]));}
  else{d=new Date(fechaStr);}
  if(isNaN(d.getTime())) return 0;
  var hoy=new Date();hoy.setHours(0,0,0,0);d.setHours(0,0,0,0);
  return Math.max(0,Math.floor((hoy-d)/86400000));
}
function fmtFecha(fechaStr){
  if(!fechaStr) return "-";
  if(fechaStr.indexOf("/")>-1) return fechaStr;
  var d=new Date(fechaStr);if(isNaN(d.getTime())) return fechaStr;
  return String(d.getDate()).padStart(2,"0")+"/"+String(d.getMonth()+1).padStart(2,"0")+"/"+d.getFullYear();
}
function fmtNum(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");}
function extraerGrupo(str){
  if(!str) return "";
  var m=str.match(/PLTZ[- ]?([A-D])/i);
  return m?m[1].toUpperCase():"";
}
function getTagColor(cat){
  if(!cat) return "";
  var c=cat.toUpperCase();
  if(c.indexOf("BT")>-1) return "BT";
  if(c.indexOf("RT")>-1) return "RT";
  if(c.indexOf("YT")>-1) return "YT";
  return "";
}
function equiposPorProyecto(p){return EQUIPOS.filter(function(e){return e.proyecto===p;});}
function equiposPorLinea(n){return EQUIPOS.filter(function(e){return e.linea===n;});}

// ============================================================
// 5. LOCALSTORAGE
// ============================================================
function cargarEstados(){
  try{var s=localStorage.getItem("sal_equip_status");if(s) equipStatus=JSON.parse(s);}catch(e){}
  EQUIPOS.forEach(function(eq){if(!equipStatus[eq.id]) equipStatus[eq.id]="operativo";});
}
function guardarEstados(){try{localStorage.setItem("sal_equip_status",JSON.stringify(equipStatus));}catch(e){}}
function cargarHistorial(){try{var s=localStorage.getItem("sal_equip_history");if(s) equipStatusHistory=JSON.parse(s);}catch(e){}}
function guardarHistorial(){try{localStorage.setItem("sal_equip_history",JSON.stringify(equipStatusHistory));}catch(e){}}
function registrarCambioEstado(equipId,de,a,motivo){
  equipStatusHistory.push({equipo:equipId,de:de,a:a,motivo:motivo||"",fecha:new Date().toISOString()});
  guardarHistorial();
}
function contarEstados(){
  var o=0,d=0,f=0;
  EQUIPOS.forEach(function(eq){var s=equipStatus[eq.id]||"operativo";if(s==="operativo")o++;else if(s==="degradado")d++;else if(s==="fuera")f++;});
  return{operativos:o,degradados:d,fuera:f,total:EQUIPOS.length};
}
// FIN BLOQUE A

// ============================================================
// 6. CARGA DE DATOS
// ============================================================
function cargarTarjetas(callback){
  fetch("data/tarjetas.json").then(function(r){return r.json();}).then(function(data){
    var raw=[];
    if(data&&Array.isArray(data.tarjetas)) raw=data.tarjetas;
    else if(Array.isArray(data)) raw=data;
    if(data&&data.resumen) window._jsonResumen=data.resumen;
    tarjetasData=raw.map(function(t){
      var fechaRaw=t.fechaInclusion||t["Fecha Inclusion"]||t.fecha||"";
      var fechaLimpia=fechaRaw.split(" ")[0];
      var color=getTagColor(t.categoria||"");
      var dias=(typeof t.antiguedadDias==="number")?t.antiguedadDias:diasDesde(fechaLimpia);
      return{
        _raw:t,_folio:t.folio||"",_equipo:t.equipoMapa||"",_equipoFull:t.equipoSolvace||"",
        _categoria:t.categoria||"",_color:color,_defecto:t.tipoDefecto||t.defecto||"",
        _prioridad:t.prioridad||"",_estado:t.estado||"",_fechaInc:fechaLimpia,
        _fechaRes:t.fechaResolucion||"",_dias:dias,_descripcion:t.descripcion||t.defecto||"",
        _ubicacion:t.ubicacion||"",_proyecto:(t.proyecto||"").toLowerCase(),
        _brand:t.brand||"",_tipoEquipo:t.tipoEquipo||"",_grupo: (t.grupo || "").toUpperCase(),
        _fuente:t.fuente||""
      };
    });
    console.log("Tarjetas cargadas:",tarjetasData.length);
    if(callback) callback();
  }).catch(function(err){console.error("Error cargando tarjetas:",err);tarjetasData=[];if(callback) callback();});
}

// ============================================================
// 7. KPIs DINAMICOS
// ============================================================
function renderKPIs(){
  var abiertas=0,cerradas=0,sumDias=0,countDias=0,bt=0,rt=0,yt=0;
  var desde=document.getElementById("filtDesde").value;
  var hasta=document.getElementById("filtHasta").value;
  tarjetasData.forEach(function(t){
    if(esCancelada(t._estado)) return;
    if(desde||hasta){
      var fi=t._fechaInc;if(fi){
        var iso=fi;if(fi.indexOf("/")>-1){var p=fi.split("/");iso=p[2]+"-"+p[1]+"-"+p[0];}
        if(desde&&iso<desde) return;if(hasta&&iso>hasta) return;
      }
    }
    if(esAbierta(t._estado)){
      abiertas++;
      if(t._dias>0){sumDias+=t._dias;countDias++;}
      if(t._color==="BT")bt++;else if(t._color==="RT")rt++;else if(t._color==="YT")yt++;
    }else if(esCerrada(t._estado)){cerradas++;}
  });
  document.getElementById("kpiAbiertas").textContent=fmtNum(abiertas);
  document.getElementById("kpiCerradas").textContent=fmtNum(cerradas);
  document.getElementById("kpiAntig").textContent=(countDias>0?Math.round(sumDias/countDias):0)+"d";
  document.getElementById("kpiBT").textContent=fmtNum(bt);
  document.getElementById("kpiRT").textContent=fmtNum(rt);
  document.getElementById("kpiYT").textContent=fmtNum(yt);
  var est=contarEstados();
  document.getElementById("kpiOps").textContent=est.operativos;
  document.getElementById("kpiDeg").textContent=est.degradados;
  document.getElementById("kpiFS").textContent=est.fuera;
  var ah=new Date();var dd=String(ah.getDate()).padStart(2,"0");var mm=String(ah.getMonth()+1).padStart(2,"0");var yy=ah.getFullYear();
  document.getElementById("headerDate").textContent=dd+"/"+mm+"/"+yy+" "+String(ah.getHours()).padStart(2,"0")+":"+String(ah.getMinutes()).padStart(2,"0");
  if(!document.getElementById("filtDesde").value) document.getElementById("filtDesde").value=yy+"-01-01";
  if(!document.getElementById("filtHasta").value) document.getElementById("filtHasta").value=yy+"-"+mm+"-"+dd;
}

// ============================================================
// 8-9. MAPA
// ============================================================
var mapaSeleccionado=null;
function initMapa(){renderMarcadores();initMapaLabels();}
function renderMarcadores(){
  var c=document.getElementById("mapaContainer");
  c.querySelectorAll(".marker").forEach(function(m){m.remove();});
  EQUIPOS_MAPA.forEach(function(eq){
    var coord=MAPA_COORDS[eq.id];if(!coord) return;
    var st=equipStatus[eq.id]||"operativo";
    var ta=contarTarjetasEquipo(eq.id);
    var mk=document.createElement("div");
    mk.className="marker "+eq.tipo+" status-"+st;
    mk.style.left=coord.x+"%";mk.style.top=coord.y+"%";
    mk.setAttribute("data-equipo",eq.id);mk.title=eq.id+" - "+eq.nombre;
    var lb=eq.id.replace("Pal ","P").replace("Wrapper ","W").replace("SP-","S");
    if(eq.tipo==="espiral") mk.innerHTML="<span>"+lb+"</span>";else mk.textContent=lb;
    if(ta>0){var bg=document.createElement("div");bg.className="marker-badge";bg.textContent=ta;mk.appendChild(bg);}
    var le=document.createElement("div");le.className="marker-label";le.textContent=eq.id;mk.appendChild(le);
    mk.addEventListener("click",function(){seleccionarEquipoMapa(eq.id);});
    c.appendChild(mk);
  });
}
function contarTarjetasEquipo(eid){
  var n=0;tarjetasData.forEach(function(t){
    if(!esAbierta(t._estado)) return;
    if(matchEquipoTarjeta((t._equipo||"").toLowerCase(),eid.toLowerCase())) n++;
  });return n;
}
function matchEquipoTarjeta(te,ie){
  te=te.replace(/\s+/g,"");ie=ie.replace(/\s+/g,"");
  if(te.indexOf(ie)>-1||ie.indexOf(te)>-1) return true;
  var a=te.match(/(\d+)/),b=ie.match(/pal(\d+)/);
  if(a&&b&&a[1]===b[1]) return true;
  return false;
}
function seleccionarEquipoMapa(eid){
  mapaSeleccionado=eid;var eq=getEquipo(eid);if(!eq) return;
  document.querySelectorAll(".marker").forEach(function(m){m.style.outline=m.getAttribute("data-equipo")===eid?"3px solid #4F2170":"none";});
  var st=equipStatus[eid]||"operativo";
  document.getElementById("mpTitle").textContent=eq.id;
  var meta=eq.nombre;if(eq.brand&&eq.brand!=="-") meta+=" - "+eq.brand;
  meta+=" | "+eq.proyecto.charAt(0).toUpperCase()+eq.proyecto.slice(1);
  if(eq.linea) meta+=" | Linea "+eq.linea;
  document.getElementById("mpMeta").textContent=meta;
  var se=document.getElementById("mpStatus");se.style.display="inline-block";
  se.textContent=st==="operativo"?"Operativo":st==="degradado"?"Degradado":"Fuera de Servicio";
  se.style.background=st==="operativo"?"#287819":st==="degradado"?"#E18719":"#A52323";
  var body=document.getElementById("mpBody");body.innerHTML="";
  var tarjs=obtenerTarjetasEquipo(eid);
  if(tarjs.length===0){body.innerHTML='<p class="text-muted text-center" style="margin-top:20px">Sin tarjetas abiertas</p>';}
  else{var h4=document.createElement("h4");h4.textContent="Tarjetas Abiertas ("+tarjs.length+")";body.appendChild(h4);
    tarjs.forEach(function(t){var it=document.createElement("div");it.className="ticket-item";
      var dc="bt";if(t._color==="RT")dc="rt";else if(t._color==="YT")dc="yt";
      it.innerHTML='<div class="ticket-dot '+dc+'"></div><div class="ticket-info"><div class="ti-id">'+t._folio+'</div><div class="ti-desc">'+(t._descripcion||t._defecto||"Sin descripcion")+'</div></div>';
      body.appendChild(it);});}
  document.getElementById("mpVerTodas").style.display=tarjs.length>0?"inline":"none";
  document.getElementById("mpUpdated").textContent="Ultima actualizacion: hoy "+String(new Date().getHours()).padStart(2,"0")+":"+String(new Date().getMinutes()).padStart(2,"0");
}
function obtenerTarjetasEquipo(eid){
  var r=[];tarjetasData.forEach(function(t){
    if(!esAbierta(t._estado)) return;
    if(matchEquipoTarjeta((t._equipo||"").toLowerCase(),eid.toLowerCase())) r.push(t);
  });r.sort(function(a,b){return b._dias-a._dias;});return r;
}

// ============================================================
// 10-11. MAPA LABELS + TABS
// ============================================================
function initMapaLabels(){
  var chk=document.getElementById("chkLabels");if(!chk) return;
  chk.addEventListener("change",function(){document.querySelectorAll(".marker-label").forEach(function(l){l.style.display=chk.checked?"block":"none";});});
}
function initTabs(){
  var tabs=document.querySelectorAll(".tab"),contents=document.querySelectorAll(".tab-content");
  tabs.forEach(function(tab){tab.addEventListener("click",function(){
    var t=tab.getAttribute("data-tab");
    tabs.forEach(function(x){x.classList.remove("active");});tab.classList.add("active");
    contents.forEach(function(c){c.classList.remove("active");});
    document.getElementById(t==="mapa"?"tabMapa":t==="tarjetas"?"tabTarjetas":"tabOperatividad").classList.add("active");
  });});
  var vt=document.getElementById("mpVerTodas");
  if(vt) vt.addEventListener("click",function(e){e.preventDefault();
    tabs.forEach(function(x){x.classList.remove("active");});
    document.querySelector('.tab[data-tab="tarjetas"]').classList.add("active");
    contents.forEach(function(c){c.classList.remove("active");});
    document.getElementById("tabTarjetas").classList.add("active");
  });
}

// ============================================================
// 12-14. TARJETAS - Init + Filtros
// ============================================================
var chartDonut=null,chartTrend=null,chartTop10=null,chartAntig=null,chartCierre=null,chartGrupos=null;
var tarjetasFiltradas=[];var tableSortCol=null,tableSortAsc=true;var colFilters={};

function initTarjetas(){poblarFiltroGrupos();bindFiltrosTarjetas();bindTablaControls();renderTarjetas();}
function poblarFiltroGrupos(){
  var sel=document.getElementById("filtGrupo");if(!sel) return;
  var g={};tarjetasData.forEach(function(t){if(t._grupo) g[t._grupo]=true;});
  Object.keys(g).sort().forEach(function(k){var o=document.createElement("option");o.value=k;o.textContent="Grupo "+k;sel.appendChild(o);});
}
function bindFiltrosTarjetas(){["filtProyecto","filtGrupo","filtColor","filtEstado"].forEach(function(id){var e=document.getElementById(id);if(e) e.addEventListener("change",renderTarjetas);});}
function getColValue(t,col){
  switch(col){case "folio":return t._folio||"";case "equipo":return t._equipo||"";case "color":return t._color||"";
  case "defecto":return t._defecto||"";case "prioridad":return t._prioridad||"";case "estado":return t._estado||"";
  case "antiguedad":return String(t._dias);default:return "";}
}
function filtrarTarjetas(){
  var proy=document.getElementById("filtProyecto").value.toLowerCase();
  var grupo=document.getElementById("filtGrupo").value;
  var color=document.getElementById("filtColor").value;
  var estado=document.getElementById("filtEstado").value.toLowerCase();
  var desde=document.getElementById("filtDesde").value;
  var hasta=document.getElementById("filtHasta").value;
  var search=(document.getElementById("tblSearch").value||"").toLowerCase();
  tarjetasFiltradas=tarjetasData.filter(function(t){
    if(esCancelada(t._estado)) return false;
    if(desde||hasta){var fi=t._fechaInc;if(fi){var iso=fi;if(fi.indexOf("/")>-1){var p=fi.split("/");iso=p[2]+"-"+p[1]+"-"+p[0];}if(desde&&iso<desde) return false;if(hasta&&iso>hasta) return false;}}
    if(proy&&t._proyecto!==proy) return false;
    if(grupo&&t._grupo!==grupo) return false;
    if(color&&t._color!==color) return false;
    if(estado&&(t._estado||"").toLowerCase()!==estado) return false;
    if(search){var h=[t._folio,t._equipo,t._descripcion,t._defecto,t._prioridad,t._estado,t._brand,t._ubicacion].join(" ").toLowerCase();if(h.indexOf(search)===-1) return false;}
    for(var c in colFilters){if(colFilters[c]&&colFilters[c].length>0){if(colFilters[c].indexOf(getColValue(t,c))===-1) return false;}}
    return true;
  });
  return tarjetasFiltradas;
}

// ============================================================
// 15. TARJETAS - Render maestro
// ============================================================
function renderTarjetas(){filtrarTarjetas();renderChartDonut();renderChartTrend();renderChartTop10();renderChartAntig();renderChartCierre();renderChartGrupos();renderTablaTarjetas();}

// ============================================================
// 16. GRAFICA 1 - Dona: Tarjetas por Color
// ============================================================
function renderChartDonut(){
  var bt=0,rt=0,yt=0;
  tarjetasFiltradas.forEach(function(t){
    if(esAbierta(t._estado)){
      if(t._color==="BT")bt++;else if(t._color==="RT")rt++;else if(t._color==="YT")yt++;
    }
  });
  var ctx=document.getElementById("chartDonut");if(!ctx) return;
  if(chartDonut) chartDonut.destroy();
  chartDonut=new Chart(ctx,{
    type:"doughnut",
    data:{labels:["BT (Azul)","RT (Rojo)","YT (Amarillo)"],datasets:[{data:[bt,rt,yt],backgroundColor:["#2D6EAA","#A52323","#E18719"],borderWidth:2,borderColor:"#fff"}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11},padding:12}}},cutout:"60%"}
  });
}

// ============================================================
// 17. GRAFICA 2 - Tendencia Apertura vs Cierre
// ============================================================
function renderChartTrend(){
  var meses={};
  tarjetasFiltradas.forEach(function(t){
    if(esCancelada(t._estado)) return;
    var fi=t._fechaInc;if(!fi) return;
    var mk;
    if(fi.indexOf("/")>-1){var p=fi.split("/");mk=p[2]+"-"+p[1];}
    else mk=fi.substring(0,7);
    if(!meses[mk]) meses[mk]={a:0,c:0};
    if(esAbierta(t._estado)) meses[mk].a++;else if(esCerrada(t._estado)) meses[mk].c++;
  });
  var ks=Object.keys(meses).sort();
  var mn=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  var lb=ks.map(function(k){var p=k.split("-");return mn[parseInt(p[1])-1]+" "+p[0].substring(2);});
  var ctx=document.getElementById("chartTrend");if(!ctx) return;
  if(chartTrend) chartTrend.destroy();
  chartTrend=new Chart(ctx,{
    type:"line",
    data:{labels:lb,datasets:[
      {label:"Abiertas",data:ks.map(function(k){return meses[k].a;}),borderColor:"#A52323",backgroundColor:"rgba(165,35,35,.1)",fill:true,tension:.3,pointRadius:3},
      {label:"Cerradas",data:ks.map(function(k){return meses[k].c;}),borderColor:"#287819",backgroundColor:"rgba(40,120,25,.1)",fill:true,tension:.3,pointRadius:3}
    ]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11}}}},scales:{x:{ticks:{font:{size:10}},grid:{display:false}},y:{beginAtZero:true,ticks:{font:{size:10}}}}}
  });
}

// ============================================================
// 18. GRAFICA 3 - Top 10 Equipos Problematicos
// ============================================================
function renderChartTop10(){
  var c={};
  tarjetasFiltradas.forEach(function(t){if(!esAbierta(t._estado)) return;var eq=t._equipo||"Sin equipo";c[eq]=(c[eq]||0)+1;});
  var s=Object.keys(c).map(function(k){return{eq:k,n:c[k]};}).sort(function(a,b){return b.n-a.n;}).slice(0,10);
  var ctx=document.getElementById("chartTop10");if(!ctx) return;
  if(chartTop10) chartTop10.destroy();
  chartTop10=new Chart(ctx,{
    type:"bar",
    data:{labels:s.map(function(t){return t.eq;}),datasets:[{data:s.map(function(t){return t.n;}),backgroundColor:"#4F2170",borderRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,indexAxis:"y",plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,ticks:{font:{size:10}}},y:{ticks:{font:{size:10,family:"Calibri,Arial,sans-serif"}}}}}
  });
}

// ============================================================
// 19. GRAFICA 4 - Distribucion de Antiguedad
// ============================================================
function renderChartAntig(){
  var b={a:0,b:0,c:0,d:0};
  tarjetasFiltradas.forEach(function(t){
    if(!esAbierta(t._estado)) return;
    var d=t._dias;if(d<=7)b.a++;else if(d<=15)b.b++;else if(d<=30)b.c++;else b.d++;
  });
  var ctx=document.getElementById("chartAntig");if(!ctx) return;
  if(chartAntig) chartAntig.destroy();
  chartAntig=new Chart(ctx,{
    type:"bar",
    data:{labels:["0-7 dias","8-15 dias","16-30 dias","30+ dias"],datasets:[{data:[b.a,b.b,b.c,b.d],backgroundColor:["#287819","#E18719","#E18719","#A52323"],borderRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{font:{size:10}},grid:{display:false}},y:{beginAtZero:true,ticks:{font:{size:10}}}}}
  });
}

// ============================================================
// 20. GRAFICA 5 - Tasa de Cierre Mensual
// ============================================================
function renderChartCierre(){
  var meses={};
  tarjetasFiltradas.forEach(function(t){
    if(esCancelada(t._estado)) return;
    var fi=t._fechaInc;if(!fi) return;
    var mk;if(fi.indexOf("/")>-1){var p=fi.split("/");mk=p[2]+"-"+p[1];}else mk=fi.substring(0,7);
    if(!meses[mk]) meses[mk]={t:0,c:0};meses[mk].t++;if(esCerrada(t._estado)) meses[mk].c++;
  });
  var ks=Object.keys(meses).sort();
  var mn=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  var ctx=document.getElementById("chartCierre");if(!ctx) return;
  if(chartCierre) chartCierre.destroy();
  chartCierre=new Chart(ctx,{
    type:"bar",
    data:{labels:ks.map(function(k){var p=k.split("-");return mn[parseInt(p[1])-1];}),datasets:[
      {label:"Cerradas",data:ks.map(function(k){return meses[k].c;}),backgroundColor:"#4F2170",borderRadius:4,yAxisID:"y",order:2},
      {label:"% Cierre",data:ks.map(function(k){return meses[k].t>0?Math.round(meses[k].c/meses[k].t*1000)/10:0;}),type:"line",borderColor:"#E18719",backgroundColor:"transparent",pointBackgroundColor:"#E18719",pointRadius:4,tension:.3,yAxisID:"y1",order:1}
    ]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11}}}},scales:{x:{ticks:{font:{size:10}},grid:{display:false}},y:{beginAtZero:true,position:"left",ticks:{font:{size:10}}},y1:{beginAtZero:true,max:100,position:"right",ticks:{font:{size:10}},grid:{display:false}}}}
  });
}

// ============================================================
// 21. GRAFICA 6 - Tasa de Cierre por Grupo
// ============================================================
function renderChartGrupos(){
  var g={};
  tarjetasFiltradas.forEach(function(t){
    if(esCancelada(t._estado)) return;
    var k=t._grupo||"Sin grupo";if(!g[k]) g[k]={a:0,c:0,t:0};g[k].t++;
    if(esAbierta(t._estado)) g[k].a++;else if(esCerrada(t._estado)) g[k].c++;
  });
  var ks=Object.keys(g).sort();
  var ctx=document.getElementById("chartGrupos");if(!ctx) return;
  if(chartGrupos) chartGrupos.destroy();
  chartGrupos=new Chart(ctx,{
    type:"bar",
    data:{labels:ks.map(function(k){return k==="Sin grupo"?k:"Grupo "+k;}),datasets:[
      {label:"Abiertas",data:ks.map(function(k){return g[k].a;}),backgroundColor:"#A52323",borderRadius:4,yAxisID:"y"},
      {label:"Cerradas",data:ks.map(function(k){return g[k].c;}),backgroundColor:"#287819",borderRadius:4,yAxisID:"y"},
      {label:"% Cierre",data:ks.map(function(k){return g[k].t>0?Math.round(g[k].c/g[k].t*1000)/10:0;}),type:"line",borderColor:"#E18719",backgroundColor:"transparent",pointBackgroundColor:"#E18719",pointRadius:5,tension:.3,yAxisID:"y1",order:0}
    ]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:"bottom",labels:{font:{family:"Calibri,Arial,sans-serif",size:11}}}},scales:{x:{ticks:{font:{size:10}},grid:{display:false}},y:{beginAtZero:true,position:"left",ticks:{font:{size:10}}},y1:{beginAtZero:true,max:100,position:"right",ticks:{font:{size:10}},grid:{display:false}}}}
  });
}

// ============================================================
// 22. Tabla de Tarjetas
// ============================================================
function renderTablaTarjetas(){
  var tb=document.getElementById("tarjetasTbody");if(!tb) return;
  var d=tarjetasFiltradas.slice();
  if(tableSortCol){
    d.sort(function(a,b){
      var va=getColValue(a,tableSortCol),vb=getColValue(b,tableSortCol);
      if(tableSortCol==="antiguedad"){va=parseInt(va)||0;vb=parseInt(vb)||0;return tableSortAsc?va-vb:vb-va;}
      va=va.toLowerCase();vb=vb.toLowerCase();
      if(va<vb) return tableSortAsc?-1:1;if(va>vb) return tableSortAsc?1:-1;return 0;
    });
  }
  var ce=document.getElementById("tblCount");if(ce) ce.textContent="("+d.length+" registros)";
  var h="";
  d.forEach(function(t){
    var pc="pill-abierta";var el=(t._estado||"").toLowerCase();
    if(el==="resuelta") pc="pill-resuelta";else if(el==="cmms") pc="pill-cmms";else if(el==="pendiente") pc="pill-proceso";
    h+="<tr><td><strong>"+(t._folio||"-")+"</strong></td><td>"+(t._equipo||"-")+"</td><td>"+renderColorTag(t._color)+"</td><td>"+(t._defecto||"-")+"</td><td>"+(t._prioridad||"-")+"</td><td><span class='status-pill "+pc+"'>"+(t._estado||"-")+"</span></td><td>"+fmtFecha(t._fechaInc)+"</td><td>"+t._dias+"d</td><td>"+(t._descripcion||"-")+"</td></tr>";
  });
  tb.innerHTML=h;
}
function renderColorTag(c){
  if(c==="BT") return '<span style="color:#2D6EAA;font-weight:700">BT</span>';
  if(c==="RT") return '<span style="color:#A52323;font-weight:700">RT</span>';
  if(c==="YT") return '<span style="color:#E18719;font-weight:700">YT</span>';
  return '<span style="color:#888">-</span>';
}

// ============================================================
// 23-25. Tabla controles + filtros Excel + export
// ============================================================
function bindTablaControls(){
  document.querySelectorAll(".col-sort").forEach(function(b){
    b.addEventListener("click",function(){
      var c=b.getAttribute("data-col");
      if(tableSortCol===c) tableSortAsc=!tableSortAsc;else{tableSortCol=c;tableSortAsc=true;}
      renderTablaTarjetas();
    });
  });
  document.querySelectorAll(".col-filter-btn").forEach(function(b){
    b.addEventListener("click",function(e){e.stopPropagation();toggleColFilter(b.getAttribute("data-col"),b);});
  });
  var si=document.getElementById("tblSearch");
  if(si){var db;si.addEventListener("input",function(){clearTimeout(db);db=setTimeout(renderTarjetas,300);});}
  var be=document.getElementById("btnExport");
  if(be) be.addEventListener("click",exportarExcel);
  document.addEventListener("click",function(){document.querySelectorAll(".col-filter-drop.show").forEach(function(d){d.classList.remove("show");});});
}
function toggleColFilter(col,btn){
  document.querySelectorAll(".col-filter-drop.show").forEach(function(d){if(d.getAttribute("data-col")!==col) d.classList.remove("show");});
  var dr=document.querySelector('.col-filter-drop[data-col="'+col+'"]');if(!dr) return;
  if(dr.classList.contains("show")){dr.classList.remove("show");return;}
  var u={};tarjetasData.forEach(function(t){var v=getColValue(t,col);if(v) u[v]=true;});
  var vs=Object.keys(u).sort();var cf=colFilters[col]||[];
  var h='<input type="text" placeholder="Buscar..." class="cfd-search"><div class="cfd-options">';
  vs.forEach(function(v){h+='<label><input type="checkbox" value="'+v+'" '+(cf.length===0||cf.indexOf(v)>-1?"checked":"")+"> "+v+"</label>";});
  h+='</div><div class="cfd-actions"><button class="btn-clear" data-col="'+col+'">Limpiar</button><button class="btn-apply" data-col="'+col+'">Aplicar</button></div>';
  dr.innerHTML=h;dr.classList.add("show");
  dr.querySelector(".cfd-search").addEventListener("input",function(e){var term=e.target.value.toLowerCase();dr.querySelectorAll(".cfd-options label").forEach(function(l){l.style.display=l.textContent.toLowerCase().indexOf(term)>-1?"flex":"none";});});
  dr.querySelector(".btn-clear").addEventListener("click",function(e){e.stopPropagation();delete colFilters[col];dr.classList.remove("show");btn.classList.remove("active");renderTarjetas();});
  dr.querySelector(".btn-apply").addEventListener("click",function(e){e.stopPropagation();var cks=dr.querySelectorAll('.cfd-options input[type="checkbox"]');var sel=[];cks.forEach(function(c){if(c.checked) sel.push(c.value);});if(sel.length===vs.length||sel.length===0){delete colFilters[col];btn.classList.remove("active");}else{colFilters[col]=sel;btn.classList.add("active");}dr.classList.remove("show");renderTarjetas();});
  dr.addEventListener("click",function(e){e.stopPropagation();});
}
function exportarExcel(){
  var d=tarjetasFiltradas.length>0?tarjetasFiltradas:tarjetasData;
  var lines=[];
  lines.push("Folio,Equipo,Color,Defecto,Prioridad,Estado,Fecha,Antiguedad (dias),Descripcion");
  d.forEach(function(t){
    lines.push(['"'+(t._folio||"")+'"','"'+(t._equipo||"")+'"','"'+(t._color||"")+'"','"'+(t._defecto||"")+'"','"'+(t._prioridad||"")+'"','"'+(t._estado||"")+'"','"'+fmtFecha(t._fechaInc)+'"',t._dias,'"'+((t._descripcion||"").replace(/"/g,'""'))+'"'].join(","));
  });
  var csv="\uFEFF"+lines.join("\n");
  var blob=new Blob([csv],{type:"text/csv;charset=utf-8;"});
  var lk=document.createElement("a");
  lk.href=URL.createObjectURL(blob);lk.download="tarjetas_paletizado_"+new Date().toISOString().substring(0,10)+".csv";lk.click();
}
// FIN BLOQUE B


// ============================================================
// 26-28. MODAL + ACORDEON
// ============================================================
var modalEquipoActual=null;
function abrirModalCambioEstado(eid){
  modalEquipoActual=eid;
  var eq=getEquipo(eid);if(!eq) return;
  var st=equipStatus[eid]||"operativo";
  document.getElementById("modalTitle").textContent="Cambiar Estado: "+eid;
  document.getElementById("modalEquipName").textContent=eq.nombre+(eq.brand&&eq.brand!=="-"?" - "+eq.brand:"");
  var fe=document.getElementById("modalFromStatus");
  fe.textContent=st==="operativo"?"Operativo":st==="degradado"?"Degradado":"Fuera de Servicio";
  fe.className="status-pill "+(st==="operativo"?"pill-resuelta":st==="degradado"?"pill-proceso":"pill-abierta");
  var sel=document.getElementById("modalToStatus");sel.innerHTML="";
  [{v:"operativo",l:"Operativo"},{v:"degradado",l:"Degradado"},{v:"fuera",l:"Fuera de Servicio"}].forEach(function(o){
    if(o.v!==st){var op=document.createElement("option");op.value=o.v;op.textContent=o.l;sel.appendChild(op);}
  });
  document.getElementById("modalMotivo").value="";
  document.getElementById("modalOverlay").classList.add("show");
}
function cerrarModal(){
  document.getElementById("modalOverlay").classList.remove("show");
  modalEquipoActual=null;
}
function confirmarCambioEstado(){
  if(!modalEquipoActual) return;
  var nst=document.getElementById("modalToStatus").value;
  var mot=document.getElementById("modalMotivo").value.trim();
  var ant=equipStatus[modalEquipoActual]||"operativo";
  equipStatus[modalEquipoActual]=nst;
  guardarEstados();
  registrarCambioEstado(modalEquipoActual,ant,nst,mot);
  cerrarModal();
  renderKPIs();
  renderMarcadores();
  if(mapaSeleccionado===modalEquipoActual) seleccionarEquipoMapa(modalEquipoActual);
  if(typeof renderOperatividad==="function") renderOperatividad();
}

// ============================================================
// 30-31. OPERATIVIDAD
// ============================================================
var chartOperDonut=null;
function renderOperatividad(){
  renderOperDonut();
  renderOperChips();
  renderOperTimeTable();
  renderHeatmap();
  renderScorecard();
}
function initOperatividad(){renderOperatividad();}

// ============================================================
// 32. Dona de Operatividad
// ============================================================
function renderOperDonut(){
  var est=contarEstados();
  var ctx=document.getElementById("chartOperDonut");if(!ctx) return;
  if(chartOperDonut) chartOperDonut.destroy();
  chartOperDonut=new Chart(ctx,{
    type:"doughnut",
    data:{labels:["Operativos","Degradados","Fuera de Servicio"],datasets:[{data:[est.operativos,est.degradados,est.fuera],backgroundColor:["#287819","#E18719","#A52323"],borderWidth:2,borderColor:"#fff"}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:"65%",plugins:{legend:{display:false}}},
    plugins:[{
      id:"centerText",
      beforeDraw:function(chart){
        var w=chart.width,h=chart.height,c=chart.ctx;
        c.restore();
        c.font="bold 28px Calibri,Arial,sans-serif";
        c.textBaseline="middle";c.textAlign="center";
        c.fillStyle="#4F2170";c.fillText(est.total,w/2,h/2-8);
        c.font="11px Calibri,Arial,sans-serif";
        c.fillStyle="#888";c.fillText("equipos",w/2,h/2+14);
        c.save();
      }
    }]
  });
  var le=document.getElementById("operDonutLegend");
  if(le){
    le.innerHTML='<div class="oper-legend-item"><div class="oper-legend-dot" style="background:#287819"></div> Operativos <span class="oper-legend-count" style="color:#287819">'+est.operativos+'</span></div><div class="oper-legend-item"><div class="oper-legend-dot" style="background:#E18719"></div> Degradados <span class="oper-legend-count" style="color:#E18719">'+est.degradados+'</span></div><div class="oper-legend-item"><div class="oper-legend-dot" style="background:#A52323"></div> Fuera de Servicio <span class="oper-legend-count" style="color:#A52323">'+est.fuera+'</span></div>';
  }
}

// ============================================================
// 33. Acordeon - Chips de equipos por estado
// ============================================================
function renderOperChips(){
  var ops=[],deg=[],fs=[];
  EQUIPOS.forEach(function(eq){
    var s=equipStatus[eq.id]||"operativo";
    if(s==="operativo") ops.push(eq);
    else if(s==="degradado") deg.push(eq);
    else if(s==="fuera") fs.push(eq);
  });
  document.getElementById("accTitleOperativos").textContent="Operativos ("+ops.length+")";
  document.getElementById("accTitleDegradados").textContent="Degradados ("+deg.length+")";
  document.getElementById("accTitleFuera").textContent="Fuera de Servicio ("+fs.length+")";
  renderChipGroup("chipsOperativos",ops,"chip-operativo");
  renderChipGroup("chipsDegradados",deg,"chip-degradado");
  renderChipGroup("chipsFuera",fs,"chip-fuera");
}
function renderChipGroup(cid,eqs,cls){
  var c=document.getElementById(cid);if(!c) return;
  c.innerHTML="";
  eqs.forEach(function(eq){
    var ch=document.createElement("span");
    ch.className="equip-chip "+cls;
    ch.title=eq.nombre+" | Clic para cambiar estado";
    ch.innerHTML=eq.id+' <i class="fa-solid fa-pen chip-action"></i>';
    ch.addEventListener("click",function(){abrirModalCambioEstado(eq.id);});
    c.appendChild(ch);
  });
  if(eqs.length===0){c.innerHTML='<span class="text-muted" style="padding:8px">Ningun equipo en este estado</span>';}
}

// ============================================================
// 34. Tabla - Tiempo fuera de servicio
// ============================================================
function renderOperTimeTable(){
  var tb=document.getElementById("operTimeTable");if(!tb) return;
  var no=[];
  EQUIPOS.forEach(function(eq){
    var s=equipStatus[eq.id]||"operativo";
    if(s!=="operativo"){
      var d=obtenerFechaCambio(eq.id,s);
      no.push({equipo:eq.id,estado:s,desde:d||"-",dias:d?diasDesde(d):0,motivo:obtenerMotivoCambio(eq.id,s)||"-"});
    }
  });
  no.sort(function(a,b){return b.dias-a.dias;});
  if(no.length===0){
    tb.innerHTML='<tr><td colspan="5" style="text-align:center;padding:20px;color:#9CA3AF">Todos los equipos estan operativos</td></tr>';
    return;
  }
  var h="";
  no.forEach(function(i){
    var sl=i.estado==="degradado"?"Degradado":"Fuera Serv.";
    var sc=i.estado==="degradado"?"#E18719":"#A52323";
    h+="<tr><td><strong>"+i.equipo+"</strong></td><td><span style='color:"+sc+";font-weight:600'>"+sl+"</span></td><td>"+fmtFecha(i.desde)+"</td><td><strong>"+i.dias+" dias</strong></td><td>"+i.motivo+"</td></tr>";
  });
  tb.innerHTML=h;
}
function obtenerFechaCambio(eid,st){
  for(var i=equipStatusHistory.length-1;i>=0;i--){
    var r=equipStatusHistory[i];
    if(r.equipo===eid&&r.a===st) return r.fecha;
  }
  return null;
}
function obtenerMotivoCambio(eid,st){
  for(var i=equipStatusHistory.length-1;i>=0;i--){
    var r=equipStatusHistory[i];
    if(r.equipo===eid&&r.a===st) return r.motivo||"-";
  }
  return "-";
}

// ============================================================
// 35. Heatmap - 14 lineas
// ============================================================
function renderHeatmap(){
  var g=document.getElementById("heatmapGrid");if(!g) return;
  var cols=[{k:"pal",l:"Paletizadora"},{k:"cc",l:"Case Conv."},{k:"espiral",l:"Espiral"},{k:"wrapper",l:"Wrapper"}];
  var h='<div class="hm-header">Linea</div>';
  cols.forEach(function(c){h+='<div class="hm-header">'+c.l+'</div>';});
  for(var ln=1;ln<=14;ln++){
    h+='<div class="hm-line-label">L'+ln+'</div>';
    cols.forEach(function(c){
      var eq=getEquiposLineaTipo(ln,c.k);
      if(eq.length===0){h+='<div class="hm-cell na" title="Sin equipo">-</div>';}
      else{
        var ps=getPeorEstado(eq);
        var sc=ps==="operativo"?"op":ps==="degradado"?"deg":"fs";
        var sl=ps==="operativo"?"OK":ps==="degradado"?"!":"X";
        var nm=eq.map(function(e){return e.id;}).join(", ");
        h+='<div class="hm-cell '+sc+'" title="'+nm+'">'+sl+'</div>';
      }
    });
  }
  g.innerHTML=h;
}
function getEquiposLineaTipo(ln,tipo){
  if(tipo==="wrapper"){
    var lp=LINEAS[ln]?LINEAS[ln].proyecto:"";
    return EQUIPOS.filter(function(e){return e.tipo==="wrapper"&&e.proyecto===lp;});
  }
  return EQUIPOS.filter(function(e){return e.linea===ln&&e.tipo===tipo;});
}
function getPeorEstado(eqs){
  var f=false,d=false;
  eqs.forEach(function(e){
    var s=equipStatus[e.id]||"operativo";
    if(s==="fuera") f=true;else if(s==="degradado") d=true;
  });
  if(f) return "fuera";if(d) return "degradado";return "operativo";
}

// ============================================================
// 36. Scorecard - Arthur vs Sunrise
// ============================================================
function renderScorecard(){
  var a={o:0,d:0,f:0,t:0};
  var s={o:0,d:0,f:0,t:0};
  EQUIPOS.forEach(function(eq){
    var st=equipStatus[eq.id]||"operativo";
    var b=eq.proyecto==="arthur"?a:s;
    b.t++;if(st==="operativo") b.o++;else if(st==="degradado") b.d++;else if(st==="fuera") b.f++;
  });
  var ap=a.t>0?Math.round(a.o/a.t*1000)/10:0;
  var sp=s.t>0?Math.round(s.o/s.t*1000)/10:0;
  document.getElementById("scArthurPct").textContent=ap+"%";
  document.getElementById("scArthurPct").style.color=ap>=90?"#287819":ap>=75?"#E18719":"#A52323";
  document.getElementById("scArthurOps").textContent=a.o;
  document.getElementById("scArthurDeg").textContent=a.d;
  document.getElementById("scArthurFS").textContent=a.f;
  document.getElementById("scSunrisePct").textContent=sp+"%";
  document.getElementById("scSunrisePct").style.color=sp>=90?"#287819":sp>=75?"#E18719":"#A52323";
  document.getElementById("scSunriseOps").textContent=s.o;
  document.getElementById("scSunriseDeg").textContent=s.d;
  document.getElementById("scSunriseFS").textContent=s.f;
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.addEventListener("DOMContentLoaded",function(){
  var cb=document.getElementById("modalClose");
  if(cb) cb.addEventListener("click",cerrarModal);
  var cn=document.getElementById("modalCancelBtn");
  if(cn) cn.addEventListener("click",cerrarModal);
  var cf=document.getElementById("modalConfirmBtn");
  if(cf) cf.addEventListener("click",confirmarCambioEstado);
  var ov=document.getElementById("modalOverlay");
  if(ov) ov.addEventListener("click",function(e){if(e.target===ov) cerrarModal();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape") cerrarModal();});
  document.querySelectorAll(".accordion-header").forEach(function(h){
    h.addEventListener("click",function(){
      h.classList.toggle("open");
      var b=h.nextElementSibling;
      if(b) b.classList.toggle("open");
    });
  });
  var fd=document.getElementById("filtDesde");
  var fh=document.getElementById("filtHasta");
  if(fd) fd.addEventListener("change",function(){renderKPIs();if(typeof renderTarjetas==="function") renderTarjetas();});
  if(fh) fh.addEventListener("change",function(){renderKPIs();if(typeof renderTarjetas==="function") renderTarjetas();});
});

// ============================================================
// INICIALIZACION FINAL
// ============================================================
function inicializarApp(){
  cargarEstados();
  cargarHistorial();
  cargarTarjetas(function(){
    renderKPIs();
    initMapa();
    initTarjetas();
    initOperatividad();
    initTabs();
    console.log("Dashboard inicializado correctamente");
  });
}
document.addEventListener("DOMContentLoaded",inicializarApp);
// FIN app.js



