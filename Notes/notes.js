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


notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "IMG") {
    e.target.parentElement.remove();
      updateStorage();

  } 
  else if(e.target.tagName === "P") {
    notesss = document.querySelectorAll(".input-box");
    notesss.forEach(nt => {
      nt.onkeyup = function() {
        updateStorage();
      }
    })
  }
})







