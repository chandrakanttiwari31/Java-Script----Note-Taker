console.log("welcome to java script");
showNotes();

//if user adds a note   add it to the localstorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addTxt.value = "";
   // console.log(noteObj);
    showNotes();

})



//function for show element from local storage
function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }

    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
   <div class=" notecard my-2 mx-2 card" style="width: 18rem;">
      
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p> 
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
   
   `;
    });

    let noteLm = document.getElementById("notes");
    if (noteObj.length != 0) {
        noteLm.innerHTML = html;
    }
    else {
        noteLm.innerHTML = `Nothing to show    Use  "Add a Note" section above th add notes..`

    }
}

//function for delete note

function deleteNote(index) {
   // console.log("i am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }

    noteObj.splice(index,1);

    localStorage.setItem("notes", JSON.stringify(noteObj));
    showNotes();

}

search=document.getElementById("searchTxt");
search.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();
    console.log("input event fired !!",inputVal);

    let noteCard=document.getElementsByClassName("notecard");
    Array.from(noteCard).forEach(function(element){

     let cardTxt=element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt);
    if(cardTxt.includes(inputVal))
    {
     element.style.display="block";

    }
    else{

        element.style.display="none";

    }

    })

   
})