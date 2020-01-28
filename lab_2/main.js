class Perfect {
    constructor(number) {
        this.number = number;
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
        return dividersSum == this.number;
    }
}

document.getElementById("check_number_but").addEventListener("click", () => {
    let number = document.getElementById("number").value;
    const result = new Perfect(number);

    if (result.isPerfect()) {
        document.getElementById('number_is_perfect_result').style.display = 'block';
        document.getElementById('number_not_perfect_result').style.display = 'none';
    } else {
        document.getElementById('number_not_perfect_result').style.display = 'block';
        document.getElementById('number_is_perfect_result').style.display = 'none';
    }
});

document.getElementById("interval_but").addEventListener("click", () => {
    const value_from = document.getElementById("value_from").value;
    const value_to = document.getElementById("value_to").value;
    const perfect = document.getElementById("perfect_from_to");
    const notPerfect = document.getElementById("not_perfect_from_to");
    perfect.style.display = "block";
    notPerfect.style.display = "block";

    for (let i = value_from; i <= value_to; i++) {
        let result = new Perfect(i);
        if (result.isPerfect()) {
            perfect.innerHTML += i + ',';
        } else {
            notPerfect.innerHTML += i + ',';
        }
    }
});

document.getElementById("first_numbers_but").addEventListener("click", () => {
    const count = document.getElementById("first_numbers_count").value;
    const first_numbers = document.getElementById("first_numbers_result");
    let validCount = 0;

    for (let i = 0; i < Infinity; i++) {
        let result = new Perfect(i);
        if (result.isPerfect()) {
            first_numbers.innerHTML += i + ',';
            validCount++;
        }
        if (validCount == count) break;
    }
});

document.getElementById("max_perfect_number_but").addEventListener("click", () => {
    const writeResult = document.getElementById("max_perfect_number_result");

    for (let i = Number.MAX_VALUE; i > 1; i--) {
        let result = new Perfect(i);
        if (result.isPerfect()) {
            writeResult.innerHTML = "Highest perfect number is:" + i;
            break;
        }
    }
});