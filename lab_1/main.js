class Calculate {
    constructor(array) {
        this.array = array;
    }

    Max() {
        let len = this.array.length, max = -Infinity;
        while (len--) {
            if (this.array[len] > max) {
                max = this.array[len];
            }
        }
        return max;
    }

    Min() {
        let len = this.array.length, min = Infinity;
        while (len--) {
            if (this.array[len] < min) {
                min = this.array[len];
            }
        }
        return min;
    }

    indicatedCount() {
        const value = document.getElementById("indicatedValue").value;
        return {
            equal: this.array.reduce((count, x) => (x == value ? count + 1 : count), 0),
            smaller: this.array.reduce((count, x) => (x < value ? count + 1 : count), 0),
            bigger: this.array.reduce((count, x) => (x > value ? count + 1 : count), 0)
        }
    }

    Average() {
        return this.array.reduce((sum, accumulator) => sum + accumulator) / this.array.length;
    }

    LowTemperatures() {
        return this.array.reduce((count, x) => (x < 0 ? count + 1 : count), 0);
    }

    print(text, result) {
        document.getElementById("results").innerHTML += `${text} :${result} <br>`;
    }
}

document.getElementById("calculate").addEventListener("click", () => {
    let temps = document.getElementById("temperatureHolder").value.split(" ").map(Number);
    const results = new Calculate(temps);
    results.print("Lowest temperature:", results.Min());
    results.print("Highest temperature:", results.Max());
    results.print("Decalajul:", results.Max() - results.Min());
    results.print("Average is:", results.Average());
    results.print("Low temperatures are", results.LowTemperatures());
    results.print("Equal temperatures with indicated:", results.indicatedCount().equal);
    results.print("Smaller temperatures with indicated:", results.indicatedCount().smaller);
    results.print("Bigger temperatures with indicated:", results.indicatedCount().bigger);
});

