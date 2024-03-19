/*
function adicionar() {
  let add = document.querySelector("#add");
  let value = add.value;
  lista.push(value);


  item.appendChild(document.createTextNode(... lista[i]));
  conteudo.appendChild(item);
}

const btn = document.querySelector("#button-add");
btn.addEventListener("click", adicionar);

const conteudo = document.querySelector("#list");
var lista = ["coco", "banana", "maça"];

for (i = 0; i < lista.length; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode(lista[i]));
  conteudo.appendChild(item);
}

const select = document.querySelector("#myselect");
select.options[select.options.length] = new Option(
  "My option teste",
  "My value"
);
*/






const lista = [];

function adicionarItem() {
  const inputAdd = document.querySelector('#add');
  const item = inputAdd.value;

  
  if (item.trim() !== '') {
    lista.push(item);
    
    // <ul>
    const listaUl = document.querySelector('#list');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listaUl.appendChild(listItem);
    
    // <select>
    const select = document.querySelector('#myselect');
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
    
    // Limpar o campo de entrada
    inputAdd.value = '';
  }
}


// Função para remover um item da lista
function removerItem() {
  const select = document.querySelector('#myselect');
  const selectedItem = select.value;
  
  if (selectedItem !== '-------Remova item da Lista----------') {
    const index = lista.indexOf(selectedItem);
    if (index !== -1) {
      lista.splice(index, 1);
      
      // <ul>
      const listaUl = document.querySelector('#list');
      listaUl.removeChild(listaUl.getElementsByTagName('li')[index]);
      
      // <select>
      select.remove(index + 1);
    }
  }
}


// Evento de clique ao botão "Adicionar"
const clickAdicionar = document.querySelector('#button-add');
clickAdicionar.addEventListener('click', adicionarItem);

// Evento de clique ao botão "Remover"
const clickRemover = document.querySelector('#button-remover');
clickRemover.addEventListener('click', removerItem);






/*
//Exemplo que querySelctor para um input sem id
const clickRemover = document.querySelector('input[name="remover"]');
clickRemover.addEventListener('click', removerItem);
*/