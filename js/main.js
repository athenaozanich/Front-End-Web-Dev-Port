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


   function modalHandler(projectCard) {
     projectCard.classList.add('modal');

     const close = projectCard.querySelector('.close');
     close.addEventListener("click", function (e) {
       projectCard.classList.remove("modal");
     })

   }
}, false);
