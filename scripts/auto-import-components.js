function importarComponente(componentPath, elementId, callback) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error('Erro ao carregar o componente:', error));
}

importarComponente('components/header.html', 'componente-header');

if (document.getElementById('componente-cta-quiz')) {
  importarComponente('components/cta.html', 'componente-cta-quiz');
}

importarComponente('components/quiz.html', 'componente-quiz', () => {
  console.log("injetei!")
  const btnAbrirModal = document.getElementById('start-quiz');
  console.log(btnAbrirModal, "botao")
  const modal = document.querySelector('.modal-quiz');
  console.log("achou/:",)
  let status = 'closed';

  btnAbrirModal.addEventListener('click', () => {
    console.log('clicado');
    modal.style.display = 'block';
    status = 'open';
    document.querySelector('.container').style.filter = 'blur(10px)';
  });

  function fecharModal() {
    modal.style.display = 'none';
  }

});


importarComponente('components/footer.html', 'componente-footer');
importarComponente('components/login.html', 'componente-login', () => {
  const btnAbrirModal = document.getElementById('loginRegistrar');
  const modal = document.querySelector('.modal');
  let status = 'closed';

  btnAbrirModal.addEventListener('click', () => {
    console.log('clicado');
    modal.style.display = 'block';
    status = 'open';
  });

  function fecharModal() {
    modal.style.display = 'none';
  }

  document.addEventListener('click', (event) => {
    if (
      status === 'open' &&
      !event.target.closest('.modal') &&
      !event.target.closest('#loginRegistrar')
    ) {
      console.log('vou fechar');
      status = 'closed';
      fecharModal();
    }
  });

  const cadastro = document.getElementById('cadastro-tab');
  const login = document.getElementById('login-tab');

  cadastro.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cadastro-tab-content').style.display = 'block';
    document.getElementById('login-tab-content').style.display = 'none';
    login.classList.remove('active');
    cadastro.classList.add('active');
  });

  login.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cadastro-tab-content').style.display = 'none';
    document.getElementById('login-tab-content').style.display = 'block';
    cadastro.classList.remove('active');
    login.classList.add('active');
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
      footerMeta.style.paddingTop = '2%'
  } else {
      sobreP.style.display = 'none';
      footerMeta.style.paddingTop = '5%'
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
      localizacaoP.style.display = 'none'
      footerMeta.style.paddingTop = '2%'

  } else {
      suporteP.style.display = 'none';
      footerMeta.style.paddingTop = '5%'
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
      footerMeta.style.paddingTop = '2%'
  } else {
      localizacaoP.style.display = 'none';
      footerMeta.style.paddingTop = '5%'
  }
}
