export default class ArrayRead {
    constructor(array) {
        this.array = array;
        console.log(this.array);
    }

    MinMax() {
        let min = this.array[0][0];
        let max = this.array[0][0];
        let minPosI = 0;
        let minPosJ = 0;
        let maxPosI = 0;
        let maxPosJ = 0;
        for (let i = 0; i < getRowColumn().row; i++) {
            for (let j = 0; j < getRowColumn().column; j++) {
                if (this.array[i][j] < min) {
                    min = this.array[i][j];
                    minPosI = i;
                    minPosJ = j;
                }
                if (this.array[i][j] > max) {
                    max = this.array[i][j];
                    maxPosI = i;
                    maxPosJ = j;
                }
            }
        }
        return {min, minPosI, minPosJ, max, maxPosI, maxPosJ}
    }

    changeRow() {
        let row;
        row = this.array[this.setChange().first];
        this.array[this.setChange().first] = this.array[this.setChange().second].slice();
        this.array[this.setChange().second] = row;
        return this.array;
    }
    print(text, result) {
        document.getElementById("results").innerHTML += `${text} ${result} <br>`;
    }
    setChange() {
        const first = document.getElementById("rowChangeFirstValue").value;
        const second = document.getElementById("rowChangeSecondValue").value;
        return {
            first, second
        }
    }
    addNewLine() {
        this.array.push([5, 10, 6]);
    }
    sortLine() {
        let arr = this.array[this.array.length - 1];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    let aux = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = aux;
                }
            }
        }
        return arr;
    }
    generateMatrix(row, column) {
        let rez = [];
        for (let i = 1; i <= row; i++) {
            rez[i] = [];
            for (let j = 1; j <= column; j++) {
                if (j === 1) {
                    rez[i][j] = 1;
                } else {
                    rez[i][j] = rez[i][j - 1] * i;
                }
            }
        }
        return rez;
    }
}
