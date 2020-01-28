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
    result.isPerfect() ? document.getElementById('number_is_perfect_result').style.display = 'block' : document.getElementById('number_not_perfect_result').style.display = 'block';
});

document.getElementById("interval_but").addEventListener("click", () => {
    const value_from = document.getElementById("value_from").value;
    const value_to = document.getElementById("value_to").value;
    const perfect = document.getElementById("perfect_from_to");
    const notPerfect = document.getElementById("not_perfect_from_to");
    perfect.style.display = "block";
    notPerfect.style.display = "block";
    let perfectNumbers = [];
    let notPerfectNumbers = [];

    for (let i = value_from; i <= value_to; i++) {
        let result = new Perfect(i);
        result.isPerfect() ? perfectNumbers.push(i) : notPerfectNumbers.push(i);
    }

    perfect.innerHTML = "Perfect Numbers" + perfectNumbers;
    notPerfect.innerHTML = "Not perfect Numbers" + notPerfectNumbers;
});

document.getElementById("first_numbers_but").addEventListener("click", () => {
    const count = Number(document.getElementById("first_numbers_count").value);
    const first_numbers = document.getElementById("first_numbers_result");
    let validCount = 0;
    let array = [];
    let i = 0;

    while (validCount !== count) {
        let result = new Perfect(i);
        if (result.isPerfect()) {
            array.push(i);
            validCount++;
        }
        i++
    }
    first_numbers.innerHTML = array;
});

document.getElementById("max_perfect_number_but").addEventListener("click", () => {
    const writeResult = document.getElementById("max_perfect_number_result");
    let validCount = 0;
    let count = 1;
    let i = Infinity;

    while (validCount !== Number(count)) {
        let result = new Perfect(i);
        if (result.isPerfect()) {
            writeResult.innerHTML = "Max number:" + i;
            validCount++;
        }
        i--;
    }
});