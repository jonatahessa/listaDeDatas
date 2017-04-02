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

function main(){
  var btn = document.querySelector("button#btn");
  btn.addEventListener("click",adicionar);
}

function adicionar(){
  var lista = document.querySelector("ol#lista");
  var conteudo = document.querySelector("input[name=texto]");
  var itemlista = document.createElement("li");
  var valor = conteudo.value;
  lista.appendChild(itemlista);

  if (validar(valor) == true){
    itemlista.innerHTML = valor + "<button class='fechar'/>";    
  }
  window.addEventListener("load",main);
}

function validar(texto){
  texto = texto.replace(/[^0-9\/]/g, "");
        var partes = texto.split("/");
        if( partes.length != 3 ) return false;
        var dia = partes[0];
        var mes = partes[1];
        var ano = partes[2];
        if( isNaN(dia) || isNaN(mes) || isNaN(ano) ) return false;
        if( mes > 12 || mes < 1 || ano < 1 || dia < 1) return false;
        if( mes == 2 ) {
                maiorDia = ( ( (!(ano % 4)) && (ano % 100) ) || (!(ano % 400)) )? 29: 28;
                if( dia > maiorDia ) return false;
        }else {
                if( mes == 4 || mes == 6 || mes == 9 || mes == 11 ) {

                        if( dia > 30 ) return false;
                }else {
                        if( dia > 31 ) return false;
                }
        }
        return true;
}


/*
function ativar(){
  var paragrafo = document.querySelector("p.ativo");
  var campo = document.querySelector("input[name=texto]");
  var texto = campo.value;
  paragrafo.innerHTML += "<br/>"+texto;
}
*/
