/* ⚠️ No necesitas editar este archivo.
   Lee la información de datos.js y arma las secciones de la página. */

(function () {
  "use strict";

  const D = DATOS;
  const $ = (sel) => document.querySelector(sel);

  // Evita que un texto con < > " rompa la página
  const esc = (t) =>
    String(t == null ? "" : t).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  // Bloquea enlaces peligrosos
  const link = (u) => (/^\s*javascript:/i.test(u) ? "#" : esc(u));
  // "Python (intermedio)" -> nombre + nivel
  const tag = (txt) => {
    const m = String(txt).match(/^(.*?)\s*\((.+)\)\s*$/);
    return m
      ? `<li class="tag">${esc(m[1])}<small>${esc(m[2])}</small></li>`
      : `<li class="tag">${esc(txt)}</li>`;
  };
  const sinNivel = (txt) => String(txt).replace(/\s*\(.+\)\s*$/, "");

  const completo = [D.nombre, D.apellido].filter(Boolean).join(" ");
  const iniciales = (((D.nombre || "")[0] || "") + ((D.apellido || "")[0] || "")).toUpperCase();
  const c = D.contacto || {};

  /* ── Título de la pestaña e inicio ── */
  document.title = completo + " · Portafolio";
  $("#logo-iniciales").textContent = iniciales || "{}";
  $("#h-nombre").innerHTML = [D.nombre, D.apellido].filter(Boolean).map((t) => `<span>${esc(t)}</span>`).join(" ");
  $("#h-rol").textContent = D.rol || "";
  $("#h-desc").textContent = D.presentacion || "";
  if (!D.rol) $("#h-rol").remove();
  if (!D.presentacion) $("#h-desc").remove();

  if (D.cv) {
    const cv = $("#btn-cv");
    cv.href = link(D.cv);
    cv.hidden = false;
  }

  // Foto (o iniciales si no hay foto)
  const foto = $("#h-foto");
  if (D.foto) {
    foto.innerHTML = `<img src="${link(D.foto)}" alt="Foto de ${esc(completo)}" width="104" height="104">`;
  } else {
    foto.textContent = iniciales;
    foto.setAttribute("aria-hidden", "true");
  }

  // Redes bajo los botones
  const redes = [];
  if (c.github) redes.push(`<li><a href="${link(c.github)}" target="_blank" rel="noopener noreferrer">GitHub</a></li>`);
  if (c.linkedin) redes.push(`<li><a href="${link(c.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>`);
  if (c.email) redes.push(`<li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>`);
  $("#h-redes").innerHTML = redes.join("");

  // Ficha rápida
  const ficha = (D.ficha || []).filter((f) => f && f.valor);
  if (ficha.length) {
    $("#ficha").innerHTML = ficha
      .map((f) => `<div><dt>${esc(f.etiqueta)}</dt><dd>${esc(f.valor)}</dd></div>`)
      .join("");
  } else {
    $("#ficha").remove();
  }

  /* ── Ventana de código del inicio (se arma con tus datos) ── */
  (function () {
    const k = (t) => `<span class="k">${t}</span>`;
    const a = (t) => `<span class="a">"${esc(t)}"</span>`;
    const s = (t) => `<span class="s">"${esc(t)}"</span>`;
    const p = (t) => `<span class="p">${t}</span>`;
    const o = (t) => `<span class="o">${esc(t)}</span>`;

    const carrera = (D.educacion && D.educacion[0] && D.educacion[0].titulo) || D.rol || "";
    const stack = (D.competencias && D.competencias[0] ? D.competencias[0].items : [])
      .slice(0, 4)
      .map((x) => s(sinNivel(x)))
      .join(p(", "));

    const lineas = [
      `perfil ${p("=")} ${p("{")}`,
      `  ${a("nombre")}${p(":")} ${s(completo)}${p(",")}`,
      carrera ? `  ${a("carrera")}${p(":")} ${s(carrera)}${p(",")}` : "",
      D.universidad ? `  ${a("universidad")}${p(":")} ${s(D.universidad)}${p(",")}` : "",
      stack ? `  ${a("stack")}${p(":")} ${p("[")}${stack}${p("]")}${p(",")}` : "",
      D.meta ? `  ${a("meta")}${p(":")} ${s(D.meta)}${p(",")}` : "",
      p("}"),
    ].filter(Boolean);

    if (D.meta) {
      lineas.push("");
      lineas.push(`${k("print")}${p("(")}perfil${p("[")}${a("meta")}${p("]")}${p(")")}`);
      lineas.push(`${o(D.meta)}`);
    }

    $("#codigo").innerHTML =
      lineas.map((l, i) => `<span class="l" style="--i:${i}">${l || " "}</span>`).join("") +
      `<span class="l" style="--i:${lineas.length}"><span class="cursor"></span></span>`;
  })();

  /* ── Sobre mí ── */
  $("#sobre-texto").innerHTML = (D.sobreMi || []).map((t) => `<p>${esc(t)}</p>`).join("");

  /* ── Competencias y aptitudes ── */
  $("#lista-competencias").innerHTML = (D.competencias || [])
    .map(
      (g) => `
    <div class="fila">
      <h3>${esc(g.categoria)}</h3>
      <ul class="tags">${(g.items || []).map(tag).join("")}</ul>
    </div>`
    )
    .join("");

  if ((D.aptitudes || []).length) {
    $("#lista-aptitudes").innerHTML = D.aptitudes.map((x) => `<li>${esc(x)}</li>`).join("");
  } else {
    $("#bloque-aptitudes").remove();
  }

  /* ── Educación ── */
  $("#lista-educacion").innerHTML = (D.educacion || [])
    .map(
      (e) => `
    <article class="edu">
      <span class="edu__periodo">${esc(e.periodo)}</span>
      <h3>${esc(e.titulo)}</h3>
      <p class="edu__lugar">${esc(e.lugar)}</p>
      ${e.detalle ? `<p class="edu__detalle">${esc(e.detalle)}</p>` : ""}
      ${(e.cursos || []).length ? `<ul class="tags">${e.cursos.map(tag).join("")}</ul>` : ""}
    </article>`
    )
    .join("");

  /* ── Certificaciones (se oculta la sección si no hay ninguna) ── */
  if ((D.logros || []).length) {
    $("#lista-logros").innerHTML = D.logros
      .map(
        (l) => `
      <li>
        <span class="logros__anio">${esc(l.anio)}</span>
        <div><h3>${esc(l.titulo)}</h3><p>${esc(l.emisor)}</p></div>
        ${l.enlace ? `<a class="enlace" href="${link(l.enlace)}" target="_blank" rel="noopener noreferrer">Ver credencial</a>` : ""}
      </li>`
      )
      .join("");
  } else {
    $("#logros").remove();
    const nav = document.querySelector('.menu a[href="#logros"]');
    if (nav) nav.remove();
  }

  /* ── Proyectos ── */
  const enlacesProy = (p) =>
    p.repo || p.demo
      ? `<div class="proyecto__enlaces">
          ${p.repo ? `<a class="enlace" href="${link(p.repo)}" target="_blank" rel="noopener noreferrer">Ver código</a>` : ""}
          ${p.demo ? `<a class="enlace" href="${link(p.demo)}" target="_blank" rel="noopener noreferrer">Ver demo</a>` : ""}
        </div>`
      : "";

  $("#lista-proyectos").innerHTML = (D.proyectos || [])
    .map((p) => {
      if (p.destacado) {
        return `
    <article class="proyecto proyecto--destacado">
      <div class="proyecto__cuerpo">
        <h3>${esc(p.titulo)}</h3>
        <p>${esc(p.descripcion)}</p>
        ${enlacesProy(p)}
      </div>
      ${p.imagen
        ? `<img class="proyecto__img" src="${link(p.imagen)}" alt="Captura del proyecto ${esc(p.titulo)}" loading="lazy">`
        : (p.tecnologias || []).length
          ? `<div class="proyecto__stack"><h4>Tecnologías</h4><ul class="tags">${p.tecnologias.map(tag).join("")}</ul></div>`
          : ""}
    </article>`;
      }
      return `
    <article class="proyecto">
      ${p.imagen ? `<img class="proyecto__img" src="${link(p.imagen)}" alt="Captura del proyecto ${esc(p.titulo)}" loading="lazy">` : ""}
      <div class="proyecto__cuerpo">
        <h3>${esc(p.titulo)}</h3>
        <p>${esc(p.descripcion)}</p>
        ${(p.tecnologias || []).length ? `<ul class="tags">${p.tecnologias.map(tag).join("")}</ul>` : ""}
        ${enlacesProy(p)}
      </div>
    </article>`;
    })
    .join("");

  /* ── Contacto ── */
  $("#contacto-texto").textContent = c.mensaje || "¿Tienes una oportunidad o un proyecto en mente? Escríbeme y conversamos.";
  const botones = [];
  if (c.email) botones.push(`<a class="btn btn--primario" href="mailto:${esc(c.email)}">Enviar correo</a>`);
  if (c.linkedin) botones.push(`<a class="btn ${c.email ? "btn--borde" : "btn--primario"}" href="${link(c.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>`);
  if (c.github) botones.push(`<a class="btn btn--borde" href="${link(c.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`);
  if (c.whatsapp) botones.push(`<a class="btn btn--borde" href="https://wa.me/${esc(String(c.whatsapp).replace(/\D/g, ""))}" target="_blank" rel="noopener noreferrer">WhatsApp</a>`);
  $("#lista-contacto").innerHTML = botones.join("");

  $("#pie-texto").textContent = "© " + new Date().getFullYear() + " " + completo;

  /* ── Menú móvil ── */
  const btn = $("#menu-btn");
  const menu = $("#menu");
  const cerrar = () => {
    menu.classList.remove("abierto");
    btn.setAttribute("aria-expanded", "false");
  };
  btn.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", String(abierto));
  });
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") cerrar(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });

  /* ── Resalta en el menú la sección que estás viendo ── */
  const enlaces = Array.from(document.querySelectorAll(".menu a"));
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((en) => {
          if (en.isIntersecting) {
            enlaces.forEach((a) => a.classList.toggle("activo", a.getAttribute("href") === "#" + en.target.id));
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => obs.observe(s));
  }
})();
