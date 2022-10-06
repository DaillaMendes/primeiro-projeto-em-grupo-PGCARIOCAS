var addBtn = document.querySelector("button");
var inputText = document.getElementsByTagName("input").value;
var inputT = document.getElementById("addLista");
var listaCompleta = document.querySelector("#listaCompleta");
var itensLista = document.getElementsByClassName("notDone");

function updateLista(lista) {
  return lista
}
var listaOk = updateLista(itensLista)

addBtn.addEventListener("click", function () {
  var liAdd = document.getElementById("addLista").value;
  if (liAdd !== "") {
    var liNova = document.createElement("li");
    liNova.textContent = liAdd;
    liNova.classList.add("notDone");
    listaCompleta.appendChild(liNova);
    liLength = itensLista.length
    console.log(liLength);
    itensLista = document.getElementsByTagName("li");
  }
  inputT.value = "";
  listaOk = updateLista(itensLista)
});

function click(listaOk) {
  for (var i = 0; i <= listaOk.length; i++) {
    if (listaOk[i]) {
      listaOk[i].addEventListener("click", function () {
        this.classList.toggle("done");
      })
    }
  }
}

click(listaOk);