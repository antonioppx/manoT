if (localStorage.getItem("token") == null) {
    alert("VOCÊ PRECISA FAZER LOGIN PARA ENTRAR");
    window.location.href = "./html/singin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./html/signin.html";
  }