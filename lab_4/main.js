import ArrayRead from './class';

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
    console.log(result.changeRow());
    result.addNewLine();
    result.print("Sorted by added line:", result.sortLine());
    result.generateMatrix(getRowColumn().row, getRowColumn().column);
});

const getRowColumn = () => {
    const row = document.getElementById("rowsCount").value;
    const column = document.getElementById("columnsCount").value;
    return {row, column}
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

