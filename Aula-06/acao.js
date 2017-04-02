/* COMMANDOS DE BUSCA NO DOM*/
// document.querySelector("SELETOR CSS");
// document.querySelectorAll("SELETOR CSS");

// document.children[0].children[1].children[1];
// document.getElementsByTagName("COMANDO HTML");
// document.getElementsByClassName("CLASSE");
// document.getElementById("ID");
// document.getElementsByName("NOME DO CAMPO");
// $x("X-PATH");


/* COMANDOS COM ELEMENTOS */
// elemento.parentNode ==> Acessa o pai do elemento
// document.createElement("COMANDO HTML");
// pai.appendChild(filho);
// elemento.remove(); //CUIDADO NO IE;
// elemento.parentNode.removeChild(elmento);

/* COMANDO DE MODIFICAÇÃO */
// elemtno.setAttribute("ATTR","VALOR");
// elemento.PROPRIEDADE = VALOR;
// elemento.style["ESTILO CSS"] = VALOR;

function main() {
  var btn = document.querySelector("button#btn");
  btn.addEventListener("click", ativar);
}

var id = 0;
var datas = [];

function ativar() {
  var lista = document.querySelector("ol#lista");
  var conteudo = document.querySelector("input[name=texto]").value;
  if (validar(conteudo) == true) {
    id = id + 1;
    var format = conteudo.replace("/", "-");
    var format2 = format.replace("/", "-");
    lista.innerHTML += format2 + " " + "<button class='fechar' id='" + id + "'>Remover</button></li>";
    pintaData(format2, datas, id);
    datas.push(format2 + " " + id);
  }
}

function validar(texto) {
  var valido = false;
  if (Date.parse(texto) && (texto.length == 10)) {
    valido = true;
  }
  return valido;
}

function pintaData(data, datas, ids) {
  for (var i = 0; i < datas.length; i++) {
    if (data.substring(0, 10) == datas[i].substring(0, 10)) {
      document.getElementById(ids).style.color = "red";
      document.getElementById(datas[i].substring(11, 12)).style.color = "red";
    }
  }
}

window.addEventListener("load", main);
/*
function ativar(){
  var paragrafo = document.querySelector("p.ativo");
  var campo = document.querySelector("input[name=texto]");
  var texto = campo.value;
  paragrafo.innerHTML += "<br/>"+texto;
}
*/
