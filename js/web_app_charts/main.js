function addGraphs(){

  const barGraphs = document.getElementsByTagName('canvas');

  for (var i = 0; i < barGraphs.length; i++) {
    let ctx = barGraphs[i].getContext('2d');
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(ctx);
=======
>>>>>>> 5d9d4b7ce42e6381b5f150d11ae6b6c3f9e02316
=======
>>>>>>> ccb5ce12db3d3004a61ebf4d8eea78a950f7ee14
    // your code here

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
<<<<<<< HEAD
<<<<<<< HEAD
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
=======
=======
>>>>>>> ccb5ce12db3d3004a61ebf4d8eea78a950f7ee14
        labels: ['HTML', 'CSS', 'JS/JQ', 'SASS', 'WCAG', 'REACT'],
        datasets: [{
          label: 'Skills Utilized',
          data: [100, 100, 30, 20, 30, 0],
<<<<<<< HEAD
>>>>>>> 5d9d4b7ce42e6381b5f150d11ae6b6c3f9e02316
=======
>>>>>>> ccb5ce12db3d3004a61ebf4d8eea78a950f7ee14
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
<<<<<<< HEAD
<<<<<<< HEAD
              beginAtZero: true
=======
=======
>>>>>>> ccb5ce12db3d3004a61ebf4d8eea78a950f7ee14
              beginAtZero: true,
              min: 0,
              max: 100,
              callback: function(value){return value+ "%"}
<<<<<<< HEAD
>>>>>>> 5d9d4b7ce42e6381b5f150d11ae6b6c3f9e02316
=======
>>>>>>> ccb5ce12db3d3004a61ebf4d8eea78a950f7ee14
            }
          }]
        }
      }
    });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
addGraphs();
=======
setTimeout(function(){
  addGraphs();
},1000);
>>>>>>> 5d9d4b7ce42e6381b5f150d11ae6b6c3f9e02316
=======
>>>>>>> ccb5ce12db3d3004a61ebf4d8eea78a950f7ee14
