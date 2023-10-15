//EJERCICIO 1 - Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
// En el eje X el nombre de la película
// En el eje Y año de publicación

let titles = [];
let releaseDates = [];

fetch("https://swapi.dev/api/films/")
    .then(response => response.json())
    .then(info1 => {
        for (let i = 0; i < info1.results.length; i++) {
            console.log(info1.results[i].title)
            console.log(info1.results[i].release_date)
            
            titles.push(info1.results[i].title);
            releaseDates.push(info1.results[i].release_date);

            var dataLines = {
                labels: titles,
                series: [
                    releaseDates.map(v => parseInt(v))
                ]
              };
              
              var optionsLines = {
                // Don't draw the line chart points
                showPoint: true,
                // Disable line smoothing
                lineSmooth: false,
                // X-Axis specific configuration
                axisX: {
                  // We can disable the grid for this axis
                  showGrid: true,
                  // and also don't show the label
                  showLabel: true
                },
                // Y-Axis specific configuration
                axisY: {
                  // Lets offset the chart a bit from the labels
                  offset: 50,
                  // The label interpolation function enables you to modify the values
                  // used for the labels on each axis. Here we are converting the
                  // values into million pound.
                      labelInterpolationFnc: function(value) {
                        return parseInt(value);
                      }
                }
              };
              
              // All you need to do is pass your configuration as third parameter to the chart function
              new Chartist.Line('#chart1', dataLines, optionsLines);
            
        }
    })



// // EJERCICIO 2 - Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
// // En el eje X el nombre del personaje
// // En el eje Y el número de películas en las que ha participado.

let names = [];
let filmsNum = [];

fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(info => {

        for (let i = 0; i < info.results.length; i++) {
            console.log(info.results[i].name)
            console.log(info.results[i].films.length)

            names.push(info.results[i].name)
            filmsNum.push(info.results[i].films.length)

            var dataBars = {
                labels: names,
                  series: [
                  filmsNum,
                ]
              };
              
              var optionsBars = {
                seriesBarDistance: 15
              };
              
              new Chartist.Bar('#chart2', dataBars, optionsBars);
            
        }});
        