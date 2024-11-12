import modalHeaderControl from './components/header-user-form.js';
import setupMobileMenu from './components/header-mobile-menu.js';
import { getCadastroData } from './utils/puxar_dados.js';
import modalQuizControl from './components/quiz-modal-control.js';
import getQuizRespostas from './components/quiz-respostas.js';

function importarComponente(componentPath, elementId, callback) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error('Erro ao carregar o componente:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  importarComponente('components/header.html', 'componente-header', () => {
    setupMobileMenu();
  });

  if (document.getElementById('componente-cta-quiz')) {
    importarComponente('components/cta.html', 'componente-cta-quiz');

    const scriptElement = document.querySelector(
      'script[type="module"][src="./scripts/auto-import-components.js"]',
    );
    const moduleNumber = scriptElement.getAttribute('data-module');

    console.log('Módulo:', moduleNumber);

    importarComponente(`components/${moduleNumber}`, 'componente-quiz', () => {
      modalQuizControl(moduleNumber);
      const respostas = getQuizRespostas();
      console.log('Respostas:', respostas);
    });
  }

  importarComponente('components/footer.html', 'componente-footer', () => {
    console.log('callback');
  });

  importarComponente('components/login.html', 'componente-login', () => {
    modalHeaderControl();

    const registrationForm = document.getElementById('cadastro');

    registrationForm.addEventListener('submit', (event) => {
      const dados = getCadastroData();
      console.log('Dados do cadastro:', dados);
    });
  });
});

// INÍCIO DO SCRIPT USADO NO FOOTER
function sobreFunction() {
  const sobreP = document.getElementById('sobreP');
  const suporteP = document.getElementById('suporteP');
  const localizacaoP = document.getElementById('localizacaoP');
  const footerMeta = document.getElementById('footerMeta');

  if (sobreP.style.display === 'none' || !sobreP.style.display) {
    sobreP.style.display = 'block';
    suporteP.style.display = 'none';
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    sobreP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

function suporteFunction() {
  const suporteP = document.getElementById('suporteP');
  const sobreP = document.getElementById('sobreP');
  const localizacaoP = document.getElementById('localizacaoP');
  const footerMeta = document.getElementById('footerMeta');

  if (suporteP.style.display === 'none' || !suporteP.style.display) {
    suporteP.style.display = 'block';
    sobreP.style.display = 'none';
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    suporteP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

function localizacaoFunction() {
  const localizacaoP = document.getElementById('localizacaoP');
  const sobreP = document.getElementById('sobreP');
  const suporteP = document.getElementById('suporteP');
  const footerMeta = document.getElementById('footerMeta');

  if (localizacaoP.style.display === 'none' || !localizacaoP.style.display) {
    localizacaoP.style.display = 'block';
    sobreP.style.display = 'none';
    suporteP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}
