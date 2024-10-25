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
