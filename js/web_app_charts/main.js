function addGraphs(){

  const barGraphs = document.getElementsByTagName('canvas');

  for (var i = 0; i < barGraphs.length; i++) {
    let ctx = barGraphs[i].getContext('2d');
    // your code here

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['HTML', 'CSS', 'JS/JQ', 'SASS', 'WCAG', 'REACT'],
        datasets: [{
          label: 'Skills Utilized',
          data: [100, 100, 30, 20, 30, 0],
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
              beginAtZero: true,
              min: 0,
              max: 100,
              callback: function(value){return value+ "%"}
            }
          }]
        }
      }
    });
  }
}
