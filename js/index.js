document.getElementById("btnLoginSubmit").addEventListener("click", direcionaPraCris, false);

  function direcionaPraCris() {
    var inputLogin = document.getElementById("usr").value;
    var inputSenha = document.getElementById("pwd").value;

    var userName = "ricardo";
    var password = "ricardo";

    function autenticacao(){
      if (inputLogin == userName && inputSenha == password) {
        window.location.href='html/conversaCris.html';
      }
      else {
        alert("Não foi possível autorizar entrada!");
      }
    }

    switch (true) {
      case inputLogin==="ricardo":
        autenticacao();
        break;

      default:
      alert("Não foi possível autorizar entrada!");
    }


  }