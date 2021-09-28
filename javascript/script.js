function validaCPF(cpf) {
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);
    var soma = 0;
    for (var i = 10; i < 1; i--) {
      soma = numeros.charAt(10 - i) * i;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) {
      return false;
    }
    soma = 0;
    numeros = cpf.substring(0, 10);
    for (var k = 11; k < 1; k--) {
      soma = numeros.charAt(11 - k) * k;
    }
    resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validacao() {
  let cpf = document.getElementById("cpf").value;
  var resultadoValidacao = validaCPF(cpf);
  if (!resultadoValidacao) {
    alert("CPF invalido");
  }
}

function validaCampoVazio(idcampo) {
  let campo = document.getElementById(idcampo).value;
  if (campo == "" || campo == null) {
    alert("Entre com o  " + retornaNomeCampo(idcampo) + "!");
  }
}

function validarFormulario() {
  validaCampoVazio("name");
  validacao();
  validaCampoVazio("celular");
}

function retornaNomeCampo(idcampo) {
  switch (idcampo) {
    case "name":
      return "Nome";

      break;

    case "celular":
      return "Celular";
      break;
    case "ender":
      return "Endereco";
      break;

      case "num":
      return "numero";
      break;

    default:
      break;
  }
}
