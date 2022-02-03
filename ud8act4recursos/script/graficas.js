window.onload = main

function main(){
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
          labels: ["Àfrica", "Asia", "Amèrica"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
            data: [2478,5267,734]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });
}