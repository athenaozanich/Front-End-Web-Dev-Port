<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {

   //Wait for document to be ready
   let projectCards = [];
   let vertPortWrapper = document.querySelector(".vert-wrapper");
   let projectCard;
   let parsedProjectCard;
   let modal;
   //get data from db
   fetch('./js/portData.json')
   .then(function(response) {
     return response.json();
   })
   .then(function(myJson) {

     //store data array
     let projects = myJson.portItems;
     //console.log(projects);
     //loop through data
     for (var i = 0; i < projects.length; i++) {
       //create variable for project card
       projectCard =
       `<aside class="port-item card__${i}">
       <span class="close">X</span>
       <h4>${projects[i].name}</h4>
       <img src="imgs/${projects[i].img}" alt="${projects[i].name}" />
       <div><canvas id="barGraph__${i}"> </canvas></div>
       <span>Click to read more</span>
       <p>
       ${projects[i].desc}
       </p>

       <a href="${projects[i].url}">Site</a>
       <a href="${projects[i].repo}">Github</a>
       </aside>`;
       //parse string into html
       parsedProjectCard = $.parseHTML(projectCard);
       projectCards.push(parsedProjectCard[0]);
       //append card to DOM
       vertPortWrapper.appendChild(projectCards[i]);
     }
     return projectCards;
   });


   vertPortWrapper.addEventListener('click', e => {
     const projectCard = e.target.closest(".port-item");
     if (e.target.className != 'close' && e.target.tagName !== 'H6'){
       modalHandler(projectCard);
     }

   });

=======
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
    //loop through data
    while (vertPortWrapper.firstChild) {
      vertPortWrapper.removeChild(vertPortWrapper.firstChild);
    }
    if (projectsAsArray.length > 1) {
      vertPortWrapper.insertAdjacentHTML('afterbegin',`<i class="fas fa-angle-double-left"></i>
                                                     <i class="fas fa-angle-double-right"></i>`);
    }
    vertPortWrapper.appendChild(projectsAsArray[currentIdx]);
  }


   vertPortWrapper.addEventListener('click', e => {

     if (e.target.className === "fas fa-angle-double-right") {
       projectIdx++;
       //console.log(projectIdx);
       appendProjects(projectsAsArray, projectIdx);
     }
     // if (e.target.className != 'close' && e.target.tagName !== 'H6'){
     //   const projectCard = e.target.closest(".port-item");
     //   modalHandler(projectCard);
     // }


   });
>>>>>>> 5d9d4b7ce42e6381b5f150d11ae6b6c3f9e02316

   function modalHandler(projectCard) {
     projectCard.classList.add('modal');

     const close = projectCard.querySelector('.close');
     close.addEventListener("click", function (e) {
       projectCard.classList.remove("modal");
     })

   }
<<<<<<< HEAD
=======
  pullData();
>>>>>>> 5d9d4b7ce42e6381b5f150d11ae6b6c3f9e02316
}, false);
