class Perfect {
  constructor(number, valueFrom, valueTo) {
    this.number = number;
    this.valueFrom = valueFrom;
    this.valueTo = valueTo;
  }

  isPerfect() {
    if (this.number === 0) {
      return false;
    }
    let dividersSum = 0;

    for (let i = 1; i <= this.number / 2; i++) {
      if (this.number % i === 0) {
        dividersSum += i;
      }
    }
    return dividersSum === this.number;
  }

  valueFromTo() {
    let perfectNumbers = [];

    for (let i = this.valueFrom; i <= this.valueTo; i++) {
      this.number = i;
      if (this.isPerfect()) {
        perfectNumbers.push(i)
      }
    }
    return perfectNumbers;
  }

  MaxPerfectNumber() {
    let validCount = 0;
    let count = 1;
    let result;
    let i = 1e9;

    while (validCount !== Number(count)) {
      this.number = i;
      if (this.isPerfect()) {
        result = "Max number:" + i;
        validCount++;
      }
      i--;
    }
    return result;
  }

  firstPerfectNumbers(count) {
    let validCount = 0;
    let array = [];
    let i = 0;

    while (validCount !== count) {
      this.number = i;
      if (this.isPerfect()) {
        array.push(i);
        validCount++;
      }
      i++
    }
    return array;
  }

  setValueFromValueTo(valueFrom, valueTo){
      this.valueFrom = valueFrom;
      this.valueTo = valueTo;
  }

  setNumber(number){
      this.number = number;
  }


}

let result = new Perfect();

document.getElementById("check_number_but").addEventListener("click", () => {
  let number = +document.getElementById("number").value;
  const numberIsPerfect = document.getElementById('number_is_perfect_result');
  result.setNumber(number);
  numberIsPerfect.innerHTML = result.isPerfect() ? 'Is perfect!' : 'Not perfect!';
});

document.getElementById("interval_but").addEventListener("click", () => {
  const perfect = document.getElementById("perfect_from_to");
  const valueFrom = +document.getElementById("value_from").value;
  const valueTo = +document.getElementById("value_to").value;

  perfect.style.display = "block";
  result.setValueFromValueTo(valueFrom, valueTo);
  perfect.innerHTML = "Perfect Numbers:" + result.valueFromTo();
});

document.getElementById("first_numbers_but").addEventListener("click", () => {
  const firstNumbers = document.getElementById("first_numbers_result");
  const count = Number(document.getElementById("first_numbers_count").value);

  firstNumbers.innerHTML = result.firstPerfectNumbers(count).join(" ");
});

document.getElementById("max_perfect_number_but").addEventListener("click", () => {
  const writeResult = document.getElementById("max_perfect_number_result");
  writeResult.innerHTML = result.MaxPerfectNumber();
});
