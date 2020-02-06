class Calculate {
  constructor(array) {
    this.array = array;
    this.value = +document.getElementById("valueToCompare").value;
  }

  maxMin() {
    let max = this.array[0];
    let min = this.array[0];

    for (const item of this.array) {
      if (item > max) {
        max = item;
      }
      if (item < min) {
        min = item;
      }
    }
    return {
      min, max
    };
  }

  valueToCompare() {
    let equal = 0;
    let smaller = 0;
    let bigger = 0;

    for (const item of this.array) {
      if (item === this.value) {
        equal++;
      }
      if (item < this.value) {
        smaller++;
      }
      if (item > this.value) {
        bigger++;
      }
    }

    return {
      equal, smaller, bigger
    }
  }

  average() {
    return this.array.reduce((sum, accumulator) => sum + accumulator) / this.array.length;
  }

  checkRoute(){
    console.log(this.checkNumber);
    return this.array.filter(item => item === this.checkNumber).length;
  }

  setRoute(){
    this.checkNumber = +document.getElementById("checkRouteHolder").value;
  }
}

const init = () => {
  addListeners();
};

const resultElement = document.getElementById("results");

const print = (label, number) => {
  resultElement.innerHTML += `${label} ${number} <br>`;
};

const addListeners = () =>{
  document.getElementById("calculate").addEventListener("click", () => {
    let hours = document.getElementById("hoursHolder").value.split(" ").map(Number);
    const results = new Calculate(hours);
    results.setRoute();

    print("Lowest value:", results.maxMin().min);
    print("Highest value:", results.maxMin().max);
    print("Decalajul:", results.maxMin().max - results.maxMin().min);
    print("Average is:", results.average());
    print("Smaller than:", results.valueToCompare().smaller);
    print("Equal:", results.valueToCompare().equal);
    print("Bigger than:", results.valueToCompare().bigger);
    print("On Route:", results.checkRoute());
  });
};

init();





