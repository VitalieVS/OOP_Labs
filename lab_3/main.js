class ArrayModify {
    constructor(array) {
        this.array = array;
    }

    getMinMax() {
        let min = this.array[0];
        let max = this.array[0];

        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] < min) {
                min = this.array[i];
            }
            if (this.array[i] > max) {
                max = this.array[i];
            }
        }
        return {min, max}
    }

    Average() {
        return this.array.reduce((sum, accumulator) => sum + accumulator) / this.array.length;
    }

    sortBy(direction) {
        this.array = this.array.sort((a, b) => {
            if (direction) {
                return a - b
            }
            return b - a
        });
        return this.array;
    }

    rotate(counter) {
        const [first] = this.array;

        for (let i = 0; i < counter; i++) {
            this.array.push(first);
            this.array.splice(0, 1)
        }
        return this.array;
    }

    addNumber(value) {
        this.array.push(value);
        return this.array;
    }

    deleteNumber(index) {
        this.array.splice(index, 1);
        return this.array;
    }

    checkRoute(value) {
        return this.array.filter(item => item == value).length;
      }
      
      print(text, result) {
        document.getElementById("results").innerHTML += `${text} ${result} <br>`;
    }
}

let result;

document.getElementById("read_array_but").addEventListener("click", () => {
    let array = document.getElementById("array_content").value.split(" ").map(Number);
    result = new ArrayModify(array);
});

document.getElementById("min_max_but").addEventListener("click", () => {
    result.print("Max:", result.getMinMax().max);
    result.print("Min:", result.getMinMax().min);
});

document.getElementById("getAverage_but").addEventListener("click", () => {
    result.print("Average:", result.Average());
});

document.getElementById("sort_but").addEventListener("click", () => {
    result.print("Sorted:", result.sortBy(1));
});

document.getElementById("rotate_but").addEventListener("click", () => {
    const count = document.getElementById("rotate_count").value;
    result.print("Rotated ", result.rotate(count));
});

document.getElementById("number_add_but").addEventListener("click", () => {
    const number = document.getElementById("number_add").value;
    result.print("Added", result.addNumber(number));
});

document.getElementById("delete_number_but").addEventListener("click", () => {
    const number = document.getElementById("delete_number").value;
    result.print("Deleted ", result.deleteNumber(number));
});

document.getElementById("check_route_but").addEventListener("click", () => {
    const value = document.getElementById("check_route").value;
    result.print("On Route ", result.checkRoute(value));
});