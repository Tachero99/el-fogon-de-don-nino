// =========================================================
// EL FOGÓN DE DON NINO — SCRIPT PRINCIPAL
// Solo maneja el menú hamburguesa en mobile y el año del footer.
// No hace falta tocar este archivo para editar textos o el menú.
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  // Abre y cierra el menú al tocar el botón hamburguesa
  navToggle.addEventListener("click", function () {
    const abierto = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  // Cierra el menú al tocar cualquier link (mejor experiencia en mobile)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Año actual en el footer, para no tener que actualizarlo a mano
  const anio = document.getElementById("anio");
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
});
