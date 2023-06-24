function generateRandomArray(minNum, maxNum, size) {
  if (minNum > maxNum) {
    throw new Error("Minimum number cannot be greater than maximum number.");
  }

  if (size < 0) {
    throw new Error("Size of the array cannot be negative.");
  }

  const randomArray = [];
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    randomArray.push(randomNumber);
  }

  return randomArray;
}
let speed = document.getElementById("myRange");
speed.oninput = function() {
  speed.value = this.value;
}


function chageColor(j,i,length){
  let array = []
  for (let index = 0; index < length; index++) {
    if(index == j){
      array.push('red')
    }
    //else if(index == i || index > i){
      //array.push('green')
    //}
    else {
      array.push('rgba(54, 162, 235, 0.5)')
    }
    
  }
  return array
}

function setColorGreenWhenFinished(i){
  let array = ['green']
  for (let index = 0; index <= i; index++) {
    array.push('green')
  }

  return array
}


// Function to introduce delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Bubble Sort algorithm

async function bubbleSort(data) {
  //  Bubble Sort logic 

  for (let i = 0; i < data.length ; i++){
    for (let j = 0; j < data.length-i-1 ; j++){
        if(data[j] > data[j+1]){
          let temp = data[j]
          data[j] = data[j+1]
          data[j+1] = temp
          // Update the chart after each step
          chart.data.labels = data.map((_, index) => `${_}`)
          
          

          

          
        }
        var arraAfterJ = chageColor(j+1,i, data.length-i);

        chart.data.datasets[0].backgroundColor = arraAfterJ.concat(arraAfterI);
        chart.update();
        // Delay before the next step
        await delay(speed.value);
        
    }
    var arraAfterI = setColorGreenWhenFinished(i)
    var arr = arraAfterJ.concat(arraAfterI)
    chart.data.datasets[0].backgroundColor = arr;
    chart.update();
  }
  chart.data.datasets[0].backgroundColor = 'green';
  chart.update();

}


// Prepare data

let data = generateRandomArray(1,100,100)

// Initialize the chart
  

const chartCanvas = document.getElementById('chart');
const chartContext = chartCanvas.getContext('2d');
const chart = new Chart(chartContext, {
  type: 'bar',
  data: {
    labels: data.map((_, index) => `${_}`),
    datasets: [
      {
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 50,
      },
    ],
  },
  options: {
    legend: {display: false},
    responsive: true,
    title: {
        display: true,
        text: "Bubble Sort"
      },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
