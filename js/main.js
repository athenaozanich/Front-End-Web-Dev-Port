//Wait for document to be ready
const vertPortWrapper = document.querySelector(".vert-wrapper");
let projectIdx = 0;
let projectsAsArray = [];

document.addEventListener('DOMContentLoaded', function() {

  function pullData() {
    //get data from db
    fetch('./js/portData.json').then(function(response) {
      return response.json();
   }).then(function(myJson) {
    //store data array
    createCardsArray(myJson.portItems);
   });
 }

 function createCardsArray(projects) {

   for (var i = 0; i < projects.length; i++) {
     //create variable for project card
     projectsAsArray.push(document.createRange()
     .createContextualFragment(
     `<aside class="port-item card__${i}">
        <span class="close">X</span>
        <h4>${projects[i].name}</h4>
        <img src="imgs/${projects[i].img}" alt="${projects[i].name}" />
        <canvas id="barGraph__${i}"></canvas>
        <span>Click to read more</span>
        <p>
        ${projects[i].desc}
        </p>
        <a href="${projects[i].url}">Site</a>
        <a href="${projects[i].repo}">Github</a>
      </aside>`));
   }

   appendProjects(projectsAsArray, projectIdx);
 }

  function appendProjects(projectsAsArray, currentIdx){
    console.log(projectsAsArray, currentIdx);
    //loop through data
    while (vertPortWrapper.firstChild) {
      vertPortWrapper.removeChild(vertPortWrapper.firstChild);
    }
    if (projectsAsArray.length > 1) {
      vertPortWrapper.insertAdjacentHTML('afterbegin',`<i class="fas fa-angle-double-left"></i>
                                                     <i class="fas fa-angle-double-right"></i>`);
    }
    vertPortWrapper.appendChild(projectsAsArray[currentIdx]);
    setTimeout(function(){
      addGraphs();
    },1000);
  }


   vertPortWrapper.addEventListener('click', e => {

     if (e.target.className === "fas fa-angle-double-right") {
       if (projectIdx < projectsAsArray.length-1) {
         projectIdx++;
       }else{
         projectIdx = 0;
       }
       appendProjects(projectsAsArray, projectIdx);

     }
     if (e.target.className === "fas fa-angle-double-left") {
       if (projectIdx != 0 ) {
         projectIdx--;

       }else{
         projectIdx = projectsAsArray.length-1;
       }

       appendProjects(projectsAsArray, projectIdx);

     }

     if (e.target.className != 'close' && e.target.tagName === 'SPAN'){
       let projectCard = e.target.closest(".port-item");
       modalHandler(projectCard);
     }


   });

   function modalHandler(projectCard) {
     projectCard.classList.add('modal');

     const close = projectCard.querySelector('.close');
     close.addEventListener("click", function (e) {
       projectCard.classList.remove("modal");
     })

   }
  pullData();
}, false);
