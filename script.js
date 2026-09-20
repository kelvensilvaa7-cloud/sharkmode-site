// Vitrine estática do Shark Mode.
// Mantido propositalmente simples — sem login, sem banco de dados.
// Toda a interação leva ao aplicativo em app.sharkmode.com.br.

document.addEventListener('DOMContentLoaded', function () {
  // Rolagem suave para links internos (âncoras), caso existam.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
