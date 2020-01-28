class Calculate {
    constructor(array) {
        this.array = array;
    }

    max() {
        let max = this.array[0];
        let len = this.array.length;

        for (let i = 1; i < len; i++) {
            if (this.array[i] > max) max = this.array[i];
        }
        return max;
    }

    min() {
        let min = this.array[0];
        let len = this.array.length;

        for (let i = 1; i < len; i++) {
            if (this.array[i] < min) min = this.array[i];
        }
        return min;
    }

    valueToCompare() {
        const value = document.getElementById("valueToCompare").value;
        let equal = 0;
        let smaller = 0;
        let bigger = 0;

        for (let i = 0; i <= this.array.length; i++) {
            if (this.array[i] == value) equal++;
            if (this.array[i] < value) smaller++;
            if (this.array[i] > value) bigger++;
        }

        return {
            equal, smaller, bigger
        }
    }

    average() {
        return this.array.reduce((sum, accumulator) => sum + accumulator) / this.array.length;
    }

    lowTemperatures() {
        return this.array.reduce((count, x) => (x < 0 ? count + 1 : count), 0);
    }
}

const print = (text, result) => {
    document.getElementById("results").innerHTML += `${text} :${result} <br>`;
};

document.getElementById("calculate").addEventListener("click", () => {
    let temps = document.getElementById("temperatureHolder").value.split(" ").map(Number);
    const results = new Calculate(temps);

    print("Lowest temperature:", results.min());
    print("Highest temperature:", results.max());
    print("Decalajul:", results.max() - results.min());
    print("Average is:", results.average());
    print("Low temperatures are", results.lowTemperatures());
    print("Equal temperatures with indicated:", results.valueToCompare().equal);
    print("Smaller temperatures with indicated:", results.valueToCompare().smaller);
    print("Bigger temperatures with indicated:", results.valueToCompare().bigger);
});

