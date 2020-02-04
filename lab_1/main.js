class Calculate {
  constructor(array) {
    this.array = array;
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
    return {min, max};
  }

  valueToCompare() {
    const valueToCompare = document.getElementById("valueToCompare").value;
    let equal = 0;
    let smaller = 0;
    let bigger = 0;

      for (const item of this.array) {
      if (item === valueToCompare) {
        equal++;
      }
      if (item < valueToCompare) {
        smaller++;
      }
      if (item > valueToCompare) {
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

  lowTemperatures() {
    return this.array.filter(item => item < 0).length
  }
}

const init = () =>{
  addListeners();
};

const resultElement = document.getElementById("results");

const print = (label, number) => {
  resultElement.innerHTML += `${label} :${number} <br>`;
};

const addListeners = () =>{
  document.getElementById("calculate").addEventListener("click", () => {
    let temps = document.getElementById("temperatureHolder").value.split(" ").map(Number);
    const results = new Calculate(temps);

    print("Lowest temperature:", results.maxMin().min);
    print("Highest temperature:", results.maxMin().max);
    print("Decalajul:", results.maxMin().max - results.maxMin().min);
    print("Average is:", results.average());
    print("Low temperatures are", results.lowTemperatures());
    print("Equal temperatures with indicated:", results.valueToCompare().equal);
    print("Smaller temperatures with indicated:", results.valueToCompare().smaller);
    print("Bigger temperatures with indicated:", results.valueToCompare().bigger);
  });
};

init();





