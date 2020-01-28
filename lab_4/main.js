class ArrayRead {
    constructor(array) {
        this.array = array;
    }

    MinMax() {
        let min = Infinity;
        let max = -Infinity;
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
        row = this.array[getChange().first];
        this.array[getChange().first] = this.array[getChange().second];
        this.array[getChange().second] = row;
        return this.array;
    }

    print(text, result) {
        document.getElementById("results").innerHTML += `${text} ${result} <br>`;
    }

    arrayShow() {
        for (let i = 0; i < getRowColumn().row; i++) {
            for (let j = 0; j < getRowColumn().column; j++) {
                document.getElementById("results").innerHTML += this.array[i][j] + ',';
            }
            document.getElementById("results").innerHTML += "<br>";
        }
    }
}

let result;

document.getElementById("createMatrix_but").addEventListener("click", () => {
    let array = createMatrix(getRowColumn().row, getRowColumn().column);
    result = new ArrayRead(array);
});

document.getElementById("calculateMatrix_but").addEventListener("click", () => {
    result.print("Max", result.MinMax().max);
    result.print("I position", result.MinMax().maxPosI);
    result.print("J position", result.MinMax().maxPosJ);
    result.print("Min", result.MinMax().min);
    result.print("I position", result.MinMax().minPosI);
    result.print("J position", result.MinMax().minPosJ);
    result.print('Changed rows:', "");
    result.arrayShow();
   // result.arrayShow();
});

const getRowColumn = () => {
    const row = document.getElementById("rowsCount").value;
    const column = document.getElementById("columnsCount").value;
    return {row, column}
};

const getChange = () => {
    const first = document.getElementById("rowChangeFirstValue").value;
    const second = document.getElementById("rowChangeSecondValue").value;
    return {
        first, second
    }
};

const createMatrix = (row, column) => {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        for (let j = 0; j < column; j++) {
            matrix[i][j] = Math.floor(Math.random() * 101);
        }
    }
    return matrix;
};
