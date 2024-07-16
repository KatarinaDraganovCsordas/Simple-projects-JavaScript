const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notesss");
}
showNotes();


function updateStorage() {
  localStorage.setItem("notesss", notesContainer.innerHTML);
}



createBtn.addEventListener("click", ()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "kepek/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})


